package main

import (
	"fmt"

	"example.com/test/deck"
)

func main() {
	cards := deck.GenDeck()
	hand, remaining := cards.DealHand(9)
	testDeck := deck.Deck{"a", "b"}

	hand.Print()
	remaining.Print()
	fmt.Println(string([]byte{65, 97}))
	fmt.Println(hand.ToString())

	cards.Save("tmp/card.txt")
	cards.Shuffle()
	cards.Save("tmp/card_shuffled.txt")

	hand.Save("tmp/hand.txt")

	fmt.Println("Reading card values")
	deck.ReadDeck("tmp/card.txt").Print()

	fmt.Println("\n\n", testDeck)
}
