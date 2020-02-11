package scavenge

import (
	"crypto/sha256"
	"encoding/hex"
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/modules/incubator/nft"
	"github.com/cosmos/sdk-tutorials/scavenge/x/scavenge/internal/types"
	"github.com/tendermint/tendermint/crypto"
)

// NewHandler creates an sdk.Handler for all the scavenge type messages
func NewHandler(k Keeper) sdk.Handler {
	return func(ctx sdk.Context, msg sdk.Msg) (*sdk.Result, error) {
		ctx = ctx.WithEventManager(sdk.NewEventManager())
		switch msg := msg.(type) {
		case MsgCreateScavenge:
			return handleMsgCreateScavenge(ctx, k, msg)
		case MsgCommitSolution:
			return handleMsgCommitSolution(ctx, k, msg)
		case MsgRevealSolution:
			return handleMsgRevealSolution(ctx, k, msg)
		default:
			return nil, sdkerrors.Wrap(sdkerrors.ErrUnknownRequest,
				fmt.Sprintf("unrecognized %s message type: %T", types.ModuleName, msg))
		}
	}
}

// handleMsgCreateScavenge creates a new scavenge and moves the reward into escrow
func handleMsgCreateScavenge(ctx sdk.Context, k Keeper, msg MsgCreateScavenge) (*sdk.Result, error) {
	var scavenge = types.Scavenge{
		Creator:        msg.Creator,
		Description:    msg.Description,
		SolutionHash:   msg.SolutionHash,
		CoinReward:     msg.CoinReward,
		NFTRewardDenom: msg.NFTRewardDenom,
		NFTRewardID:    msg.NFTRewardID,
	}
	_, err := k.GetScavenge(ctx, scavenge.SolutionHash)
	if err == nil {
		return nil, sdkerrors.Wrap(err, "Scavenge with that solution hash already exists")
	}
	moduleAcct := sdk.AccAddress(crypto.AddressHash([]byte(types.ModuleName)))
	var sdkError error
	if scavenge.CoinReward.IsValid() && !scavenge.CoinReward.IsZero() {
		sdkError = k.CoinKeeper.SendCoins(ctx, scavenge.Creator, moduleAcct, scavenge.CoinReward)

	} else {
		msg := nft.NewMsgTransferNFT(msg.Creator, moduleAcct, scavenge.NFTRewardDenom, scavenge.NFTRewardID)
		// TODO: what to do with other events returned here?
		_, sdkError = nft.HandleMsgTransferNFT(ctx, msg, k.NFTKeeper)
	}
	if sdkError != nil {
		return nil, sdkError
	}

	k.SetScavenge(ctx, scavenge)
	ctx.EventManager().EmitEvent(
		sdk.NewEvent(
			sdk.EventTypeMessage,
			sdk.NewAttribute(sdk.AttributeKeyModule, types.AttributeValueCategory),
			sdk.NewAttribute(sdk.AttributeKeyAction, types.EventTypeCreateScavenge),
			sdk.NewAttribute(sdk.AttributeKeySender, msg.Creator.String()),
			sdk.NewAttribute(types.AttributeDescription, msg.Description),
			sdk.NewAttribute(types.AttributeSolutionHash, msg.SolutionHash),
			sdk.NewAttribute(types.AttributeCoinReward, msg.CoinReward.String()),
			sdk.NewAttribute(types.AttributeNFTRewardDenom, msg.NFTRewardDenom),
			sdk.NewAttribute(types.AttributeNFTRewardID, msg.NFTRewardID),
		),
	)
	return &sdk.Result{Events: ctx.EventManager().Events()}, nil
}

