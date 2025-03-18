const error_401 = (error, req, res, next) => {
    if (err.status === 401) {
        return res.status(401).json({
            success: false,
            message: 'Unauthorized',
            response: error
        });
    }
    next(error);
}

export default error_401;