package main

import (
	"fmt"

	"example.com/test/deck"
)

func main() {
	cards := deck.GenDeck()
	hand, _ := cards.DealHand(9)
	testDeck := deck.Deck{"a", "b"}


	cards.Save("tmp/card.txt")
	cards.Shuffle()
	cards.Save("tmp/card_shuffled.txt")

	hand.Save("tmp/hand.txt")

	fmt.Println("Reading card values")
	deck.ReadDeck("tmp/card.txt").Print()

	fmt.Println("\n\n", testDeck)
}
