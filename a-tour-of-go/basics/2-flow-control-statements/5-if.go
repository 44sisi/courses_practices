package main

import (
	"fmt"
	"math"
)

func sqrt(x float64) string {
	if x < 0 {
		return sqrt(-x) + "i"
	}
	return fmt.Sprintf("%0.2f", math.Sqrt(x))
}

func main() {
	fmt.Println(sqrt(2), sqrt(-2))
}
