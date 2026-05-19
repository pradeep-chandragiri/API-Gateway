import express from 'express'
import { createProxyMiddleware } from 'http-proxy-middleware'
import cors from 'cors'
import { authMiddleware } from './middlewares/authMiddleware.js'
import rateLimiter from './utility/rateLimiter.js'

const allowedOrigins = ['http://localhost:5173']

const app = express()
app.use(express.json())
app.use(cors({ origin: allowedOrigins, credentials: true }))

app.get('/', (req, res) => {
    res.send('Api working fine')
})

// rate limiter
app.use(rateLimiter)
// protected routes
app.use(authMiddleware)

app.use('/orders', createProxyMiddleware({
    target: 'http://localhost:3001',
    changeOrigin: true
}))
app.use('/payments', createProxyMiddleware({
    target: 'http://localhost:3002',
    changeOrigin: true
}))
app.use('/users', createProxyMiddleware({
    target: 'http://localhost:3003',
    changeOrigin: true
}))

const port = 3000
app.listen(port, () => {
    console.log(`Server is running on PORT: http://localhost:${port}`);
})