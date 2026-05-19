import express from 'express'

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.json({
        service: "Order Service",
        data: [
            { id: 1, product: "Washing Machine" },
            { id: 2, product: "Refridgerator" }
        ]
    })
})

const port = 3001
app.listen(port, () => {
    console.log(`Server is running on PORT: http://localhost:${port}`);
})