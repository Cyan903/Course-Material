package main

import (
	"fmt"
	"os"
	"strings"
)

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

func readDeck(filename string) deck {
	data, err := os.ReadFile(filename)
	if err != nil {
		fmt.Println("Error reading deck.")
		return deck{}
	}

	return strings.Split(string(data), "\n")
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

func (d deck) toString() string {
	return strings.Join(d[:], "\n")
}

func (d deck) save(filename string) {
	strDeck := d.toString()
	deckByte := []byte(strDeck)

	err := os.WriteFile(filename, deckByte, 0666)
	if err != nil {
		fmt.Println("Error saving deck.")
	}
}
