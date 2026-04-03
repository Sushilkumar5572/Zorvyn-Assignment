// Middleware for authentication
import jwt from 'jsonwebtoken';
import User from '../models/User.model.js';

const authMiddleware = async (req, res, next) => {
    const header = req.header('Authorization');

    if (!header || !header.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'No token, authorization denied' });
    }

    try {
        const token = header.replace('Bearer ', '');

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id).select('-password');
        next();
    } catch (error) {
        res.status(401).json({ message: 'Token is not valid' });
    }
};

export default authMiddleware;