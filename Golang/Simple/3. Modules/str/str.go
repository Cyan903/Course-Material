package str

type str string

func (s *str) upStr(val *string) {
	*s = str(*val)
}
