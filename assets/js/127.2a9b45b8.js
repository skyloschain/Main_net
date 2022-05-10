(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{731:function(l,g,c){"use strict";c.r(g);var e=c(0),Z=Object(e.a)({},(function(){var l=this,g=l.$createElement,c=l._self._c||g;return c("ContentSlotsDistributor",{attrs:{"slot-key":l.$parent.slotKey}},[c("h2",{attrs:{id:"light-clients"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#light-clients"}},[l._v("#")]),l._v(" Light Clients")]),l._v(" "),c("p",[l._v("In the IBC Protocol, an actor - an end user, an off-chain process, or a machine - needs to be able to verify updates to another machine's state that the other machine's consensus algorithm has agreed to and reject any possible updates that the other machine's consensus algorithm has not agreed upon.")]),l._v(" "),c("p",[c("tm-image",{attrs:{src:"/academy/ibc/images/lightclient.png"}})],1),l._v(" "),c("p",[l._v("Different abstraction layers are described in the ICS.")]),l._v(" "),c("HighlightBox",{attrs:{type:"info"}},[c("p",[l._v("In case you want to take a refresher of ICS and the different layers, take a look at the section "),c("RouterLink",{attrs:{to:"/academy/ibc/what-is-ibc.html"}},[l._v("What is IBC?")]),l._v(".")],1)]),l._v(" "),c("p",[c("strong",[l._v("Light clients")]),l._v(" confirm that received packets are verified. With this approach, an IBC chain is not required to maintain a "),c("strong",[l._v("full node")]),l._v(" for the verification of state changes of another chain. A "),c("strong",[l._v("relayer")]),l._v(" has access to both full nodes and passes headers from full nodes to the light clients.")]),l._v(" "),c("p",[l._v("Before a "),c("strong",[l._v("connection")]),l._v(" can be established - a connection handshake starts - chain A will create a light client for chain B and chain B will create a light client for chain A.")]),l._v(" "),c("p",[l._v("Start with "),c("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/main/modules/core/keeper/msg_server.go",target:"_blank",rel:"noopener noreferrer"}},[c("code",[l._v("msg_serve.go")]),c("OutboundLink")],1),l._v(", this is where the messages come in. In it, we first see a "),c("code",[l._v("CreateClient")]),l._v(" function:")]),l._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gQ3JlYXRlQ2xpZW50IGRlZmluZXMgYSBycGMgaGFuZGxlciBtZXRob2QgZm9yIE1zZ0NyZWF0ZUNsaWVudC4KZnVuYyAoayBLZWVwZXIpIENyZWF0ZUNsaWVudChnb0N0eCBjb250ZXh0LkNvbnRleHQsIG1zZyAqY2xpZW50dHlwZXMuTXNnQ3JlYXRlQ2xpZW50KSAoKmNsaWVudHR5cGVzLk1zZ0NyZWF0ZUNsaWVudFJlc3BvbnNlLCBlcnJvcikgewogIGN0eCA6PSBzZGsuVW53cmFwU0RLQ29udGV4dChnb0N0eCkKCiAgY2xpZW50U3RhdGUsIGVyciA6PSBjbGllbnR0eXBlcy5VbnBhY2tDbGllbnRTdGF0ZShtc2cuQ2xpZW50U3RhdGUpCiAgLi4uCgogIGNvbnNlbnN1c1N0YXRlLCBlcnIgOj0gY2xpZW50dHlwZXMuVW5wYWNrQ29uc2Vuc3VzU3RhdGUobXNnLkNvbnNlbnN1c1N0YXRlKQogIAogIC4uLgoKICAuLi4gPSBrLkNsaWVudEtlZXBlci5DcmVhdGVDbGllbnQoY3R4LCBjbGllbnRTdGF0ZSwgY29uc2Vuc3VzU3RhdGUpOyAKICAKICAuLi4KCn0K"}}),l._v(" "),c("p",[l._v("It creates a light client by calling "),c("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/main/modules/core/02-client/keeper/client.go",target:"_blank",rel:"noopener noreferrer"}},[c("code",[l._v("ClientKeeper.CreateClient")]),c("OutboundLink")],1),l._v(":")]),l._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gQ3JlYXRlQ2xpZW50IGNyZWF0ZXMgYSBuZXcgY2xpZW50IHN0YXRlIGFuZCBwb3B1bGF0ZXMgaXQgd2l0aCBhIGdpdmVuIGNvbnNlbnN1cwovLyBzdGF0ZSBhcyBkZWZpbmVkIGluIGh0dHBzOi8vZ2l0aHViLmNvbS9jb3Ntb3MvaWJjL3RyZWUvbWFzdGVyL3NwZWMvY29yZS9pY3MtMDAyLWNsaWVudC1zZW1hbnRpY3MjY3JlYXRlCmZ1bmMgKGsgS2VlcGVyKSBDcmVhdGVDbGllbnQoCiAgY3R4IHNkay5Db250ZXh0LCBjbGllbnRTdGF0ZSBleHBvcnRlZC5DbGllbnRTdGF0ZSwgY29uc2Vuc3VzU3RhdGUgZXhwb3J0ZWQuQ29uc2Vuc3VzU3RhdGUsCikgCiAgCiAgLi4uCgogIGNsaWVudElEIDo9IGsuR2VuZXJhdGVDbGllbnRJZGVudGlmaWVyKGN0eCwgY2xpZW50U3RhdGUuQ2xpZW50VHlwZSgpKQoKICAuLi4KCiAgay5TZXRDbGllbnRTdGF0ZShjdHgsIGNsaWVudElELCBjbGllbnRTdGF0ZSkKCiAgLi4uCgogIC8vIHZlcmlmaWVzIGluaXRpYWwgY29uc2Vuc3VzIHN0YXRlIGFnYWluc3QgY2xpZW50IHN0YXRlIGFuZCBpbml0aWFsaXplcyBjbGllbnQgc3RvcmUgd2l0aCBhbnkgY2xpZW50LXNwZWNpZmljIG1ldGFkYXRhCiAgLy8gZS5nLiBzZXQgUHJvY2Vzc2VkVGltZSBpbiBUZW5kZXJtaW50IGNsaWVudHMKICAuLi4gOj0gY2xpZW50U3RhdGUuSW5pdGlhbGl6ZShjdHgsIGsuY2RjLCBrLkNsaWVudFN0b3JlKGN0eCwgY2xpZW50SUQpLCBjb25zZW5zdXNTdGF0ZSk7CgogIC4uLgoKICBFbWl0Q3JlYXRlQ2xpZW50RXZlbnQoY3R4LCBjbGllbnRJRCwgY2xpZW50U3RhdGUpCgogIHJldHVybiBjbGllbnRJRCwgbmlsCn0K"}}),l._v(" "),c("p",[l._v("Each client for a chain has a unique "),c("code",[l._v("clientID")]),l._v(". In addition, you can see that the function expects a "),c("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/main/modules/light-clients/07-tendermint/types/client_state.go",target:"_blank",rel:"noopener noreferrer"}},[c("code",[l._v("clientState")]),c("OutboundLink")],1),l._v(":")]),l._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gTmV3Q2xpZW50U3RhdGUgY3JlYXRlcyBhIG5ldyBDbGllbnRTdGF0ZSBpbnN0YW5jZQpmdW5jIE5ld0NsaWVudFN0YXRlKAogY2hhaW5JRCBzdHJpbmcsIHRydXN0TGV2ZWwgRnJhY3Rpb24sCiB0cnVzdGluZ1BlcmlvZCwgdWJkUGVyaW9kLCBtYXhDbG9ja0RyaWZ0IHRpbWUuRHVyYXRpb24sCiBsYXRlc3RIZWlnaHQgY2xpZW50dHlwZXMuSGVpZ2h0LCBzcGVjcyBbXSppY3MyMy5Qcm9vZlNwZWMsCiB1cGdyYWRlUGF0aCBbXXN0cmluZywgYWxsb3dVcGRhdGVBZnRlckV4cGlyeSwgYWxsb3dVcGRhdGVBZnRlck1pc2JlaGF2aW91ciBib29sLAopICpDbGllbnRTdGF0ZSB7CiByZXR1cm4gJmFtcDtDbGllbnRTdGF0ZXsKICAgQ2hhaW5JZDogICAgICAgICAgICAgICAgICAgICAgY2hhaW5JRCwKICAgVHJ1c3RMZXZlbDogICAgICAgICAgICAgICAgICAgdHJ1c3RMZXZlbCwKICAgVHJ1c3RpbmdQZXJpb2Q6ICAgICAgICAgICAgICAgdHJ1c3RpbmdQZXJpb2QsCiAgIFVuYm9uZGluZ1BlcmlvZDogICAgICAgICAgICAgIHViZFBlcmlvZCwKICAgTWF4Q2xvY2tEcmlmdDogICAgICAgICAgICAgICAgbWF4Q2xvY2tEcmlmdCwKICAgTGF0ZXN0SGVpZ2h0OiAgICAgICAgICAgICAgICAgbGF0ZXN0SGVpZ2h0LAogICBGcm96ZW5IZWlnaHQ6ICAgICAgICAgICAgICAgICBjbGllbnR0eXBlcy5aZXJvSGVpZ2h0KCksCiAgIFByb29mU3BlY3M6ICAgICAgICAgICAgICAgICAgIHNwZWNzLAogICBVcGdyYWRlUGF0aDogICAgICAgICAgICAgICAgICB1cGdyYWRlUGF0aCwKICAgQWxsb3dVcGRhdGVBZnRlckV4cGlyeTogICAgICAgYWxsb3dVcGRhdGVBZnRlckV4cGlyeSwKICAgQWxsb3dVcGRhdGVBZnRlck1pc2JlaGF2aW91cjogYWxsb3dVcGRhdGVBZnRlck1pc2JlaGF2aW91ciwKIH0KfQoK"}}),l._v(" "),c("p",[c("code",[l._v("TrustLevel")]),l._v(" in the "),c("code",[l._v("NewClientState")]),l._v(" lets you set the security conditions. It determines, for example, how often the relayer will pass a header to the light client. Also it determines the portion of the validator set you want to have signing for the block confirmation.")]),l._v(" "),c("p",[c("code",[l._v("CreateClient")]),l._v(" additionally expects a "),c("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/main/modules/light-clients/07-tendermint/types/consensus_state.go",target:"_blank",rel:"noopener noreferrer"}},[c("code",[l._v("consensusState")]),c("OutboundLink")],1),l._v(":")]),l._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gTmV3Q29uc2Vuc3VzU3RhdGUgY3JlYXRlcyBhIG5ldyBDb25zZW5zdXNTdGF0ZSBpbnN0YW5jZS4KZnVuYyBOZXdDb25zZW5zdXNTdGF0ZSgKICB0aW1lc3RhbXAgdGltZS5UaW1lLCByb290IGNvbW1pdG1lbnR0eXBlcy5NZXJrbGVSb290LCBuZXh0VmFsc0hhc2ggdG1ieXRlcy5IZXhCeXRlcywKKSAqQ29uc2Vuc3VzU3RhdGUgewogIHJldHVybiAmYW1wO0NvbnNlbnN1c1N0YXRlewogICAgVGltZXN0YW1wOiAgICAgICAgICB0aW1lc3RhbXAsCiAgICBSb290OiAgICAgICAgICAgICAgIHJvb3QsCiAgICBOZXh0VmFsaWRhdG9yc0hhc2g6IG5leHRWYWxzSGFzaCwKICB9Cn0K"}}),l._v(" "),c("p",[l._v("This is the code from the Tendermint client. The Tendermint client tracks the timestamp (block time), validator set, and commitment root for all previously verified consensus states.")]),l._v(" "),c("HighlightBox",{attrs:{type:"info"}},[c("p",[l._v("If you want to see where "),c("code",[l._v("ConsensusState")]),l._v(" is stored, take a look at the "),c("a",{attrs:{href:"https://github.com/cosmos/ibc/tree/master/spec/core/ics-024-host-requirements",target:"_blank",rel:"noopener noreferrer"}},[l._v("Interchain Standard (ICS) 24"),c("OutboundLink")],1),l._v(", which describes the paths also for other keys to be stored and used by IBC.")])]),l._v(" "),c("p",[l._v("The IBC module uses "),c("a",{attrs:{href:"https://en.wikipedia.org/wiki/Merkle_tree",target:"_blank",rel:"noopener noreferrer"}},[l._v("Merkle trees"),c("OutboundLink")],1),l._v(" for the "),c("code",[l._v("root")]),l._v(" "),c("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/main/modules/core/23-commitment/types/merkle.go",target:"_blank",rel:"noopener noreferrer"}},[l._v("verifications"),c("OutboundLink")],1),l._v(":")]),l._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gVmVyaWZ5TWVtYmVyc2hpcCB2ZXJpZmllcyB0aGUgbWVtYmVyc2hpcCBwZiBhIG1lcmtsZSBwcm9vZiBhZ2FpbnN0IHRoZSBnaXZlbiByb290LCBwYXRoLCBhbmQgdmFsdWUuCmZ1bmMgKHByb29mIE1lcmtsZVByb29mKSBWZXJpZnlNZW1iZXJzaGlwKHNwZWNzIFtdKmljczIzLlByb29mU3BlYywgcm9vdCBleHBvcnRlZC5Sb290LCBwYXRoIGV4cG9ydGVkLlBhdGgsIHZhbHVlIFtdYnl0ZSkgZXJyb3IgewogIGlmIGVyciA6PSBwcm9vZi52YWxpZGF0ZVZlcmlmaWNhdGlvbkFyZ3Moc3BlY3MsIHJvb3QpOyBlcnIgIT0gbmlsIHsKICAgIHJldHVybiBlcnIKICB9CgogIC8vIFZlcmlmeU1lbWJlcnNoaXAgc3BlY2lmaWMgYXJndW1lbnQgdmFsaWRhdGlvbgogIG1wYXRoLCBvayA6PSBwYXRoLihNZXJrbGVQYXRoKQogIGlmICFvayB7CiAgICByZXR1cm4gc2RrZXJyb3JzLldyYXBmKEVyckludmFsaWRQcm9vZiwgJnF1b3Q7cGF0aCAldiBpcyBub3Qgb2YgdHlwZSBNZXJrbGVQYXRoJnF1b3Q7LCBwYXRoKQogIH0KICBpZiBsZW4obXBhdGguS2V5UGF0aCkgIT0gbGVuKHNwZWNzKSB7CiAgICByZXR1cm4gc2RrZXJyb3JzLldyYXBmKEVyckludmFsaWRQcm9vZiwgJnF1b3Q7cGF0aCBsZW5ndGggJWQgbm90IHNhbWUgYXMgcHJvb2YgJWQmcXVvdDssCiAgICAgIGxlbihtcGF0aC5LZXlQYXRoKSwgbGVuKHNwZWNzKSkKICB9CiAgaWYgbGVuKHZhbHVlKSA9PSAwIHsKICAgIHJldHVybiBzZGtlcnJvcnMuV3JhcChFcnJJbnZhbGlkUHJvb2YsICZxdW90O2VtcHR5IHZhbHVlIGluIG1lbWJlcnNoaXAgcHJvb2YmcXVvdDspCiAgfQoKICAvLyBTaW5jZSBldmVyeSBwcm9vZiBpbiBjaGFpbiBpcyBhIG1lbWJlcnNoaXAgcHJvb2Ygd2UgY2FuIHVzZSB2ZXJpZnlDaGFpbmVkTWVtYmVyc2hpcFByb29mIGZyb20gaW5kZXggMAogIC8vIHRvIHZhbGlkYXRlIGVudGlyZSBwcm9vZgogIGlmIGVyciA6PSB2ZXJpZnlDaGFpbmVkTWVtYmVyc2hpcFByb29mKHJvb3QuR2V0SGFzaCgpLCBzcGVjcywgcHJvb2YuUHJvb2ZzLCBtcGF0aCwgdmFsdWUsIDApOyBlcnIgIT0gbmlsIHsKICAgIHJldHVybiBlcnIKICB9CiAgcmV0dXJuIG5pbAp9Cg=="}}),l._v(" "),c("p",[l._v("As mentioned before, you have different security guarantees for an update depending on the trust level you set. Take a look at "),c("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/main/modules/light-clients/07-tendermint/types/update.go",target:"_blank",rel:"noopener noreferrer"}},[c("code",[l._v("CheckHeaderAndUpdateState")]),c("OutboundLink")],1),l._v(" and read through the comments. Notice that "),c("code",[l._v("consensusState")]),l._v(" is not updated, instead another "),c("code",[l._v("consensusState")]),l._v(" with a different height is stored on the chain:")]),l._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAoY3MgQ2xpZW50U3RhdGUpIENoZWNrSGVhZGVyQW5kVXBkYXRlU3RhdGUoCiAgY3R4IHNkay5Db250ZXh0LCBjZGMgY29kZWMuQmluYXJ5Q29kZWMsIGNsaWVudFN0b3JlIHNkay5LVlN0b3JlLAogIGhlYWRlciBleHBvcnRlZC5IZWFkZXIsCikgKGV4cG9ydGVkLkNsaWVudFN0YXRlLCBleHBvcnRlZC5Db25zZW5zdXNTdGF0ZSwgZXJyb3IpIHsKICB0bUhlYWRlciwgb2sgOj0gaGVhZGVyLigqSGVhZGVyKQogIGlmICFvayB7CiAgICByZXR1cm4gbmlsLCBuaWwsIHNka2Vycm9ycy5XcmFwZigKICAgICAgY2xpZW50dHlwZXMuRXJySW52YWxpZEhlYWRlciwgJnF1b3Q7ZXhwZWN0ZWQgdHlwZSAlVCwgZ290ICVUJnF1b3Q7LCAmYW1wO0hlYWRlcnt9LCBoZWFkZXIsCiAgICApCiAgfQoKIC4uLgoKICAvLyBnZXQgY29uc2Vuc3VzIHN0YXRlIGZyb20gY2xpZW50U3RvcmUKICB0cnVzdGVkQ29uc1N0YXRlLCBlcnIgOj0gR2V0Q29uc2Vuc3VzU3RhdGUoY2xpZW50U3RvcmUsIGNkYywgdG1IZWFkZXIuVHJ1c3RlZEhlaWdodCkKICBpZiBlcnIgIT0gbmlsIHsKICAgIHJldHVybiBuaWwsIG5pbCwgc2RrZXJyb3JzLldyYXBmKAogICAgICBlcnIsICZxdW90O2NvdWxkIG5vdCBnZXQgY29uc2Vuc3VzIHN0YXRlIGZyb20gY2xpZW50c3RvcmUgYXQgVHJ1c3RlZEhlaWdodDogJXMmcXVvdDssIHRtSGVhZGVyLlRydXN0ZWRIZWlnaHQsCiAgICApCiAgfQoKICBpZiBlcnIgOj0gY2hlY2tWYWxpZGl0eSgmYW1wO2NzLCB0cnVzdGVkQ29uc1N0YXRlLCB0bUhlYWRlciwgY3R4LkJsb2NrVGltZSgpKTsgZXJyICE9IG5pbCB7CiAgICByZXR1cm4gbmlsLCBuaWwsIGVycgogIH0KCiAgY29uc1N0YXRlIDo9IHRtSGVhZGVyLkNvbnNlbnN1c1N0YXRlKCkKICAvLyBIZWFkZXIgaXMgZGlmZmVyZW50IGZyb20gZXhpc3RpbmcgY29uc2Vuc3VzIHN0YXRlIGFuZCBhbHNvIHZhbGlkLCBzbyBmcmVlemUgdGhlIGNsaWVudCBhbmQgcmV0dXJuCiAgaWYgY29uZmxpY3RpbmdIZWFkZXIgewogICAgY3MuRnJvemVuSGVpZ2h0ID0gRnJvemVuSGVpZ2h0CiAgICByZXR1cm4gJmFtcDtjcywgY29uc1N0YXRlLCBuaWwKICB9CiAgLy8gQ2hlY2sgdGhhdCBjb25zZW5zdXMgc3RhdGUgdGltZXN0YW1wcyBhcmUgbW9ub3RvbmljCiAgcHJldkNvbnMsIHByZXZPayA6PSBHZXRQcmV2aW91c0NvbnNlbnN1c1N0YXRlKGNsaWVudFN0b3JlLCBjZGMsIGhlYWRlci5HZXRIZWlnaHQoKSkKICBuZXh0Q29ucywgbmV4dE9rIDo9IEdldE5leHRDb25zZW5zdXNTdGF0ZShjbGllbnRTdG9yZSwgY2RjLCBoZWFkZXIuR2V0SGVpZ2h0KCkpCiAgLy8gaWYgcHJldmlvdXMgY29uc2Vuc3VzIHN0YXRlIGV4aXN0cywgY2hlY2sgY29uc2Vuc3VzIHN0YXRlIHRpbWUgaXMgZ3JlYXRlciB0aGFuIHByZXZpb3VzIGNvbnNlbnN1cyBzdGF0ZSB0aW1lCiAgLy8gaWYgcHJldmlvdXMgY29uc2Vuc3VzIHN0YXRlIGlzIG5vdCBiZWZvcmUgY3VycmVudCBjb25zZW5zdXMgc3RhdGUsIGZyZWV6ZSB0aGUgY2xpZW50IGFuZCByZXR1cm4uCiAgaWYgcHJldk9rICZhbXA7JmFtcDsgIXByZXZDb25zLlRpbWVzdGFtcC5CZWZvcmUoY29uc1N0YXRlLlRpbWVzdGFtcCkgewogICAgY3MuRnJvemVuSGVpZ2h0ID0gRnJvemVuSGVpZ2h0CiAgICByZXR1cm4gJmFtcDtjcywgY29uc1N0YXRlLCBuaWwKICB9CiAgLy8gaWYgbmV4dCBjb25zZW5zdXMgc3RhdGUgZXhpc3RzLCBjaGVjayBjb25zZW5zdXMgc3RhdGUgdGltZSBpcyBsZXNzIHRoYW4gbmV4dCBjb25zZW5zdXMgc3RhdGUgdGltZQogIC8vIGlmIG5leHQgY29uc2Vuc3VzIHN0YXRlIGlzIG5vdCBhZnRlciBjdXJyZW50IGNvbnNlbnN1cyBzdGF0ZSwgZnJlZXplIHRoZSBjbGllbnQgYW5kIHJldHVybi4KICBpZiBuZXh0T2sgJmFtcDsmYW1wOyAhbmV4dENvbnMuVGltZXN0YW1wLkFmdGVyKGNvbnNTdGF0ZS5UaW1lc3RhbXApIHsKICAgIGNzLkZyb3plbkhlaWdodCA9IEZyb3plbkhlaWdodAogICAgcmV0dXJuICZhbXA7Y3MsIGNvbnNTdGF0ZSwgbmlsCiAgfQoKICAvLyBDaGVjayB0aGUgZWFybGllc3QgY29uc2Vuc3VzIHN0YXRlIHRvIHNlZSBpZiBpdCBpcyBleHBpcmVkLCBpZiBzbyB0aGVuIHNldCB0aGUgcHJ1bmUgaGVpZ2h0CiAgLy8gc28gdGhhdCB3ZSBjYW4gZGVsZXRlIGNvbnNlbnN1cyBzdGF0ZSBhbmQgYWxsIGFzc29jaWF0ZWQgbWV0YWRhdGEuCiAgCiAgLi4uCgogIG5ld0NsaWVudFN0YXRlLCBjb25zZW5zdXNTdGF0ZSA6PSB1cGRhdGUoY3R4LCBjbGllbnRTdG9yZSwgJmFtcDtjcywgdG1IZWFkZXIpCiAgcmV0dXJuIG5ld0NsaWVudFN0YXRlLCBjb25zZW5zdXNTdGF0ZSwgbmlsCn0KCg=="}}),l._v(" "),c("p",[c("code",[l._v("header")]),l._v(" has not been mentioned yet, so take a look at the "),c("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/main/modules/light-clients/07-tendermint/types/tendermint.pb.go",target:"_blank",rel:"noopener noreferrer"}},[l._v("header definition"),c("OutboundLink")],1),l._v(":")]),l._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBIZWFkZXIgc3RydWN0IHsKICAqdHlwZXMyLlNpZ25lZEhlYWRlciBgcHJvdG9idWY6JnF1b3Q7Ynl0ZXMsMSxvcHQsbmFtZT1zaWduZWRfaGVhZGVyLGpzb249c2lnbmVkSGVhZGVyLHByb3RvMyxlbWJlZGRlZD1zaWduZWRfaGVhZGVyJnF1b3Q7IGpzb246JnF1b3Q7c2lnbmVkX2hlYWRlcixvbWl0ZW1wdHkmcXVvdDsgeWFtbDomcXVvdDtzaWduZWRfaGVhZGVyJnF1b3Q7YAogIFZhbGlkYXRvclNldCAgICAgICAgICp0eXBlczIuVmFsaWRhdG9yU2V0IGBwcm90b2J1ZjomcXVvdDtieXRlcywyLG9wdCxuYW1lPXZhbGlkYXRvcl9zZXQsanNvbj12YWxpZGF0b3JTZXQscHJvdG8zJnF1b3Q7IGpzb246JnF1b3Q7dmFsaWRhdG9yX3NldCxvbWl0ZW1wdHkmcXVvdDsgeWFtbDomcXVvdDt2YWxpZGF0b3Jfc2V0JnF1b3Q7YAogIFRydXN0ZWRIZWlnaHQgICAgICAgIHR5cGVzLkhlaWdodCAgICAgICAgIGBwcm90b2J1ZjomcXVvdDtieXRlcywzLG9wdCxuYW1lPXRydXN0ZWRfaGVpZ2h0LGpzb249dHJ1c3RlZEhlaWdodCxwcm90bzMmcXVvdDsganNvbjomcXVvdDt0cnVzdGVkX2hlaWdodCZxdW90OyB5YW1sOiZxdW90O3RydXN0ZWRfaGVpZ2h0JnF1b3Q7YAogIFRydXN0ZWRWYWxpZGF0b3JzICAgICp0eXBlczIuVmFsaWRhdG9yU2V0IGBwcm90b2J1ZjomcXVvdDtieXRlcyw0LG9wdCxuYW1lPXRydXN0ZWRfdmFsaWRhdG9ycyxqc29uPXRydXN0ZWRWYWxpZGF0b3JzLHByb3RvMyZxdW90OyBqc29uOiZxdW90O3RydXN0ZWRfdmFsaWRhdG9ycyxvbWl0ZW1wdHkmcXVvdDsgeWFtbDomcXVvdDt0cnVzdGVkX3ZhbGlkYXRvcnMmcXVvdDtgCn0K"}}),l._v(" "),c("p",[l._v("Header defines the Tendermint client consensus "),c("code",[l._v("Header")]),l._v(". It encapsulates all the information necessary to update from a trusted Tendermint "),c("code",[l._v("ConsensusState")]),l._v(". The inclusion of "),c("code",[l._v("TrustedHeight")]),l._v(" and "),c("code",[l._v("TrustedValidators")]),l._v(" allows this update to process correctly, so long as the "),c("code",[l._v("ConsensusState")]),l._v(" for the "),c("code",[l._v("TrustedHeight")]),l._v(" exists, this removes race conditions among relayers.")]),l._v(" "),c("p",[l._v("The "),c("code",[l._v("SignedHeader")]),l._v(" and "),c("code",[l._v("ValidatorSet")]),l._v(" are the new untrusted update fields for the client. The "),c("code",[l._v("TrustedHeight")]),l._v(" is the height of a stored "),c("code",[l._v("ConsensusState")]),l._v(" on the client that will be used to verify the new untrusted\nheader. The Trusted "),c("code",[l._v("ConsensusState")]),l._v(" must be within the unbonding period of current time in order to correctly verify, and the "),c("code",[l._v("TrustedValidators")]),l._v(" must hash to "),c("code",[l._v("TrustedConsensusState.NextValidatorsHash")]),l._v(" since that is the last trusted validator set at the "),c("code",[l._v("TrustedHeight")]),l._v(".")]),l._v(" "),c("p",[l._v("The header is passed by the relayer to the light client. You can see that the the header is confirmed with:")]),l._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ICBpZiBlcnIgOj0gY2hlY2tWYWxpZGl0eSgmYW1wO2NzLCB0cnVzdGVkQ29uc1N0YXRlLCB0bUhlYWRlciwgY3R4LkJsb2NrVGltZSgpKTsgZXJyICE9IG5pbCB7CiAgICByZXR1cm4gbmlsLCBuaWwsIGVycgogIH0K"}}),l._v(" "),c("p",[l._v("So take a closer look to see the different verifications made in this call:")]),l._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gY2hlY2tWYWxpZGl0eSBjaGVja3MgaWYgdGhlIFRlbmRlcm1pbnQgaGVhZGVyIGlzIHZhbGlkLgovLyBDT05UUkFDVDogY29uc1N0YXRlLkhlaWdodCA9PSBoZWFkZXIuVHJ1c3RlZEhlaWdodApmdW5jIGNoZWNrVmFsaWRpdHkoCiAgY2xpZW50U3RhdGUgKkNsaWVudFN0YXRlLCBjb25zU3RhdGUgKkNvbnNlbnN1c1N0YXRlLAogIGhlYWRlciAqSGVhZGVyLCBjdXJyZW50VGltZXN0YW1wIHRpbWUuVGltZSwKKSBlcnJvciB7CiAgaWYgZXJyIDo9IGNoZWNrVHJ1c3RlZEhlYWRlcihoZWFkZXIsIGNvbnNTdGF0ZSk7IGVyciAhPSBuaWwgewogICAgcmV0dXJuIGVycgogIH0KCiAgLy8gVXBkYXRlQ2xpZW50IG9ubHkgYWNjZXB0cyB1cGRhdGVzIHdpdGggYSBoZWFkZXIgYXQgdGhlIHNhbWUgcmV2aXNpb24KICAvLyBhcyB0aGUgdHJ1c3RlZCBjb25zZW5zdXMgc3RhdGUKICAuLi4KCiAgdG1UcnVzdGVkVmFsaWRhdG9ycywgZXJyIDo9IHRtdHlwZXMuVmFsaWRhdG9yU2V0RnJvbVByb3RvKGhlYWRlci5UcnVzdGVkVmFsaWRhdG9ycykKICAuLi4KCiAgdG1TaWduZWRIZWFkZXIsIGVyciA6PSB0bXR5cGVzLlNpZ25lZEhlYWRlckZyb21Qcm90byhoZWFkZXIuU2lnbmVkSGVhZGVyKQogIC4uLgoKICB0bVZhbGlkYXRvclNldCwgZXJyIDo9IHRtdHlwZXMuVmFsaWRhdG9yU2V0RnJvbVByb3RvKGhlYWRlci5WYWxpZGF0b3JTZXQpCiAgLi4uCgogIC8vIGFzc2VydCBoZWFkZXIgaGVpZ2h0IGlzIG5ld2VyIHRoYW4gY29uc2Vuc3VzIHN0YXRlCiAgLi4uCgogIGNoYWluSUQgOj0gY2xpZW50U3RhdGUuR2V0Q2hhaW5JRCgpCiAgLy8gSWYgY2hhaW5JRCBpcyBpbiByZXZpc2lvbiBmb3JtYXQsIHRoZW4gc2V0IHJldmlzaW9uIG51bWJlciBvZiBjaGFpbklEIHdpdGggdGhlIHJldmlzaW9uIG51bWJlcgogIC8vIG9mIHRoZSBoZWFkZXIgd2UgYXJlIHZlcmlmeWluZwogIC8vIFRoaXMgaXMgdXNlZnVsIGlmIHRoZSB1cGRhdGUgaXMgYXQgYSBwcmV2aW91cyByZXZpc2lvbiByYXRoZXIgdGhhbiBhbiB1cGRhdGUgdG8gdGhlIGxhdGVzdCByZXZpc2lvbgogIC8vIG9mIHRoZSBjbGllbnQuCiAgLy8gVGhlIGNoYWluSUQgbXVzdCBiZSBzZXQgY29ycmVjdGx5IGZvciB0aGUgcHJldmlvdXMgcmV2aXNpb24gYmVmb3JlIGF0dGVtcHRpbmcgdmVyaWZpY2F0aW9uLgogIC8vIFVwZGF0ZXMgZm9yIHByZXZpb3VzIHJldmlzaW9ucyBhcmUgbm90IHN1cHBvcnRlZCBpZiB0aGUgY2hhaW5JRCBpcyBub3QgaW4gcmV2aXNpb24gZm9ybWF0LgogIGlmIGNsaWVudHR5cGVzLklzUmV2aXNpb25Gb3JtYXQoY2hhaW5JRCkgewogICAgY2hhaW5JRCwgXyA9IGNsaWVudHR5cGVzLlNldFJldmlzaW9uTnVtYmVyKGNoYWluSUQsIGhlYWRlci5HZXRIZWlnaHQoKS5HZXRSZXZpc2lvbk51bWJlcigpKQogIH0KCiAgLy8gQ29uc3RydWN0IGEgdHJ1c3RlZCBoZWFkZXIgdXNpbmcgdGhlIGZpZWxkcyBpbiBjb25zZW5zdXMgc3RhdGUKICAvLyBPbmx5IEhlaWdodCwgVGltZSwgYW5kIE5leHRWYWxpZGF0b3JzSGFzaCBhcmUgbmVjZXNzYXJ5IGZvciB2ZXJpZmljYXRpb24KICB0cnVzdGVkSGVhZGVyIDo9IHRtdHlwZXMuSGVhZGVyewogICAgQ2hhaW5JRDogICAgICAgICAgICBjaGFpbklELAogICAgSGVpZ2h0OiAgICAgICAgICAgICBpbnQ2NChoZWFkZXIuVHJ1c3RlZEhlaWdodC5SZXZpc2lvbkhlaWdodCksCiAgICBUaW1lOiAgICAgICAgICAgICAgIGNvbnNTdGF0ZS5UaW1lc3RhbXAsCiAgICBOZXh0VmFsaWRhdG9yc0hhc2g6IGNvbnNTdGF0ZS5OZXh0VmFsaWRhdG9yc0hhc2gsCiAgfQogIHNpZ25lZEhlYWRlciA6PSB0bXR5cGVzLlNpZ25lZEhlYWRlcnsKICAgIEhlYWRlcjogJmFtcDt0cnVzdGVkSGVhZGVyLAogIH0KCiAgLy8gVmVyaWZ5IG5leHQgaGVhZGVyIHdpdGggdGhlIHBhc3NlZC1pbiB0cnVzdGVkVmFscwogIC8vIC0gYXNzZXJ0cyB0cnVzdGluZyBwZXJpb2Qgbm90IHBhc3NlZAogIC8vIC0gYXNzZXJ0IGhlYWRlciB0aW1lc3RhbXAgaXMgbm90IHBhc3QgdGhlIHRydXN0aW5nIHBlcmlvZAogIC8vIC0gYXNzZXJ0IGhlYWRlciB0aW1lc3RhbXAgaXMgcGFzdCBsYXRlc3Qgc3RvcmVkIGNvbnNlbnN1cyBzdGF0ZSB0aW1lc3RhbXAKICAvLyAtIGFzc2VydCB0aGF0IGEgVHJ1c3RMZXZlbCBwcm9wb3J0aW9uIG9mIFRydXN0ZWRWYWxpZGF0b3JzIHNpZ25lZCBuZXcgQ29tbWl0CiAgZXJyID0gbGlnaHQuVmVyaWZ5KAogICAgJmFtcDtzaWduZWRIZWFkZXIsCiAgICB0bVRydXN0ZWRWYWxpZGF0b3JzLCB0bVNpZ25lZEhlYWRlciwgdG1WYWxpZGF0b3JTZXQsCiAgICBjbGllbnRTdGF0ZS5UcnVzdGluZ1BlcmlvZCwgY3VycmVudFRpbWVzdGFtcCwgY2xpZW50U3RhdGUuTWF4Q2xvY2tEcmlmdCwgY2xpZW50U3RhdGUuVHJ1c3RMZXZlbC5Ub1RlbmRlcm1pbnQoKSwKICApCgogIC4uLgoKICByZXR1cm4gbmlsCn0K"}}),l._v(" "),c("p",[l._v("The client is also used to "),c("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/main/modules/light-clients/07-tendermint/types/client_state.go",target:"_blank",rel:"noopener noreferrer"}},[l._v("verify an incoming packet"),c("OutboundLink")],1),l._v(":")]),l._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gVmVyaWZ5UGFja2V0Q29tbWl0bWVudCB2ZXJpZmllcyBhIHByb29mIG9mIGFuIG91dGdvaW5nIHBhY2tldCBjb21taXRtZW50IGF0Ci8vIHRoZSBzcGVjaWZpZWQgcG9ydCwgc3BlY2lmaWVkIGNoYW5uZWwsIGFuZCBzcGVjaWZpZWQgc2VxdWVuY2UuCmZ1bmMgKGNzIENsaWVudFN0YXRlKSBWZXJpZnlQYWNrZXRDb21taXRtZW50KAogIGN0eCBzZGsuQ29udGV4dCwKICBzdG9yZSBzZGsuS1ZTdG9yZSwKICBjZGMgY29kZWMuQmluYXJ5Q29kZWMsCiAgaGVpZ2h0IGV4cG9ydGVkLkhlaWdodCwKICBkZWxheVRpbWVQZXJpb2QgdWludDY0LAogIGRlbGF5QmxvY2tQZXJpb2QgdWludDY0LAogIHByZWZpeCBleHBvcnRlZC5QcmVmaXgsCiAgcHJvb2YgW11ieXRlLAogIHBvcnRJRCwKICBjaGFubmVsSUQgc3RyaW5nLAogIHNlcXVlbmNlIHVpbnQ2NCwKICBjb21taXRtZW50Qnl0ZXMgW11ieXRlLAopIGVycm9yIHsKICBtZXJrbGVQcm9vZiwgY29uc2Vuc3VzU3RhdGUsIGVyciA6PSBwcm9kdWNlVmVyaWZpY2F0aW9uQXJncyhzdG9yZSwgY2RjLCBjcywgaGVpZ2h0LCBwcmVmaXgsIHByb29mKQogIC4uLgoKICAvLyBjaGVjayBkZWxheSBwZXJpb2QgaGFzIHBhc3NlZAogIGlmIGVyciA6PSB2ZXJpZnlEZWxheVBlcmlvZFBhc3NlZChjdHgsIHN0b3JlLCBoZWlnaHQsIGRlbGF5VGltZVBlcmlvZCwgZGVsYXlCbG9ja1BlcmlvZCk7IAogIC4uLgoKICBjb21taXRtZW50UGF0aCA6PSBjb21taXRtZW50dHlwZXMuTmV3TWVya2xlUGF0aChob3N0LlBhY2tldENvbW1pdG1lbnRQYXRoKHBvcnRJRCwgY2hhbm5lbElELCBzZXF1ZW5jZSkpCiAgcGF0aCwgZXJyIDo9IGNvbW1pdG1lbnR0eXBlcy5BcHBseVByZWZpeChwcmVmaXgsIGNvbW1pdG1lbnRQYXRoKQogIC4uLgoKICBpZiBlcnIgOj0gbWVya2xlUHJvb2YuVmVyaWZ5TWVtYmVyc2hpcChjcy5Qcm9vZlNwZWNzLCBjb25zZW5zdXNTdGF0ZS5HZXRSb290KCksIHBhdGgsIGNvbW1pdG1lbnRCeXRlcyk7CiAgLi4uCgogIHJldHVybiBuaWwKfQo="}}),l._v(" "),c("p",[l._v("Now you can see how the "),c("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/main/modules/core/02-client/keeper/client.go",target:"_blank",rel:"noopener noreferrer"}},[l._v("client is updated"),c("OutboundLink")],1),l._v(":")]),l._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gVXBkYXRlQ2xpZW50IHVwZGF0ZXMgdGhlIGNvbnNlbnN1cyBzdGF0ZSBhbmQgdGhlIHN0YXRlIHJvb3QgZnJvbSBhIHByb3ZpZGVkIGhlYWRlci4KZnVuYyAoayBLZWVwZXIpIFVwZGF0ZUNsaWVudChjdHggc2RrLkNvbnRleHQsIGNsaWVudElEIHN0cmluZywgaGVhZGVyIGV4cG9ydGVkLkhlYWRlcikgZXJyb3IgewogIGNsaWVudFN0YXRlLCBmb3VuZCA6PSBrLkdldENsaWVudFN0YXRlKGN0eCwgY2xpZW50SUQpCiAgLi4uCgogIGNsaWVudFN0b3JlIDo9IGsuQ2xpZW50U3RvcmUoY3R4LCBjbGllbnRJRCkKCiAgLi4uIHN0YXR1cyA6PSBjbGllbnRTdGF0ZS5TdGF0dXMoY3R4LCBjbGllbnRTdG9yZSwgay5jZGMpOyAKICAuLi4KCiAgLy8gQW55IHdyaXRlcyBtYWRlIGluIENoZWNrSGVhZGVyQW5kVXBkYXRlU3RhdGUgYXJlIHBlcnNpc3RlZCBvbiBib3RoIHZhbGlkIHVwZGF0ZXMgYW5kIG1pc2JlaGF2aW91ciB1cGRhdGVzLgogIC8vIExpZ2h0IGNsaWVudCBpbXBsZW1lbnRhdGlvbnMgYXJlIHJlc3BvbnNpYmxlIGZvciB3cml0aW5nIHRoZSBjb3JyZWN0IG1ldGFkYXRhIChpZiBhbnkpIGluIGVpdGhlciBjYXNlLgogIG5ld0NsaWVudFN0YXRlLCBuZXdDb25zZW5zdXNTdGF0ZSwgZXJyIDo9IGNsaWVudFN0YXRlLkNoZWNrSGVhZGVyQW5kVXBkYXRlU3RhdGUoY3R4LCBrLmNkYywgY2xpZW50U3RvcmUsIGhlYWRlcikKICAuLi4KCiAgLy8gZW1pdCB0aGUgZnVsbCBoZWFkZXIgaW4gZXZlbnRzCiAgLi4uCiAgICAvLyBzZXQgZGVmYXVsdCBjb25zZW5zdXMgaGVpZ2h0IHdpdGggaGVhZGVyIGhlaWdodAogICAgY29uc2Vuc3VzSGVpZ2h0ID0gaGVhZGVyLkdldEhlaWdodCgpCiAgLi4uCgogIC8vIHNldCBuZXcgY2xpZW50IHN0YXRlIHJlZ2FyZGxlc3Mgb2YgaWYgdXBkYXRlIGlzIHZhbGlkIHVwZGF0ZSBvciBtaXNiZWhhdmlvdXIKICBrLlNldENsaWVudFN0YXRlKGN0eCwgY2xpZW50SUQsIG5ld0NsaWVudFN0YXRlKQoKICAvLyBJZiBjbGllbnQgc3RhdGUgaXMgbm90IGZyb3plbiBhZnRlciBjbGllbnRTdGF0ZSBDaGVja0hlYWRlckFuZFVwZGF0ZVN0YXRlLAogIC8vIHRoZW4gdXBkYXRlIHdhcyB2YWxpZC4gV3JpdGUgdGhlIHVwZGF0ZSBzdGF0ZSBjaGFuZ2VzLCBhbmQgc2V0IG5ldyBjb25zZW5zdXMgc3RhdGUuCiAgLy8gRWxzZSB0aGUgdXBkYXRlIHdhcyBwcm9vZiBvZiBtaXNiZWhhdmlvdXIgYW5kIHdlIG11c3QgZW1pdCBhcHByb3ByaWF0ZSBtaXNiZWhhdmlvdXIgZXZlbnRzLgogIC4uLgoKICAgIC8vIGVtaXR0aW5nIGV2ZW50cyBpbiB0aGUga2VlcGVyIGVtaXRzIGZvciBib3RoIGJlZ2luIGJsb2NrIGFuZCBoYW5kbGVyIGNsaWVudCB1cGRhdGVzCiAgICBFbWl0VXBkYXRlQ2xpZW50RXZlbnQoY3R4LCBjbGllbnRJRCwgbmV3Q2xpZW50U3RhdGUsIGNvbnNlbnN1c0hlaWdodCwgaGVhZGVyU3RyKQogIC4uLgoKICByZXR1cm4gbmlsCn0KCg=="}})],1)}),[],!1,null,null,null);g.default=Z.exports}}]);