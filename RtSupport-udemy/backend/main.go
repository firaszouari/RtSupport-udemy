package main

import (
	"net/http"
	// Problem in windows but in linux/macos works fine
	//"github.com/gorilla/websocket@v1.4.2"
)

type Channel struct {
	Id   string
	Name string
}

func main() {
	router := NewRouter()
	router.Handle("channel add", addChannel)
	http.Handle("/", router)
	http.ListenAndServe(":4000", nil)
}
