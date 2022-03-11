package main

import (
	"fmt"
	"net/http"
	"time"
)

func fetchURL(url string, c chan []string, t time.Time) *http.Response {
	res, err := http.Get(url)

	if err != nil {
		c <- []string{}
		return nil
	}

	c <- []string{url, fmt.Sprintf("%s", time.Now().Sub(t)), fmt.Sprintf("%d", res.StatusCode)}

	return res
}

func race(r []string) {
	rlen := len(r)
	c := make(chan []string)
	start := time.Now()

	fmt.Printf("starting race with %d racers\n\n", rlen)

	for i := range r {
		go fetchURL(r[i], c, start)
	}

	for i := 0; i < rlen; i++ {
		vals := <-c
		if len(vals) != 3 {
			fmt.Printf("#%d has failed!\n", i+1)
		} else {
			fmt.Printf("#%d %s - at %s (code: %s)\n", i+1, vals[0], vals[1], vals[2])
		}
	}
}

func main() {
	urls := []string{
		"https://google.ca/",
		"https://webformatter.com/html",
		"https://whoer.net/",
	}

	race(urls)
	// pingtest()
}
