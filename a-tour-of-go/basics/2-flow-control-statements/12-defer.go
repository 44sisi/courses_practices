// A defer statement defers the execution of a function until the surrounding function returns.
// The deferred call's arguments are evaluated immediately,
// but the function call is not executed until the surrounding function returns.

package main

import "fmt"

func main() {
	defer fmt.Println("begin")
	defer fmt.Println("world")
	defer fmt.Println("end")

	fmt.Println("hello")
}
