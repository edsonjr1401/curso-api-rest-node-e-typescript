import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';  
import * as yup from 'yup';

interface ICidade {
  nome: string;
}

// Schema de validação
const bodyValidation: yup.Schema<ICidade> = yup.object({
  nome: yup.string().required().min(3),
}).required();

export const create = async (req: Request<{}, {}, ICidade>, res: Response) => {
  let validatedData: ICidade | undefined = undefined;

  try {
    // valida req.body
    validatedData = await bodyValidation.validate(req.body);

  } catch (error) {
    const yupError = error as yup.ValidationError; 

    return res.status(StatusCodes.BAD_REQUEST).json({
      errors: {
        default: yupError.message,
      }
    });
  }

  // Se passou na validação, já temos os dados corretos
  console.log(validatedData);

  // Exemplo: acessando a propriedade nome
  console.log(req.body.nome);

  return res.status(StatusCodes.CREATED).send('Create!');
};
