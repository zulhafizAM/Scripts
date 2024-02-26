import sys
import os
import re
from pathlib import Path

# folderpath = os.getcwd()

def camel_to_snake(name):
    # Find capital letters and insert an underscore before them, then convert to lower case
    s1 = re.sub('(.)([A-Z][a-z]+)', r'\1_\2', name)
    return re.sub('([a-z0-9])([A-Z])', r'\1_\2', s1).lower()

def kebab_to_snake(s):
    return s.replace('-', '_')


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
    elif string[-6:] != "rocess" and string[-5:] != "tatus" and string[-4:] != "lass" and string[-1:] == "y":
        plural_string = string[:-1] + "ies"
    elif string[-6:] != "rocess" and string[-5:] != "tatus" and string[-4:] != "lass" and string[-1:] == "s":
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
        moduleName = migration_path.replace("customRoutes2Routes/Route\\", "").replace("Routes.ts", "")
        print(moduleName)
        
        for index, t in enumerate(text):
            
            if "routeName" in t:
                routeName = t.split(',')[0]
                actions = t.split('actions: ')[1].split('[')[1].split(']')[0]
                premodelName = routeName.replace('    { routeName: ', '').replace("'", '')
                if premodelName != '':
                    modelName = convert_string(premodelName)
                else: modelName = capital_start(moduleName)
                
                print(modelName)
                
                # validators #############################################################################################
                print(actions)
                if "'add'" in actions or "'edit'" in actions:
                    if not os.path.exists("customRoutes2Routes/validators/" + camel_to_snake(moduleName) + "/" + camel_to_snake(modelName)): 
                        os.makedirs("customRoutes2Routes/validators/" + camel_to_snake(moduleName) + "/" + camel_to_snake(modelName))
                        
                if "'add'" in actions:
                
                    validator_path = "customRoutes2Routes/validators/" + camel_to_snake(moduleName) + "/" + camel_to_snake(modelName) + "/add_" + camel_to_snake(moduleName) + "_" + camel_to_snake(modelName) + "_validator.ts"
                
                    with open(validator_path, 'w', encoding='utf-8', newline='\n') as newfile:
                        newfile.write("import vine from '@vinejs/vine'\n")
                        newfile.write("\n")
                        newfile.write("export const Add" + capital_start(moduleName) + capital_start(modelName) + "Validator = vine.compile(\n")
                        newfile.write("    vine.object({\n")
                        newfile.write("    })\n")
                        newfile.write(")\n")
                        
                if "'edit'" in actions:
                    
                    validator_path = "customRoutes2Routes/validators/" + camel_to_snake(moduleName) + "/" + camel_to_snake(modelName) + "/edit_" + camel_to_snake(moduleName) + "_" + camel_to_snake(modelName) + "_validator.ts"
                
                    with open(validator_path, 'w', encoding='utf-8', newline='\n') as newfile:
                        newfile.write("import vine from '@vinejs/vine'\n")
                        newfile.write("\n")
                        newfile.write("export const Edit" + capital_start(moduleName) + capital_start(modelName) + "Validator = vine.compile(\n")
                        newfile.write("    vine.object({\n")
                        newfile.write("    })\n")
                        newfile.write(")\n")
                # /validators #############################################################################################
                
                # services #############################################################################################
                if not os.path.exists("services/" + capital_start(moduleName)): 
                    os.makedirs("services/" + capital_start(moduleName))
                
                service_path= "services/" + capital_start(moduleName) + "/" + capital_start(moduleName) + modelName + "Services.ts"
            
                with open(service_path, 'w', encoding='utf-8', newline='\n') as newfile:
                    newfile.write("import db from '@adonisjs/lucid/services/db'\n")
                    newfile.write("import CommonServices from '#services/shared/common_service'\n")
                    newfile.write("export default class " + capital_start(moduleName) + modelName + "Services {\n")
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
                
        # controllers #############################################################################################
        controller_path = "customRoutes2Routes/controllers/" + camel_to_snake(plural(moduleName)) + "_controller.ts"
        with open(controller_path, 'w', encoding='utf-8', newline='\n') as newfile:
            newfile.write("import { roleUser } from '#abilities/main'\n")
            newfile.write("import { inject } from '@adonisjs/core/build/standalone';\n")
            newfile.write("import { error, fail, success } from 'App/Models/DTO/Shared/DefaultResponse';")
            for index, t in enumerate(text):
                
                if "routeName" in t:
                    routeName = t.split(',')[0]
                    actions = t.split('actions: ')[1].split('[')[1].split(']')[0]
                    premodelName = routeName.replace('    { routeName: ', '').replace("'", '')
                    if premodelName != '':
                        modelName = convert_string(premodelName)
                    else: modelName = capital_start(moduleName)
                    newfile.write("import " + capital_start(moduleName) + modelName + "Services from 'App/Services/" + capital_start(moduleName) + "/" + capital_start(moduleName) + modelName + "Services';\n")
            newfile.write("import { inject } from '@adonisjs/core'\n")
            newfile.write("import { HttpContext } from '@adonisjs/core/http'\n")
            newfile.write("import jsend from 'jsend'\n")
            for index, t in enumerate(text):
                
                if "routeName" in t:
                    routeName = t.split(',')[0]
                    actions = t.split('actions: ')[1].split('[')[1].split(']')[0]
                    premodelName = routeName.replace('    { routeName: ', '').replace("'", '')
                    if premodelName != '':
                        modelName = convert_string(premodelName)
                    else: modelName = capital_start(moduleName)
                    # if "'add'" in actions:
                    #     newfile.write("import Add" + capital_start(moduleName) + modelName + "Schema from 'App/validators/" + capital_start(moduleName) + "/" + modelName + "/Add" + capital_start(moduleName) + modelName + "Schema';\n")
                    # if "'edit'" in actions:                        
                    #     newfile.write("import Edit" + capital_start(moduleName) + modelName + "Schema from 'App/validators/" + capital_start(moduleName) + "/" + modelName + "/Edit" + capital_start(moduleName) + modelName + "Schema';\n")
            newfile.write("\n@inject()\n")
            newfile.write("export default class " + capital_start(plural(moduleName)) + "Controller {\n")
            newfile.write("    constructor(\n")
            for index, t in enumerate(text):
                if "routeName" in t:
                    routeName = t.split(',')[0]
                    actions = t.split('actions: ')[1].split('[')[1].split(']')[0]
                    premodelName = routeName.replace('    { routeName: ', '').replace("'", '')
                    if premodelName != '':
                        modelName = convert_string(premodelName)
                    else: modelName = capital_start(moduleName)
                    newfile.write("        protected " + moduleName + modelName + "Service: " + capital_start(moduleName) + modelName + "Services,\n")
            newfile.write("        ) {\n")
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
                        newfile.write("    async get" + capital_start(plural(modelName)) + "({ request, bouncer, response }: HttpContext) {\n")
                        newfile.write("        await bouncer.authorize(roleUser, [''])\n")
                        newfile.write("        const payload = await request.validateUsing(listFilterSchema)\n")
                        newfile.write("        return response.status(200).send(jsend.success(await this." + moduleName + capital_start(modelName) + "Service.get" + capital_start(plural(modelName)) + "(payload)))\n")
                        newfile.write("    }\n")
                    if "'get'" in actions:
                        newfile.write("    async get" + capital_start(modelName) + "({ request, response, bouncer }: HttpContext) {\n")
                        newfile.write("        await bouncer.authorize(roleUser, [''])\n")
                        newfile.write("        const payload = await request.validateUsing(getSchema)\n")
                        newfile.write("        return response\n")
                        newfile.write("            .status(200)\n")
                        newfile.write("            .send(jsend.success(await this." + moduleName + capital_start(modelName) + "Service." + capital_start(modelName) + "(payload.id)))\n")
                        newfile.write("    }\n")
                    if "'add'" in actions:
                        newfile.write("    async add" + modelName + "({ request, bouncer, response, auth }: HttpContext) {\n")
                        newfile.write("        await bouncer.authorize(roleUser, [''])\n")
                        newfile.write("        const payload = await request.validateUsing(Add" + capital_start(moduleName) + modelName + "Validator)\n")
                        newfile.write("        return response\n")
                        newfile.write("            .status(200)\n")
                        newfile.write("            .send(jsend.success(await this.service.add" + modelName + "(payload, auth.user!)))\n")
                        newfile.write("    }\n")
                        newfile.write("\n")
                    if "'edit'" in actions:
                        newfile.write("    async edit" + modelName + "({ request, bouncer, response, auth }: HttpContext) {\n")
                        newfile.write("        await bouncer.authorize(roleUser, [''])\n")
                        newfile.write("        const payload = await request.validateUsing(Edit" + capital_start(modelName) + modelName + "Validator)\n")
                        newfile.write("        return response\n")
                        newfile.write("            .status(200)\n")
                        newfile.write("            .send(jsend.success(await this.service.edit" + modelName + "(payload, auth.user!)))\n")
                        newfile.write("    }\n")
                        newfile.write("\n")
            newfile.write("}\n")

        # /controllers #############################################################################################
                
        # new_routes #############################################################################################
        controller_path = "customRoutes2Routes/new_routes/" + camel_to_snake(moduleName) + ".ts"
        with open(controller_path, 'w', encoding='utf-8', newline='\n') as newfile:
            newfile.write("const " + capital_start(plural(moduleName)) + "Controller = () => import('#controllers/employment/" + plural(camel_to_snake(moduleName)) + "_controller')\n")
            newfile.write("\n")
            newfile.write("import { middleware } from '#start/kernel'\n")
            newfile.write("import router from '@adonisjs/core/services/router'\n")
            newfile.write("\n")
            newfile.write("export default function " + camel_to_snake(moduleName) + "Routes() {\n")
            newfile.write("    router\n")
            newfile.write("        .group(() => {\n")
            for index, t in enumerate(text):
                
                if "routeName" in t:
                    routeName = t.split(',')[0]
                    actions = t.split('actions: ')[1].split('[')[1].split(']')[0]
                    premodelName = routeName.replace('    { routeName: ', '').replace("'", '')
                    if premodelName != '':
                        modelName = convert_string(premodelName)
                    else: modelName = capital_start(moduleName)
                    newfile.write("            router\n")
                    newfile.write("                .group(() => {\n")
                    if "list" in actions:
                        newfile.write("                    router.post('list', [" + capital_start(plural(moduleName)) + "Controller, 'get" + plural(capital_start(modelName)) + "'])\n")
                    if "get" in actions:
                        newfile.write("                    router.post('get', [" + capital_start(plural(moduleName)) + "Controller, 'get" + capital_start(modelName) + "'])\n")
                    if "add" in actions:
                        newfile.write("                    router.post('add', [" + capital_start(plural(moduleName)) + "Controller, 'add" + capital_start(modelName) + "'])\n")
                    if "edit" in actions:
                        newfile.write("                    router.put('edit', [" + capital_start(plural(moduleName)) + "Controller, 'edit" + capital_start(modelName) + "'])\n")
                    newfile.write("                })\n")
                    newfile.write("                .prefix('" + plural(camel_to_snake(modelName)) + "')\n")
            newfile.write("        })\n")
            newfile.write("        .prefix('" + camel_to_snake(moduleName) + "')\n")
            newfile.write("        .use(middleware.auth({ guards: ['api'] }))\n")
            newfile.write("}\n")
            
        # /new_routes #############################################################################################

        
folder_path = 'customRoutes2Routes/Route'

for filename in os.listdir(folder_path):
    if filename.endswith(".ts"):
        migration_path = os.path.join(folder_path, filename)
        generate_model(migration_path)
        #print(filename)