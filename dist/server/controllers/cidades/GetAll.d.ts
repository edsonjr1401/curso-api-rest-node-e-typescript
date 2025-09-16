import { Request, Response } from 'express';
export interface IQueryProps {
    page?: number | null;
    limit?: number | null;
    filter?: string | null;
}
export declare const getAllValidation: import("express").RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
export declare const getAll: (req: Request<{}, {}, {}, IQueryProps>, res: Response) => Promise<Response<any, Record<string, any>>>;
//# sourceMappingURL=GetAll.d.ts.map