(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{730:function(e,t,a){"use strict";a.r(t);var o=a(1),c=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"make-sure-a-player-can-reject-a-game"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#make-sure-a-player-can-reject-a-game"}},[e._v("#")]),e._v(" Make Sure a Player Can Reject a Game")]),e._v(" "),a("HighlightBox",{attrs:{type:"prerequisite"}},[a("p",[e._v("Before proceeding, make sure you have all you need:")]),e._v(" "),a("ul",[a("li",[e._v("You understand the concepts of "),a("RouterLink",{attrs:{to:"/academy/2-cosmos-concepts/3-transactions.html"}},[e._v("transactions")]),e._v(", "),a("RouterLink",{attrs:{to:"/academy/2-cosmos-concepts/4-messages.html"}},[e._v("messages")]),e._v(", and "),a("RouterLink",{attrs:{to:"/academy/2-cosmos-concepts/6-protobuf.html"}},[e._v("Protobuf")]),e._v(".")],1),e._v(" "),a("li",[e._v("You know how to "),a("RouterLink",{attrs:{to:"/hands-on-exercise/1-ignite-cli/4-create-message.html"}},[e._v("create a message")]),e._v(" with Ignite CLI, and code "),a("RouterLink",{attrs:{to:"/hands-on-exercise/1-ignite-cli/5-create-handling.html"}},[e._v("its handling")]),e._v(". This section does not aim to repeat what can be learned in earlier sections.")],1),e._v(" "),a("li",[e._v("Go is installed.")]),e._v(" "),a("li",[e._v("You have the checkers blockchain codebase with the previous messages and their events. If not, follow the "),a("RouterLink",{attrs:{to:"/hands-on-exercise/1-ignite-cli/7-events.html"}},[e._v("previous steps")]),e._v(" or check out the "),a("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/tree/two-events",target:"_blank",rel:"noopener noreferrer"}},[e._v("relevant version"),a("OutboundLink")],1),e._v(".")],1)])]),e._v(" "),a("HighlightBox",{attrs:{type:"learning"}},[a("p",[e._v("In this section, you will:")]),e._v(" "),a("ul",[a("li",[e._v("Add a new protocol rule.")]),e._v(" "),a("li",[e._v("Define custom errors.")]),e._v(" "),a("li",[e._v("Add a message handler.")]),e._v(" "),a("li",[e._v("Extend unit tests.")])])]),e._v(" "),a("p",[e._v("Your blockchain can now create and play games, and inform the outside world about the process. It would be good to add a way for players to back out of games they do not want to play. What do you need to make this possible?")]),e._v(" "),a("h2",{attrs:{id:"some-initial-thoughts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#some-initial-thoughts"}},[e._v("#")]),e._v(" Some initial thoughts")]),e._v(" "),a("p",[e._v("Ask yourself:")]),e._v(" "),a("ul",[a("li",[e._v("What goes into the message?")]),e._v(" "),a("li",[e._v("How do you sanitize the inputs?")]),e._v(" "),a("li",[e._v("How do you unequivocally identify games?")]),e._v(" "),a("li",[e._v("What conditions have to be satisfied to reject a game?")]),e._v(" "),a("li",[e._v("How do you report back errors?")]),e._v(" "),a("li",[e._v("What event should you emit?")]),e._v(" "),a("li",[e._v("How do you use your files that implement the checkers rules?")]),e._v(" "),a("li",[e._v("What do you do with a rejected game?")])]),e._v(" "),a("h2",{attrs:{id:"code-needs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#code-needs"}},[e._v("#")]),e._v(" Code needs")]),e._v(" "),a("p",[e._v("When you think about the code you might need, try to first answer the following questions:")]),e._v(" "),a("ul",[a("li",[e._v("What Ignite CLI commands will create your message?")]),e._v(" "),a("li",[e._v("How do you adjust what Ignite CLI created for you?")]),e._v(" "),a("li",[e._v("How would you unit-test these new elements?")]),e._v(" "),a("li",[e._v("How would you use Ignite CLI to locally run a one-node blockchain and interact with it via the CLI to see what you get?")])]),e._v(" "),a("p",[e._v("As before, do not bother yet with niceties like gas metering.")]),e._v(" "),a("p",[e._v("If anyone can create a game for any two other players, it is important to allow a player to reject a game. But a player should not be allowed to reject a game once they have made their first move.")]),e._v(" "),a("p",[e._v("To reject a game, a player needs to provide the ID of the game that the player wants to reject. Call the field "),a("code",[e._v("gameIndex")]),e._v(". This should be sufficient, as the signer of the message is implicitly the player.")]),e._v(" "),a("h2",{attrs:{id:"working-with-ignite-cli"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#working-with-ignite-cli"}},[e._v("#")]),e._v(" Working with Ignite CLI")]),e._v(" "),a("p",[e._v("Name the message object "),a("code",[e._v("RejectGame")]),e._v(". Invoke Ignite CLI:")]),e._v(" "),a("CodeGroup",[a("CodeGroupItem",{attrs:{title:"Local",active:""}},[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBpZ25pdGUgc2NhZmZvbGQgbWVzc2FnZSByZWplY3RHYW1lIGdhbWVJbmRleCAtLW1vZHVsZSBjaGVja2Vycwo="}})],1),e._v(" "),a("CodeGroupItem",{attrs:{title:"Docker"}},[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBkb2NrZXIgcnVuIC0tcm0gLWl0IC12ICQocHdkKTovY2hlY2tlcnMgLXcgL2NoZWNrZXJzIGNoZWNrZXJzX2kgaWduaXRlIHNjYWZmb2xkIG1lc3NhZ2UgcmVqZWN0R2FtZSBnYW1lSW5kZXggLS1tb2R1bGUgY2hlY2tlcnMK"}})],1)],1),e._v(" "),a("p",[e._v("This creates all the boilerplate for you and leaves a single place for the code you want to include:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAoayBtc2dTZXJ2ZXIpIFJlamVjdEdhbWUoZ29DdHggY29udGV4dC5Db250ZXh0LCBtc2cgKnR5cGVzLk1zZ1JlamVjdEdhbWUpICgqdHlwZXMuTXNnUmVqZWN0R2FtZVJlc3BvbnNlLCBlcnJvcikgewogICAgY3R4IDo9IHNkay5VbndyYXBTREtDb250ZXh0KGdvQ3R4KQoKICAgIC8vIFRPRE86IEhhbmRsaW5nIHRoZSBtZXNzYWdlCiAgICBfID0gY3R4CgogICAgcmV0dXJuICZhbXA7dHlwZXMuTXNnUmVqZWN0R2FtZVJlc3BvbnNle30sIG5pbAp9Cg==",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/reject-game-msg/x/checkers/keeper/msg_server_reject_game.go#L10-L17"}}),e._v(" "),a("h2",{attrs:{id:"additional-information"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#additional-information"}},[e._v("#")]),e._v(" Additional information")]),e._v(" "),a("p",[e._v("A new rule of the game should be that a player cannot reject a game once they begin to play. When loading a "),a("code",[e._v("StoredGame")]),e._v(" from storage you have no way of knowing whether a player already played or not. To access this information add a new field to the "),a("code",[e._v("StoredGame")]),e._v(" called "),a("code",[e._v("MoveCount")]),e._v(". In "),a("code",[e._v("proto/checkers/stored_game.proto")]),e._v(":")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"protobuf",base64:"bWVzc2FnZSBTdG9yZWRHYW1lIHsKICAgIC4uLgogICAgdWludDY0IG1vdmVDb3VudCA9IDY7Cn0K",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/reject-game-handler/proto/checkers/stored_game.proto#L12"}}),e._v(" "),a("p",[e._v("Run Protobuf to recompile the relevant Go files:")]),e._v(" "),a("CodeGroup",[a("CodeGroupItem",{attrs:{title:"Local",active:""}},[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBpZ25pdGUgZ2VuZXJhdGUgcHJvdG8tZ28K"}})],1),e._v(" "),a("CodeGroupItem",{attrs:{title:"Docker"}},[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBkb2NrZXIgcnVuIC0tcm0gLWl0IC12ICQocHdkKTovY2hlY2tlcnMgLXcgL2NoZWNrZXJzIGNoZWNrZXJzX2kgaWduaXRlIGdlbmVyYXRlIHByb3RvLWdvCg=="}})],1)],1),e._v(" "),a("p",[a("code",[e._v("MoveCount")]),e._v(" should start at "),a("code",[e._v("0")]),e._v(" and increment by "),a("code",[e._v("1")]),e._v(" on each move.")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Adjust it first in the handler when creating the game:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"c3RvcmVkR2FtZSA6PSB0eXBlcy5TdG9yZWRHYW1lewogICAgLi4uCiAgICBNb3ZlQ291bnQ6IDAsCn0K",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/reject-game-handler/x/checkers/keeper/msg_server_create_game.go#L28"}})],1),e._v(" "),a("li",[a("p",[e._v("Before saving to the storage, adjust it in the handler when playing a move:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Li4uCnN0b3JlZEdhbWUuTW92ZUNvdW50KysKc3RvcmVkR2FtZS5HYW1lID0gZ2FtZS5TdHJpbmcoKQouLi4K",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/reject-game-handler/x/checkers/keeper/msg_server_play_move.go#L57"}})],1)]),e._v(" "),a("p",[e._v("With "),a("code",[e._v("MoveCount")]),e._v(" counting properly, you are now ready to handle a rejection request.")]),e._v(" "),a("h2",{attrs:{id:"the-reject-handling"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-reject-handling"}},[e._v("#")]),e._v(" The reject handling")]),e._v(" "),a("p",[e._v("To follow the Cosmos SDK conventions, declare the following new errors:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"RXJyQmxhY2tBbHJlYWR5UGxheWVkID0gc2RrZXJyb3JzLlJlZ2lzdGVyKE1vZHVsZU5hbWUsIDExMDcsICZxdW90O2JsYWNrIHBsYXllciBoYXMgYWxyZWFkeSBwbGF5ZWQmcXVvdDspCkVyclJlZEFscmVhZHlQbGF5ZWQgICA9IHNka2Vycm9ycy5SZWdpc3RlcihNb2R1bGVOYW1lLCAxMTA4LCAmcXVvdDtyZWQgcGxheWVyIGhhcyBhbHJlYWR5IHBsYXllZCZxdW90OykK",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/reject-game-handler/x/checkers/types/errors.go#L18-L19"}}),e._v(" "),a("p",[e._v("This time you will add an event for rejection. Begin by preparing the new keys:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Y29uc3QgKAogICAgR2FtZVJlamVjdGVkRXZlbnRUeXBlICAgICAgPSAmcXVvdDtnYW1lLXJlamVjdGVkJnF1b3Q7CiAgICBHYW1lUmVqZWN0ZWRFdmVudENyZWF0b3IgICA9ICZxdW90O2NyZWF0b3ImcXVvdDsKICAgIEdhbWVSZWplY3RlZEV2ZW50R2FtZUluZGV4ID0gJnF1b3Q7Z2FtZS1pbmRleCZxdW90OwopCg==",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/reject-game-handler/x/checkers/types/keys.go#L45-L49"}}),e._v(" "),a("p",[e._v("In the message handler, the reject steps are:")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Fetch the relevant information:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"c3RvcmVkR2FtZSwgZm91bmQgOj0gay5LZWVwZXIuR2V0U3RvcmVkR2FtZShjdHgsIG1zZy5HYW1lSW5kZXgpCmlmICFmb3VuZCB7CiAgICByZXR1cm4gbmlsLCBzZGtlcnJvcnMuV3JhcGYodHlwZXMuRXJyR2FtZU5vdEZvdW5kLCAmcXVvdDslcyZxdW90OywgbXNnLkdhbWVJbmRleCkKfQo=",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/reject-game-handler/x/checkers/keeper/msg_server_reject_game.go#L14-L17"}})],1),e._v(" "),a("li",[a("p",[e._v("Is the player expected? Did the player already play? Check with:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"aWYgc3RvcmVkR2FtZS5CbGFjayA9PSBtc2cuQ3JlYXRvciB7CiAgICBpZiAwICZsdDsgc3RvcmVkR2FtZS5Nb3ZlQ291bnQgeyAvLyBOb3RpY2UgdGhlIHVzZSBvZiB0aGUgbmV3IGZpZWxkCiAgICAgICAgcmV0dXJuIG5pbCwgdHlwZXMuRXJyQmxhY2tBbHJlYWR5UGxheWVkCiAgICB9Cn0gZWxzZSBpZiBzdG9yZWRHYW1lLlJlZCA9PSBtc2cuQ3JlYXRvciB7CiAgICBpZiAxICZsdDsgc3RvcmVkR2FtZS5Nb3ZlQ291bnQgeyAvLyBOb3RpY2UgdGhlIHVzZSBvZiB0aGUgbmV3IGZpZWxkCiAgICAgICAgcmV0dXJuIG5pbCwgdHlwZXMuRXJyUmVkQWxyZWFkeVBsYXllZAogICAgfQp9IGVsc2UgewogICAgcmV0dXJuIG5pbCwgc2RrZXJyb3JzLldyYXBmKHR5cGVzLkVyckNyZWF0b3JOb3RQbGF5ZXIsICZxdW90OyVzJnF1b3Q7LCBtc2cuQ3JlYXRvcikKfQo=",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/reject-game-handler/x/checkers/keeper/msg_server_reject_game.go#L19-L29"}}),e._v(" "),a("p",[e._v("Remember that the player with the color black plays first.")])],1),e._v(" "),a("li",[a("p",[e._v("Remove the game using the "),a("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/blob/create-game-msg/x/checkers/keeper/stored_game.go#L38",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("Keeper.RemoveStoredGame")]),a("OutboundLink")],1),e._v(" function created long ago by the "),a("code",[e._v("ignite scaffold map storedGame...")]),e._v(" command:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ay5LZWVwZXIuUmVtb3ZlU3RvcmVkR2FtZShjdHgsIG1zZy5HYW1lSW5kZXgpCg==",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/reject-game-handler/x/checkers/keeper/msg_server_reject_game.go#L31"}})],1),e._v(" "),a("li",[a("p",[e._v("Emit the relevant event:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Y3R4LkV2ZW50TWFuYWdlcigpLkVtaXRFdmVudCgKICAgIHNkay5OZXdFdmVudCh0eXBlcy5HYW1lUmVqZWN0ZWRFdmVudFR5cGUsCiAgICAgICAgc2RrLk5ld0F0dHJpYnV0ZSh0eXBlcy5HYW1lUmVqZWN0ZWRFdmVudENyZWF0b3IsIG1zZy5DcmVhdG9yKSwKICAgICAgICBzZGsuTmV3QXR0cmlidXRlKHR5cGVzLkdhbWVSZWplY3RlZEV2ZW50R2FtZUluZGV4LCBtc2cuR2FtZUluZGV4KSwKICAgICksCikK",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/reject-game-handler/x/checkers/keeper/msg_server_reject_game.go#L33-L38"}})],1),e._v(" "),a("li",[a("p",[e._v("Leave the returned object as it is, as you have nothing new to tell the caller.")])])]),e._v(" "),a("p",[e._v("Finally, confirm that your project at least compiles "),a("a",{attrs:{href:"https://docs.ignite.com/cli/#ignite-chain-build",target:"_blank",rel:"noopener noreferrer"}},[e._v("with"),a("OutboundLink")],1),e._v(":")]),e._v(" "),a("CodeGroup",[a("CodeGroupItem",{attrs:{title:"Local",active:""}},[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBpZ25pdGUgY2hhaW4gYnVpbGQK"}})],1),e._v(" "),a("CodeGroupItem",{attrs:{title:"Docker"}},[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBkb2NrZXIgcnVuIC0tcm0gLWl0IC12ICQocHdkKTovY2hlY2tlcnMgLXcgL2NoZWNrZXJzIGNoZWNrZXJzX2kgaWduaXRlIGNoYWluIGJ1aWxkCg=="}})],1)],1),e._v(" "),a("h2",{attrs:{id:"unit-tests"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#unit-tests"}},[e._v("#")]),e._v(" Unit tests")]),e._v(" "),a("p",[e._v("Before testing what you did when rejecting a game, you have to fix the existing tests by adding "),a("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/blob/reject-game-handler/x/checkers/keeper/msg_server_create_game_test.go#L61",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("MoveCount: 0")]),a("OutboundLink")],1),e._v(" ("),a("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/blob/reject-game-handler/x/checkers/keeper/msg_server_play_move_test.go#L370",target:"_blank",rel:"noopener noreferrer"}},[e._v("or more"),a("OutboundLink")],1),e._v(") when testing a retrieved "),a("code",[e._v("StoredGame")]),e._v(".")]),e._v(" "),a("p",[e._v("When you are done with the existing tests, the tests for "),a("em",[e._v("reject")]),e._v(" here are similar to those you created for "),a("em",[e._v("create")]),e._v(" and "),a("em",[e._v("play")]),e._v(", except that now you test a game rejection "),a("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/blob/reject-game-handler/x/checkers/keeper/msg_server_reject_game_test.go#L28-L36",target:"_blank",rel:"noopener noreferrer"}},[e._v("by the game creator"),a("OutboundLink")],1),e._v(", the "),a("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/blob/reject-game-handler/x/checkers/keeper/msg_server_reject_game_test.go#L200-L216",target:"_blank",rel:"noopener noreferrer"}},[e._v("black player"),a("OutboundLink")],1),e._v(", or the "),a("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/blob/reject-game-handler/x/checkers/keeper/msg_server_reject_game_test.go#L84-L92",target:"_blank",rel:"noopener noreferrer"}},[e._v("red player"),a("OutboundLink")],1),e._v(" which is made "),a("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/blob/reject-game-handler/x/checkers/keeper/msg_server_reject_game_test.go#L38-L46",target:"_blank",rel:"noopener noreferrer"}},[e._v("before anyone has played"),a("OutboundLink")],1),e._v(", or after "),a("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/blob/reject-game-handler/x/checkers/keeper/msg_server_reject_game_test.go#L130-L146",target:"_blank",rel:"noopener noreferrer"}},[e._v("one"),a("OutboundLink")],1),e._v(" or "),a("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/blob/reject-game-handler/x/checkers/keeper/msg_server_reject_game_test.go#L218-L242",target:"_blank",rel:"noopener noreferrer"}},[e._v("two moves"),a("OutboundLink")],1),e._v(" have been made. Check also that the "),a("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/blob/reject-game-handler/x/checkers/keeper/msg_server_reject_game_test.go#L48-L62",target:"_blank",rel:"noopener noreferrer"}},[e._v("game is removed"),a("OutboundLink")],1),e._v(", and that "),a("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/blob/reject-game-handler/x/checkers/keeper/msg_server_reject_game_test.go#L64-L82",target:"_blank",rel:"noopener noreferrer"}},[e._v("events are emitted"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("For instance:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBUZXN0UmVqZWN0R2FtZUJ5UmVkT25lTW92ZVJlbW92ZWRHYW1lKHQgKnRlc3RpbmcuVCkgewogICAgbXNnU2VydmVyLCBrZWVwZXIsIGNvbnRleHQgOj0gc2V0dXBNc2dTZXJ2ZXJXaXRoT25lR2FtZUZvclJlamVjdEdhbWUodCkKICAgIG1zZ1NlcnZlci5QbGF5TW92ZShjb250ZXh0LCAmYW1wO3R5cGVzLk1zZ1BsYXlNb3ZlewogICAgICAgIENyZWF0b3I6ICAgYm9iLAogICAgICAgIEdhbWVJbmRleDogJnF1b3Q7MSZxdW90OywKICAgICAgICBGcm9tWDogICAgIDEsCiAgICAgICAgRnJvbVk6ICAgICAyLAogICAgICAgIFRvWDogICAgICAgMiwKICAgICAgICBUb1k6ICAgICAgIDMsCiAgICB9KQogICAgbXNnU2VydmVyLlJlamVjdEdhbWUoY29udGV4dCwgJmFtcDt0eXBlcy5Nc2dSZWplY3RHYW1lewogICAgICAgIENyZWF0b3I6ICAgY2Fyb2wsCiAgICAgICAgR2FtZUluZGV4OiAmcXVvdDsxJnF1b3Q7LAogICAgfSkKICAgIHN5c3RlbUluZm8sIGZvdW5kIDo9IGtlZXBlci5HZXRTeXN0ZW1JbmZvKHNkay5VbndyYXBTREtDb250ZXh0KGNvbnRleHQpKQogICAgcmVxdWlyZS5UcnVlKHQsIGZvdW5kKQogICAgcmVxdWlyZS5FcXVhbFZhbHVlcyh0LCB0eXBlcy5TeXN0ZW1JbmZvewogICAgICAgIE5leHRJZDogMiwKICAgIH0sIHN5c3RlbUluZm8pCiAgICBfLCBmb3VuZCA9IGtlZXBlci5HZXRTdG9yZWRHYW1lKHNkay5VbndyYXBTREtDb250ZXh0KGNvbnRleHQpLCAmcXVvdDsxJnF1b3Q7KQogICAgcmVxdWlyZS5GYWxzZSh0LCBmb3VuZCkKfQo=",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/reject-game-handler/x/checkers/keeper/msg_server_reject_game_test.go#L148-L170"}}),e._v(" "),a("p",[e._v("Try these tests:")]),e._v(" "),a("CodeGroup",[a("CodeGroupItem",{attrs:{title:"Local",active:""}},[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBnbyB0ZXN0IGdpdGh1Yi5jb20vYWxpY2UvY2hlY2tlcnMveC9jaGVja2Vycy9rZWVwZXIK"}})],1),e._v(" "),a("CodeGroupItem",{attrs:{title:"Docker"}},[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBkb2NrZXIgcnVuIC0tcm0gLWl0IC12ICQocHdkKTovY2hlY2tlcnMgLXcgL2NoZWNrZXJzIGNoZWNrZXJzX2kgZ28gdGVzdCBnaXRodWIuY29tL2FsaWNlL2NoZWNrZXJzL3gvY2hlY2tlcnMva2VlcGVyCg=="}})],1)],1),e._v(" "),a("h2",{attrs:{id:"interact-with-the-cli"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#interact-with-the-cli"}},[e._v("#")]),e._v(" Interact with the CLI")]),e._v(" "),a("p",[e._v("Time to see if it is possible to reject a game from the command line. If you did not do it already, start your chain with Ignite.")]),e._v(" "),a("p",[e._v("First, is it possible to reject the current game from the command line?")]),e._v(" "),a("CodeGroup",[a("CodeGroupItem",{attrs:{title:"Local",active:""}},[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBjaGVja2Vyc2QgdHggY2hlY2tlcnMgLS1oZWxwCg=="}})],1),e._v(" "),a("CodeGroupItem",{attrs:{title:"Docker"}},[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBkb2NrZXIgZXhlYyAtaXQgY2hlY2tlcnMgY2hlY2tlcnNkIHR4IGNoZWNrZXJzIC0taGVscAo="}})],1)],1),e._v(" "),a("p",[e._v("This prints:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"txt",base64:"Li4uCkF2YWlsYWJsZSBDb21tYW5kczoKLi4uCiAgcmVqZWN0LWdhbWUgQnJvYWRjYXN0IG1lc3NhZ2UgcmVqZWN0R2FtZQo="}}),e._v(" "),a("p",[a("code",[e._v("reject-game")]),e._v(" is the command. What is its syntax?")]),e._v(" "),a("CodeGroup",[a("CodeGroupItem",{attrs:{title:"Local",active:""}},[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBjaGVja2Vyc2QgdHggY2hlY2tlcnMgcmVqZWN0LWdhbWUgLS1oZWxwCg=="}})],1),e._v(" "),a("CodeGroupItem",{attrs:{title:"Docker"}},[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBkb2NrZXIgZXhlYyAtaXQgY2hlY2tlcnMgY2hlY2tlcnNkIHR4IGNoZWNrZXJzIHJlamVjdC1nYW1lIC0taGVscAo="}})],1)],1),e._v(" "),a("p",[e._v("This prints:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"txt",base64:"Li4uClVzYWdlOgogIGNoZWNrZXJzZCB0eCBjaGVja2VycyByZWplY3QtZ2FtZSBbZ2FtZS1pbmRleF0gW2ZsYWdzXQo="}}),e._v(" "),a("p",[e._v("Have Bob, who played poorly in game "),a("code",[e._v("1")]),e._v(", try to reject it:")]),e._v(" "),a("CodeGroup",[a("CodeGroupItem",{attrs:{title:"Local",active:""}},[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBjaGVja2Vyc2QgdHggY2hlY2tlcnMgcmVqZWN0LWdhbWUgMSAtLWZyb20gJGJvYgo="}})],1),e._v(" "),a("CodeGroupItem",{attrs:{title:"Docker"}},[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBkb2NrZXIgZXhlYyAtaXQgY2hlY2tlcnMgY2hlY2tlcnNkIHR4IGNoZWNrZXJzIHJlamVjdC1nYW1lIDEgLS1mcm9tICRib2IK"}})],1)],1),e._v(" "),a("p",[e._v("This returns:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"txt",base64:"Li4uCnJhd19sb2c6ICdbeyZxdW90O2V2ZW50cyZxdW90OzpbeyZxdW90O3R5cGUmcXVvdDs6JnF1b3Q7Z2FtZS1yZWplY3RlZCZxdW90OywmcXVvdDthdHRyaWJ1dGVzJnF1b3Q7Olt7JnF1b3Q7a2V5JnF1b3Q7OiZxdW90O2NyZWF0b3ImcXVvdDssJnF1b3Q7dmFsdWUmcXVvdDs6JnF1b3Q7Y29zbW9zMTRnM3F3Nm5razh6Yzc2Mms4N2NnNzd3N3ZkOHhkbmZmbnAydzZ1JnF1b3Q7fSx7JnF1b3Q7a2V5JnF1b3Q7OiZxdW90O2dhbWUtaW5kZXgmcXVvdDssJnF1b3Q7dmFsdWUmcXVvdDs6JnF1b3Q7MSZxdW90O31dfSx7JnF1b3Q7dHlwZSZxdW90OzomcXVvdDttZXNzYWdlJnF1b3Q7LCZxdW90O2F0dHJpYnV0ZXMmcXVvdDs6W3smcXVvdDtrZXkmcXVvdDs6JnF1b3Q7YWN0aW9uJnF1b3Q7LCZxdW90O3ZhbHVlJnF1b3Q7OiZxdW90O3JlamVjdF9nYW1lJnF1b3Q7fV19XX1dJwo="}}),e._v(" "),a("p",[e._v("Against expectations, the system carried out Bob's request to reject the game. Confirm that the game has indeed been removed from storage:")]),e._v(" "),a("CodeGroup",[a("CodeGroupItem",{attrs:{title:"Local",active:""}},[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBjaGVja2Vyc2QgcXVlcnkgY2hlY2tlcnMgc2hvdy1zdG9yZWQtZ2FtZSAxCg=="}})],1),e._v(" "),a("CodeGroupItem",{attrs:{title:"Docker"}},[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBkb2NrZXIgZXhlYyAtaXQgY2hlY2tlcnMgY2hlY2tlcnNkIHF1ZXJ5IGNoZWNrZXJzIHNob3ctc3RvcmVkLWdhbWUgMQo="}})],1)],1),e._v(" "),a("p",[e._v("This returns:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"txt",base64:"RXJyb3I6IHJwYyBlcnJvcjogY29kZSA9IE5vdEZvdW5kIGRlc2MgPSBycGMgZXJyb3I6IGNvZGUgPSBOb3RGb3VuZCBkZXNjID0gbm90IGZvdW5kOiBrZXkgbm90IGZvdW5kCi4uLgo="}}),e._v(" "),a("HighlightBox",{attrs:{type:"learning"}},[a("p",[e._v("How is it possible that Bob could reject a game he had already played in, despite the code preventing that? Because game "),a("code",[e._v("1")]),e._v(" was created in an earlier version of your code. This earlier version created "),a("strong",[e._v("a game without any "),a("code",[e._v(".MoveCount")])]),e._v(", or more precisely with "),a("code",[e._v("MoveCount == 0")]),e._v(". When you later added the code for rejection, Ignite CLI kept the current state of your blockchain. In effect, your blockchain was in a "),a("strong",[e._v("broken")]),e._v(" state, where "),a("strong",[e._v("the code and the state were out of sync")]),e._v(".")]),e._v(" "),a("p",[e._v("To see how to properly handle code changes that would otherwise result in a broken state, see the section on "),a("RouterLink",{attrs:{to:"/hands-on-exercise/4-run-in-prod/2-migration.html"}},[e._v("migrations")]),e._v(".")],1)]),e._v(" "),a("p",[e._v("You have to create other games and test the rejection on them. Notice the incrementing game ID.")]),e._v(" "),a("PanelList",[a("PanelListItem",{attrs:{number:"1"}},[a("p",[e._v("Black rejects:")]),e._v(" "),a("CodeGroup",[a("CodeGroupItem",{attrs:{title:"Local",active:""}},[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBjaGVja2Vyc2QgdHggY2hlY2tlcnMgY3JlYXRlLWdhbWUgJGFsaWNlICRib2IgLS1mcm9tICRhbGljZQokIGNoZWNrZXJzZCB0eCBjaGVja2VycyByZWplY3QtZ2FtZSAyIC0tZnJvbSAkYWxpY2UK"}})],1),e._v(" "),a("CodeGroupItem",{attrs:{title:"Docker"}},[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBkb2NrZXIgZXhlYyAtaXQgY2hlY2tlcnMgY2hlY2tlcnNkIHR4IGNoZWNrZXJzIGNyZWF0ZS1nYW1lICRhbGljZSAkYm9iIC0tZnJvbSAkYWxpY2UKJCBkb2NrZXIgZXhlYyAtaXQgY2hlY2tlcnMgY2hlY2tlcnNkIHR4IGNoZWNrZXJzIHJlamVjdC1nYW1lIDIgLS1mcm9tICRhbGljZQo="}})],1)],1),e._v(" "),a("p",[e._v("Above, Alice creates a game and rejects it immediately. This returns:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"txt",base64:"Li4uCnJhd19sb2c6ICdbeyZxdW90O2V2ZW50cyZxdW90OzpbeyZxdW90O3R5cGUmcXVvdDs6JnF1b3Q7Z2FtZS1yZWplY3RlZCZxdW90OywmcXVvdDthdHRyaWJ1dGVzJnF1b3Q7Olt7JnF1b3Q7a2V5JnF1b3Q7OiZxdW90O2NyZWF0b3ImcXVvdDssJnF1b3Q7dmFsdWUmcXVvdDs6JnF1b3Q7Y29zbW9zMXVoZmE0emhzdno3Y3llYzdyNjJwODJzd2s4Yzg1amFxdDJzZmY1JnF1b3Q7fSx7JnF1b3Q7a2V5JnF1b3Q7OiZxdW90O2dhbWUtaW5kZXgmcXVvdDssJnF1b3Q7dmFsdWUmcXVvdDs6JnF1b3Q7MiZxdW90O31dfSx7JnF1b3Q7dHlwZSZxdW90OzomcXVvdDttZXNzYWdlJnF1b3Q7LCZxdW90O2F0dHJpYnV0ZXMmcXVvdDs6W3smcXVvdDtrZXkmcXVvdDs6JnF1b3Q7YWN0aW9uJnF1b3Q7LCZxdW90O3ZhbHVlJnF1b3Q7OiZxdW90O3JlamVjdF9nYW1lJnF1b3Q7fV19XX1dJwo="}}),e._v(" "),a("p",[e._v("Correct result, because nobody played a move.")])],1),e._v(" "),a("PanelListItem",{attrs:{number:"2"}},[a("p",[e._v("Red rejects:")]),e._v(" "),a("CodeGroup",[a("CodeGroupItem",{attrs:{title:"Local",active:""}},[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBjaGVja2Vyc2QgdHggY2hlY2tlcnMgY3JlYXRlLWdhbWUgJGFsaWNlICRib2IgLS1mcm9tICRhbGljZQokIGNoZWNrZXJzZCB0eCBjaGVja2VycyByZWplY3QtZ2FtZSAzIC0tZnJvbSAkYm9iCg=="}})],1),e._v(" "),a("CodeGroupItem",{attrs:{title:"Docker"}},[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBkb2NrZXIgZXhlYyAtaXQgY2hlY2tlcnMgY2hlY2tlcnNkIHR4IGNoZWNrZXJzIGNyZWF0ZS1nYW1lICRhbGljZSAkYm9iIC0tZnJvbSAkYWxpY2UKJCBkb2NrZXIgZXhlYyAtaXQgY2hlY2tlcnMgY2hlY2tlcnNkIHR4IGNoZWNrZXJzIHJlamVjdC1nYW1lIDMgLS1mcm9tICRib2IK"}})],1)],1),e._v(" "),a("p",[e._v("Above, Alice creates a game and Bob rejects it immediately. This returns:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"txt",base64:"Li4uCnJhd19sb2c6ICdbeyZxdW90O2V2ZW50cyZxdW90OzpbeyZxdW90O3R5cGUmcXVvdDs6JnF1b3Q7Z2FtZS1yZWplY3RlZCZxdW90OywmcXVvdDthdHRyaWJ1dGVzJnF1b3Q7Olt7JnF1b3Q7a2V5JnF1b3Q7OiZxdW90O2NyZWF0b3ImcXVvdDssJnF1b3Q7dmFsdWUmcXVvdDs6JnF1b3Q7Y29zbW9zMTRnM3F3Nm5razh6Yzc2Mms4N2NnNzd3N3ZkOHhkbmZmbnAydzZ1JnF1b3Q7fSx7JnF1b3Q7a2V5JnF1b3Q7OiZxdW90O2dhbWUtaW5kZXgmcXVvdDssJnF1b3Q7dmFsdWUmcXVvdDs6JnF1b3Q7MyZxdW90O31dfSx7JnF1b3Q7dHlwZSZxdW90OzomcXVvdDttZXNzYWdlJnF1b3Q7LCZxdW90O2F0dHJpYnV0ZXMmcXVvdDs6W3smcXVvdDtrZXkmcXVvdDs6JnF1b3Q7YWN0aW9uJnF1b3Q7LCZxdW90O3ZhbHVlJnF1b3Q7OiZxdW90O3JlamVjdF9nYW1lJnF1b3Q7fV19XX1dJwo="}}),e._v(" "),a("p",[e._v("Correct again, because nobody played a move.")])],1),e._v(" "),a("PanelListItem",{attrs:{number:"3"}},[a("p",[e._v("Black plays and rejects:")]),e._v(" "),a("CodeGroup",[a("CodeGroupItem",{attrs:{title:"Local",active:""}},[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBjaGVja2Vyc2QgdHggY2hlY2tlcnMgY3JlYXRlLWdhbWUgJGFsaWNlICRib2IgLS1mcm9tICRhbGljZQokIGNoZWNrZXJzZCB0eCBjaGVja2VycyBwbGF5LW1vdmUgNCAxIDIgMiAzIC0tZnJvbSAkYWxpY2UKJCBjaGVja2Vyc2QgdHggY2hlY2tlcnMgcmVqZWN0LWdhbWUgNCAtLWZyb20gJGFsaWNlCg=="}})],1),e._v(" "),a("CodeGroupItem",{attrs:{title:"Docker"}},[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBkb2NrZXIgZXhlYyAtaXQgY2hlY2tlcnMgY2hlY2tlcnNkIHR4IGNoZWNrZXJzIGNyZWF0ZS1nYW1lICRhbGljZSAkYm9iIC0tZnJvbSAkYWxpY2UKJCBkb2NrZXIgZXhlYyAtaXQgY2hlY2tlcnMgY2hlY2tlcnNkIHR4IGNoZWNrZXJzIHBsYXktbW92ZSA0IDEgMiAyIDMgLS1mcm9tICRhbGljZQokIGRvY2tlciBleGVjIC1pdCBjaGVja2VycyBjaGVja2Vyc2QgdHggY2hlY2tlcnMgcmVqZWN0LWdhbWUgNCAtLWZyb20gJGFsaWNlCg=="}})],1)],1),e._v(" "),a("p",[e._v("Above, Alice creates a game, makes a move, and then rejects the game. This returns:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"txt",base64:"Li4uCnJhd19sb2c6ICdmYWlsZWQgdG8gZXhlY3V0ZSBtZXNzYWdlOyBtZXNzYWdlIGluZGV4OiAwOiBibGFjayBwbGF5ZXIgaGFzIGFscmVhZHkgcGxheWVkJwo="}}),e._v(" "),a("p",[e._v("Correct: the request fails, because Alice has already played a move.")])],1),e._v(" "),a("PanelListItem",{attrs:{number:"4"}},[a("p",[e._v("Alice plays and Bob rejects:")]),e._v(" "),a("CodeGroup",[a("CodeGroupItem",{attrs:{title:"Local",active:""}},[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBjaGVja2Vyc2QgdHggY2hlY2tlcnMgY3JlYXRlLWdhbWUgJGFsaWNlICRib2IgLS1mcm9tICRhbGljZQokIGNoZWNrZXJzZCB0eCBjaGVja2VycyBwbGF5LW1vdmUgNSAxIDIgMiAzIC0tZnJvbSAkYWxpY2UKJCBjaGVja2Vyc2QgdHggY2hlY2tlcnMgcmVqZWN0LWdhbWUgNSAtLWZyb20gJGJvYgo="}})],1),e._v(" "),a("CodeGroupItem",{attrs:{title:"Docker"}},[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBkb2NrZXIgZXhlYyAtaXQgY2hlY2tlcnMgY2hlY2tlcnNkIHR4IGNoZWNrZXJzIGNyZWF0ZS1nYW1lICRhbGljZSAkYm9iIC0tZnJvbSAkYWxpY2UKJCBkb2NrZXIgZXhlYyAtaXQgY2hlY2tlcnMgY2hlY2tlcnNkIHR4IGNoZWNrZXJzIHBsYXktbW92ZSA1IDEgMiAyIDMgLS1mcm9tICRhbGljZQokIGRvY2tlciBleGVjIC1pdCBjaGVja2VycyBjaGVja2Vyc2QgdHggY2hlY2tlcnMgcmVqZWN0LWdhbWUgNSAtLWZyb20gJGJvYgo="}})],1)],1),e._v(" "),a("p",[e._v("Above, Alice creates a game, makes a move, and Bob rejects the game. This returns:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"txt",base64:"Li4uCnJhd19sb2c6ICdbeyZxdW90O2V2ZW50cyZxdW90OzpbeyZxdW90O3R5cGUmcXVvdDs6JnF1b3Q7Z2FtZS1yZWplY3RlZCZxdW90OywmcXVvdDthdHRyaWJ1dGVzJnF1b3Q7Olt7JnF1b3Q7a2V5JnF1b3Q7OiZxdW90O2NyZWF0b3ImcXVvdDssJnF1b3Q7dmFsdWUmcXVvdDs6JnF1b3Q7Y29zbW9zMTRnM3F3Nm5razh6Yzc2Mms4N2NnNzd3N3ZkOHhkbmZmbnAydzZ1JnF1b3Q7fSx7JnF1b3Q7a2V5JnF1b3Q7OiZxdW90O2dhbWUtaW5kZXgmcXVvdDssJnF1b3Q7dmFsdWUmcXVvdDs6JnF1b3Q7NSZxdW90O31dfSx7JnF1b3Q7dHlwZSZxdW90OzomcXVvdDttZXNzYWdlJnF1b3Q7LCZxdW90O2F0dHJpYnV0ZXMmcXVvdDs6W3smcXVvdDtrZXkmcXVvdDs6JnF1b3Q7YWN0aW9uJnF1b3Q7LCZxdW90O3ZhbHVlJnF1b3Q7OiZxdW90O3JlamVjdF9nYW1lJnF1b3Q7fV19XX1dJwo="}}),e._v(" "),a("p",[e._v("Correct: Bob has not played a move yet, so he can still reject the game.")])],1),e._v(" "),a("PanelListItem",{attrs:{number:"5",last:!0}},[a("p",[e._v("Alice & Bob play, Bob rejects:")]),e._v(" "),a("CodeGroup",[a("CodeGroupItem",{attrs:{title:"Local",active:""}},[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBjaGVja2Vyc2QgdHggY2hlY2tlcnMgY3JlYXRlLWdhbWUgJGFsaWNlICRib2IgLS1mcm9tICRhbGljZQokIGNoZWNrZXJzZCB0eCBjaGVja2VycyBwbGF5LW1vdmUgNiAxIDIgMiAzIC0tZnJvbSAkYWxpY2UKJCBjaGVja2Vyc2QgdHggY2hlY2tlcnMgcGxheS1tb3ZlIDYgMCA1IDEgNCAtLWZyb20gJGJvYgokIGNoZWNrZXJzZCB0eCBjaGVja2VycyByZWplY3QtZ2FtZSA2IC0tZnJvbSAkYm9iCg=="}})],1),e._v(" "),a("CodeGroupItem",{attrs:{title:"Docker"}},[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBkb2NrZXIgZXhlYyAtaXQgY2hlY2tlcnMgY2hlY2tlcnNkIHR4IGNoZWNrZXJzIGNyZWF0ZS1nYW1lICRhbGljZSAkYm9iIC0tZnJvbSAkYWxpY2UKJCBkb2NrZXIgZXhlYyAtaXQgY2hlY2tlcnMgY2hlY2tlcnNkIHR4IGNoZWNrZXJzIHBsYXktbW92ZSA2IDEgMiAyIDMgLS1mcm9tICRhbGljZQokIGRvY2tlciBleGVjIC1pdCBjaGVja2VycyBjaGVja2Vyc2QgdHggY2hlY2tlcnMgcGxheS1tb3ZlIDYgMCA1IDEgNCAtLWZyb20gJGJvYgokIGRvY2tlciBleGVjIC1pdCBjaGVja2VycyBjaGVja2Vyc2QgdHggY2hlY2tlcnMgcmVqZWN0LWdhbWUgNiAtLWZyb20gJGJvYgo="}})],1)],1),e._v(" "),a("p",[e._v("Above, Alice creates a game and makes a move, then Bob makes a poor move and rejects the game. This returns:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"txt",base64:"Li4uCnJhd19sb2c6ICdmYWlsZWQgdG8gZXhlY3V0ZSBtZXNzYWdlOyBtZXNzYWdlIGluZGV4OiAwOiByZWQgcGxheWVyIGhhcyBhbHJlYWR5IHBsYXllZCcK"}}),e._v(" "),a("p",[e._v("Correct: this time Bob could not reject the game because the state recorded his move in "),a("code",[e._v(".MoveCount")]),e._v(".")])],1)],1),e._v(" "),a("hr"),e._v(" "),a("HighlightBox",{attrs:{type:"warning"}},[a("p",[e._v("To belabor the point made in the earlier box: if you change your code, think about what it means for the current state of the chain and whether you end up in a broken state.\n"),a("br"),a("br"),e._v("\nIn this case, you could first introduce the "),a("code",[e._v("MoveCount")]),e._v(" and its handling. Then when all games have been correctly counted, you introduce the rejection mechanism.")])]),e._v(" "),a("HighlightBox",{attrs:{type:"synopsis"}},[a("p",[e._v("To summarize, this section has explored:")]),e._v(" "),a("ul",[a("li",[e._v("How to use messages and handlers to build on the gameplay functionalities of your application by adding the capacity for players to reject participating in a game.")]),e._v(" "),a("li",[e._v("How to create a new "),a("code",[e._v("RejectGame")]),e._v(" message object including ID of the game to be rejected.")]),e._v(" "),a("li",[e._v("How to add a new rule with the necessary additional information to prevent players from backing out of games in which they have already played moves, and how to declare new errors that respond to attempts to break this new rule.")]),e._v(" "),a("li",[e._v("How to add a unit test to check that games can be rejected by the game creator, the black player, and the red player under the approved circumstances, and to check that rejected games are removed and that events are emitted.")]),e._v(" "),a("li",[e._v('How to interact via the CLI to confirm the new "game rejection" function is performing as required, and to be aware that preexisting games will permit incorrect game rejection due to your blockchain being in a broken state due to your subsequent changes.')])])])],1)}),[],!1,null,null,null);t.default=c.exports}}]);