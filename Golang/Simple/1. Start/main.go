package main

import "fmt"

func main() {
	cards := []string{"1", "a", "b"}
	cards = append(cards, "c")

	for i, j := range cards {
		fmt.Println(i, j)
	}
}
