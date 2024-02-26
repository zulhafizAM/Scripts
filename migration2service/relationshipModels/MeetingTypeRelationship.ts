import { BaseModel, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm';
import Meeting from 'App/Models/Meeting';

export class meetingTypeRelationship extends BaseModel {
  @hasMany(() => Meeting, { foreignKey: 'meetingTypeId' })
  public MeetingAsmeetingType: HasMany<typeof Meeting>;
}
