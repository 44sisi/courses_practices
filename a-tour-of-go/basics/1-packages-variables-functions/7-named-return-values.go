package main

import "fmt"

func split(sum int) (x float32, y int) {
	x = float32(sum) * 4 / 9
	y = sum - 5
	return
}

func main() {
	fmt.Println(split(4))
}
