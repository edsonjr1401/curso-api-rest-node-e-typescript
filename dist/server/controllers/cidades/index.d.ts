import * as create from './Create';
import * as getAll from './GetAll';
import * as getById from './GetById';
import * as updateById from '../cidades/UpdateById';
import * as deleteById from './DeleteById';
export declare const CidadeController: {
    deleteByIdValidation: import("express").RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
    deleteById: (req: import("express").Request<deleteById.IParamsProps>, res: import("express").Response) => Promise<import("express").Response<any, Record<string, any>>>;
    updateByIdValidation: import("express").RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
    updateById: (req: import("express").Request<updateById.IParamProps, {}, updateById.IBodyProps>, res: import("express").Response) => Promise<import("express").Response<any, Record<string, any>>>;
    getByIdValidation: import("express").RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
    getById: (req: import("express").Request<getById.IParamsProps>, res: import("express").Response) => Promise<import("express").Response<any, Record<string, any>>>;
    getAllValidation: import("express").RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
    getAll: (req: import("express").Request<{}, {}, {}, getAll.IQueryProps>, res: import("express").Response) => Promise<import("express").Response<any, Record<string, any>>>;
    createValidation: import("express").RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
    create: (req: import("express").Request<{}, {}, create.ICidade>, res: import("express").Response) => Promise<import("express").Response<any, Record<string, any>>>;
};
//# sourceMappingURL=index.d.ts.map