package pages

import (
	"net/http"
	"strings"
	"todo/list"
)

func Add(w http.ResponseWriter, r *http.Request) {
	k, ok := r.URL.Query()["k"]

	if !ok || len(k[0]) < 1 {
		w.WriteHeader(400)
		w.Write([]byte("missing key!"))
		return
	}

	list.Add(k[0])

	w.Header().Set("Content-Type", "application/json")
	w.Write([]byte(strings.Join(list.Items, ", ")))
}

func Remove(w http.ResponseWriter, r *http.Request) {
	k, ok := r.URL.Query()["k"]

	if !ok || len(k[0]) < 1 {
		w.WriteHeader(400)
		w.Write([]byte("missing key!"))
		return
	}

	list.Remove(k[0])
	
	w.Header().Set("Content-Type", "application/json")
	w.Write([]byte(strings.Join(list.Items, ", ")))
}
