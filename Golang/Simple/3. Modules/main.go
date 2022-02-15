package main

import "fmt"

type person struct {
	first string
	last  string
}

type zeroval struct {
	str     string  // ""
	num     int     // 0
	flt     float32 // 0
	boolean bool    // false
	person
}

func (p person) print() {
	fmt.Printf("%+v\n", p)
}

func main() {
	var p1, p2 zeroval
	p3 := person{
		last:  "Last name",
		first: "First name",
	}

	p4 := zeroval{
		person: person{
			first: "First",
		},
	}

	p2.str = "string"
	p4.person.print()
	fmt.Println(p1, p2, p3, p4)
}
