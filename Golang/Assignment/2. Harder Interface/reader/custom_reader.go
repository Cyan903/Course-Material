package reader

import (
	"io"
	"syscall"
)

type Reader struct {
	File string
}

func (r Reader) Read(b []byte) (n int, e error) {
	content := r.getContent()

	for i, j := range content {
		b[i] = byte(j)
	}

	return len(content), io.EOF
}

func (r Reader) getContent() string {
	str := ""
	buffer := make([]byte, 128)
	op, err := syscall.Open(r.File, syscall.O_RDONLY, 0777)

	if err != nil {
		panic("[custom_reader.go] could not open file!")
	}

	for {
		i, _ := syscall.Read(op, buffer)

		if i <= 0 {
			break
		}

		str += string(buffer[:i])
	}

	return str
}
