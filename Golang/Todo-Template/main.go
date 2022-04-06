package main

import (
	"log"
	"net/http"
)

func main() {
	port := ":3000"
	server := &http.Server{
		Addr:    port,
		Handler: routes(),
	}

	log.Println("Running on port", port)
	server.ListenAndServe()
}
