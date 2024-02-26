import commonAttributesSchema from 'Database/commonAttributes/commonAttributes';

export default class extends commonAttributesSchema {
    protected tableName = 'employmentStatus';

    public async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.bigIncrements('id').primary().notNullable();
            table.specificType('occSectorCode', 'VARCHAR(255)');
            table.specificType('occSectorName', 'VARCHAR(255)');
            super.extendingLogSchema(table);
        });
    }

    public async down() {
        this.schema.dropTable(this.tableName);
    }
}                  
