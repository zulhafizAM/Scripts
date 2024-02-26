import { column } from '@ioc:Adonis/Lucid/Orm';
import logAttributesModel from './logAttributes';

export default class commonAttributesModel extends logAttributesModel {
    @column({ isPrimary: true, columnName: 'id' })
    public id: bigint;

    @column({ columnName: 'name' })
    public name: string;

    @column()
    public active: boolean;
}
