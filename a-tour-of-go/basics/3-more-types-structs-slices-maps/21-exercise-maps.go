package main

import (
	"strings"

	"golang.org/x/tour/wc"
)

func WordCount(s string) map[string]int {
	li := strings.Fields(s)
	m := make(map[string]int)
	for _, v := range li {
		_, ok := m[v]
		if ok {
			m[v] +=1
		} else {
			m[v] = 1
		}
	}
	return m
}

func main() {
	wc.Test(WordCount)
}