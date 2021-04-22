package main

import "fmt"

func main() {
	sum := 0
	for i := 1; i < 10; i++ {
		sum += i
	}
	fmt.Println(sum)

	// the init and post staments are optionl, while is spelled "for" in go
	sum2 := 1
	for sum2 < 10 {
		sum2 += sum2
	}
	fmt.Println(sum2)
}
