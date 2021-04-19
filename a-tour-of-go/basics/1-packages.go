package main

import (
	"fmt"
	"math/rand"
)

func main() {
	rand.Seed(78)
	fmt.Println("Number", rand.Intn(10))
}
