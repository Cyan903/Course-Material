package main

import (
	"net/http"
	"todo/pages"

	"github.com/go-chi/chi/v5"
)

func routes() http.Handler {
	mux := chi.NewRouter()
	mux.Get("/*", pages.NotFound)

	mux.Get("/", pages.Home)
	mux.Get("/about", pages.About)
	mux.Get("/test", pages.Test)

	mux.Route("/api", func(r chi.Router) {
		r.Get("/add", pages.Add)
		r.Get("/remove", pages.Remove)
	})

	return mux
}
