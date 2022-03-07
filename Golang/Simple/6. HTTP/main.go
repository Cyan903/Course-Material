package main

import (
	"bytes"
	"io"
	"net/http"
	"os"
)

type Readin interface {
	io.Reader
}

type ExtendedReadin struct {
	io.Reader
	string
}

func PrintB(c Readin) {
	io.Copy(os.Stdout, c)
}

func (i ExtendedReadin) Println() {
	PrintB(i)
}

func main() {
	res, _ := http.Get("https://google.ca/")
	defer res.Body.Close()

	bs := []byte{65, 10, 65, 10}
	ext := ExtendedReadin{res.Body, "E"}

	// io.Copy(os.Stdout, res.Body)
	// io.Copy(os.Stderr, bytes.NewReader(bs))

	
	PrintB(ext)
	ext.Println()
	
	PrintB(bytes.NewReader(bs))
	PrintB(bytes.NewReader([]byte{10}))
}
