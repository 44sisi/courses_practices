package main

import (
	"fmt"
)

func main() {
	var a []int
	fmt.Println(len(a), cap(a), a)

	if a == nil {
		fmt.Println("Nil!")
	}
}
