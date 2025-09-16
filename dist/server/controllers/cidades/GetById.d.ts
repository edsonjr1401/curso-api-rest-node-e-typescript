import { Request, Response } from 'express';
export interface IParamsProps {
    id?: number;
}
export declare const getByIdValidation: import("express").RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
export declare const getById: (req: Request<IParamsProps>, res: Response) => Promise<Response<any, Record<string, any>>>;
//# sourceMappingURL=GetById.d.ts.map