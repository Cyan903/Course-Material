package deck

import (
	"fmt"
	"math/rand"
	"os"
	"strings"
	"time"
)

type Deck []string

func GenDeck() Deck {
	suits := [4]string{"Spades", "Diamonds", "Hearts", "Clubs"}
	vals := [9]string{"Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"}
	res := Deck{}

	for _, suit := range suits {
		for _, val := range vals {
			res = append(res, fmt.Sprintf("%s, of %s", val, suit))
		}
	}

	return res
}

func ReadDeck(filename string) Deck {
	data, err := os.ReadFile(filename)
	if err != nil {
		fmt.Println("Error reading deck.")
		return Deck{}
	}

	return strings.Split(string(data), "\n")
}

func (d Deck) Print() {
	fmt.Println("Printing deck...")
	for i, j := range d {
		fmt.Printf("Index: %d, Card: %s\n", i, j)
	}
}

func (d Deck) DealHand(hand int) (Deck, Deck) {
	return d[:hand], d[hand:]
}

func (d Deck) ToString() string {
	return strings.Join(d[:], "\n")
}

func (d Deck) Save(filename string) {
	strDeck := d.ToString()
	deckByte := []byte(strDeck)

	err := os.WriteFile(filename, deckByte, 0666)
	if err != nil {
		fmt.Println("Error saving deck: ", err)
		os.Exit(1)
	}
}

func (d Deck) Shuffle() {
	rand.Seed(time.Now().UnixNano())
	rand.Shuffle(len(d), func(i, j int) {
		d[i], d[j] = d[j], d[i]
	})
}

func (d Deck) Shuffle_old() {
	rand.Seed(time.Now().UnixNano())
	
	for i := range d {
		j := rand.Intn(len(d)-1)
		d[i], d[j] = d[j], d[i]
	}
}
