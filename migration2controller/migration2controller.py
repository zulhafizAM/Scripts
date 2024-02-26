import sys
import os
import re
from pathlib import Path

# folderpath = os.getcwd()

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
    if string[-7:] == "Process":
        plural_string = string + "es"
    elif string[-7:] != "Process" and string[-1:] == "y":
        plural_string = string[:-1] + "ies"
    elif string[-7:] != "Process" and string[-1:] == "s":
        plural_string = string
    else:
        plural_string = string + "s"
    
    return plural_string

def generate_model(migration_path):
    with open(migration_path, mode='r', encoding="utf-8") as myfile:
        migrationNumbering = migration_path.split('\\')[1].split('_')
        text = myfile.readlines()
        
        for t in text:
            tableNameCheck = "protected tableName"
            t = re.sub("\[.*?\]"," ", t)
            tl = ''.join([line for line in t])
            ts = ' '.join(tl.split())
            if tableNameCheck in ts:
                tableName = ts.split("=")[1].replace("'", "").replace(";", "").replace(" ", "")
                
        modelName = convert_string(tableName)
        
        model_path = "controller/" + plural(modelName) + "Controller.ts"
      
        with open(model_path, 'w', encoding='utf-8-sig') as newfile:
            
            newfile.write("import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';\n")
            newfile.write("import " + modelName + "Services from 'App/Services/" + modelName + "Services';\n")
            newfile.write("import " + modelName + "Schema from 'App/Validators/" + modelName + "Validator';\n")
            newfile.write("import { inject } from '@adonisjs/core/build/standalone';\n")
            newfile.write("import BaseController from './BaseController';\n")
            newfile.write("\n")
            
            newfile.write("@inject()\n")
            newfile.write("export default class " + plural(modelName) + "Controller extends BaseController {\n")
            newfile.write("    constructor(private " + lower_start(modelName) + "Service: " + modelName + "Services) {\n")
            newfile.write("        super();\n")
            newfile.write("    }\n")
            newfile.write("\n")
            
            newfile.write("    public async get" + plural(modelName) + "({ request }: HttpContextContract) {\n")
            newfile.write("        const requestParams = request.body();\n")
            newfile.write("        try {\n")
            newfile.write("            const " + lower_start(modelName) + "Schema =\n")
            newfile.write("                " + modelName + "Schema.safeParse(requestParams);\n")
            newfile.write("            if (!" + lower_start(modelName) + "Schema.success) {\n")
            newfile.write("                const errorMessage =\n")
            newfile.write("                    this.responseStatusService.showValidationError(\n")
            newfile.write("                        " + lower_start(modelName) + "Schema.error.errors,\n")
            newfile.write("                    );\n")
            newfile.write("                return errorMessage;\n")
            newfile.write("            }\n")
            newfile.write("            return this.responseStatusService.showSuccess(\n")
            newfile.write("                'read',\n")
            newfile.write("                await this." + lower_start(modelName) + "Service.get" + modelName + "s(\n")
            newfile.write("                    requestParams,\n")
            newfile.write("                ),\n")
            newfile.write("            );\n")
            newfile.write("        } catch (error) {\n")
            newfile.write("            return this.responseStatusService.showCaughtException(error);\n")
            newfile.write("        }\n")
            newfile.write("    }\n")
            newfile.write("\n")
            
            newfile.write("    public async get" + modelName + "({ request }: HttpContextContract) {\n")
            newfile.write("        return this.handleRequestWithId(\n")
            newfile.write("            request,\n")
            newfile.write("            this." + lower_start(modelName) + "Service.get" + modelName + ",\n")
            newfile.write("        );\n")
            newfile.write("    }\n")
            newfile.write("\n")
            
            newfile.write("    public async add" + modelName + "({ request }: HttpContextContract) {\n")
            newfile.write("        const " + lower_start(modelName) + " = request.body();\n")
            newfile.write("        const data = request.all();\n")
            newfile.write("        data['currentRole'] = 'urus setia';\n")
            newfile.write("        // data['currentRole'] = 'calon';\n")
            newfile.write("        try {\n")
            newfile.write("            const " + modelName + "Validate =\n")
            newfile.write("                " + modelName + "Schema.safeParse(" + lower_start(modelName) + ");\n")
            newfile.write("            if (!" + modelName + "Validate.success) {\n")
            newfile.write("                const errorMessage =\n")
            newfile.write("                    this.responseStatusService.showValidationError(\n")
            newfile.write("                        " + modelName + "Validate.error.errors,\n")
            newfile.write("                    );\n")
            newfile.write("\n")
            newfile.write("                return errorMessage;\n")
            newfile.write("            }\n")
            newfile.write("            await this." + lower_start(modelName) + "Service.add" + modelName + "(" + lower_start(modelName) + ");\n")
            newfile.write("            return this.responseStatusService.showSuccess(\n")
            newfile.write("                'create',\n")
            newfile.write("                " + lower_start(modelName) + ",\n")
            newfile.write("            );\n")
            newfile.write("        } catch (error) {\n")
            newfile.write("            console.log(error);\n")
            newfile.write("            return this.responseStatusService.showCaughtException(error);\n")
            newfile.write("        }\n")
            newfile.write("    }\n")
            newfile.write("\n")
            
            newfile.write("    public async edit" + modelName + "({ request }: HttpContextContract) {\n")
            newfile.write("        const " + lower_start(modelName) + " = request.body();\n")
            newfile.write("\n")
            newfile.write("        try {\n")
            newfile.write("            const " + modelName + "Validate =\n")
            newfile.write("                " + modelName + "Schema.safeParse(" + lower_start(modelName) + ");\n")
            newfile.write("            if (!" + modelName + "Validate.success) {\n")
            newfile.write("                const errorMessage =\n")
            newfile.write("                    this.responseStatusService.showValidationError(\n")
            newfile.write("                        " + modelName + "Validate.error.errors,\n")
            newfile.write("                    );\n")
            newfile.write("\n")
            newfile.write("                return errorMessage;\n")
            newfile.write("            }\n")
            newfile.write("            await this." + lower_start(modelName) + "Service.edit" + modelName + "(" + lower_start(modelName) + ");\n")
            newfile.write("            return this.responseStatusService.showSuccess(\n")
            newfile.write("                'update',\n")
            newfile.write("                " + lower_start(modelName) + ",\n")
            newfile.write("            );\n")
            newfile.write("        } catch (error) {\n")
            newfile.write("            return this.responseStatusService.showCaughtException(error);\n")
            newfile.write("        }\n")
            newfile.write("    }\n")
            newfile.write("}\n")
        
folder_path = 'C:/Users/1/Desktop/Projects/MyPSM/mypsm-be/database/migrations'

for filename in os.listdir(folder_path):
    if filename.endswith(".ts"):
        migration_path = os.path.join(folder_path, filename)
        generate_model(migration_path)
        #print(filename)