import { HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm';
import commonAttributesModel from './commonAttributes/commonAttributes';
import UserAccount from './UserAccount';

export default class UserAccountStatus extends commonAttributesModel {
    public static table = 'userAccountStatus';
    public static primaryKey = 'id';
    public static incrementing = false;

    @hasMany(() => UserAccount)
    public userAccount: HasMany<typeof UserAccount>;
}
