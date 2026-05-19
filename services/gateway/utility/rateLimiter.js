import rateLimit from 'express-rate-limit'

const rateLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // min * sec * msec = 15Min
    limit: 10,
    standardHeaders: 'draft-8',
    legacyHeaders: false,
    message: 'Too many requests, please try again after 15 min'
})

export default rateLimiter