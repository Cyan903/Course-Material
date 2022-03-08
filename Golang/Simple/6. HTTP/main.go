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

type logger struct{}

func (logger) Count(s, sep []byte) int {
	c := 0

	for i := range s {
		if s[i] == sep[0] {
			c++
		}
	}

	return c
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
	l := logger{}

	// io.Copy(os.Stdout, res.Body)
	// io.Copy(os.Stderr, bytes.NewReader(bs))

	PrintB(ext)
	ext.Println()
	PrintB(bytes.NewReader(bs))
	PrintB(bytes.NewReader([]byte{10}))

	println(l.Count([]byte("Hello"), []byte("l")))

	cp := copier{}
	io.Copy(os.Stdout, &cp)
}
