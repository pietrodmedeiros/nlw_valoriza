import express, { response } from "express";

const app = express()

app.get("/test", (request, response) => {
    return response.send("Hello there! GET method working!")
})

app.post("/test-post", (request, response) =>{
    return response.send("Hello there! POST method working!")
})




app.listen(3333, () => console.log("YES!!! o/ Server is running!"))


