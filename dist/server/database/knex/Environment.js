"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.production = exports.test = exports.development = void 0;
exports.development = {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
        filename: path.resolve(__dirname, '..', '..', '..', '..', 'database.sqlite')
    }
};
exports.test = {};
exports.production = {};
//# sourceMappingURL=Environment.js.map