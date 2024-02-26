import commonAttributesSchema from 'Database/commonAttributes/commonAttributes';

export default class extends commonAttributesSchema {
    protected tableName = 'medicalClaims';

    public async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.bigIncrements('id').primary().notNullable();
            table
                .bigInteger('employeeId')
                .unsigned()
                .references('id')
                .inTable('employees');
            table
                .bigInteger('clinicId')
                .unsigned()
                .references('id')
                .inTable('clinics');
            table.timestamp('treatmentDate', { useTz: true });
            table.integer('covered');
            table.integer('remainder');
            table.specificType('paymentType', 'VARCHAR(255)');
            table.specificType('status', 'VARCHAR(255)');
            table.specificType('remark', 'VARCHAR(MAX)');

            super.extendingLogSchema(table);
        });
    }

    public async down() {
        this.schema.dropTable(this.tableName);
    }
}
