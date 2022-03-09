package main

import (
	"fmt"
	"io"
	"os"

	"reader.test/reader"
)

func read_normal(txt string) {
	op, err := os.Open(txt)

	if err != nil {
		panic("could not open file!")
	}

	io.Copy(os.Stdout, op)
}

func read_custom(txt string) {
	op := reader.Reader{File: txt}

	io.Copy(os.Stdout, op)
}

func main() {
	if len(os.Args) < 2 {
		panic("file not supplied!")
	}

	txt := os.Args[1]

	read_custom(txt)
	fmt.Println("\n----\n")
	read_normal(txt)
}
