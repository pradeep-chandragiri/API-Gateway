import express from 'express'

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.json({
        service: "Payment Service",
        data: [
            { id: 1, paymentMethod: "COD", amount: 509 },
            { id: 2, paymentMethod: "ONLINE", amount: 699 }
        ]
    })
})

const port = 3002
app.listen(port, () => {
    console.log(`Server is running on PORT: http://localhost:${port}`);
})