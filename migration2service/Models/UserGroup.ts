import { HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm';
import commonAttributesModel from './commonAttributes/commonAttributes';
import UserAccount from './UserAccount';

export default class UserGroup extends commonAttributesModel {
    public static table = 'userGroups';
    public static primaryKey = 'id';
    public static incrementing = false;

    @hasMany(() => UserAccount)
    public userAccounts: HasMany<typeof UserAccount>;
}
