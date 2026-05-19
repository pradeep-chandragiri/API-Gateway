
export const authMiddleware = async (req, res, next) => {
    
    try {
        
        const token = req.headers['authorization']

        if(!token){
            return res.status(401).json({
                success: false,
                message: 'Invalid request'
            })
        }

        next()

    } catch (error) {
        console.error(error)
        return res.status(500).json({
            success: false,
            message: 'Internal server error'
        })
    }

}