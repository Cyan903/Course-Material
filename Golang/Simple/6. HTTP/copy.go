package main

import (
	"io"
)

// https://cs.opensource.google/go/go/+/refs/tags/go1.17.8:src/bytes/reader.go;l=18
// type copier struct {
// 	s    []byte
// 	i    int
// 	prev int
// }

// func (c copier) Read(b []byte) (n int, e error) {
// 	if c.i >= int(len(c.s)) {
// 		return 0, io.EOF
// 	}

// 	c.prev = -1
// 	n = copy(b, c.s[c.i:])
// 	c.i += int(n)
// 	return 0, nil
// }

type copier struct {}

func (c *copier) Read(b []byte) (n int, e error) {
	b[0] = 65
	b[2] = 65
	b[10] = 10

	return 11, io.EOF
}
