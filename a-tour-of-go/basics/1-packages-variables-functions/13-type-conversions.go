package main

import (
	"fmt"
	"math"
)

func main() {
	x, y := 2, 4
	var f = math.Sqrt(float64(x*x + y*y))
	var z uint = uint(f)
	fmt.Println(x, y, f, z)
}
