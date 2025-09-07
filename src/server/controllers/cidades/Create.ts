import { RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';  
import * as yup from 'yup';

interface ICidade {
  nome: string;
  estado: string;
}

// Schema de validação
const bodyValidation: yup.Schema<ICidade> = yup.object().shape({
  nome: yup.string().required().min(3),
  estado: yup.string().required().min(2),
});

export const createBodyValidator: RequestHandler = (req, res, next) => {
  try {
    // valida de forma síncrona
    bodyValidation.validateSync(req.body, { abortEarly: false });
    return next(); // se passou, chama o controller
  } catch (err) {
    const yupError = err as yup.ValidationError; 
    const validationErrors: Record<string, string> = {};

    yupError.inner.forEach(error => { 
      if (error.path === undefined) return;
      validationErrors[error.path] = error.message;
    });

    return res.status(StatusCodes.BAD_REQUEST).json({
      errors: validationErrors,
    });
  }
};
