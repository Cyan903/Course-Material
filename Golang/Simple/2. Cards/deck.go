package main

import "fmt"

type deck []string

func genDeck() deck {
	suits := [4]string{"Spades", "Diamonds", "Hearts", "Clubs"}
	vals := [9]string{"Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"}
	res := deck{}

	for _, suit := range suits {
		for _, val := range vals {
			res = append(res, fmt.Sprintf("%s, of %s", val, suit))
		}
	}

	return res
}

func (d deck) Print() {
	fmt.Println("Printing deck...")
	for i, j := range d {
		fmt.Printf("Index: %d, Card: %s\n", i, j)
	}
}

func (d deck) DealHand(hand int) (deck, deck) {
	return d[:hand], d[hand:]
}
