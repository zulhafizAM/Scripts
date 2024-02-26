import { DateTime } from 'luxon';
import {
    column,
    BaseModel,
    HasMany,
    hasMany,
    beforeFind,
    scope,
} from '@ioc:Adonis/Lucid/Orm';
import CamelCaseNamingStrategy from 'App/Strategies/CamelCaseNamingStrategy';
import Division from './Division';
import PersonalDetail from './PersonalDetail';
import Experience from './Experience';
import NextOfKin from './NextOfKin';
import StateVisitAllowance from './StateVisitAllowance';
import { personalDetailPreloads } from 'App/Helpers/preloads';

export default class State extends BaseModel {
    public static table = 'states';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    public static withPreloadedList = scope<typeof State>((query) => {
        query
            .preload('divisions')
            .preload('birthStatePersonalDetails')
            .preload('mailStatePersonalDetails')
            .preload('homeStatePersonalDetails')
            .preload('experiences')
            .preload('nextOfKins')
            .preload('stateVisitAllowances');
    });
    
    @column({ isPrimary: true, columnName: 'id', serializeAs: null })
    public id: bigint;
    
    @column({ columnName: 'name' })
    public name: string;
    
    @column({ columnName: 'active', serializeAs: null })
    public active: boolean;
    
    @column({ columnName: 'createdBy', serializeAs: null })
    public createdBy: string;
    
    @column.dateTime({
        columnName: 'createdAt',
        autoCreate: true,
        serializeAs: null,
    })
    public createdAt: DateTime;
    
    @column({ columnName: 'modifiedBy', serializeAs: null })
    public modifiedBy: string;
    
    @column.dateTime({
        columnName: 'modifiedAt',
        autoCreate: true,
        autoUpdate: true,
        serializeAs: null,
    })
    public modifiedAt: DateTime;
    
    @hasMany(() => Division, {
        foreignKey: 'stateId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public divisions: HasMany<typeof Division>;
    
    @hasMany(() => PersonalDetail, {
        foreignKey: 'birthStateId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public birthStatePersonalDetails: HasMany<typeof PersonalDetail>;
    
    @hasMany(() => PersonalDetail, {
        foreignKey: 'mailStateId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public mailStatePersonalDetails: HasMany<typeof PersonalDetail>;
    
    @hasMany(() => PersonalDetail, {
        foreignKey: 'homeStateId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public homeStatePersonalDetails: HasMany<typeof PersonalDetail>;
    
    @hasMany(() => Experience, {
        foreignKey: 'stateId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public experiences: HasMany<typeof Experience>;
    
    @hasMany(() => NextOfKin, {
        foreignKey: 'stateId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public nextOfKins: HasMany<typeof NextOfKin>;
    
    @hasMany(() => StateVisitAllowance, {
        foreignKey: 'stateId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public stateVisitAllowances: HasMany<typeof StateVisitAllowance>;
    
    @beforeFind()
    public static async preloadTables(query) {
        query
            .preload('divisions')
            .preload('birthStatePersonalDetails')
            .preload('mailStatePersonalDetails')
            .preload('homeStatePersonalDetails')
            .preload('experiences')
            .preload('nextOfKins')
            .preload('stateVisitAllowances');
    }
}