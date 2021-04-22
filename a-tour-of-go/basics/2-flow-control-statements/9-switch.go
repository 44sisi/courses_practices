package main

import (
	"fmt"
	"runtime"
	"time"
)

func main() {
	fmt.Printf("Go runs on ")
	switch os := runtime.GOOS; os {
	case "darwin":
		fmt.Println("OS X.")
	case "linux":
		fmt.Println("Linux.")
	default:
		fmt.Printf("%s. \n", os)
	}

	today := time.Now().Weekday()
	fmt.Println("When is Saturday?")
	switch time.Saturday {
	case today + 0:
		fmt.Println("Today.")
	case today + 1:
		fmt.Println("TOmorrow.")
	case today + 2:
		fmt.Println("In two days.")
	default:
		fmt.Println("To far.")
	}
}
