import { Request, Response } from 'express';
export interface IParamProps {
    id?: number;
}
export interface IBodyProps {
    nome: string;
}
export declare const updateByIdValidation: import("express").RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
export declare const updateById: (req: Request<IParamProps, {}, IBodyProps>, res: Response) => Promise<Response<any, Record<string, any>>>;
//# sourceMappingURL=UpdateById.d.ts.map