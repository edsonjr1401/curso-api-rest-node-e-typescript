import { RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';
import { object, Schema, ValidationError } from 'yup';

type TProperty =  'body' | 'header' | 'params' | 'query';

type TALLSchemas = Record<TProperty, Schema<any>>;

type TValidation = (Schema:Partial<TALLSchemas>) => RequestHandler;


export const validation: TValidation = (schemas) => async (req, res, next) => {
console.log(schemas);

  Object.entries(schemas).forEach(([key, schemas]) => {


  //return next();
  
     try {
      schemas.validate(req[key as TProperty], { abortEarly: false }); //

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


});

};