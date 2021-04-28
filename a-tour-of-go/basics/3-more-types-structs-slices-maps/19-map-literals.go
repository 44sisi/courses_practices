package main

import "fmt"

type Vertex struct {
	Lat, Long float64
}

var m = map[string]Vertex {
	"Bell Labs": Vertex{
		40.2, 23.3,
	},
	"Google": Vertex {
		234.43, 341.32,
	},
}

// If the top-level type is just a type name, you can omit it from the elements of the literal. 
var n = map[string]Vertex {
	"Google": {23.2, 234.23},
	"Facebook": {2342.23, 23.3},
}

func main () {
	fmt.Println(m)
	fmt.Println(n)
}
