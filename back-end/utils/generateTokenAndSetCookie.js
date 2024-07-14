import jwt from 'jsonwebtoken'

const generateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({userId}, process.env.ACCESS_TOKEN_SECRET, 
        {
            expiresIn: '15m',
        }
    )

    res.cookie('token', token, {
        httpOnly: true,
        maxAge: 15 * 24 * 60 * 60 * 1000,
        sameSite: 'strict',
    })

    return token;
}

export default generateTokenAndSetCookie