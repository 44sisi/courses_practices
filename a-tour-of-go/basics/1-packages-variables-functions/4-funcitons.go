package main

import "fmt"

func add(x int, y int) int {
	return x + y
}

func divide(x, y float32) float32 {
	return x / y
}

func main() {
	fmt.Printf("1 + 2 is %d.\n", add(1, 2))
	fmt.Printf("3 / 2 is %0.2f.\n", divide(3, 2))
}
