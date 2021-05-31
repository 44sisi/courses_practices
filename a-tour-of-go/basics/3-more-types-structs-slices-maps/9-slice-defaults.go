package main

import "fmt"

func printSlice(i []int) {
	fmt.Println("length:", len(i), "capacity:", cap(i))
}

func main() {
	a := []int{2, 3, 4, 5}
	printSlice(a)

	a = a[1:4]
	fmt.Println(a)
	printSlice(a)

	a = a[:2]
	fmt.Println(a)
	printSlice(a)

	a = a[1:]
	fmt.Println(a)
	printSlice(a)

	a = a[:2]
	fmt.Println(a)
	printSlice(a)

	a = a[:]
	fmt.Println(a)
	printSlice(a)
}
