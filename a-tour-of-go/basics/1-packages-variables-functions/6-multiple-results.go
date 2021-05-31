package main

import "fmt"

func swap(a, b string) (string, string) {
	return b, a
}

func main() {
	a, b := "first", "second"
	fmt.Println(swap(a, b))

	a, b = swap("first", "second")
	fmt.Println(swap(a, b))
}
