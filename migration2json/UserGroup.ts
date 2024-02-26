import { HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm';
import commonAttributesModel from '../commonAttributes/commonAttributes';
import UserAccounts from '../UserAccounts';

export default class UserGroup extends commonAttributesModel {
  public static table = 'userGroups';
  public static primaryKey = 'id';
  public static incrementing = false;

  @hasMany(()=> UserAccounts)
  public userAccounts: HasMany<typeof UserAccounts>
  
}
