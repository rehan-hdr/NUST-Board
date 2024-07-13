

const signupUser = async (req, res) => {
    try {
        res.send('Hello')
    } catch (error) {
        res.status(404)
    }

}


export {signupUser}