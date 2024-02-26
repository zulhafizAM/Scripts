import commonAttributesSchema from 'Database/commonAttributes/commonAttributes';

export default class extends commonAttributesSchema {
    protected tableName = 'patients';

    public async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.bigIncrements('id').primary().notNullable();
            table
                .bigInteger('claimId')
                .unsigned()
                .references('id')
                .inTable('claims');
            table
                .bigInteger('relationshipId')
                .unsigned()
                .references('id')
                .inTable('relationships');
            table
                .bigInteger('placementId')
                .unsigned()
                .references('id')
                .inTable('placements');
            table.specificType('name', 'VARCHAR(255)');
            table.specificType('identityDocumentCard', 'VARCHAR(255)');
            table.specificType('status', 'VARCHAR(255)');
            table.specificType('remark', 'VARCHAR(MAX)');

            super.extendingLogSchema(table);
        });
    }

    public async down() {
        this.schema.dropTable(this.tableName);
    }
}
