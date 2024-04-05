"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryCompiler = void 0;
// @ts-ignore
const QueryCompiler_MySQL = require("knex/lib/dialects/mysql/query/mysql-querycompiler");
class QueryCompiler extends QueryCompiler_MySQL {
    constructor(client, builder, formatter) {
        super(client, builder, formatter);
    }
    forUpdate() {
        // @ts-ignore
        this.client.logger.warn('table lock is not supported by snowflake dialect');
        return '';
    }
    forShare() {
        // @ts-ignore
        this.client.logger.warn('lock for share is not supported by snowflake dialect');
        return '';
    }
}
exports.QueryCompiler = QueryCompiler;
//# sourceMappingURL=QueryCompiler.js.map