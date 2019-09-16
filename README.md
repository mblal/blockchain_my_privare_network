# 1 - To retrieve a block by a given position (Heigh)

Install and launch Postman


Query : http://localhost:8000/block/0
VERB : GET
RESULT :
{
    "hash": "73a332c05ead793c3f07e5268c6f30051eda39b3faf49ac6b9736696c06a6f2a",
    "height": 0,
    "body": "7b2264617461223a2247656e6573697320426c6f636b227d",
    "time": 1568642517134,
    "previousBlockHash": null
}

# 2- Generate message 

Verb : POST
Query : http://localhost:8000/requestValidation

Content : row -> application/json

{
	"address": "n21mdKho1HYz7WUX9ej3ZGeafwLQwzuehz"
}
Result : 

n21mdKho1HYz7WUX9ej3ZGeafwLQwzuehz:1568061757:starRegistry


# 3 - To submit star - Save star in the ledger-

Verb : POST
Query : http://localhost:8000/submitstar

Content : row -> application/json

{
	"address": "n21mdKho1HYz7WUX9ej3ZGeafwLQwzuehz",
	"signature": "H/g/PJ1iHgZ5teYfWmy2bWRQY3KU+mz9mPw7/IN8F5V4ROdU9hiePHg7URK8SPIFx/0F/BEFjetzKmeO/jyYOOg=",
	"message": "n21mdKho1HYz7WUX9ej3ZGeafwLQwzuehz:1568061757:starRegistry",
	"star": {
		"dec": "68 52' 56.8",
		"ra": "16h 29m 1.1s",
		"story": "Testing the story 2"
	}
}

Result : 

{
    "hash": "ba2025f745d6aee46d25c5a25514418920f7b789adabe171034fb3bb582b5a4f",
    "height": 1,
    "body": "7b2264617461223a7b226f776e6572223a226e32316d644b686f3148597a3757555839656a335a47656166774c51777a7565687a222c2273746172223a7b22646563223a223638203532272035362e38222c227261223a223136682032396d20312e3173222c2273746f7279223a2254657374696e67207468652073746f72792032227d7d7d",
    "time": 1568062843055,
    "previousBlockHash": "21bc5480e18ae2134f78e4d55590c5e0ce207ef8d16dc444ae9b88020bacc90d"
}

# 4- To retrieve block by a given hash

Verb : GET
Query : http://localhost:8000/block/hash/5836384fb9115b60ee612d00dfe93b3c7292009cd87385342e0fd8a33f3f43f3

Result : 

{
    "hash": "5836384fb9115b60ee612d00dfe93b3c7292009cd87385342e0fd8a33f3f43f3",
    "height": 2,
    "body": {
        "data": {
            "owner": "n21mdKho1HYz7WUX9ej3ZGeafwLQwzuehz",
            "star": {
                "dec": "69 52' 56.8",
                "ra": "16h 29m 1.1s",
                "story": "Testing the story 2"
            }
        }
    },
    "time": 1567456959948,
    "previousBlockHash": "1ea0eb88731b06feb8f0b58630b14ff6c816378249acaa982e6dc24f4bce9565"
}

# 5- To Get stars by addresses (given owner)

Verb : GET
Query : http://localhost:8000/blocks/n21mdKho1HYz7WUX9ej3ZGeafwLQwzuehz

Result :


[
    {
        "owner": "n21mdKho1HYz7WUX9ej3ZGeafwLQwzuehz",
        "star": {
            "dec": "69 52' 56.8",
            "ra": "16h 29m 1.1s",
            "story": "Testing the story 1"
        }
    }
]

