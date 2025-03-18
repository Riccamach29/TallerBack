const responseTime = (req, res, next) => {
    const start = Date.now();
    
    res.on('finish', () => {
        const duration = Date.now() - start;
        console.log(`El tiempo de ejecucion de la solicitud fue de: ${duration}ms - ${req.method} ${req.url}`);
    });

    next();
};

export default responseTime;
