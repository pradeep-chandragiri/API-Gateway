import express from 'express'

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.json({
        service: "User Service",
        data: [
            { id: 1, name: "Mario", age: 29 },
            { id: 2, name: "Virat", age: 36 }
        ]
    })
})

const port = 3003
app.listen(port, () => {
    console.log(`Server is running on PORT: http://localhost:${port}`);
})