(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{743:function(e,t,a){"use strict";a.r(t);var g=a(1),o=Object(g.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"let-players-set-a-wager"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#let-players-set-a-wager"}},[e._v("#")]),e._v(" Let Players Set a Wager")]),e._v(" "),a("HighlightBox",{attrs:{type:"prerequisite"}},[a("p",[e._v("Make sure you have everything you need before proceeding:")]),e._v(" "),a("ul",[a("li",[e._v("You understand the concepts of "),a("RouterLink",{attrs:{to:"/academy/2-cosmos-concepts/3-transactions.html"}},[e._v("transactions")]),e._v(", "),a("RouterLink",{attrs:{to:"/academy/2-cosmos-concepts/4-messages.html"}},[e._v("messages")]),e._v(", and "),a("RouterLink",{attrs:{to:"/academy/2-cosmos-concepts/6-protobuf.html"}},[e._v("Protobuf")]),e._v(".")],1),e._v(" "),a("li",[e._v("Go is installed.")]),e._v(" "),a("li",[e._v("You have the checkers blockchain codebase up to game expiry handling. If not, follow the "),a("RouterLink",{attrs:{to:"/hands-on-exercise/2-ignite-cli-adv/4-game-forfeit.html"}},[e._v("previous steps")]),e._v(" or check out "),a("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/tree/forfeit-game",target:"_blank",rel:"noopener noreferrer"}},[e._v("the relevant version"),a("OutboundLink")],1),e._v(".")],1)])]),e._v(" "),a("HighlightBox",{attrs:{type:"learning"}},[a("p",[e._v("In this section, you will:")]),e._v(" "),a("ul",[a("li",[e._v("Add wager information (only).")]),e._v(" "),a("li",[e._v("Update unit tests.")])])]),e._v(" "),a("p",[e._v("With the introduction of game expiry in the "),a("RouterLink",{attrs:{to:"/hands-on-exercise/2-ignite-cli-adv/4-game-forfeit.html"}},[e._v("previous section")]),e._v(" and other features, you have now addressed the cases when two players start a game and finish it, or let it expire.")],1),e._v(" "),a("p",[e._v("In this section, you will go one step closer to adding an extra layer to a game, with wagers or stakes. Your application already includes all the necessary modules.")]),e._v(" "),a("p",[e._v("Players choose to wager "),a("em",[e._v("money")]),e._v(" or not, and the winner gets both wagers. The forfeiter loses their wager. To reduce complexity, start by letting players wager in the staking token of your application.")]),e._v(" "),a("p",[e._v("Now that no games can be left stranded, it is possible for players to safely wager on their games. How could this be implemented?")]),e._v(" "),a("h2",{attrs:{id:"some-initial-thoughts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#some-initial-thoughts"}},[e._v("#")]),e._v(" Some initial thoughts")]),e._v(" "),a("p",[e._v("When thinking about implementing a wager on games, ask:")]),e._v(" "),a("ul",[a("li",[e._v("What form will a wager take?")]),e._v(" "),a("li",[e._v("Who decides on the amount of wagers?")]),e._v(" "),a("li",[e._v("Where is a wager recorded?")]),e._v(" "),a("li",[e._v("At what junctures do you need to handle payments, refunds, and wins?")])]),e._v(" "),a("p",[e._v("This is a lot to go through. Therefore, the work is divided into two sections. In this section, you only add new information, while the "),a("RouterLink",{attrs:{to:"/hands-on-exercise/2-ignite-cli-adv/5-payment-winning.html"}},[e._v("next section")]),e._v(" is where the tokens are actually handled.")],1),e._v(" "),a("p",[e._v("Some answers:")]),e._v(" "),a("ul",[a("li",[e._v("Even if only as a start, it makes sense to let the game creator decide on the wager.")]),e._v(" "),a("li",[e._v("It seems reasonable to save this information in the game itself so that wagers can be handled at any point in the lifecycle of the game.")])]),e._v(" "),a("h2",{attrs:{id:"code-needs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#code-needs"}},[e._v("#")]),e._v(" Code needs")]),e._v(" "),a("p",[e._v("When it comes to your code:")]),e._v(" "),a("ul",[a("li",[e._v("What Ignite CLI commands, if any, will assist you?")]),e._v(" "),a("li",[e._v("How do you adjust what Ignite CLI created for you?")]),e._v(" "),a("li",[e._v("Where do you make your changes?")]),e._v(" "),a("li",[e._v("What event should you emit?")]),e._v(" "),a("li",[e._v("How would you unit-test these new elements?")]),e._v(" "),a("li",[e._v("How would you use Ignite CLI to locally run a one-node blockchain and interact with it via the CLI to see what you get?")])]),e._v(" "),a("h2",{attrs:{id:"new-information"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#new-information"}},[e._v("#")]),e._v(" New information")]),e._v(" "),a("p",[e._v("Add this wager value to the "),a("code",[e._v("StoredGame")]),e._v("'s Protobuf definition:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"diff-protobuf",base64:"ICAgIG1lc3NhZ2UgU3RvcmVkR2FtZSB7CiAgICAgICAgLi4uCisgICAgICB1aW50NjQgd2FnZXIgPSAxMTsKICAgIH0K",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/game-wager/proto/checkers/stored_game.proto#L17"}}),e._v(" "),a("p",[e._v("You can let players choose the wager they want by adding a dedicated field in the message to create a game, in "),a("code",[e._v("proto/checkers/tx.proto")]),e._v(":")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"diff-protobuf",base64:"ICAgIG1lc3NhZ2UgTXNnQ3JlYXRlR2FtZSB7CiAgICAgICAgLi4uCisgICAgICB1aW50NjQgd2FnZXIgPSA0OwogICAgfQo=",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/game-wager/proto/checkers/tx.proto#L19"}}),e._v(" "),a("p",[e._v("Have Ignite CLI and Protobuf recompile these two files:")]),e._v(" "),a("CodeGroup",[a("CodeGroupItem",{attrs:{title:"Local",active:""}},[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBpZ25pdGUgZ2VuZXJhdGUgcHJvdG8tZ28K"}})],1),e._v(" "),a("CodeGroupItem",{attrs:{title:"Docker"}},[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBkb2NrZXIgcnVuIC0tcm0gLWl0IFwKICAgIC12ICQocHdkKTovY2hlY2tlcnMgXAogICAgLXcgL2NoZWNrZXJzIFwKICAgIGNoZWNrZXJzX2kgXAogICAgaWduaXRlIGdlbmVyYXRlIHByb3RvLWdvCg=="}})],1)],1),e._v(" "),a("p",[e._v("Now add a helper function to "),a("code",[e._v("StoredGame")]),e._v(" using the Cosmos SDK "),a("code",[e._v("Coin")]),e._v(" in "),a("code",[e._v("full_game.go")]),e._v(":")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAoc3RvcmVkR2FtZSAqU3RvcmVkR2FtZSkgR2V0V2FnZXJDb2luKCkgKHdhZ2VyIHNkay5Db2luKSB7CiAgICByZXR1cm4gc2RrLk5ld0NvaW4oc2RrLkRlZmF1bHRCb25kRGVub20sIHNkay5OZXdJbnQoaW50NjQoc3RvcmVkR2FtZS5XYWdlcikpKQp9Cg==",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/game-wager/x/checkers/types/full_game.go#L68-L70"}}),e._v(" "),a("p",[e._v("This encapsulates information about the wager (where "),a("code",[e._v("sdk.DefaultBondDenom")]),e._v(" is most likely "),a("code",[e._v('"stake"')]),e._v(").")]),e._v(" "),a("h2",{attrs:{id:"saving-the-wager"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#saving-the-wager"}},[e._v("#")]),e._v(" Saving the wager")]),e._v(" "),a("p",[e._v("Time to ensure that the new field is saved in the storage and it is part of the creation event.")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Define a new event key as a constant:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"diff-go",base64:"ICAgIGNvbnN0ICgKICAgICAgICAuLi4KKyAgICAgIEdhbWVDcmVhdGVkRXZlbnRXYWdlciA9ICZxdW90O3dhZ2VyJnF1b3Q7CiAgICApCg==",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/game-wager/x/checkers/types/keys.go#L36"}})],1),e._v(" "),a("li",[a("p",[e._v("Set the actual value in the new "),a("code",[e._v("StoredGame")]),e._v(" as it is instantiated in the create game handler:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"diff-go",base64:"ICAgIHN0b3JlZEdhbWUgOj0gdHlwZXMuU3RvcmVkR2FtZXsKICAgICAgICAuLi4KKyAgICAgIFdhZ2VyOiBtc2cuV2FnZXIsCiAgICB9Cg==",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/game-wager/x/checkers/keeper/msg_server_create_game.go#L33"}})],1),e._v(" "),a("li",[a("p",[e._v("And in the event:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"diff-go",base64:"ICAgIGN0eC5FdmVudE1hbmFnZXIoKS5FbWl0RXZlbnQoCiAgICAgICAgc2RrLk5ld0V2ZW50KHNkay5FdmVudFR5cGVNZXNzYWdlLAogICAgICAgICAgICAuLi4KKyAgICAgICAgICBzZGsuTmV3QXR0cmlidXRlKHR5cGVzLkdhbWVDcmVhdGVkRXZlbnRXYWdlciwgc3RyY29udi5Gb3JtYXRVaW50KG1zZy5XYWdlciwgMTApKSwKICAgICAgICApCiAgICApCg==",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/game-wager/x/checkers/keeper/msg_server_create_game.go#L52"}})],1),e._v(" "),a("li",[a("p",[e._v("Modify the constructor among the interface definition of "),a("code",[e._v("MsgCreateGame")]),e._v(" in "),a("code",[e._v("x/checkers/types/message_create_game.go")]),e._v(" to avoid surprises:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"diff-go",base64:"LSAgZnVuYyBOZXdNc2dDcmVhdGVHYW1lKGNyZWF0b3Igc3RyaW5nLCByZWQgc3RyaW5nLCBibGFjayBzdHJpbmcpICpNc2dDcmVhdGVHYW1lIHsKKyAgZnVuYyBOZXdNc2dDcmVhdGVHYW1lKGNyZWF0b3Igc3RyaW5nLCByZWQgc3RyaW5nLCBibGFjayBzdHJpbmcsIHdhZ2VyIHVpbnQ2NCkgKk1zZ0NyZWF0ZUdhbWUgewogICAgICAgIHJldHVybiAmYW1wO01zZ0NyZWF0ZUdhbWV7CiAgICAgICAgICAgIC4uLgorICAgICAgICAgIFdhZ2VyOiB3YWdlciwKICAgICAgICB9CiAgICB9Cg==",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/game-wager/x/checkers/types/message_create_game.go#L17"}})],1),e._v(" "),a("li",[a("p",[e._v("Adjust the CLI client accordingly:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"diff-go",base64:"ICAgIGZ1bmMgQ21kQ3JlYXRlR2FtZSgpICpjb2JyYS5Db21tYW5kIHsKICAgICAgICBjbWQgOj0gJmFtcDtjb2JyYS5Db21tYW5kewotICAgICAgICAgIFVzZTogICAmcXVvdDtjcmVhdGUtZ2FtZSBbYmxhY2tdIFtyZWRdJnF1b3Q7LAorICAgICAgICAgIFVzZTogICAmcXVvdDtjcmVhdGUtZ2FtZSBbYmxhY2tdIFtyZWRdIFt3YWdlcl0mcXVvdDssCiAgICAgICAgICAgIFNob3J0OiAmcXVvdDtCcm9hZGNhc3QgbWVzc2FnZSBjcmVhdGVHYW1lJnF1b3Q7LAotICAgICAgICAgIEFyZ3M6ICBjb2JyYS5FeGFjdEFyZ3MoMiksCisgICAgICAgICAgQXJnczogIGNvYnJhLkV4YWN0QXJncygzKSwKICAgICAgICAgICAgUnVuRTogZnVuYyhjbWQgKmNvYnJhLkNvbW1hbmQsIGFyZ3MgW11zdHJpbmcpIChlcnIgZXJyb3IpIHsKICAgICAgICAgICAgICAgIGFyZ0JsYWNrIDo9IGFyZ3NbMF0KICAgICAgICAgICAgICAgIGFyZ1JlZCA6PSBhcmdzWzFdCisgICAgICAgICAgICAgIGFyZ1dhZ2VyLCBlcnIgOj0gc3RyY29udi5QYXJzZVVpbnQoYXJnc1syXSwgMTAsIDY0KQorICAgICAgICAgICAgICBpZiBlcnIgIT0gbmlsIHsKKyAgICAgICAgICAgICAgICAgIHJldHVybiBlcnIKKyAgICAgICAgICAgICAgfQoKICAgICAgICAgICAgICAgIGNsaWVudEN0eCwgZXJyIDo9IGNsaWVudC5HZXRDbGllbnRUeENvbnRleHQoY21kKQogICAgICAgICAgICAgICAgaWYgZXJyICE9IG5pbCB7CiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVycgogICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgbXNnIDo9IHR5cGVzLk5ld01zZ0NyZWF0ZUdhbWUoCiAgICAgICAgICAgICAgICAgICAgY2xpZW50Q3R4LkdldEZyb21BZGRyZXNzKCkuU3RyaW5nKCksCiAgICAgICAgICAgICAgICAgICAgYXJnQmxhY2ssCiAgICAgICAgICAgICAgICAgICAgYXJnUmVkLAorICAgICAgICAgICAgICAgICAgYXJnV2FnZXIsCiAgICAgICAgICAgICAgICApCiAgICAgICAgICAgICAgICBpZiBlcnIgOj0gbXNnLlZhbGlkYXRlQmFzaWMoKTsgZXJyICE9IG5pbCB7CiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVycgogICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgcmV0dXJuIHR4LkdlbmVyYXRlT3JCcm9hZGNhc3RUeENMSShjbGllbnRDdHgsIGNtZC5GbGFncygpLCBtc2cpCiAgICAgICAgICAgIH0sCiAgICAgICAgfQogICAgICAgIGZsYWdzLkFkZFR4RmxhZ3NUb0NtZChjbWQpCiAgICAgICAgcmV0dXJuIGNtZAogICAgfQo=",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/game-wager/x/checkers/client/cli/tx_create_game.go#L17-L37"}})],1)]),e._v(" "),a("p",[e._v("That is it. Adding "),a("em",[e._v("just a field")]),e._v(" is quick.")]),e._v(" "),a("h2",{attrs:{id:"unit-tests"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#unit-tests"}},[e._v("#")]),e._v(" Unit tests")]),e._v(" "),a("p",[e._v("Some of your unit tests no longer pass because of this new field. Ajust accordingly.")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("When creating a game:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"diff-go",base64:"ICAgIGNyZWF0ZVJlc3BvbnNlLCBlcnIgOj0gbXNnU2VydmVyLkNyZWF0ZUdhbWUoY29udGV4dCwgJmFtcDt0eXBlcy5Nc2dDcmVhdGVHYW1lewogICAgICAgIC4uLgorICAgICAgV2FnZXI6IDQ1LAogICAgfSkK",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/game-wager/x/checkers/keeper/msg_server_create_game_test.go#L27"}})],1),e._v(" "),a("li",[a("p",[e._v("When checking that it was saved correctly:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"diff-go",base64:"ICAgIHJlcXVpcmUuRXF1YWxWYWx1ZXModCwgdHlwZXMuU3RvcmVkR2FtZXsKICAgICAgICAuLi4KKyAgICAgIFdhZ2VyOiA0NSwKICAgIH0sIGdhbWUxKQo=",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/game-wager/x/checkers/keeper/msg_server_create_game_test.go#L64"}})],1),e._v(" "),a("li",[a("p",[e._v("When checking that the event was emitted correctly:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"diff-go",base64:"ICAgIHJlcXVpcmUuRXF1YWxWYWx1ZXModCwgc2RrLlN0cmluZ0V2ZW50ewogICAgICAgIFR5cGU6ICZxdW90O25ldy1nYW1lLWNyZWF0ZWQmcXVvdDssCiAgICAgICAgQXR0cmlidXRlczogW11zZGsuQXR0cmlidXRlewogICAgICAgICAgICAuLi4KKyAgICAgICAgICB7S2V5OiAmcXVvdDt3YWdlciZxdW90OywgVmFsdWU6ICZxdW90OzQ1JnF1b3Q7fSwKICAgICAgICB9LAogICAgfSwgZXZlbnQpCg==",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/game-wager/x/checkers/keeper/msg_server_create_game_test.go#L114"}})],1)]),e._v(" "),a("p",[e._v("Go ahead and make the rest of the changes as necessary.")]),e._v(" "),a("h2",{attrs:{id:"interact-via-the-cli"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#interact-via-the-cli"}},[e._v("#")]),e._v(" Interact via the CLI")]),e._v(" "),a("p",[e._v("With the tests done, see what happens at the command line. All there is to check at this stage is that the wager field appears where expected.")]),e._v(" "),a("p",[e._v("After restarting the Ignite CLI, how much do Alice and Bob have to start with?")]),e._v(" "),a("CodeGroup",[a("CodeGroupItem",{attrs:{title:"Local",active:""}},[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBjaGVja2Vyc2QgcXVlcnkgYmFuayBiYWxhbmNlcyAkYWxpY2UKJCBjaGVja2Vyc2QgcXVlcnkgYmFuayBiYWxhbmNlcyAkYm9iCg=="}})],1),e._v(" "),a("CodeGroupItem",{attrs:{title:"Docker"}},[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBkb2NrZXIgZXhlYyAtaXQgY2hlY2tlcnMgXAogICAgY2hlY2tlcnNkIHF1ZXJ5IGJhbmsgYmFsYW5jZXMgJGFsaWNlCiQgZG9ja2VyIGV4ZWMgLWl0IGNoZWNrZXJzIFwKICAgIGNoZWNrZXJzZCBxdWVyeSBiYW5rIGJhbGFuY2VzICRib2IK"}})],1)],1),e._v(" "),a("p",[e._v("This prints:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"txt",base64:"YmFsYW5jZXM6Ci0gYW1vdW50OiAmcXVvdDsxMDAwMDAwMDAmcXVvdDsKICBkZW5vbTogc3Rha2UKLSBhbW91bnQ6ICZxdW90OzIwMDAwJnF1b3Q7CiAgZGVub206IHRva2VuCiAgcGFnaW5hdGlvbjoKICBuZXh0X2tleTogbnVsbAogIHRvdGFsOiAmcXVvdDswJnF1b3Q7CmJhbGFuY2VzOgotIGFtb3VudDogJnF1b3Q7MTAwMDAwMDAwJnF1b3Q7CiAgZGVub206IHN0YWtlCi0gYW1vdW50OiAmcXVvdDsxMDAwMCZxdW90OwogIGRlbm9tOiB0b2tlbgogIHBhZ2luYXRpb246CiAgbmV4dF9rZXk6IG51bGwKICB0b3RhbDogJnF1b3Q7MCZxdW90Owo="}}),e._v(" "),a("p",[e._v("Create a game with a wager:")]),e._v(" "),a("CodeGroup",[a("CodeGroupItem",{attrs:{title:"Local",active:""}},[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBjaGVja2Vyc2QgdHggY2hlY2tlcnMgY3JlYXRlLWdhbWUgJGFsaWNlICRib2IgMTAwMDAwMCAtLWZyb20gJGFsaWNlCg=="}})],1),e._v(" "),a("CodeGroupItem",{attrs:{title:"Docker"}},[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBkb2NrZXIgZXhlYyAtaXQgY2hlY2tlcnMgXAogICAgY2hlY2tlcnNkIHR4IGNoZWNrZXJzIGNyZWF0ZS1nYW1lICRhbGljZSAkYm9iIDEwMDAwMDAgLS1mcm9tICRhbGljZQo="}})],1)],1),e._v(" "),a("p",[e._v("Which mentions the wager:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"txt",base64:"Li4uCnJhd19sb2c6ICdbeyZxdW90O2V2ZW50cyZxdW90OzpbeyZxdW90O3R5cGUmcXVvdDs6JnF1b3Q7bWVzc2FnZSZxdW90OywmcXVvdDthdHRyaWJ1dGVzJnF1b3Q7Olt7JnF1b3Q7a2V5JnF1b3Q7OiZxdW90O2FjdGlvbiZxdW90OywmcXVvdDt2YWx1ZSZxdW90OzomcXVvdDtjcmVhdGVfZ2FtZSZxdW90O31dfSx7JnF1b3Q7dHlwZSZxdW90OzomcXVvdDtuZXctZ2FtZS1jcmVhdGVkJnF1b3Q7LCZxdW90O2F0dHJpYnV0ZXMmcXVvdDs6W3smcXVvdDtrZXkmcXVvdDs6JnF1b3Q7Y3JlYXRvciZxdW90OywmcXVvdDt2YWx1ZSZxdW90OzomcXVvdDtjb3Ntb3MxeXlzeTg4OWp6ZjRrZ2Q4NG1mNjY0OWd0NjAyNHg2dXB6czZwZGUmcXVvdDt9LHsmcXVvdDtrZXkmcXVvdDs6JnF1b3Q7Z2FtZS1pbmRleCZxdW90OywmcXVvdDt2YWx1ZSZxdW90OzomcXVvdDsxJnF1b3Q7fSx7JnF1b3Q7a2V5JnF1b3Q7OiZxdW90O2JsYWNrJnF1b3Q7LCZxdW90O3ZhbHVlJnF1b3Q7OiZxdW90O2Nvc21vczF5eXN5ODg5anpmNGtnZDg0bWY2NjQ5Z3Q2MDI0eDZ1cHpzNnBkZSZxdW90O30seyZxdW90O2tleSZxdW90OzomcXVvdDtyZWQmcXVvdDssJnF1b3Q7dmFsdWUmcXVvdDs6JnF1b3Q7Y29zbW9zMWt0Z3o1N3VkeWs0c3Bya3BtNW02em51aHNtOTA0bDBlZW44azZ5JnF1b3Q7fSx7JnF1b3Q7a2V5JnF1b3Q7OiZxdW90O3dhZ2VyJnF1b3Q7LCZxdW90O3ZhbHVlJnF1b3Q7OiZxdW90OzEwMDAwMDAmcXVvdDt9XX1dfV0nCg=="}}),e._v(" "),a("p",[e._v("Confirm that the balances of both Alice and Bob are unchanged, as expected.")]),e._v(" "),a("p",[e._v("Was the game stored correctly?")]),e._v(" "),a("CodeGroup",[a("CodeGroupItem",{attrs:{title:"Local",active:""}},[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBjaGVja2Vyc2QgcXVlcnkgY2hlY2tlcnMgc2hvdy1zdG9yZWQtZ2FtZSAxCg=="}})],1),e._v(" "),a("CodeGroupItem",{attrs:{title:"Docker"}},[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBkb2NrZXIgZXhlYyAtaXQgY2hlY2tlcnMgXAogICAgY2hlY2tlcnNkIHF1ZXJ5IGNoZWNrZXJzIHNob3ctc3RvcmVkLWdhbWUgMQo="}})],1)],1),e._v(" "),a("p",[e._v("This returns:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"txt",base64:"c3RvcmVkR2FtZToKICAuLi4KICB3YWdlcjogJnF1b3Q7MTAwMDAwMCZxdW90Owo="}}),e._v(" "),a("p",[e._v("This confirms what you expected with regards to the command-line interactions.")]),e._v(" "),a("HighlightBox",{attrs:{type:"synopsis"}},[a("p",[e._v("To summarize, this section has explored:")]),e._v(" "),a("ul",[a("li",[e._v('How to add the new "wager" value, modify the "create a game" message to allow players to choose the wager they want to make, and add a helper function.')]),e._v(" "),a("li",[e._v("How to save the wager and adjust an event, modifying the create game handler.")]),e._v(" "),a("li",[e._v("How to minimally adjust unit tests.")]),e._v(" "),a("li",[e._v("How to interact via the CLI to check that wager values are being recorded.")])])])],1)}),[],!1,null,null,null);t.default=o.exports}}]);