import commonAttributesSchema from 'Database/commonAttributes/commonAttributes';

export default class extends commonAttributesSchema {
    protected tableName = 'treatments';

    public async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.bigIncrements('id').primary().notNullable();
            table
                .bigInteger('patientId')
                .unsigned()
                .references('id')
                .inTable('patients');
            table.specificType('description', 'VARCHAR(MAX)');
            table.integer('amount');
            table.specificType('status', 'VARCHAR(255)');
            table.specificType('remark', 'VARCHAR(MAX)');

            super.extendingLogSchema(table);
        });
    }

    public async down() {
        this.schema.dropTable(this.tableName);
    }
}
