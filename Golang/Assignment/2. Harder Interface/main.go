package main

import (
	"io"
	"os"
)


func main() {
	if len(os.Args) < 2 {
		panic("file not supplied!")
	}

	txt := os.Args[1]
	op, err := os.Open(txt)

	if err != nil {
		panic("could not open file!")
	}

	io.Copy(os.Stdout, op)
}
