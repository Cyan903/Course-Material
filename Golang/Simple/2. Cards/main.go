package main

import "fmt"

func main() {
	cards := genDeck()
	hand, remaining := cards.DealHand(9)

	hand.Print()
	remaining.Print()
	fmt.Println(string([]byte{65, 97}))
	fmt.Println(hand.toString())

	cards.save("tmp/card.txt")
	hand.save("tmp/hand.txt")

	fmt.Println("Reading card values")
	readDeck("tmp/card.txt").Print()
}
