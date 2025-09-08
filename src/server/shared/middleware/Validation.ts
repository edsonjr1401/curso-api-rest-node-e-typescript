import { RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';
import { Schema, ValidationError } from 'yup';

type TValidation = (scheme: Schema<any>) => RequestHandler;


export const validation: TValidation = (scheme) => async (req, res, next) => {
     try {
       await scheme.validate(req.query, { abortEarly: false });
       return next();
     } catch (err) {
       const yupError = err as ValidationError;
       const errors: Record<string, string> = {};
   
       yupError.inner.forEach(error => {
         if (error.path === undefined) return;
         errors[error.path] = error.message;
       });

       return res.status(StatusCodes.BAD_REQUEST).json({ errors });
  }
};
