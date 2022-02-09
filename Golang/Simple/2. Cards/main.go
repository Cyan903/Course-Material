package main

import "fmt"

func main() {
	cards := genDeck()
	hand, remaining := cards.DealHand(9)

	hand.Print()
	remaining.Print()
	fmt.Println(string([]byte{65, 97}))
}
