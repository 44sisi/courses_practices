package main

import (
	"fmt"
	"math"
)

func sqrt1(x float64) float64 {
	z := x
	for i := 0; math.Abs(z*z-x) > math.Pow(10, -15); i++ {
		z -= (z*z - x) / (2 * z)
		fmt.Println(i, z)
	}
	return z
}

func main() {
	fmt.Println(sqrt1(100))
}
