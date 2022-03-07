package main

import (
	"fmt"
)

type bot interface {
	getGreeting() string
}

type engbot struct{}

func (engbot) getGreeting() string {
	return "Hello"
}

func printGreeting(b bot) {
	fmt.Println(b.getGreeting())
}

func main() {
	e := engbot{}

	fmt.Println(e.getGreeting())
	printGreeting(e)
}
