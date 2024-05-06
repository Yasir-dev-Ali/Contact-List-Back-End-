const {constants} = require("../constants.js");

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
//    swtich case
    switch (!statusCode) {
        case constants.ValidationError:
            res.json({ message: 'Validation Error',
            message: err.message,
            stackTrace:err.stack,

             });
            break;
        case constants.CastError:
            res.json({ message: 'Cast Error',
            message: err.message,
            stackTrace:err.stack,

             });
            break;
        case constants.JsonWebTokenError:
            res.json({ message: 'Json Web Token Error',
            message: err.message,
            stackTrace:err.stack,

             });
            break;
        case constants.TokenExpiredError:
            res.json({ message: 'Token Expired Error',
            message: err.message,
            stackTrace:err.stack,

             });
            break;
        case constants.contactNotFound:
            res.json({ message: 'Contact Not Found',
            message: err.message,
            stackTrace:err.stack,

             });
            break;
        default:
           console.log("No Error Found in errorHandler");
            break;

    }
   


}

module.exports = errorHandler;