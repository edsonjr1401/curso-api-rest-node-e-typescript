import { Request, Response } from 'express';
export interface ICidade {
    nome: string;
}
export interface IBodyProps {
    nome: string;
}
export declare const createValidation: import("express").RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
export declare const create: (req: Request<{}, {}, ICidade>, res: Response) => Promise<Response<any, Record<string, any>>>;
//# sourceMappingURL=Create.d.ts.map