package main

import "fmt"

// A var declaration can include initializers, one per variable.
// If an initializer is present, the type can be omitted; the variable will take the type of the initializer.

var var1, var2 int = 4, 5
var a, b = 1, "x"

func main() {
	c, d := true, 2.3
	fmt.Println(var1, var2, a, b, c, d)
}
