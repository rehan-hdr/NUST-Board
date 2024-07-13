import {constants} from '../constants.js';

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;

    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            res.json({
                title: 'Validation Failed!',
                message: err.message,
                stackTrace: err.stack,
            });
            break;
        case constants.UNAUTHORIZED:
            res.json({
                title: 'Authorization Failed!',
                message: err.message,
                stackTrace: err.stack,
            });
            break;
        case constants.NOT_FOUND:
            res.json({
                title: 'Content Not Found!',
                message: err.message,
                stackTrace: err.stack,
            });
            break;   
        case constants.SERVER_ERROR:
            res.json({
                title: 'Server Error! Something Went Wrong!',
                message: err.message,
                stackTrace: err.stack,
            });
            break;
        case constants.FORBIDDEN:
            res.json({
                title: 'Forbidden! Permissions Required', // user is authenticated but lacks required permissions
                message: err.message,
                stackTrace: err.stack,
            });
            break;
        default:
            console.log('No Error Recorded on the Server Side')                
    }
}

export default errorHandler;