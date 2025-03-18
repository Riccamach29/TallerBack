const error_handle = (error, req, res, next) => {
    return res.status(500).json({
        success: false,
        message: 'Internal server error',
        response: error
    });

}

export default error_handle
