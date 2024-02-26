import commonAttributesSchema from 'Database/commonAttributes/commonAttributes';

export default class extends commonAttributesSchema {
    protected tableName = 'clinicAllocations';

    public async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.bigIncrements('id').primary().notNullable();
            table.integer('current');
            table.integer('remainder');
            table.integer('newAllocation');
            table.specificType('status', 'VARCHAR(255)');
            table.specificType('remark', 'VARCHAR(MAX)');

            super.extendingLogSchema(table);
        });
    }

    public async down() {
        this.schema.dropTable(this.tableName);
    }
}
