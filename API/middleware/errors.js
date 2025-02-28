import ErrorHandler from '../utils/errorHandler.js';

export default (err,req,res,next) => {
    err.statusCode = err.statusCode || 500;

    if(process.env.NODE_ENV === 'development'){
        res.status(err.statusCode).json({
            success: false,
            error: err,
            message: err.message,
            stack: err.stack,
        });
    }

    if(process.env.NODE_ENV === 'production'){
        let error = { ...err };
        error.message = err.message;

        if(err.name === "CastError"){
            const message = `Fant ikke ressursen du ser etter. Invalid ${err.path}`;
            error = new ErrorHandler(message, 404);
        }

        if(err.name === "ValidationError"){
            const message = Object.values(error.errors).moa((value) => value.message);
            error = new ErrorHandler(message,400);
        }

        res.status(error.statusCode).json({
            sucess: false,
            message: error.message || "Internal Server Error",
        });
    }

};