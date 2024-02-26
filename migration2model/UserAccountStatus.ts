import { HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm';
import commonAttributesModel from '../commonAttributes/commonAttributes';
import UserAccounts from '../UserAccounts';

export default class UserAccountStatus extends commonAttributesModel {
    public static table = 'userAccountStatus';
    public static primaryKey = 'id';
    public static incrementing = false;

    @hasMany(() => UserAccounts)
    public userAccount: HasMany<typeof UserAccounts>;
}
