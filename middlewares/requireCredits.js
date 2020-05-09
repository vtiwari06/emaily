module.exports = (req, res, next) => {
    if(req.user.credits > 0) {
        next();
    } else {
        return res.status(403).send({ error: "Not have enough credits!" })
    }
}
