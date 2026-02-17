import jwt from "jsonwebtoken"

function requireAuth(req, res, next) {
    const token = req.cookies.token;

    if (!token) {
        res.redirect("/login");
        return;
    }

    try {
        const decode = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decode;
        next();
    } catch (error) {
        console.error("Token verification error", error);
    }
}

export { requireAuth }