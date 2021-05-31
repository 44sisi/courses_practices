package main

import "fmt"

type Vertex struct {
	X int
	Y int
}

func main() {
	v := Vertex{1, 2}
	p := &v
	p.X = 4
	fmt.Println(v)
	fmt.Println(*p)

	p.Y = 1e9
	fmt.Println(v)
}
