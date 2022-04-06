package list

var Items = []string{}

func Add(v string) {
	Items = append(Items, v)
}

func Remove(v string) {
	if len(Items) < 1 {
		return
	}

	s := []string{}

	for i := range Items {
		if Items[i] != v {
			// removes dups
			// dont care
			s = append(s, Items[i])
		}
	}

	Items = s
}
