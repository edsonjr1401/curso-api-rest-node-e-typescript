"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const controllers_1 = require("./../controllers");
const router = (0, express_1.Router)();
exports.router = router;
router.get('/', (_, res) => {
    return res.send('Olá, DEV!');
});
router.get('/cidade', controllers_1.CidadeController.getAllValidation, controllers_1.CidadeController.getAll);
router.post('/cidade', controllers_1.CidadeController.createValidation, controllers_1.CidadeController.create);
router.get('/cidade/:id', controllers_1.CidadeController.getByIdValidation, controllers_1.CidadeController.getById);
router.put('/cidade/:id', controllers_1.CidadeController.updateByIdValidation, controllers_1.CidadeController.updateById);
router.delete('/cidade/:id', controllers_1.CidadeController.deleteByIdValidation, controllers_1.CidadeController.deleteById);
//# sourceMappingURL=index.js.map