package main

import "fmt"

func main() {
	a := [5]int{3, 4, 5, 6, 7}
	var s []int = a[1:4]
	fmt.Println(s)

	names := [4]string{"Mary", "Billy", "Sathy", "Lilly"}
	b := names[0:2]
	c := names[1:3]
	fmt.Println(names)
	fmt.Println(b, c)

	c[0] = "XXX"
	fmt.Println(names)
	fmt.Println(b, c)
}
