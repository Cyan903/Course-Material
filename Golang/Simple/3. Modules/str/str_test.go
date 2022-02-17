package str

import "testing"

func Test_pointer(t *testing.T) {
	hi := "Hello World"
	s := str("Hello")

	if s != "Hello" {
		t.Errorf("str was not initialized properly")
	}

	s.upStr(&hi)

	if string(s) != hi {
		t.Errorf("str did not change value, %s", s)
	}
}
