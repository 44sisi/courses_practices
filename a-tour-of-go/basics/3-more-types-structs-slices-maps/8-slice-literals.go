// A slice literal is like an array literal without the length.
// This is an array literal:
// [3]bool{true, true, false}
// And this creates the same array as above, then builds a slice that references it:
// []bool{true, true, false}

package main

import "fmt"

func main() {
	a := []string{"yes", "no"}
	b := []bool{true, false, true}
	c := []struct {
		a int
		b bool
	}{
		{2, true},
		{3, false},
		{5, true},
	}

	fmt.Println(a)
	fmt.Println(b)
	fmt.Println(c)
}
