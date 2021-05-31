package main

import "fmt"

func main() {
	i, j := 21, 27

	p := &i
	fmt.Println(*p)
	*p = 24
	fmt.Println(i)
	fmt.Println(p)

	p2 := &j
	*p2 = *p2 / 9
	fmt.Println(j)
	fmt.Println(p2)
}
