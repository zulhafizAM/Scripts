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

def convert_string(kebab: str) -> str:
    parts = kebab.split('-')
    camel = ''.join(part if idx == 0 else part.capitalize() for idx, part in enumerate(parts))
    
    return camel[0].capitalize() + camel[1:]

def generate_model(migration_path):
    with open(migration_path, mode='r', encoding="utf-8") as myfile:
        text = myfile.readlines()
        moduleName = migration_path.replace("Route\\", "").replace("Routes.ts", "")
        print(moduleName)
        
        for index, t in enumerate(text):
            
            if "routeName" in t:
                routeName = t.split(',')[0]
                actions = t.split('actions: ')[1].split('[')[1].split(']')[0]
                premodelName = routeName.replace('    { routeName: ', '').replace("'", '')
                if premodelName != '':
                    modelName = convert_string(premodelName)
                else: modelName = capital_start(moduleName)
                    
                # Validator #############################################################################################
                if not os.path.exists("Validator/" + capital_start(moduleName) + "/" + modelName): 
                    os.makedirs("Validator/" + capital_start(moduleName) + "/" + modelName)
                    
                if "'list'" in actions:
                    
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
                        
                if "'add'" in actions:
                
                    validator_path = "Validator/" + capital_start(moduleName) + "/" + modelName + "/Add" + capital_start(moduleName) + modelName + "Schema.ts"
                
                    with open(validator_path, 'w', encoding='utf-8', newline='\n') as newfile:
                        newfile.write("import { z } from 'zod';\n")
                        newfile.write("\n")
                        newfile.write("const Add" + capital_start(moduleName) + modelName + "Schema = z\n")
                        newfile.write("    .object({\n")
                        newfile.write("    })\n")
                        newfile.write("\n")
                        newfile.write("export default Add" + capital_start(moduleName) + modelName + "Schema;\n")
                        
                if "'edit'" in actions:
                    
                    validator_path = "Validator/" + capital_start(moduleName) + "/" + modelName + "/Edit" + capital_start(moduleName) + modelName + "Schema.ts"
                
                    with open(validator_path, 'w', encoding='utf-8', newline='\n') as newfile:
                        newfile.write("import { z } from 'zod';\n")
                        newfile.write("\n")
                        newfile.write("const Edit" + capital_start(moduleName) + modelName + "Schema = z\n")
                        newfile.write("    .object({\n")
                        newfile.write("        id: z.number().int().nonnegative(),\n")
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
                    newfile.write("import BaseService from 'App/Services/Shared/BaseService';\n")
                    newfile.write("export default class " + capital_start(moduleName) + modelName + "Services extends BaseService {\n")
                    if "'list'" in actions:
                        newfile.write("    public async get" + plural(modelName) + "(\n")
                        newfile.write("        payload,\n")
                        newfile.write("    ): Promise<DefaultListResponse<" + capital_start(moduleName) + plural(modelName) + "Response>> {\n")
                        newfile.write("        let " + lower_start(plural(modelName)) + " = new DefaultListResponse<" + capital_start(moduleName) + plural(modelName) + "Response>();\n")
                        newfile.write("        const " + lower_start(modelName) + "List = await " + modelName + ".query()\n")
                        newfile.write("        " + lower_start(plural(modelName)) + " = {\n")
                        newfile.write("            meta: {\n")
                        newfile.write("                pageNum: payload.pageNum,\n")
                        newfile.write("                totalData: " + lower_start(modelName) + "List.length,\n")
                        newfile.write("                totalPage: Math.ceil(" + lower_start(modelName) + "List.length / payload.pageSize),\n")
                        newfile.write("                pageSize: 0,\n")
                        newfile.write("            },\n")
                        newfile.write("            dataList: " + lower_start(modelName) + "List.map((result) => ({\n")
                        newfile.write("                id: Number(result.id),")
                        newfile.write("            })),\n")
                        newfile.write("        } as DefaultListResponse<" + capital_start(moduleName) + plural(modelName) + "Response>;\n")
                        newfile.write("\n")
                        newfile.write("        if (payload.orderBy !== null && payload.orderBy !== '') {\n")
                        newfile.write("            this.ordering(payload, " + lower_start(plural(modelName)) + ", 'dataList');\n")
                        newfile.write("        }\n")
                        newfile.write("\n")
                        newfile.write("        " + lower_start(plural(modelName)) + ".dataList = " + lower_start(plural(modelName)) + ".dataList.slice(\n")
                        newfile.write("            (payload.pageNum - 1) * payload.pageSize,\n")
                        newfile.write("            payload.pageNum * payload.pageSize,\n")
                        newfile.write("        );\n")
                        newfile.write("        " + lower_start(plural(modelName)) + ".meta!.pageSize = " + lower_start(plural(modelName)) + ".dataList.length;\n")
                        newfile.write("        return " + lower_start(plural(modelName)) + ";\n")
                        newfile.write("    }\n")
                    if "'get'" in actions:
                        newfile.write("    public async get" + modelName + "(\n")
                        newfile.write("        payload,\n")
                        newfile.write("    ): Promise<DefaultDataResponse<" + capital_start(moduleName) + modelName + "Response>> {\n")
                        newfile.write("        let " + lower_start(modelName) + " = new DefaultDataResponse<" + capital_start(moduleName) + modelName + "Response>();\n")
                        newfile.write("        const read" + modelName + " = await " + modelName + ".query()\n")
                        newfile.write("            .where('id', payload.id)\n")
                        newfile.write("            .firstOrFail();\n")
                        newfile.write("        " + lower_start(modelName) + " = {\n")
                        newfile.write("            details: {\n")
                        newfile.write("                id: Number(read" + modelName + ".id),\n")
                        newfile.write("            },\n")
                        newfile.write("        } as DefaultDataResponse<" + capital_start(moduleName) + modelName + "Response>;\n")
                        newfile.write("        return " + lower_start(modelName) + ";\n")
                        newfile.write("    }\n")
                    if "'add'" in actions:
                        newfile.write("    public async add" + modelName + "(\n")
                        newfile.write("        payload,\n")
                        newfile.write("    ): Promise<DefaultDataResponse<" + capital_start(moduleName) + modelName + "Response>> {\n")
                        newfile.write("        const transaction = await Database.transaction();\n")
                        newfile.write("        try {\n")
                        newfile.write("            let response = new DefaultDataResponse<" + capital_start(moduleName) + modelName + "Response>();\n")
                        newfile.write("            let " + lower_start(modelName) + " = new " + modelName + "();\n")
                        newfile.write("\n")
                        newfile.write("            await " + lower_start(modelName) + ".save();\n")
                        newfile.write("\n")
                        newfile.write("            await transaction.commit();\n")
                        newfile.write("            response = {\n")
                        newfile.write("                details: {\n")
                        newfile.write("                    id: Number(" + lower_start(modelName) + ".id),\n")
                        newfile.write("                },\n")
                        newfile.write("            } as DefaultDataResponse<" + capital_start(moduleName) + modelName + "Response>;\n")
                        newfile.write("            return response;\n")
                        newfile.write("        } catch (error) {\n")
                        newfile.write("            await transaction.rollback();\n")
                        newfile.write("            console.log(error);\n")
                        newfile.write("            throw error;\n")
                        newfile.write("        }\n")
                        newfile.write("    }\n")
                    if "'edit'" in actions:    
                        newfile.write("    public async edit" + modelName + "(\n")
                        newfile.write("        payload,\n")
                        newfile.write("    ): Promise<DefaultDataResponse<" + capital_start(moduleName) + modelName + "Response>> {\n")
                        newfile.write("        const transaction = await Database.transaction();\n")
                        newfile.write("        try {\n")
                        newfile.write("            let response = new DefaultDataResponse<" + capital_start(moduleName) + modelName + "Response>();\n")
                        newfile.write("            const " + lower_start(modelName) + " = await " + modelName + ".query()\n")
                        newfile.write("                .where('id', payload.id)\n")
                        newfile.write("                .firstOrFail();\n")
                        newfile.write("\n")
                        newfile.write("            await " + lower_start(modelName) + ".save();\n")
                        newfile.write("\n")
                        newfile.write("            await transaction.commit();\n")
                        newfile.write("            response = {\n")
                        newfile.write("                details: {\n")
                        newfile.write("                    id: Number(" + lower_start(modelName) + ".id),\n")
                        newfile.write("                },\n")
                        newfile.write("            } as DefaultDataResponse<" + capital_start(moduleName) + modelName + "Response>;\n")
                        newfile.write("            return response;\n")
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
                    newfile.write("export default class " + capital_start(moduleName) + plural(modelName) + "Response {\n")
                    newfile.write("    public id: number;\n")
                    newfile.write("}\n")
                    
                response_path = "Response/" + capital_start(moduleName) + "/" + modelName + "/Get" + capital_start(moduleName) + modelName + "Response.ts"
            
                with open(response_path, 'w', encoding='utf-8', newline='\n') as newfile:
                    newfile.write("export default class " + capital_start(moduleName) + modelName + "Response {\n")
                    newfile.write("    public id: number;\n")
                    newfile.write("}\n")


                # /Response #############################################################################################
                
        # Controller #############################################################################################
        controller_path = "Controller/" + capital_start(plural(moduleName)) + "Controller.ts"
        with open(controller_path, 'w', encoding='utf-8', newline='\n') as newfile:
            newfile.write("import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';\n")
            newfile.write("import { inject } from '@adonisjs/core/build/standalone';\n")
            newfile.write("import BaseController from './BaseController';\n")
            newfile.write("import { error, fail, success } from 'App/Models/DTO/Shared/DefaultResponse';")
            for index, t in enumerate(text):
                
                if "routeName" in t:
                    routeName = t.split(',')[0]
                    actions = t.split('actions: ')[1].split('[')[1].split(']')[0]
                    premodelName = routeName.replace('    { routeName: ', '').replace("'", '')
                    print(premodelName)
                    if premodelName != '':
                        modelName = convert_string(premodelName)
                    else: modelName = capital_start(moduleName)
                    newfile.write("import " + capital_start(moduleName) + modelName + "Services from 'App/Services/" + capital_start(moduleName) + "/" + capital_start(moduleName) + modelName + "Services';\n")
            newfile.write("import GetByIdSchema from 'App/Validators/Shared/GetByIdValidator';\n")
            for index, t in enumerate(text):
                
                if "routeName" in t:
                    routeName = t.split(',')[0]
                    actions = t.split('actions: ')[1].split('[')[1].split(']')[0]
                    premodelName = routeName.replace('    { routeName: ', '').replace("'", '')
                    if premodelName != '':
                        modelName = convert_string(premodelName)
                    else: modelName = capital_start(moduleName)
                    if "'list'" in actions:
                        newfile.write("import List" + capital_start(moduleName) + modelName + "Schema from 'App/Validators/" + capital_start(moduleName) + "/" + modelName + "/List" + capital_start(moduleName) + modelName + "Schema';\n")
                    if "'add'" in actions:
                        newfile.write("import Add" + capital_start(moduleName) + modelName + "Schema from 'App/Validators/" + capital_start(moduleName) + "/" + modelName + "/Add" + capital_start(moduleName) + modelName + "Schema';\n")
                    if "'edit'" in actions:                        
                        newfile.write("import Edit" + capital_start(moduleName) + modelName + "Schema from 'App/Validators/" + capital_start(moduleName) + "/" + modelName + "/Edit" + capital_start(moduleName) + modelName + "Schema';\n")
            newfile.write("\n@inject()\n")
            newfile.write("export default class " + capital_start(plural(moduleName)) + "Controller extends BaseController {\n")
            newfile.write("    constructor(\n")
            for index, t in enumerate(text):
                if "routeName" in t:
                    routeName = t.split(',')[0]
                    actions = t.split('actions: ')[1].split('[')[1].split(']')[0]
                    premodelName = routeName.replace('    { routeName: ', '').replace("'", '')
                    if premodelName != '':
                        modelName = convert_string(premodelName)
                    else: modelName = capital_start(moduleName)
                    newfile.write("        private " + moduleName + modelName + "Service: " + capital_start(moduleName) + modelName + "Services,\n")
            newfile.write("        ) {\n")
            newfile.write("        super();\n")
            newfile.write("    }\n")
            newfile.write("\n")
            for index, t in enumerate(text):
                
                if "routeName" in t:
                    routeName = t.split(',')[0]
                    actions = t.split('actions: ')[1].split('[')[1].split(']')[0]
                    premodelName = routeName.replace('    { routeName: ', '').replace("'", '')
                    if premodelName != '':
                        modelName = convert_string(premodelName)
                    else: modelName = capital_start(moduleName)
                    if "'list'" in actions:
                        newfile.write("    public async get" + plural(modelName) + "({ request, response }: HttpContextContract) {\n")
                        newfile.write("        try {\n")
                        newfile.write("            const requestParams = request.body();\n")
                        newfile.write("            const validationResult =\n")
                        newfile.write("                List" + capital_start(moduleName) + modelName + "Schema.safeParse(requestParams);\n")
                        newfile.write("\n")
                        newfile.write("            if (!validationResult.success) {\n")
                        newfile.write("                return response\n")
                        newfile.write("                    .status(400)\n")
                        newfile.write("                    .send(fail(validationResult.error.errors));\n")
                        newfile.write("            }\n")
                        newfile.write("\n")
                        newfile.write("            const result =\n")
                        newfile.write("                await this." + moduleName + modelName + "Service.get" + plural(modelName) + "(requestParams);\n")
                        newfile.write("            return response.status(200).send(success(result));\n")
                        newfile.write("        } catch (e) {\n")
                        newfile.write("            return response\n")
                        newfile.write("                .status(409)\n")
                        newfile.write("                .send(error('An error occured while processing your request'));\n")
                        newfile.write("        }\n")
                        newfile.write("    }\n")
                    if "'get'" in actions:
                        newfile.write("    public async get" + modelName + "({ request, response }: HttpContextContract) {\n")
                        newfile.write("        const data = request.body();\n")
                        newfile.write("        let validate = GetByIdSchema.safeParse(data);\n")
                        newfile.write("        try {\n")
                        newfile.write("            if (!validate.success)\n")
                        newfile.write("                return response.status(400).send(fail(validate.error.errors));\n")
                        newfile.write("            const result = await this." + moduleName + modelName + "Service.get" + modelName + "(\n")
                        newfile.write("                data,\n")
                        newfile.write("            );\n")
                        newfile.write("            return response.status(200).send(success(result));\n")
                        newfile.write("        } catch (e) {\n")
                        newfile.write("            return response\n")
                        newfile.write("                .status(409)\n")
                        newfile.write("                .send(error('An error occured while processing your request'));\n")
                        newfile.write("        }\n")
                        newfile.write("    }\n")
                    if "'add'" in actions:
                        newfile.write("\n")
                        newfile.write("    public async add" + modelName + "({ request }: HttpContextContract) {\n")
                        newfile.write("        return this.validateAndProcessRequest(\n")
                        newfile.write("            request,\n")
                        newfile.write("            this." + moduleName + modelName + "Service.add" + modelName + ",\n")
                        newfile.write("            Add" + capital_start(moduleName) + modelName + "Schema,\n")
                        newfile.write("        );\n")
                        newfile.write("    }\n")
                        newfile.write("\n")
                    if "'edit'" in actions:
                        newfile.write("    public async edit" + modelName + "({ request }: HttpContextContract) {\n")
                        newfile.write("        return this.validateAndProcessRequest(\n")
                        newfile.write("            request,\n")
                        newfile.write("            this." + moduleName + modelName + "Service.edit" + modelName + ",\n")
                        newfile.write("            Edit" + capital_start(moduleName) + modelName + "Schema,\n")
                        newfile.write("        );\n")
                        newfile.write("    }\n")
            newfile.write("}\n")

        # /Controller #############################################################################################

        
folder_path = 'Route'

for filename in os.listdir(folder_path):
    if filename.endswith(".ts"):
        migration_path = os.path.join(folder_path, filename)
        generate_model(migration_path)
        #print(filename)