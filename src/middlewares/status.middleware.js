// Middleware for status checking
export default function checkStatus(req, res, next) {
    const userStatus = req.user.status; // Assuming user status is attached to req.user

    if (userStatus === 'INACTIVE') {
        return res.status(403).json({ message: 'Your account is inactive. Please contact support.' });
    }
    
    next();
}