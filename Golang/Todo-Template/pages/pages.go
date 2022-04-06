package pages

import (
	"html/template"
	"net/http"

	"todo/list"
)

func NotFound(w http.ResponseWriter, r *http.Request) {
	t, err := template.New("404.tmpl.html").ParseFiles("templates/plates/base.tmpl.html", "templates/404.tmpl.html")

	if err != nil {
		panic(err)
	}

	t.Execute(w, nil)
}

func Home(w http.ResponseWriter, r *http.Request) {
	t, err := template.New("home.tmpl.html").ParseFiles("templates/plates/base.tmpl.html", "templates/home.tmpl.html")

	if err != nil {
		panic(err)
	}

	t.Execute(w, list.Items)
}

func About(w http.ResponseWriter, r *http.Request) {
	t, err := template.New("about.tmpl.html").ParseFiles("templates/plates/base.tmpl.html", "templates/plates/common.tmpl.html", "templates/about.tmpl.html")

	if err != nil {
		panic(err)
	}

	t.Execute(w, list.Items)
}
