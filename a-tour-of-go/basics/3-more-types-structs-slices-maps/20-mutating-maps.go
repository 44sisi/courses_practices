package main

import "fmt"

func main () {
	m := make(map[string]int)

	m["answer"] = 42
	fmt.Println("answer:", m["answer"])

	m["answer"] = 23
	fmt.Println("answer:", m["answer"])

	delete(m, "answer")

	elem, ok := m["answer"]
	fmt.Println("answer:", elem, "in m?", ok)
}
