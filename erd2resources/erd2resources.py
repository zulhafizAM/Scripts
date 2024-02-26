import sys
import os
import re
from pathlib import Path

# folderpath = os.getcwd()

def extract_quoted_strings(input_string):
    # Regular expression to find all occurrences of text within quotes
    quoted_strings = re.findall(r'"([^"]*)"', input_string)
    return quoted_strings

def contains_full_number(s):
    return bool(re.search(r'\d+', s))

def convert_string(string):
    # Split the string into words by capitalizing the first letter of each word
    capitalized_word = capitalized_word = string[0].upper() + string[1:]
    
    if "Process" not in capitalized_word and "Status" not in capitalized_word and capitalized_word[-3:] != "ies":
        converted_string = capitalized_word.rstrip('s')
    
    elif capitalized_word[-3:] == "ies":
        converted_string = capitalized_word.rstrip('ies') + "y"
    
    else:
        converted_string = capitalized_word

    return converted_string

def lower_start(string):
    lowered_string = string[0].lower() + string[1:]
    
    return lowered_string

def capital_start(string):
    capital_string = string[0].upper() + string[1:]
    
    return capital_string

def remove_id(string):
    new_string = string.replace('Id', "")
    
    return new_string

def table_name(model_name):
    lowered_string = lower_start(model_name)
    if lowered_string[-1:] == "y":
        table = lowered_string[:-1] + "ies"
    elif lowered_string[-1:] == "s":
        table = lowered_string
    else:
        table = lowered_string + "s"
    
    return table


def plural(string):
    if string[-6:] == "rocess" or string[-5:] == "tatus" or string[-4:] == "lass":
        plural_string = string + "es"
    elif string[-6:] != "rocess" and string[-5:] != "tatus" and string[-4:] == "lass" and string[-1:] == "y":
        plural_string = string[:-1] + "ies"
    elif string[-6:] != "rocess" and string[-5:] != "tatus" and string[-4:] == "lass" and string[-1:] == "s":
        plural_string = string
    else:
        plural_string = string + "s"
    
    return plural_string

def convert_string_pascal(kebab: str) -> str:
    parts = kebab.split('-')
    camel = ''.join(part if idx == 0 else part.capitalize() for idx, part in enumerate(parts))
    
    return camel[0].capitalize() + camel[1:]

