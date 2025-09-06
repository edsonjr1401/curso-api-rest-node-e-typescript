import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';  
import * as yup from 'yup';

interface ICidade {
  nome: string;
  estado: string;
}

// Schema de validação
const bodyValidation: yup.Schema<ICidade> = yup.object({
  nome: yup.string().required().min(3),
  estado: yup.string().required().min(2).max(2)
}).required();

export const create = async (req: Request<{}, {}, ICidade>, res: Response) => {
  let validatedData: ICidade | undefined = undefined;

  try {
    // valida req.body
    validatedData = await bodyValidation.validate(req.body, { abortEarly:false});
  } catch (error) {
    const yupError = error as yup.ValidationError; 
    const validationErrors: Record<string, string> = {};


    yupError.inner.forEach(error => { 
      if (error.path === undefined) return;
      validationErrors[error.path] = error.message
      });
    

    return res.status(StatusCodes.BAD_REQUEST).json({
      errors: validationErrors,
      

        
      
    });
  }

  // Se passou na validação, já temos os dados corretos
  console.log(validatedData);

  // Exemplo: acessando a propriedade nome
  console.log(req.body.nome);

  return res.status(StatusCodes.CREATED).send('Create!');
};
