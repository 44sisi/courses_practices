package main

import (
	"fmt"
	"math"
)

func power(x, n, lim float64) float64 {
	if v := math.Pow(x, n); v < lim {
		return v
	} else {
		// can user v in else block
		fmt.Printf("result %g >= limit %g\n", v, lim)
	}
	// can't use v here
	return lim
}

func main() {
	fmt.Println(
		power(3, 2, 10),
		power(3, 3, 20),
	)
}