def generate_model(migration_path):
    with open(migration_path, mode='r', encoding="utf-8") as myfile:
        text = myfile.readlines()
        
        for index, t in enumerate(text):
            
            tableArray = t.split(' ')
            moduleName = 'medical'
            tableName = tableArray[0]
            modelName = convert_string(tableName)
            table = []
            print(modelName)
            i = 1
            while i < (len(tableArray) - 1):
                table.append(lower_start(tableArray[i]) + ':' + tableArray[i + 1].replace('\n', '').lower())
                i = i + 2
            print(table)
            
            # Migration #############################################################################################
            if not os.path.exists("Migration/" + capital_start(moduleName)): 
                os.makedirs("Migration/" + capital_start(moduleName))
            
            migration_path= "Migration/" + capital_start(moduleName) + "/" + capital_start(moduleName) + modelName + "Migrations.ts"
        
            with open(migration_path, 'w', encoding='utf-8', newline='\n') as newfile:
                newfile.write("import commonAttributesSchema from 'Database/commonAttributes/commonAttributes';\n")
                newfile.write("\n")
                newfile.write("export default class extends commonAttributesSchema {\n")
                newfile.write("    protected tableName = '" + tableName + "';\n")
                newfile.write("\n")
                newfile.write("    public async up() {\n")
                newfile.write("        this.schema.createTable(this.tableName, (table) => {\n")
                newfile.write("            table.bigIncrements('id').primary().notNullable();\n")
                for row in table:
                    key = row.split(':')[0]
                    type = row.split(':')[1]
                    if key != 'id' and type == 'bigint':
                        newfile.write("            table\n")
                        newfile.write("                .bigInteger('" + key + "')\n")
                        newfile.write("                .unsigned()\n")
                        newfile.write("                .references('id')\n")
                        newfile.write("                .inTable('" + plural(remove_id(key)) + "');\n")
                    elif key != 'id' and 'varchar' in type:
                        newfile.write("            table.specificType('" + key + "', '" + type.upper() + "');\n")
                    elif key != 'id' and type == 'datetimeoffset':
                        newfile.write("            table.timestamp('" + key + "', { useTz: true });\n")
                    elif key != 'id' and type == 'number':
                        newfile.write("            table.integer('" + key + "');\n")
                        
                newfile.write("\n")
                newfile.write("            super.extendingLogSchema(table);\n")
                newfile.write("        });\n")
                newfile.write("    }\n")
                newfile.write("\n")
                newfile.write("    public async down() {\n")
                newfile.write("        this.schema.dropTable(this.tableName);\n")
                newfile.write("    }\n")
                newfile.write("}\n")


            # /Migration #############################################################################################
            # Model #############################################################################################
            if not os.path.exists("Model/" + capital_start(moduleName)): 
                os.makedirs("Model/" + capital_start(moduleName))
            
            migration_path= "Model/" + capital_start(moduleName) + "/" + modelName + ".ts"
        
            with open(migration_path, 'w', encoding='utf-8', newline='\n') as newfile:
                newfile.write("import { DateTime } from 'luxon';\n")
                newfile.write("import { column, BaseModel, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';\n")
                newfile.write("import CamelCaseNamingStrategy from 'App/Strategies/CamelCaseNamingStrategy';\n")
                newfile.write("\n")
                newfile.write("export default class " + modelName + " extends BaseModel {\n")
                newfile.write("    public static table = '" + tableName + "';\n")
                newfile.write("    public static primaryKey = 'id';\n")
                newfile.write("    public static incrementing = false;\n")
                newfile.write("\n")
                newfile.write("    public static namingStrategy = new CamelCaseNamingStrategy();\n")
                newfile.write("\n")
                newfile.write("    @column({ isPrimary: true, columnName: 'id', serializeAs: null })\n")
                newfile.write("    public id: bigint;\n")
                newfile.write("\n")
                for row in table:
                    key = row.split(':')[0]
                    type = row.split(':')[1]
                    if key != 'id' and type == 'bigint':
                        newfile.write("    @column({ columnName: '" + key + "', serializeAs: null })\n")
                        newfile.write("    public " + key + ": " + type + ";\n")
                        newfile.write("\n")
                    elif key != 'id' and 'varchar' in type:
                        newfile.write("    @column({ columnName: '" + key + "' })\n")
                        newfile.write("    public " + key + ": string;\n")
                        newfile.write("\n")
                    elif key != 'id' and type == 'datetimeoffset':
                        newfile.write("    @column.dateTime({ columnName: '" + key + "' })\n")
                        newfile.write("    public " + key + ": DateTime;\n")
                        newfile.write("\n")
                    elif key != 'id' and type == 'number':
                        newfile.write("    @column({ columnName: '" + key + "' })\n")
                        newfile.write("    public " + key + ": number;\n")
                        newfile.write("\n")
                newfile.write("    @column({ columnName: 'active', serializeAs: null })\n")
                newfile.write("    public active: boolean;\n")
                newfile.write("\n")
                newfile.write("    @column({ columnName: 'createdBy', serializeAs: null })\n")
                newfile.write("    public createdBy: string;\n")
                newfile.write("\n")
                newfile.write("    @column.dateTime({\n")
                newfile.write("        columnName: 'createdAt',\n")
                newfile.write("        autoCreate: true,\n")
                newfile.write("        serializeAs: null,\n")
                newfile.write("    })\n")
                newfile.write("    public createdAt: DateTime;\n")
                newfile.write("\n")
                newfile.write("    @column({ columnName: 'modifiedBy', serializeAs: null })\n")
                newfile.write("    public modifiedBy: string;\n")
                newfile.write("\n")
                newfile.write("    @column.dateTime({\n")
                newfile.write("        columnName: 'modifiedAt',\n")
                newfile.write("        autoCreate: true,\n")
                newfile.write("        autoUpdate: true,\n")
                newfile.write("        serializeAs: null,\n")
                newfile.write("    })\n")
                newfile.write("    public modifiedAt: DateTime;\n")
                newfile.write("\n")
                for row in table:
                    key = row.split(':')[0]
                    type = row.split(':')[1]
                    if key != 'id' and type == 'bigint':
                        newfile.write("    @belongsTo(() => " + capital_start(remove_id(key)) + ", {\n")
                        newfile.write("        foreignKey: '" + key + "',\n")
                        newfile.write("        onQuery: (query) => {\n")
                        newfile.write("            query.where('active', true);\n")
                        newfile.write("        },\n")
                        newfile.write("    })\n")
                        newfile.write("    public " + remove_id(key) + ": BelongsTo<typeof " + capital_start(remove_id(key)) + ">;\n")
                        newfile.write("\n")
                newfile.write("}\n")


            # /Model #############################################################################################
                
            # Validator #############################################################################################
            if not os.path.exists("Validator/" + capital_start(moduleName) + "/" + modelName): 
                os.makedirs("Validator/" + capital_start(moduleName) + "/" + modelName)
                
            validator_path = "Validator/" + capital_start(moduleName) + "/" + modelName + "/List" + capital_start(moduleName) + modelName + "Schema.ts"
        
            with open(validator_path, 'w', encoding='utf-8', newline='\n') as newfile:
                newfile.write("import { z } from 'zod';\n")
                newfile.write("\n")
                newfile.write("const List" + capital_start(moduleName) + modelName + "Schema = z\n")
                newfile.write("    .object({\n")
                newfile.write("        pageNum: z.number().int().nonnegative(),\n")
                newfile.write("        pageSize: z.number().int().nonnegative(),\n")
                newfile.write("        orderBy: z.string().max(75).nullable(),\n")
                newfile.write("        orderType: z.string().max(75).nullable(),\n")
                newfile.write("        filter: z.object({\n")
                newfile.write("        }),\n")
                newfile.write("    })\n")
                newfile.write("\n")
                newfile.write("export default List" + capital_start(moduleName) + modelName + "Schema;\n")
                    
            
            validator_path = "Validator/" + capital_start(moduleName) + "/" + modelName + "/Add" + capital_start(moduleName) + modelName + "Schema.ts"
        
            with open(validator_path, 'w', encoding='utf-8', newline='\n') as newfile:
                newfile.write("import { z } from 'zod';\n")
                newfile.write("\n")
                newfile.write("const Add" + capital_start(moduleName) + modelName + "Schema = z\n")
                newfile.write("    .object({\n")
                for row in table:
                    key = row.split(':')[0]
                    type = row.split(':')[1]
                    if 'varchar' in type:
                        type = 'string'
                    if key != 'id' and 'varbinary' not in type and type != 'bigint':
                        newfile.write("    " + key + ": z." + type + "(),\n")
                    elif key != 'id' and type == 'bigint':
                        newfile.write("        " + key + ": z.number().int().nonnegative(),\n")
                newfile.write("    })\n")
                newfile.write("\n")
                newfile.write("export default Add" + capital_start(moduleName) + modelName + "Schema;\n")
                    
                
            validator_path = "Validator/" + capital_start(moduleName) + "/" + modelName + "/Edit" + capital_start(moduleName) + modelName + "Schema.ts"
        
            with open(validator_path, 'w', encoding='utf-8', newline='\n') as newfile:
                newfile.write("import { z } from 'zod';\n")
                newfile.write("\n")
                newfile.write("const Edit" + capital_start(moduleName) + modelName + "Schema = z\n")
                newfile.write("    .object({\n")
                newfile.write("        id: z.number().int().nonnegative(),\n")
                for row in table:
                    key = row.split(':')[0]
                    type = row.split(':')[1]
                    if 'varchar' in type:
                        type = 'string'
                    if key != 'id' and 'varbinary' not in type and type != 'bigint':
                        newfile.write("        " + key + ": z." + type + "(),\n")
                    elif key != 'id' and type == 'bigint':
                        newfile.write("        " + key + ": z.number().int().nonnegative(),\n")
                newfile.write("    })\n")
                newfile.write("\n")
                newfile.write("export default Edit" + capital_start(moduleName) + modelName + "Schema;\n")
            # /Validator #############################################################################################
            
            # Service #############################################################################################
            if not os.path.exists("Service/" + capital_start(moduleName)): 
                os.makedirs("Service/" + capital_start(moduleName))
            
            service_path= "Service/" + capital_start(moduleName) + "/" + capital_start(moduleName) + modelName + "Services.ts"
        
            with open(service_path, 'w', encoding='utf-8', newline='\n') as newfile:
                newfile.write("import Database from '@ioc:Adonis/Lucid/Database';\n")

                newfile.write("import List" + capital_start(moduleName) + modelName + "Response from 'App/Models/DTO/" + capital_start(moduleName) + "/" + modelName + "/List" + capital_start(moduleName) + modelName + "Response';\n")

                newfile.write("import Get" + capital_start(moduleName) + modelName + "Response, { " + capital_start(moduleName) + modelName + "Response } from 'App/Models/DTO/" + capital_start(moduleName) + "/" + modelName + "/Get" + capital_start(moduleName) + modelName + "Response';\n")
                newfile.write("import " + modelName + " from 'App/Models/" + modelName + "';\n")
                newfile.write("import BaseService from 'App/Services/Shared/BaseService';\n")
                newfile.write("export default class " + capital_start(moduleName) + modelName + "Services extends BaseService {\n")

                newfile.write("    public async get" + plural(modelName) + "(payload): Promise<List" + capital_start(moduleName) + modelName + "Response> {\n")
                newfile.write("        let " + lower_start(modelName) + "List: List" + capital_start(moduleName) + modelName + "Response = new List" + capital_start(moduleName) + modelName + "Response();\n")
                newfile.write("        const read" + plural(modelName) + " = await " + modelName + ".query();\n")
                newfile.write("\n")
                newfile.write("        " + lower_start(modelName) + "List = {\n")
                newfile.write("            pageNum: payload.pageNum,\n")
                newfile.write("            totalData: read" + plural(modelName) + ".length,\n")
                newfile.write("            totalPage: Math.ceil(read" + plural(modelName) + ".length / payload.pageSize),\n")
                newfile.write("            " + lower_start(plural(modelName)) + ": read" + plural(modelName) + ".map((result) => ({\n")
                for row in table:
                    key = row.split(':')[0]
                    type = row.split(':')[1]
                    if 'varchar' in type:
                        type = 'string'
                    if key != 'id' and 'varbinary' not in type:
                        newfile.write("                " + key + ": result." + key + ",\n")
                newfile.write("            })),\n")
                newfile.write("        } as List" + capital_start(moduleName) + modelName + "Response;\n")
                newfile.write("\n")
                newfile.write("        if (payload.orderBy !== null) {\n")
                newfile.write("            this.ordering(payload, " + lower_start(modelName) + "List, '" + lower_start(plural(modelName)) + "');\n")
                newfile.write("        }\n")
                newfile.write("\n")
                newfile.write("        " + lower_start(modelName) + "List." + lower_start(plural(modelName)) + " =\n")
                newfile.write("            " + lower_start(modelName) + "List." + lower_start(plural(modelName)) + ".slice(\n")
                newfile.write("                (payload.pageNum - 1) * payload.pageSize,\n")
                newfile.write("                payload.pageNum * payload.pageSize,\n")
                newfile.write("            );\n")
                newfile.write("\n")
                newfile.write("        return " + lower_start(modelName) + "List;\n")
                newfile.write("    }\n")

                newfile.write("    public async get" + modelName + "(id: number): Promise<Get" + capital_start(moduleName) + modelName + "Response> {\n")
                newfile.write("        let details: Get" + capital_start(moduleName) + modelName + "Response = new Get" + capital_start(moduleName) + modelName + "Response();\n")
                newfile.write("        const result = await " + modelName + ".query()\n")
                newfile.write("            .where('id', id)\n")
                newfile.write("            .firstOrFail();\n")
                newfile.write("\n")
                newfile.write("        details." + lower_start(modelName) + " = {\n")
                for row in table:
                    key = row.split(':')[0]
                    type = row.split(':')[1]
                    if 'varchar' in type:
                        type = 'string'
                    if key != 'id' and 'varbinary' not in type:
                        newfile.write("            " + key + ": result." + key + ",\n")
                newfile.write("        } as " + capital_start(moduleName) + modelName + "Response;\n")
                newfile.write("\n")
                newfile.write("        return details;\n")
                newfile.write("    }\n")
                newfile.write("\n")
                
                newfile.write("    public async add" + modelName + "(payload): Promise<void> {\n")
                newfile.write("        const transaction = await Database.transaction();\n")
                newfile.write("        try {\n")
                newfile.write("            let " + lower_start(modelName) + " = new " + modelName + "();\n")
                for row in table:
                    key = row.split(':')[0]
                    type = row.split(':')[1]
                    if 'varchar' in type:
                        type = 'string'
                    if key != 'id' and 'varbinary' not in type:
                        newfile.write("            " + lower_start(modelName) + "." + key + " = payload." + key + ";\n")
                newfile.write("            await " + lower_start(modelName) + ".save();\n")
                newfile.write("\n")
                newfile.write("            await transaction.commit();\n")
                newfile.write("        } catch (error) {\n")
                newfile.write("            await transaction.rollback();\n")
                newfile.write("            console.log(error);\n")
                newfile.write("            throw error;\n")
                newfile.write("        }\n")
                newfile.write("    }\n")
              
                newfile.write("    public async edit" + modelName + "(payload): Promise<void> {\n")
                newfile.write("        const transaction = await Database.transaction();\n")
                newfile.write("        try {\n")
                newfile.write("            const " + lower_start(modelName) + " = await " + modelName + ".query()\n")
                newfile.write("                .where('id', payload.id)\n")
                newfile.write("                .firstOrFail();\n")
                newfile.write("\n")
                for row in table:
                    key = row.split(':')[0]
                    type = row.split(':')[1]
                    if 'varchar' in type:
                        type = 'string'
                    if key != 'id' and 'varbinary' not in type:
                        newfile.write("            " + lower_start(modelName) + "." + key + " = payload." + key + ";\n")
                newfile.write("            await " + lower_start(modelName) + ".save();\n")
                newfile.write("\n")
                newfile.write("            await transaction.commit();\n")
                newfile.write("        } catch (error) {\n")
                newfile.write("            await transaction.rollback();\n")
                newfile.write("            console.log(error);\n")
                newfile.write("            throw error;\n")
                newfile.write("        }\n")
                newfile.write("    }\n")
                newfile.write("}\n")

            # /Service #############################################################################################
            
            # Response #############################################################################################
            if not os.path.exists("Response/" + capital_start(moduleName) + "/" + modelName): 
                os.makedirs("Response/" + capital_start(moduleName) + "/" + modelName)
                
            response_path = "Response/" + capital_start(moduleName) + "/" + modelName + "/List" + capital_start(moduleName) + modelName + "Response.ts"
        
            with open(response_path, 'w', encoding='utf-8', newline='\n') as newfile:
                newfile.write("import { BaseResponse } from 'App/Models/DTO/BaseResponse';\n")
                newfile.write("\n")
                newfile.write("export default class List" + capital_start(moduleName) + modelName + "Response extends BaseResponse<" + capital_start(moduleName) + plural(modelName) + "Response> {\n")
                newfile.write("    private " + lower_start(modelName) + "List: " + capital_start(moduleName) + plural(modelName) + "Response[] = [];\n")
                newfile.write("\n")
                newfile.write("    public get " + lower_start(plural(modelName)) + "(): " + capital_start(moduleName) + plural(modelName) + "Response[] {\n")
                newfile.write("        return this." + lower_start(modelName) + "List;\n")
                newfile.write("    }\n")
                newfile.write("\n")
                newfile.write("    public set " + lower_start(plural(modelName)) + "(v: " + capital_start(moduleName) + plural(modelName) + "Response[]) {\n")
                newfile.write("        this." + lower_start(modelName) + "List = v;\n")
                newfile.write("        this.currentPageSize = this." + lower_start(modelName) + "List.length;\n")
                newfile.write("    }\n")
                newfile.write("}\n")
                newfile.write("\n")
                newfile.write("class " + capital_start(moduleName) + plural(modelName) + "Response {\n")
                for row in table:
                    key = row.split(':')[0]
                    type = row.split(':')[1]
                    if 'varchar' in type:
                        type = 'string'
                    if key != 'id' and 'varbinary' not in type:
                        newfile.write("    public " + key + ": " + type + ";\n")
                newfile.write("}\n")
                
            response_path = "Response/" + capital_start(moduleName) + "/" + modelName + "/Get" + capital_start(moduleName) + modelName + "Response.ts"
        
            with open(response_path, 'w', encoding='utf-8', newline='\n') as newfile:
                newfile.write("export default class Get" + capital_start(moduleName) + modelName + "Response {\n")
                newfile.write("    public " + lower_start(modelName) + ": " + capital_start(moduleName) + modelName + "Response = new " + capital_start(moduleName) + modelName + "Response();\n")
                newfile.write("}\n")
                newfile.write("export class " + capital_start(moduleName) + modelName + "Response {\n")
                for row in table:
                    key = row.split(':')[0]
                    type = row.split(':')[1]
                    if 'varchar' in type:
                        type = 'string'
                    if key != 'id' and 'varbinary' not in type:
                        newfile.write("    public " + key + ": " + type + ";\n")
                newfile.write("}\n")


            # /Response #############################################################################################
                
        # Controller #############################################################################################
        controller_path = "Controller/" + capital_start(plural(moduleName)) + "Controller.ts"
        with open(controller_path, 'w', encoding='utf-8', newline='\n') as newfile:
            newfile.write("import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';\n")
            newfile.write("import { inject } from '@adonisjs/core/build/standalone';\n")
            newfile.write("import BaseController from './BaseController';\n")
            for index, t in enumerate(text):
                tableArray = t.split(' ')
                moduleName = 'medical'
                modelName = convert_string(tableArray[0])
                table = []
                print(modelName)
                i = 1
                while i < (len(tableArray) - 1):
                    table.append(lower_start(tableArray[i]) + ':' + tableArray[i + 1].replace('\n', '').lower())
                    i = i + 2
                
                newfile.write("import " + capital_start(moduleName) + modelName + "Services from 'App/Services/" + capital_start(moduleName) + "/" + capital_start(moduleName) + modelName + "Services';\n")
            newfile.write("import GetByIdSchema from 'App/Validators/Shared/GetByIdValidator';\n")
            for index, t in enumerate(text):
                
                tableArray = t.split(' ')
                moduleName = 'medical'
                modelName = convert_string(tableArray[0])
                table = []
                print(modelName)
                i = 1
                while i < (len(tableArray) - 1):
                    table.append(lower_start(tableArray[i]) + ':' + tableArray[i + 1].replace('\n', '').lower())
                    i = i + 2
                   
                newfile.write("import List" + capital_start(moduleName) + modelName + "Schema from 'App/Validators/" + capital_start(moduleName) + "/" + modelName + "/List" + capital_start(moduleName) + modelName + "Schema';\n")
                
                newfile.write("import Add" + capital_start(moduleName) + modelName + "Schema from 'App/Validators/" + capital_start(moduleName) + "/" + modelName + "/Add" + capital_start(moduleName) + modelName + "Schema';\n")
                                        
                newfile.write("import Edit" + capital_start(moduleName) + modelName + "Schema from 'App/Validators/" + capital_start(moduleName) + "/" + modelName + "/Edit" + capital_start(moduleName) + modelName + "Schema';\n")
            newfile.write("\n@inject()\n")
            newfile.write("export default class " + capital_start(plural(moduleName)) + "Controller extends BaseController {\n")
            newfile.write("    constructor(\n")
            for index, t in enumerate(text):
                tableArray = t.split(' ')
                moduleName = 'medical'
                modelName = convert_string(tableArray[0])
                table = []
                print(modelName)
                i = 1
                while i < (len(tableArray) - 1):
                    table.append(lower_start(tableArray[i]) + ':' + tableArray[i + 1].replace('\n', '').lower())
                    i = i + 2
                
                newfile.write("        private " + moduleName + modelName + "Service: " + capital_start(moduleName) + modelName + "Services,\n")
            newfile.write("        ) {\n")
            newfile.write("        super();\n")
            newfile.write("    }\n")
            newfile.write("\n")
            for index, t in enumerate(text):
                
                tableArray = t.split(' ')
                moduleName = 'medical'
                modelName = convert_string(tableArray[0])
                table = []
                print(modelName)
                i = 1
                while i < (len(tableArray) - 1):
                    table.append(lower_start(tableArray[i]) + ':' + tableArray[i + 1].replace('\n', '').lower())
                    i = i + 2

                newfile.write("    public async get" + plural(modelName) + "({ request }: HttpContextContract) {\n")
                newfile.write("        return this.handleList(\n")
                newfile.write("            request,\n")
                newfile.write("            this." + moduleName + modelName + "Service.get" + plural(modelName) + ".bind(this." + moduleName + modelName + "Service),\n")
                newfile.write("            List" + capital_start(moduleName) + modelName + "Schema,\n")
                newfile.write("        );\n")
                newfile.write("    }\n")

                newfile.write("    public async get" + modelName + "({ request }: HttpContextContract) {\n")
                newfile.write("        return this.validateAndProcessRequest(\n")
                newfile.write("            request,\n")
                newfile.write("            this." + moduleName + modelName + "Service.get" + modelName + ",\n")
                newfile.write("            GetByIdSchema,\n")
                newfile.write("        );\n")
                newfile.write("    }\n")

                newfile.write("\n")
                newfile.write("    public async add" + modelName + "({ request }: HttpContextContract) {\n")
                newfile.write("        return this.validateAndProcessRequest(\n")
                newfile.write("            request,\n")
                newfile.write("            this." + moduleName + modelName + "Service.add" + modelName + ",\n")
                newfile.write("            Add" + capital_start(moduleName) + modelName + "Schema,\n")
                newfile.write("        );\n")
                newfile.write("    }\n")
                newfile.write("\n")
    
                newfile.write("    public async edit" + modelName + "({ request }: HttpContextContract) {\n")
                newfile.write("        return this.validateAndProcessRequest(\n")
                newfile.write("            request,\n")
                newfile.write("            this." + moduleName + modelName + "Service.edit" + modelName + ",\n")
                newfile.write("            Edit" + capital_start(moduleName) + modelName + "Schema,\n")
                newfile.write("        );\n")
                newfile.write("    }\n")
            newfile.write("}\n")

        # /Controller #############################################################################################

        
folder_path = 'ERD'

for filename in os.listdir(folder_path):
    if filename.endswith(".txt"):
        migration_path = os.path.join(folder_path, filename)
        generate_model(migration_path)
        #print(filename)