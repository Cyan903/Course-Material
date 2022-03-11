package main

import (
	"fmt"
	"net/http"
	"time"
)

func ping(url string) {
	res, err := http.Get(url)

	if err != nil {
		fmt.Println("error fetching", res.StatusCode)
	}

	fmt.Println(url, "ok")
}

func pingtest() {
	m := "https://yahoo.com/"

	for {
		go (func() {
			time.Sleep(5 * time.Second)
			ping(m)
		})()

		time.Sleep(2 * time.Second)

		go (func() {
			time.Sleep(10 * time.Second)
			m = "https://google.com/"
		})()
	}
}
