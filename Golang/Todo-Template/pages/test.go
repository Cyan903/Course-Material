package pages

import (
	"html/template"
	"net/http"
	"strings"
)

type confData = struct {
	Port     int
	Addr     string
	Requests []string
}

type testData = struct {
	EData    string
	InfoData []string
	Config   *confData
}

func delSpaces(s string) string {
	return strings.ReplaceAll(s, " ", "")
}

func Test(w http.ResponseWriter, r *http.Request) {
	funcs := template.FuncMap{
		"killSpaces": delSpaces,
	}

	// .New must be test.tmpl.html
	tt, err := template.New("test.tmpl.html").Funcs(funcs).ParseFiles("templates/test.tmpl.html")
	data := testData{
		EData:    "<h1>EEE</h1>",
		InfoData: []string{"a", "b", "c"},
		Config: &confData{
			Addr:     "localhost",
			Port:     3000,
			Requests: []string{"req 1", "req 2"},
		},
	}

	if err != nil {
		panic(err)
	}

	tt.Execute(w, data)
}
