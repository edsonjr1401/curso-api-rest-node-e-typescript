"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validation = void 0;
const http_status_codes_1 = require("http-status-codes");
const validation = (getAllSchemas) => async (req, res, next) => {
    const schemas = getAllSchemas(schema => schema);
    const errorsResult = {};
    for (const [key, schema] of Object.entries(schemas)) {
        try {
            await schema.validate(req[key], { abortEarly: false });
        }
        catch (err) {
            const yupError = err;
            const errors = {};
            yupError.inner.forEach(error => {
                if (!error.path)
                    return;
                errors[error.path] = error.message;
            });
            errorsResult[key] = errors;
        }
    }
    ;
    if (Object.entries(errorsResult).length === 0) {
        return next();
    }
    else {
        return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json({ errors: errorsResult });
    }
    //return next();
};
exports.validation = validation;
//# sourceMappingURL=Validation.js.map