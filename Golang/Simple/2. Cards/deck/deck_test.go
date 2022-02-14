package deck

import (
	"os"
	"testing"
)

func TestGenDeck(t *testing.T) {
	d := GenDeck()

	if len(d) != 36 {
		t.Errorf("Length of deck is not 36. %d", len(d))
	}

	if d[0] != "Ace, of Spades" {
		t.Errorf("Expected 'Ace, of Spades', got %s", d[0])
	}
}

func TestFileIO(t *testing.T) {
	d := GenDeck()

	d.Save("_testdeck.txt")
	defer os.Remove("_testdeck.txt")

	newDeck := ReadDeck("_testdeck.txt")

	if newDeck[0] != "Ace, of Spades" {
		t.Errorf("New deck did not read properly %s", newDeck)
	}
}
