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
    elif string[-6:] != "rocess" and string[-5:] != "tatus" and string[-4:] != "lass" and string[-1:] == "y":
        plural_string = string[:-1] + "ies"
    elif string[-6:] != "rocess" and string[-5:] != "tatus" and string[-4:] != "lass" and string[-1:] == "s":
        plural_string = string
    else:
        plural_string = string + "s"
    
    return plural_string
def generate_model(migration_path):
    with open(migration_path, mode='r', encoding="utf-8") as myfile:
        text = myfile.readlines()
        modelName = migration_path.replace("CSV\\", "").replace(".txt", "")
        tableName = table_name(modelName)
        print(modelName)
        tableKeys = text[0].replace("\n", "").replace("\ufeff", "").split(":::")
        
        # Seeder #############################################################################################
        
        seeder_path = "Seeder/1000000000000_create_seed_" + lower_start(plural(modelName)) + ".ts"
      
        with open(seeder_path, 'w', encoding='utf-8', newline='\n') as newfile:
            
            newfile.write("import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';\n")
            newfile.write("import " + modelName + " from 'App/Models/" + modelName + "';\n")
            
            newfile.write("\nexport default class extends BaseSeeder {\n")
            newfile.write("    public async run() {\n")
            newfile.write("        const uniqueKey = 'description';\n")
            newfile.write("        await " + modelName + ".updateOrCreateMany(uniqueKey, [\n")
            
            for index, t in enumerate(text):
                t = re.sub("\[.*?\]"," ", t)
                tl = ''.join([line for line in t])
                ts = ' '.join(tl.split())
                
                tableValues = ts.split(":::")
                
                if index != 0:
                    newfile.write("            {\n")
                    for index, key in enumerate(tableKeys):
                        newfile.write("                " + key + ": `" + tableValues[index] + "`,\n")
                    newfile.write("                active: true,\n")
                    newfile.write("                createdBy: 'Admin',\n")
                    newfile.write("            },\n")
            
            newfile.write("        ]);\n")
            newfile.write("    }\n")
            newfile.write("}\n")
        
        # /Seeder #############################################################################################
        
        # Migration #############################################################################################
        migration_path = "Migration/1000000000000_create_" + lower_start(plural(modelName)) + ".ts"
      
        with open(migration_path, 'w', encoding='utf-8', newline='\n') as newfile:
            newfile.write("import commonAttributesSchema from 'Database/commonAttributes/commonAttributes';\n")
            newfile.write("\n")
            newfile.write("export default class extends commonAttributesSchema {\n")
            newfile.write("    protected tableName = '" + tableName + "';\n")
            newfile.write("\n")
            newfile.write("    public async up() {\n")
            newfile.write("        this.schema.createTable(this.tableName, (table) => {\n")
            newfile.write("            table.bigIncrements('id').primary().notNullable();\n")
            for key in tableKeys:
                newfile.write("            table.specificType('" + key + "', 'VARCHAR(255)');\n")
            
            newfile.write("            super.extendingLogSchema(table);\n")
            newfile.write("        });\n")
            newfile.write("    }\n")
            newfile.write("\n")
            newfile.write("    public async down() {\n")
            newfile.write("        this.schema.dropTable(this.tableName);\n")
            newfile.write("    }\n")
            newfile.write("}                  \n")
        # /Migration #############################################################################################
        
        # Model #############################################################################################
        model_path = "Model/" + modelName + ".ts"
      
        with open(model_path, 'w', encoding='utf-8', newline='\n') as newfile:
            newfile.write("import { DateTime } from 'luxon';\n")
            newfile.write("import {\n")
            newfile.write("    column,\n")
            newfile.write("    BaseModel,\n")
            newfile.write("} from '@ioc:Adonis/Lucid/Orm';\n")
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
            for key in tableKeys:
                newfile.write("    @column({ columnName: '" + key + "' })\n")
                newfile.write("    public " + key + ": string;\n")
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
            newfile.write("}\n")
        # /Model #############################################################################################
        
        # Validator #############################################################################################
        if not os.path.exists("Validator/" + modelName): 
            os.makedirs("Validator/" + modelName)
            
        validator_path = "Validator/" + modelName + "/" + modelName + "ListFilterSchema.ts"
      
        with open(validator_path, 'w', encoding='utf-8', newline='\n') as newfile:
            newfile.write("import { z } from 'zod';\n")
            newfile.write("\n")
            newfile.write("const " + modelName + "ListFilterSchema = z\n")
            newfile.write("    .object({\n")
            newfile.write("        pageNum: z.number().int().nonnegative(),\n")
            newfile.write("        pageSize: z.number().int().nonnegative(),\n")
            newfile.write("        orderBy: z.string().max(75).nullable(),\n")
            newfile.write("        orderType: z.string().max(75).nullable(),\n")
            newfile.write("        filter: z.object({\n")
            for key in tableKeys:
                newfile.write("            " + key + ": z.string().optional(),\n")
            newfile.write("        }),\n")
            newfile.write("    })\n")
            newfile.write("    .strict();\n")
            newfile.write("\n")
            newfile.write("export default " + modelName + "ListFilterSchema;\n")
        
        validator_path = "Validator/" + modelName + "/" + modelName + "AddSchema.ts"
      
        with open(validator_path, 'w', encoding='utf-8', newline='\n') as newfile:
            newfile.write("import { z } from 'zod';\n")
            newfile.write("\n")
            newfile.write("const " + modelName + "AddSchema = z\n")
            newfile.write("    .object({\n")
            for key in tableKeys:
                newfile.write("        " + key + ": z.string().max(255).optional(),\n")
            newfile.write("        active: z.boolean().optional(),\n")
            newfile.write("    })\n")
            newfile.write("    .strict();\n")
            newfile.write("\n")
            newfile.write("export default " + modelName + "AddSchema;\n")
            
        validator_path = "Validator/" + modelName + "/" + modelName + "EditSchema.ts"
      
        with open(validator_path, 'w', encoding='utf-8', newline='\n') as newfile:
            newfile.write("import { z } from 'zod';\n")
            newfile.write("\n")
            newfile.write("const " + modelName + "EditSchema = z\n")
            newfile.write("    .object({\n")
            newfile.write("        id: z.number().int().nonnegative(),\n")
            for key in tableKeys:
                newfile.write("        " + key + ": z.string().max(255).optional(),\n")
            newfile.write("        active: z.boolean().optional(),\n")
            newfile.write("    })\n")
            newfile.write("    .strict();\n")
            newfile.write("\n")
            newfile.write("export default " + modelName + "EditSchema;\n")
        # /Validator #############################################################################################
        
        # Controller #############################################################################################
        controller_path = "Controller/" + plural(modelName) + "Controller.ts"
      
        with open(controller_path, 'w', encoding='utf-8', newline='\n') as newfile:
            newfile.write("public async get" + plural(modelName) + "({ response }: HttpContextContract) {\n")
            newfile.write("        try {\n")
            newfile.write("            const result = await this." + lower_start(modelName) + "Service.get" + plural(modelName) + "();\n")
            newfile.write("            return response.status(200).send(success(result));\n")
            newfile.write("        } catch (e) {\n")
            newfile.write("            return response\n")
            newfile.write("                .status(409)\n")
            newfile.write("                .send(error('An error occured while processing your request'));\n")
            newfile.write("        }\n")
            newfile.write("    }\n")

        # /Controller #############################################################################################
        
        # Service #############################################################################################
        service_path = "Service/" + modelName + "Services.ts"
      
        with open(service_path, 'w', encoding='utf-8', newline='\n') as newfile:
            newfile.write("import " + modelName + " from 'App/Models/" + modelName + "';\n")
            newfile.write("import BaseService from 'App/Services/Shared/BaseService';\n")
            newfile.write("import DefaultListResponse from 'App/Models/DTO/Shared/DefaultListResponse';\n")
            newfile.write("export default class " + modelName + "Services extends BaseService {\n")
            newfile.write("    public async get" + plural(modelName) + "(): Promise<\n")
            newfile.write("        DefaultListResponse<" + plural(modelName) + "Response>\n")
            newfile.write("    > {\n")
            newfile.write("        let " + lower_start(modelName) + "List =\n")
            newfile.write("            new DefaultListResponse<" + plural(modelName) + "Response>();\n")
            newfile.write("        const read" + modelName + " = await " + modelName + ".query();\n")
            newfile.write("\n")
            newfile.write("        " + lower_start(modelName) + "List = {\n")
            newfile.write("            dataList: read" + modelName + ".map((result) => ({\n")
            newfile.write("                id: Number(result.id),\n")
            newfile.write("                code: result.code,\n")
            newfile.write("                description: result.description,\n")
            newfile.write("            })),\n")
            newfile.write("        };\n")
            newfile.write("\n")
            newfile.write("        return " + lower_start(modelName) + "List;\n")
            newfile.write("    }\n")
            newfile.write("}\n")

        # /Service #############################################################################################
        
        # Response #############################################################################################
        # if not os.path.exists("Response/" + modelName): 
        #     os.makedirs("Response/" + modelName)
            
        response_path = "Response/" + modelName + "ListResponse.ts"
      
        with open(response_path, 'w', encoding='utf-8', newline='\n') as newfile:
            newfile.write("class " + plural(modelName) + "Response {\n")
            newfile.write("    public id: bigint;\n")
            for key in tableKeys:
                newfile.write("    public " + key + ": string;\n")
            newfile.write("}\n")
            
        # response_path = "Response/" + modelName + "/" + modelName + "GetResponse.ts"
      
        # with open(response_path, 'w', encoding='utf-8', newline='\n') as newfile:
        #     newfile.write("export default class " + modelName + "GetResponse {\n")
        #     newfile.write("    public " + lower_start(modelName) + ": " + modelName + "Response = new " + modelName + "Response();\n")
        #     newfile.write("}\n")
        #     newfile.write("export class " + modelName + "Response {\n")
        #     for key in tableKeys:
        #         newfile.write("    public " + key + ": string = '';\n")
        #     newfile.write("\n")
        #     newfile.write("    public getFull(data) {\n")
        #     for key in tableKeys:
        #         newfile.write("        this." + key + " = data." + key + ";\n")
        #     newfile.write("    }\n")
        #     newfile.write("}\n")


        # /Response #############################################################################################
        
        
folder_path = 'CSV'

for filename in os.listdir(folder_path):
    if filename.endswith(".txt"):
        migration_path = os.path.join(folder_path, filename)
        generate_model(migration_path)
        #print(filename)