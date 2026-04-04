// Controller function for health check
export const healthCheck = (req, res, next) => {
    try {
        res.status(200).json({ status: 'OK', message: 'API is healthy' });
    } catch (error) {
        next(error);
    }
};

// Controller function for error simulation (for testing error handling)
export const simulateError = (req, res, next) => {
    try {
        throw new Error('Simulated error for testing');
    } catch (error) {
        next(error);
    }
};
