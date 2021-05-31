package main

import "fmt"

var power = []int{1, 2, 4, 8, 16, 32, 64, 128}

func main() {
	for i, v := range power {
		fmt.Printf("2**%d=%d\n", i, v)
	}

	arr := make([]int, 10)
	for i:= range arr {
		arr[i] = 1 << uint(i) // 2**i
	}

	for _, v := range arr {
		fmt.Printf("%d\n", v)
	}
}
