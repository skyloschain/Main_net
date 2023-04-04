(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{740:function(e,t,a){"use strict";a.r(t);var o=a(1),s=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"keep-track-of-how-many-moves-have-been-played"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keep-track-of-how-many-moves-have-been-played"}},[e._v("#")]),e._v(" Keep Track Of How Many Moves Have Been Played")]),e._v(" "),a("HighlightBox",{attrs:{type:"prerequisite"}},[a("p",[e._v("Make sure you have everything you need before proceeding:")]),e._v(" "),a("ul",[a("li",[e._v("You understand the concepts of "),a("RouterLink",{attrs:{to:"/academy/2-cosmos-concepts/6-protobuf.html"}},[e._v("Protobuf")]),e._v(".")],1),e._v(" "),a("li",[e._v("Go is installed.")]),e._v(" "),a("li",[e._v("You have the checkers blockchain codebase with the game deadline. If not, follow the "),a("RouterLink",{attrs:{to:"/hands-on-exercise/2-ignite-cli-adv/1-game-deadline.html"}},[e._v("previous steps")]),e._v(" or check out the "),a("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/tree/game-deadline",target:"_blank",rel:"noopener noreferrer"}},[e._v("relevant version"),a("OutboundLink")],1),e._v(".")],1)])]),e._v(" "),a("HighlightBox",{attrs:{type:"learning"}},[a("p",[e._v("In this section, you will:")]),e._v(" "),a("ul",[a("li",[e._v("Implement a count of game moves.")]),e._v(" "),a("li",[e._v("Extend your unit tests.")])])]),e._v(" "),a("p",[e._v("Previously, you added "),a("RouterLink",{attrs:{to:"/hands-on-exercise/1-ignite-cli/8-game-winner.html"}},[e._v("a winner")]),e._v(" and "),a("RouterLink",{attrs:{to:"/hands-on-exercise/2-ignite-cli-adv/1-game-deadline.html"}},[e._v("a deadline")]),e._v(" to games, with a view to implementing a forfeit mechanism for games that have become stale.")],1),e._v(" "),a("h2",{attrs:{id:"some-initial-thoughts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#some-initial-thoughts"}},[e._v("#")]),e._v(" Some initial thoughts")]),e._v(" "),a("p",[e._v("When the forfeit is implemented, it would be interesting to be able to differentiate games that have never been played on from games that have.")]),e._v(" "),a("p",[e._v("To be specific:")]),e._v(" "),a("ol",[a("li",[e._v("If no moves are ever played, there is no point in recording a winner and a forfeiter. There is no point in keeping a track of the game.")]),e._v(" "),a("li",[e._v("If the black player moved once but the red player never showed up, it is the same situation. After all, a malicious player could create many games that go stale just to tarnish the reputation of another player.")]),e._v(" "),a("li",[e._v("If both players have played at least once, then this can be considered a proper game, where a forfeit is one of the legitimate outcomes.")])]),e._v(" "),a("h2",{attrs:{id:"new-information"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#new-information"}},[e._v("#")]),e._v(" New information")]),e._v(" "),a("p",[e._v("To achieve this, the easiest way is to add a new "),a("code",[e._v("MoveCount")]),e._v(" to the "),a("code",[e._v("StoredGame")]),e._v(". In "),a("code",[e._v("proto/checkers/stored_game.proto")]),e._v(":")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"diff-protobuf",base64:"ICAgIG1lc3NhZ2UgU3RvcmVkR2FtZSB7CiAgICAgICAgLi4uCisgICAgICB1aW50NjQgbW92ZUNvdW50ID0gODsKICAgIH0K",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/reject-game-handler/proto/checkers/stored_game.proto#L14"}}),e._v(" "),a("p",[e._v("Run Protobuf to recompile the relevant Go files:")]),e._v(" "),a("CodeGroup",[a("CodeGroupItem",{attrs:{title:"Local",active:""}},[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBpZ25pdGUgZ2VuZXJhdGUgcHJvdG8tZ28K"}})],1),e._v(" "),a("CodeGroupItem",{attrs:{title:"Docker"}},[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBkb2NrZXIgcnVuIC0tcm0gLWl0IFwKICAgIC12ICQocHdkKTovY2hlY2tlcnMgXAogICAgLXcgL2NoZWNrZXJzIFwKICAgIGNoZWNrZXJzX2kgXAogICAgaWduaXRlIGdlbmVyYXRlIHByb3RvLWdvCg=="}})],1)],1),e._v(" "),a("p",[a("code",[e._v("MoveCount")]),e._v(" should start at "),a("code",[e._v("0")]),e._v(" and increment by "),a("code",[e._v("1")]),e._v(" on each move.")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Adjust it first in the handler when creating the game:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"diff-go",base64:"ICAgIHN0b3JlZEdhbWUgOj0gdHlwZXMuU3RvcmVkR2FtZXsKICAgICAgICAuLi4KKyAgICAgIE1vdmVDb3VudDogMCwKICAgIH0K",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/reject-game-handler/x/checkers/keeper/msg_server_create_game.go#L30"}})],1),e._v(" "),a("li",[a("p",[e._v("Before saving to the storage, adjust it in the handler when playing a move:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"diff-go",base64:"ICAgIC4uLgogICAgc3RvcmVkR2FtZS5EZWFkbGluZSA9IHR5cGVzLkZvcm1hdERlYWRsaW5lKHR5cGVzLkdldE5leHREZWFkbGluZShjdHgpKQorICBzdG9yZWRHYW1lLk1vdmVDb3VudCsrCiAgICBzdG9yZWRHYW1lLlR1cm4gPSBydWxlcy5QaWVjZVN0cmluZ3NbZ2FtZS5UdXJuXQogICAgLi4uCg==",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/reject-game-handler/x/checkers/keeper/msg_server_play_move.go#L71"}})],1)]),e._v(" "),a("HighlightBox",{attrs:{type:"note"}},[a("p",[e._v("This value is not emitted in events, because (as it stands) it will be only used internally for checks.")])]),e._v(" "),a("h2",{attrs:{id:"unit-tests"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#unit-tests"}},[e._v("#")]),e._v(" Unit tests")]),e._v(" "),a("p",[e._v("You have to fix the existing tests by adding "),a("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/blob/reject-game-handler/x/checkers/keeper/msg_server_create_game_test.go#L57",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("MoveCount: 0")]),a("OutboundLink")],1),e._v(" ("),a("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/blob/reject-game-handler/x/checkers/keeper/msg_server_play_move_winner_test.go#L34",target:"_blank",rel:"noopener noreferrer"}},[e._v("or more"),a("OutboundLink")],1),e._v(") when testing a retrieved "),a("code",[e._v("StoredGame")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"interact-via-the-cli"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#interact-via-the-cli"}},[e._v("#")]),e._v(" Interact via the CLI")]),e._v(" "),a("p",[e._v("There is not much to test here. Remember that you added a new field, but if your blockchain state already contains games then they are missing that field, so the default value of the underlying type will be applied:")]),e._v(" "),a("CodeGroup",[a("CodeGroupItem",{attrs:{title:"Local",active:""}},[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBjaGVja2Vyc2QgcXVlcnkgY2hlY2tlcnMgc2hvdy1zdG9yZWQtZ2FtZSAxCg=="}})],1),e._v(" "),a("CodeGroupItem",{attrs:{title:"Docker"}},[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBkb2NrZXIgZXhlYyAtaXQgY2hlY2tlcnMgXAogICAgY2hlY2tlcnNkIHF1ZXJ5IGNoZWNrZXJzIHNob3ctc3RvcmVkLWdhbWUgMQo="}})],1)],1),e._v(" "),a("p",[e._v("Although this game was already played on, the default "),a("code",[e._v("uint")]),e._v(" value is applied:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"diff-txt",base64:"ICAgIC4uLgorICBtb3ZlQ291bnQ6IDAKICAgIC4uLgo="}}),e._v(" "),a("p",[e._v("In effect, your blockchain state is broken. Eventually examine the "),a("RouterLink",{attrs:{to:"/hands-on-exercise/4-run-in-prod/2-migration.html"}},[e._v("section on migrations")]),e._v(" to see how to update your blockchain state to avoid such a breaking change.")],1),e._v(" "),a("p",[e._v("Restart your chain with "),a("code",[e._v("--reset-once")]),e._v(", create a new game, then:")]),e._v(" "),a("CodeGroup",[a("CodeGroupItem",{attrs:{title:"Local",active:""}},[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBjaGVja2Vyc2QgdHggY2hlY2tlcnMgcGxheS1tb3ZlIDEgMSAyIDIgMyAtLWZyb20gJGFsaWNlCiQgY2hlY2tlcnNkIHF1ZXJ5IGNoZWNrZXJzIHNob3ctc3RvcmVkLWdhbWUgMQo="}})],1),e._v(" "),a("CodeGroupItem",{attrs:{title:"Docker"}},[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBkb2NrZXIgZXhlYyAtaXQgY2hlY2tlcnMgXAogICAgY2hlY2tlcnNkIHR4IGNoZWNrZXJzIHBsYXktbW92ZSAxIDEgMiAyIDMgLS1mcm9tICRhbGljZQokIGRvY2tlciBleGVjIC1pdCBjaGVja2VycyBcCiAgICBjaGVja2Vyc2QgcXVlcnkgY2hlY2tlcnMgc2hvdy1zdG9yZWQtZ2FtZSAxCg=="}})],1)],1),e._v(" "),a("p",[e._v("This contains:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"diff-txt",base64:"ICAgIC4uLgorICBtb3ZlQ291bnQ6IDEKICAgIC4uLgo="}}),e._v(" "),a("HighlightBox",{attrs:{type:"synopsis"}},[a("p",[e._v("To summarize, this section has explored:")]),e._v(" "),a("ul",[a("li",[e._v("How to implement a new "),a("code",[e._v("moveCount")]),e._v(" field and increment it on play.")]),e._v(" "),a("li",[e._v("How to test your code to ensure that it functions as desired.")]),e._v(" "),a("li",[e._v("How, if your blockchain contains preexisting games, that the blockchain state is now effectively broken, since the move count field of those games is "),a("code",[e._v("0")]),e._v(" by default (which can be corrected through migration).")])])])],1)}),[],!1,null,null,null);t.default=s.exports}}]);