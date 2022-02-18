package main

import "fmt"

type color map[string]string

func (c color) print() {
	for key, value := range c {
		fmt.Println(key, value)
	}

	fmt.Print("\n")
}

func (c color) delete(index string) {
	delete(c, index)
}

func (c color) add(name, value string) {
	c[name] = value
}

func main() {
	colors := color{
		"red":   "#FF0000",
		"blue":  "#00FF00",
		"green": "#0000FF",
	}

	colors.print()
	colors.add("yellow", "#FFFF00")
	colors.delete("red")
	colors.print()
}
