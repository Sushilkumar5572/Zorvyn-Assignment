// Controller for health check
export const healthCheck = (req, res) => {
    res.status(200).json({ status: 'OK', message: 'API is healthy' });
};