// Middleware for role-based access control
import User from '../models/User.model.js';

const roleMiddleware = (...allowedRoles) => {
    return async (req, res, next) => {
        try {
            const user = await User.findById(req.user._id);

            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }

            if (!allowedRoles.includes(user.role)) {
                return res.status(403).json({ message: 'Access denied: insufficient permissions' });
            }

            next();
        } catch (error) {
            res.status(500).json({ message: 'Server error', error: error.message });
        }
    };
};

export default roleMiddleware;