func handleMsgCommitSolution(ctx sdk.Context, k Keeper, msg MsgCommitSolution) (*sdk.Result, error) {
	var commit = types.Commit{
		Scavenger:             msg.Scavenger,
		SolutionHash:          msg.SolutionHash,
		SolutionScavengerHash: msg.SolutionScavengerHash,
	}
	_, err := k.GetCommit(ctx, commit.SolutionScavengerHash)
	if err == nil {
		return nil, sdkerrors.Wrap(err, "Commit with that hash already exists")
	}
	k.SetCommit(ctx, commit)
	ctx.EventManager().EmitEvent(
		sdk.NewEvent(
			sdk.EventTypeMessage,
			sdk.NewAttribute(sdk.AttributeKeyModule, types.AttributeValueCategory),
			sdk.NewAttribute(sdk.AttributeKeyAction, types.EventTypeCommitSolution),
			sdk.NewAttribute(sdk.AttributeKeySender, msg.Scavenger.String()),
			sdk.NewAttribute(types.AttributeSolutionHash, msg.SolutionHash),
			sdk.NewAttribute(types.AttributeSolutionScavengerHash, msg.SolutionScavengerHash),
		),
	)
	return &sdk.Result{Events: ctx.EventManager().Events()}, nil
}

func handleMsgRevealSolution(ctx sdk.Context, k Keeper, msg MsgRevealSolution) (*sdk.Result, error) {
	var solutionScavengerBytes = []byte(msg.Solution + msg.Scavenger.String())
	var solutionScavengerHash = sha256.Sum256(solutionScavengerBytes)
	var solutionScavengerHashString = hex.EncodeToString(solutionScavengerHash[:])
	_, err := k.GetCommit(ctx, solutionScavengerHashString)
	if err != nil {
		return nil, sdkerrors.Wrap(err, "Commit with that hash doesn't exists")
	}

	var solutionHash = sha256.Sum256([]byte(msg.Solution))
	var solutionHashString = hex.EncodeToString(solutionHash[:])
	var scavenge types.Scavenge
	scavenge, err = k.GetScavenge(ctx, solutionHashString)
	if err != nil {
		return nil, sdkerrors.Wrap(err, "Scavenge with that solution hash doesn't exists")
	}
	if scavenge.Scavenger != nil {
		return nil, sdkerrors.Wrap(err, "Scavenge has already been solved")
	}
	scavenge.Scavenger = msg.Scavenger
	scavenge.Solution = msg.Solution

	moduleAcct := sdk.AccAddress(crypto.AddressHash([]byte(types.ModuleName)))
	var sdkError error
	if scavenge.CoinReward.IsValid() && !scavenge.CoinReward.IsZero() {
		sdkError = k.CoinKeeper.SendCoins(ctx, moduleAcct, scavenge.Scavenger, scavenge.CoinReward)
	} else {
		msg := nft.NewMsgTransferNFT(moduleAcct, scavenge.Scavenger, scavenge.NFTRewardDenom, scavenge.NFTRewardID)
		// TODO: what to do with other events returned here?
		_, sdkError = nft.HandleMsgTransferNFT(ctx, msg, k.NFTKeeper)
	}

	if sdkError != nil {
		return nil, sdkError
	}
	k.SetScavenge(ctx, scavenge)
	ctx.EventManager().EmitEvent(
		sdk.NewEvent(
			sdk.EventTypeMessage,
			sdk.NewAttribute(sdk.AttributeKeyModule, types.AttributeValueCategory),
			sdk.NewAttribute(sdk.AttributeKeyAction, types.EventTypeSolveScavenge),
			sdk.NewAttribute(sdk.AttributeKeySender, msg.Scavenger.String()),
			sdk.NewAttribute(types.AttributeSolutionHash, solutionHashString),
			sdk.NewAttribute(types.AttributeDescription, scavenge.Description),
			sdk.NewAttribute(types.AttributeSolution, msg.Solution),
			sdk.NewAttribute(types.AttributeScavenger, scavenge.Scavenger.String()),
			sdk.NewAttribute(types.AttributeCoinReward, scavenge.CoinReward.String()),
			sdk.NewAttribute(types.AttributeNFTRewardDenom, scavenge.NFTRewardDenom),
			sdk.NewAttribute(types.AttributeNFTRewardID, scavenge.NFTRewardID),
		),
	)
	return &sdk.Result{Events: ctx.EventManager().Events()}, nil
}