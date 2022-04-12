(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{703:function(e,t,a){"use strict";a.r(t);var o=a(0),c=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"message-handler-create-and-save-a-game-properly"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#message-handler-create-and-save-a-game-properly"}},[e._v("#")]),e._v(" Message Handler - Create and Save a Game Properly")]),e._v(" "),a("HighlightBox",{attrs:{type:"synopsis"}},[a("p",[e._v("Make sure you have all you need before proceeding:")]),e._v(" "),a("ul",[a("li",[e._v("Have Go installed.")]),e._v(" "),a("li",[e._v("The checkers blockchain codebase with "),a("code",[e._v("MsgCreateGame")]),e._v(" created by Ignite CLI. You can get there by following the "),a("RouterLink",{attrs:{to:"/academy/4-my-own-chain/create-message.html"}},[e._v("previous steps")]),e._v(" checking out  "),a("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/tree/create-game-msg",target:"_blank",rel:"noopener noreferrer"}},[e._v("the relevant version"),a("OutboundLink")],1),e._v(".")],1)])]),e._v(" "),a("p",[e._v("You added the message to create a game along with its serialization and dedicated gRPC function with the help of Ignite CLI in the "),a("RouterLink",{attrs:{to:"/academy/4-my-own-chain/create-message.html"}},[e._v("previous section")]),e._v(".")],1),e._v(" "),a("p",[e._v("Now all that remains is to add code that:")]),e._v(" "),a("ul",[a("li",[e._v("Creates a brand new game.")]),e._v(" "),a("li",[e._v("Saves it in storage.")]),e._v(" "),a("li",[e._v("Returns the ID of the new game.")])]),e._v(" "),a("p",[e._v("Ignite CLI isolated this concern into a separate file, "),a("code",[e._v("x/checkers/keeper/msg_server_create_game.go")]),e._v(", for you to edit:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAoayBtc2dTZXJ2ZXIpIENyZWF0ZUdhbWUoZ29DdHggY29udGV4dC5Db250ZXh0LCBtc2cgKnR5cGVzLk1zZ0NyZWF0ZUdhbWUpICgqdHlwZXMuTXNnQ3JlYXRlR2FtZVJlc3BvbnNlLCBlcnJvcikgewogICAgY3R4IDo9IHNkay5VbndyYXBTREtDb250ZXh0KGdvQ3R4KQoKICAgIC8vIFRPRE86IEhhbmRsaW5nIHRoZSBtZXNzYWdlCiAgICBfID0gY3R4CgogICAgcmV0dXJuICZhbXA7dHlwZXMuTXNnQ3JlYXRlR2FtZVJlc3BvbnNle30sIG5pbAp9Cg==",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/e78cba34926ba0adee23febb1ce44774e2c466b3/x/checkers/keeper/msg_server_create_game.go#L10-L17"}}),e._v(" "),a("p",[e._v("All the message processing code were created for you and all you are left to do is code the meat of the action. Opting for Ignite CLI is a wise decision as you can see.")]),e._v(" "),a("p",[e._v("Given that you have already done a lot of preparatory work: what does it involve to code the action? With what do you replace "),a("code",[e._v("// TODO: Handling the message")]),e._v("?")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("First, "),a("code",[e._v("rules")]),e._v(" represent the ready-made file with the imported rules of the game:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"aW1wb3J0ICgKICAgIHJ1bGVzICZxdW90O2dpdGh1Yi5jb20vYWxpY2UvY2hlY2tlcnMveC9jaGVja2Vycy9ydWxlcyZxdW90OwopCg=="}})],1)]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Get the new game's ID:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"bmV4dEdhbWUsIGZvdW5kIDo9IGsuS2VlcGVyLkdldE5leHRHYW1lKGN0eCkKaWYgIWZvdW5kIHsKICAgIHBhbmljKCZxdW90O05leHRHYW1lIG5vdCBmb3VuZCZxdW90OykKfQpuZXdJbmRleCA6PSBzdHJjb252LkZvcm1hdFVpbnQobmV4dEdhbWUuSWRWYWx1ZSwgMTApCg==",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/d59a74496a96018c57fdff72c443980c08416499/x/checkers/keeper/msg_server_create_game.go#L15-L19"}}),e._v(" "),a("p",[e._v("Using the "),a("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/blob/d59a74496a96018c57fdff72c443980c08416499/x/checkers/keeper/next_game.go#L17",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("Keeper.GetNextGame")]),a("OutboundLink")],1),e._v(" function created by the "),a("code",[e._v("ignite scaffold single nextGame...")]),e._v(" command.")])],1),e._v(" "),a("li",[a("p",[e._v("Create the object to be stored:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"c3RvcmVkR2FtZSA6PSB0eXBlcy5TdG9yZWRHYW1lewogICAgQ3JlYXRvcjogbXNnLkNyZWF0b3IsCiAgICBJbmRleDogICBuZXdJbmRleCwKICAgIEdhbWU6ICAgIHJ1bGVzLk5ldygpLlN0cmluZygpLAogICAgUmVkOiAgICAgbXNnLlJlZCwKICAgIEJsYWNrOiAgIG1zZy5CbGFjaywKfQo=",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/d59a74496a96018c57fdff72c443980c08416499/x/checkers/keeper/msg_server_create_game.go#L20-L26"}}),e._v(" "),a("p",[e._v("Notice the use of:")]),e._v(" "),a("ul",[a("li",[e._v("The "),a("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/blob/d59a74496a96018c57fdff72c443980c08416499/x/checkers/rules/checkers.go#L122",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("rules.New()")]),a("OutboundLink")],1),e._v(" command, which is part of the Checkers rules file you imported earlier.")]),e._v(" "),a("li",[e._v("The string content of the "),a("code",[e._v("msg *types.MsgCreateGame")]),e._v(" namely "),a("code",[e._v(".Creator")]),e._v(", "),a("code",[e._v(".Red")]),e._v(", and "),a("code",[e._v(".Black")]),e._v(".")])])],1),e._v(" "),a("li",[a("p",[e._v("Confirm that the values in it are correct by checking the validity of the players' addresses:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZXJyIDo9IHN0b3JlZEdhbWUuVmFsaWRhdGUoKQppZiBlcnIgIT0gbmlsIHsKICAgIHJldHVybiBuaWwsIGVycgp9Cg==",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/d59a74496a96018c57fdff72c443980c08416499/x/checkers/keeper/msg_server_create_game.go#L27-L30"}}),e._v(" "),a("p",[e._v("The "),a("code",[e._v(".Creator")]),e._v(", "),a("code",[e._v(".Red")]),e._v(", and "),a("code",[e._v(".Black")]),e._v(" need to be checked because they were copied as "),a("strong",[e._v("strings")]),e._v(". The check on "),a("code",[e._v(".Creator")]),e._v(" is redundant here because at this stage the message's signatures have been verified and in particular the creator is the signer.")])],1),e._v(" "),a("li",[a("p",[e._v("Save the "),a("code",[e._v("StoredGame")]),e._v(" object:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ay5LZWVwZXIuU2V0U3RvcmVkR2FtZShjdHgsIHN0b3JlZEdhbWUpCg==",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/d59a74496a96018c57fdff72c443980c08416499/x/checkers/keeper/msg_server_create_game.go#L31"}}),e._v(" "),a("p",[e._v("Using the "),a("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/blob/d59a74496a96018c57fdff72c443980c08416499/x/checkers/keeper/stored_game.go#L10",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("Keeper.SetStoredGame")]),a("OutboundLink")],1),e._v(" function created by the "),a("code",[e._v("ignite scaffold map storedGame...")]),e._v(" command")])],1),e._v(" "),a("li",[a("p",[e._v("Prepare the ground for the next game with:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"bmV4dEdhbWUuSWRWYWx1ZSsrCmsuS2VlcGVyLlNldE5leHRHYW1lKGN0eCwgbmV4dEdhbWUpCg==",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/d59a74496a96018c57fdff72c443980c08416499/x/checkers/keeper/msg_server_create_game.go#L33-L34"}}),e._v(" "),a("p",[e._v("Using the "),a("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/blob/d59a74496a96018c57fdff72c443980c08416499/x/checkers/keeper/next_game.go#L10",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("Keeper.SetNextGame")]),a("OutboundLink")],1),e._v(" function created by Ignite CLI.")])],1),e._v(" "),a("li",[a("p",[e._v("Return the newly created ID for reference:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"cmV0dXJuICZhbXA7dHlwZXMuTXNnQ3JlYXRlR2FtZVJlc3BvbnNlewogICAgSWRWYWx1ZTogbmV3SW5kZXgsCn0sIG5pbAo=",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/d59a74496a96018c57fdff72c443980c08416499/x/checkers/keeper/msg_server_create_game.go#L36-L38"}})],1)]),e._v(" "),a("h2",{attrs:{id:"next-up"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#next-up"}},[e._v("#")]),e._v(" Next up")]),e._v(" "),a("p",[e._v("You will modify this handling in the next sections:")]),e._v(" "),a("ul",[a("li",[e._v("To add "),a("RouterLink",{attrs:{to:"/academy/4-my-own-chain/game-fifo.html"}},[e._v("new fields")]),e._v(" to the stored information.")],1),e._v(" "),a("li",[e._v("To add "),a("RouterLink",{attrs:{to:"/academy/4-my-own-chain/events.html"}},[e._v("an event")]),e._v(".")],1),e._v(" "),a("li",[e._v("To consume "),a("RouterLink",{attrs:{to:"/academy/4-my-own-chain/gas-meter.html"}},[e._v("some gas")]),e._v(".")],1),e._v(" "),a("li",[e._v("To facilitate the eventual "),a("RouterLink",{attrs:{to:"/academy/4-my-own-chain/game-forfeit.html"}},[e._v("deadline enforcement")]),e._v(".")],1),e._v(" "),a("li",[e._v("To add "),a("RouterLink",{attrs:{to:"/academy/4-my-own-chain/game-wager.html"}},[a("em",[e._v("money")])]),e._v(" handling including "),a("RouterLink",{attrs:{to:"/academy/4-my-own-chain/wager-denom.html"}},[e._v("foreign tokens")]),e._v(".")],1)]),e._v(" "),a("p",[e._v("Now that a game is created, it is time to play it. That is the subject of the "),a("RouterLink",{attrs:{to:"/academy/4-my-own-chain/play-game.html"}},[e._v("next section")]),e._v(".")],1)],1)}),[],!1,null,null,null);t.default=c.exports}}]);