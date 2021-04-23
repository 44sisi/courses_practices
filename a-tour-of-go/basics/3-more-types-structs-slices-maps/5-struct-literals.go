package main

import "fmt"

type Vertex struct {
	X, Y int
}

func main() {
	a := Vertex{1, 2}
	b := Vertex{X: 3}
	c := Vertex{}
	p := &Vertex{3, 4}

	fmt.Println(a, b, c, p)
	fmt.Printf("%T\n", a)
	fmt.Printf("%T\n", p)
}
