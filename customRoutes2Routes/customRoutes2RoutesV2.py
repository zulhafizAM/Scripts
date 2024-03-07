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

def depluralize(string):
    # Split the string into words by capitalizing the first letter of each word
    capitalized_word = string
    
    if "process" not in capitalized_word and "status" not in capitalized_word and capitalized_word[-3:] != "ies":
        converted_string = capitalized_word.rstrip('s')
    
    elif capitalized_word[-3:] == "ies":
        converted_string = capitalized_word.rstrip('ies') + "y"
    
    else:
        converted_string = capitalized_word

    return converted_string

def snake_to_camel(snake_str):
    # Split the string into words
    words = snake_str.split('_')

    # Convert to camelCase: lowercase the first word
    # and capitalize the rest
    return words[0] + ''.join(word.capitalize() for word in words[1:])

def snake_to_pascal(snake_str):
    # Split the string into words and capitalize each one
    words = snake_str.split('_')
    return ''.join(word.capitalize() for word in words)

def pascal_to_snake(pascal_str):
    if not pascal_str:
        return ""

    snake_case = [pascal_str[0].lower()]

    for char in pascal_str[1:]:
        if char.isupper():
            snake_case.extend(['_', char.lower()])
        else:
            snake_case.append(char)

    return ''.join(snake_case)

def generate_model(migration_path):
    with open(migration_path, mode='r', encoding="utf-8") as myfile:
        text = myfile.readlines()
        moduleName = migration_path.replace("customRoutes2Routes/Route\\", "").replace("Routes.ts", "")
        print(moduleName)
        
        for index, t in enumerate(text):
            
            if "routeName" in t and "actions" in t:
                routeName = t.split(',')[0]
                actions = t.split('actions: ')[1].split('[')[1].split(']')[0]
                premodelName = routeName.replace('    { routeName: ', '').replace("'", '')
                if premodelName != '':
                    modelName = convert_string(premodelName)
                else: modelName = capital_start(moduleName)
                
                print(modelName)
                
                # validators #############################################################################################
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
                if not os.path.exists("customRoutes2Routes/services/" + camel_to_snake(moduleName)): 
                    os.makedirs("customRoutes2Routes/services/" + camel_to_snake(moduleName))
                
                service_path= "customRoutes2Routes/services/" + camel_to_snake(moduleName) + "/" + camel_to_snake(moduleName) + "_" + pascal_to_snake(modelName) + "_services.ts"
            
                with open(service_path, 'w', encoding='utf-8', newline='\n') as newfile:
                    newfile.write("import db from '@adonisjs/lucid/services/db'\n")
                    newfile.write("import CommonServices from '#services/shared/common_service'\n")
                    newfile.write("import { AccessToken } from '@adonisjs/auth/access_tokens'\n")
                    newfile.write("import { DateTime } from 'luxon'\n")
                    newfile.write("import { inject } from '@adonisjs/core'\n")
                    newfile.write("import UserAccount from '#models/user_account'\n")
                    newfile.write("@inject()\n")
                    newfile.write("export default class " + capital_start(moduleName) + modelName + "Services {\n")
                    newfile.write("    constructor(protected commonService: CommonServices) {}\n")
                    if "'list'" in actions:
                        newfile.write("    async get" + plural(modelName) + "(payload: Record<string, any>) {\n")
                        newfile.write("        try {\n")
                        newfile.write("            const query = await " + modelName + ".query()\n")
                        newfile.write("            let response = {\n")
                        newfile.write("                meta: {\n")
                        newfile.write("                    pageNum: payload.pageNum,\n")
                        newfile.write("                    totalData: query.length,\n")
                        newfile.write("                    totalPage: Math.ceil(query.length / payload.pageSize),\n")
                        newfile.write("                    pageSize: 0,\n")
                        newfile.write("                },\n")
                        newfile.write("                dataList: query.map((result) => ({\n")
                        newfile.write("                    id: Number(result.id),")
                        newfile.write("                })),\n")
                        newfile.write("            }\n")
                        newfile.write("    \n")
                        newfile.write("            if (payload.orderBy !== null) {\n")
                        newfile.write("                this.commonService.ordering(payload, response, 'dataList')\n")
                        newfile.write("            }\n")
                        newfile.write("    \n")
                        newfile.write("            response.dataList = response.dataList.slice(\n")
                        newfile.write("                (payload.pageNum - 1) * payload.pageSize,\n")
                        newfile.write("                payload.pageNum * payload.pageSize,\n")
                        newfile.write("            );\n")
                        newfile.write("            return response\n")
                        newfile.write("        } catch (error) {\n")
                        newfile.write("            console.log(error)\n")
                        newfile.write("            throw error\n")
                        newfile.write("        }\n")
                        newfile.write("    }\n")
                    if "'get'" in actions:
                        newfile.write("    async get" + modelName + "(payload: Record<string, any>) {\n")
                        newfile.write("        try {\n")
                        newfile.write("            const query = await " + modelName + ".query()\n")
                        newfile.write("                .where('id', payload.id)\n")
                        newfile.write("                .firstOrFail()\n")
                        newfile.write("            let response = {\n")
                        newfile.write("                details: {\n")
                        newfile.write("                    id: Number(query.id),\n")
                        newfile.write("                },\n")
                        newfile.write("            }\n")
                        newfile.write("            return response\n")
                        newfile.write("        } catch (error) {\n")
                        newfile.write("            console.log(error)\n")
                        newfile.write("            throw error\n")
                        newfile.write("        }\n")
                        newfile.write("    }\n")
                    if "'add'" in actions:
                        newfile.write("    async add" + modelName + "(\n")
                        newfile.write("        payload: Record<string, any>,\n")
                        newfile.write("        user: (UserAccount & { currentAccessToken: AccessToken }) | undefined\n")
                        newfile.write("    ){\n")
                        newfile.write("        const trx = await db.transaction()\n")
                        newfile.write("        try {\n")
                        newfile.write("            let create" + modelName + " = new " + modelName + "()\n")
                        newfile.write("            create" + modelName + ".useTransaction(trx)\n")
                        newfile.write("            create" + modelName + ".createdBy = user!.username\n")
                        newfile.write("\n")
                        newfile.write("            await create" + modelName + ".save()\n")
                        newfile.write("\n")
                        newfile.write("            await trx.commit()\n")
                        newfile.write("            let response = {\n")
                        newfile.write("                details: {\n")
                        newfile.write("                    id: Number(create" + modelName + ".id),\n")
                        newfile.write("                },\n")
                        newfile.write("            }\n")
                        newfile.write("            return response\n")
                        newfile.write("        } catch (error) {\n")
                        newfile.write("            await trx.rollback()\n")
                        newfile.write("            console.log(error)\n")
                        newfile.write("            throw error\n")
                        newfile.write("        }\n")
                        newfile.write("    }\n")
                    if "'edit'" in actions:    
                        newfile.write("    async edit" + modelName + "(\n")
                        newfile.write("        payload: Record<string, any>,\n")
                        newfile.write("        user: (UserAccount & { currentAccessToken: AccessToken }) | undefined\n")
                        newfile.write("    ){\n")
                        newfile.write("        const trx = await db.transaction()\n")
                        newfile.write("        try {\n")
                        newfile.write("            let edit" + modelName + " = await " + modelName + ".query()\n")
                        newfile.write("                .where('id', payload.id)\n")
                        newfile.write("                .firstOrFail()\n")
                        newfile.write("            edit" + modelName + ".useTransaction(trx)\n")
                        newfile.write("            edit" + modelName + ".modifiedBy = user!.username\n")
                        newfile.write("\n")
                        newfile.write("            await edit" + modelName + ".save()\n")
                        newfile.write("\n")
                        newfile.write("            await trx.commit()\n")
                        newfile.write("            let response = {\n")
                        newfile.write("                details: {\n")
                        newfile.write("                    id: Number(edit" + modelName + ".id),\n")
                        newfile.write("                },\n")
                        newfile.write("            }\n")
                        newfile.write("            return response\n")
                        newfile.write("        } catch (error) {\n")
                        newfile.write("            await trx.rollback()\n")
                        newfile.write("            console.log(error)\n")
                        newfile.write("            throw error\n")
                        newfile.write("        }\n")
                        newfile.write("    }\n")
                    newfile.write("}\n")

                # /Service #############################################################################################
                
        # controllers #############################################################################################
        controller_path = "customRoutes2Routes/controllers/" + camel_to_snake(plural(moduleName)) + "_controller.ts"
        with open(controller_path, 'w', encoding='utf-8', newline='\n') as newfile:
            newfile.write("import { roleUser } from '#abilities/main'\n")
            for index, t in enumerate(text):
                
                if "routeName" in t and "actions" in t:
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
                
                if "routeName" in t and "actions" in t:
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
                if "routeName" in t and "actions" in t:
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
                
                if "routeName" in t and "actions" in t:
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
                        newfile.write("            .send(jsend.success(await this." + moduleName + capital_start(modelName) + "Service.get" + capital_start(modelName) + "(payload.id)))\n")
                        newfile.write("    }\n")
                    if "'add'" in actions:
                        newfile.write("    async add" + modelName + "({ request, bouncer, response, auth }: HttpContext) {\n")
                        newfile.write("        await bouncer.authorize(roleUser, [''])\n")
                        newfile.write("        const payload = await request.validateUsing(Add" + capital_start(moduleName) + modelName + "Validator)\n")
                        newfile.write("        return response\n")
                        newfile.write("            .status(200)\n")
                        newfile.write("            .send(jsend.success(await this." + moduleName + capital_start(modelName) + "Service.add" + modelName + "(payload, auth.user!)))\n")
                        newfile.write("    }\n")
                        newfile.write("\n")
                    if "'edit'" in actions:
                        newfile.write("    async edit" + modelName + "({ request, bouncer, response, auth }: HttpContext) {\n")
                        newfile.write("        await bouncer.authorize(roleUser, [''])\n")
                        newfile.write("        const payload = await request.validateUsing(Edit" + capital_start(moduleName) + modelName + "Validator)\n")
                        newfile.write("        return response\n")
                        newfile.write("            .status(200)\n")
                        newfile.write("            .send(jsend.success(await this." + moduleName + capital_start(modelName) + "Service.edit" + modelName + "(payload, auth.user!)))\n")
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
                
                if "routeName" in t and "actions" in t:
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
                    newfile.write("                .prefix('" + camel_to_snake(modelName) + "')\n")
            newfile.write("        })\n")
            newfile.write("        .prefix('" + camel_to_snake(moduleName) + "')\n")
            newfile.write("        .use(middleware.auth({ guards: ['api'] }))\n")
            newfile.write("}\n")
            
        # /new_routes #############################################################################################
        
        # postman #################################################################################################
        with open(migration_path, mode='r', encoding="utf-8") as myfile:
            print(actions)
            text = myfile.readlines()
            model_path = "customRoutes2Routes/newRoutes.groovy"
        
            with open(model_path, 'w', encoding='utf-8-sig') as newfile:
                
                newfile.write('{\n')
                newfile.write('  "info": {\n')
                newfile.write('      "_postman_id": "your-collection-id",\n')
                newfile.write('      "name": "' + snake_to_pascal(moduleName) + ' Collection",\n')
                newfile.write('      "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"\n')
                newfile.write('  },\n')
                newfile.write('  "item": [\n')
                newfile.write('      {\n')
                newfile.write('          "name": "' + snake_to_pascal(moduleName) + '",\n')
                newfile.write('          "item": [\n')
                
                k = 1
                for index, t in enumerate(text):
                    k = k + 1
                    if "routeName" in t and "actions" in t:
                        routeName = t.split(',')[0]
                        actions = t.split('actions: ')[1].split('[')[1].split(']')[0]
                        premodelName = routeName.replace('    { routeName: ', '').replace("'", '')
                        if premodelName != '':
                            modelName = convert_string(premodelName)
                        else: modelName = capital_start(moduleName)
                        print(modelName)
                        print(actions)
                        
                        routeSnake = pascal_to_snake(modelName)
                        routePascal = snake_to_pascal(modelName)
                        newfile.write('              {\n')
                        newfile.write('                  "name": "' + routePascal + '",\n')
                        newfile.write('                  "item": [\n')
                        i = 0
                        if 'list' in actions:
                            i = i + 1
                            newfile.write('                      {\n')
                            newfile.write('                          "name": "get' + plural(routePascal) + '",\n')
                            newfile.write('                          "event": [\n')
                            newfile.write('                              {\n')
                            newfile.write('                                  "listen": "prerequest",\n')
                            newfile.write('                                  "script": {\n')
                            newfile.write('                                      "type": "text/javascript",\n')
                            newfile.write('                                      "exec": [\n')
                            newfile.write('                                          "pm.collectionVariables.set(\\"CurrentRequest\\", \\"listFilter\\");"\n')
                            newfile.write('                                          \n')
                            newfile.write('                                      ]\n')
                            newfile.write('                                  }\n')
                            newfile.write('                              }\n')
                            newfile.write('                          ],\n')
                            newfile.write('                          "request": {\n')
                            newfile.write('                              "method": "POST",\n')
                            newfile.write('                              "header": [\n')
                            newfile.write('                                  {\n')
                            newfile.write('                                      "key": "Content-Type",\n')
                            newfile.write('                                      "value": "application/json"\n')
                            newfile.write('                                  }\n')
                            newfile.write('                              ],\n')
                            newfile.write('                              "body": {\n')
                            newfile.write('                                  "mode": "raw",\n')
                            newfile.write('                                  "raw": "{\\n    \\"pageNum\\": 1,\\n    \\"pageSize\\": 5,\\n    \\"orderBy\\": \\"\\",\\n    \\"orderType\\": 0,\\n    \\"filter\\": {\\n        \\"code\\": \\"\\",\\n        \\"description\\": \\"\\"\\n    }\\n}"\n')
                            newfile.write('                              },\n')
                            newfile.write('                              "url": {\n')
                            newfile.write('                              "raw": "{{Url}}/medical/' + pascal_to_snake(capital_start(moduleName)) + '/' + routeSnake + '/list",\n')
                            newfile.write('                              "host": [\n')
                            newfile.write('                                  "{{Url}}"\n')
                            newfile.write('                              ],\n')
                            newfile.write('                              "path": [\n')
                            newfile.write('                                  "medical",\n')
                            newfile.write('                                  "' + pascal_to_snake(capital_start(moduleName)) + '",\n')
                            newfile.write('                                  "' + routeSnake + '",\n')
                            newfile.write('                                  "list"\n')
                            newfile.write('                              ]\n')
                            newfile.write('                          }\n')
                            newfile.write('                          },\n')
                            newfile.write('                          "response": []\n')
                            if i < len(actions.split(',')):
                                newfile.write('                      },\n')
                            else:
                                newfile.write('                      }\n')
                        
                        if 'get' in actions:
                            i = i + 1
                            newfile.write('                      {\n')
                            newfile.write('                          "name": "get' + routePascal + '",\n')
                            newfile.write('                          "event": [\n')
                            newfile.write('                              {\n')
                            newfile.write('                                  "listen": "prerequest",\n')
                            newfile.write('                                  "script": {\n')
                            newfile.write('                                      "type": "text/javascript",\n')
                            newfile.write('                                      "exec": [\n')
                            newfile.write('                                          "pm.collectionVariables.set(\\"CurrentRequest\\", \\"details\\");"\n')
                            newfile.write('                                          \n')
                            newfile.write('                                      ]\n')
                            newfile.write('                                  }\n')
                            newfile.write('                              }\n')
                            newfile.write('                          ],\n')
                            newfile.write('                          "request": {\n')
                            newfile.write('                              "method": "POST",\n')
                            newfile.write('                              "header": [\n')
                            newfile.write('                                  {\n')
                            newfile.write('                                      "key": "Content-Type",\n')
                            newfile.write('                                      "value": "application/json"\n')
                            newfile.write('                                  }\n')
                            newfile.write('                              ],\n')
                            newfile.write('                              "body": {\n')
                            newfile.write('                                  "mode": "raw",\n')
                            newfile.write('                                  "raw": "{\\n    \\"id\\": 10000\\n}"\n')
                            newfile.write('                              },\n')
                            newfile.write('                              "url": {\n')
                            newfile.write('                              "raw": "{{Url}}/medical/' + pascal_to_snake(capital_start(moduleName)) + '/' + routeSnake + '/get",\n')
                            newfile.write('                              "host": [\n')
                            newfile.write('                                  "{{Url}}"\n')
                            newfile.write('                              ],\n')
                            newfile.write('                              "path": [\n')
                            newfile.write('                                  "medical",\n')
                            newfile.write('                                  "' + pascal_to_snake(capital_start(moduleName)) + '",\n')
                            newfile.write('                                  "' + routeSnake + '",\n')
                            newfile.write('                                  "get"\n')
                            newfile.write('                              ]\n')
                            newfile.write('                          }\n')
                            newfile.write('                          },\n')
                            newfile.write('                          "response": []\n')
                            if i < len(actions.split(',')):
                                newfile.write('                      },\n')
                            else:
                                newfile.write('                      }\n')
                        
                        if 'add' in actions:
                            i = i + 1
                            newfile.write('                      {\n')
                            newfile.write('                          "name": "add' + depluralize(routePascal) + '",\n')
                            newfile.write('                          "event": [\n')
                            newfile.write('                              {\n')
                            newfile.write('                                  "listen": "prerequest",\n')
                            newfile.write('                                  "script": {\n')
                            newfile.write('                                      "type": "text/javascript",\n')
                            newfile.write('                                      "exec": [\n')
                            newfile.write('                                          "pm.collectionVariables.set(\\"CurrentRequest\\", \\"details\\");"\n')
                            newfile.write('                                          \n')
                            newfile.write('                                      ]\n')
                            newfile.write('                                  }\n')
                            newfile.write('                              }\n')
                            newfile.write('                          ],\n')
                            newfile.write('                          "request": {\n')
                            newfile.write('                              "method": "POST",\n')
                            newfile.write('                              "header": [\n')
                            newfile.write('                                  {\n')
                            newfile.write('                                      "key": "Content-Type",\n')
                            newfile.write('                                      "value": "application/json"\n')
                            newfile.write('                                  }\n')
                            newfile.write('                              ],\n')
                            newfile.write('                              "body": {\n')
                            newfile.write('                                  "mode": "raw",\n')
                            newfile.write('                                  "raw": "{\\n    \\n}"\n')
                            newfile.write('                              },\n')
                            newfile.write('                              "url": {\n')
                            newfile.write('                              "raw": "{{Url}}/medical/' + pascal_to_snake(capital_start(moduleName)) + '/' + routeSnake + '/add",\n')
                            newfile.write('                              "host": [\n')
                            newfile.write('                                  "{{Url}}"\n')
                            newfile.write('                              ],\n')
                            newfile.write('                              "path": [\n')
                            newfile.write('                                  "medical",\n')
                            newfile.write('                                  "' + pascal_to_snake(capital_start(moduleName)) + '",\n')
                            newfile.write('                                  "' + routeSnake + '",\n')
                            newfile.write('                                  "add"\n')
                            newfile.write('                              ]\n')
                            newfile.write('                          }\n')
                            newfile.write('                          },\n')
                            newfile.write('                          "response": []\n')
                            if i < len(actions.split(',')):
                                newfile.write('                      },\n')
                            else:
                                newfile.write('                      }\n')
                            
                        if 'edit' in actions:
                            i = i + 1
                            newfile.write('                      {\n')
                            newfile.write('                          "name": "edit' + depluralize(routePascal) + '",\n')
                            newfile.write('                          "event": [\n')
                            newfile.write('                              {\n')
                            newfile.write('                                  "listen": "prerequest",\n')
                            newfile.write('                                  "script": {\n')
                            newfile.write('                                      "type": "text/javascript",\n')
                            newfile.write('                                      "exec": [\n')
                            newfile.write('                                          "pm.collectionVariables.set(\\"CurrentRequest\\", \\"details\\");"\n')
                            newfile.write('                                          \n')
                            newfile.write('                                      ]\n')
                            newfile.write('                                  }\n')
                            newfile.write('                              }\n')
                            newfile.write('                          ],\n')
                            newfile.write('                          "request": {\n')
                            newfile.write('                              "method": "PUT",\n')
                            newfile.write('                              "header": [\n')
                            newfile.write('                                  {\n')
                            newfile.write('                                      "key": "Content-Type",\n')
                            newfile.write('                                      "value": "application/json"\n')
                            newfile.write('                                  }\n')
                            newfile.write('                              ],\n')
                            newfile.write('                              "body": {\n')
                            newfile.write('                                  "mode": "raw",\n')
                            newfile.write('                                  "raw": "{\\n    \\n}"\n')
                            newfile.write('                              },\n')
                            newfile.write('                              "url": {\n')
                            newfile.write('                                "raw": "{{Url}}/medical/' + pascal_to_snake(capital_start(moduleName)) + '/' + routeSnake + '/edit",\n')
                            newfile.write('                                "host": [\n')
                            newfile.write('                                    "{{Url}}"\n')
                            newfile.write('                                ],\n')
                            newfile.write('                                "path": [\n')
                            newfile.write('                                  "medical",\n')
                            newfile.write('                                    "' + pascal_to_snake(capital_start(moduleName)) + '",\n')
                            newfile.write('                                    "' + routeSnake + '",\n')
                            newfile.write('                                    "edit"\n')
                            newfile.write('                                ]\n')
                            newfile.write('                              }\n')
                            newfile.write('                          },\n')
                            newfile.write('                          "response": []\n')
                            if i < len(actions.split(',')):
                                newfile.write('                      },\n')
                            else:
                                newfile.write('                      }\n')
                                
                        newfile.write('                    ]\n')
                        if k < len(text):
                            newfile.write('                },\n')
                        else:
                            newfile.write('                }\n')
                        
                newfile.write('            ]\n')
                newfile.write('        }\n')
                newfile.write('    ],\n')
                newfile.write('    "variable": [\n')
                newfile.write('        {\n')
                newfile.write('            "key": "Url",\n')
                newfile.write('            "value": "http://localhost:3333"\n')
                newfile.write('        }\n')
                newfile.write('    ]\n')
                newfile.write('}\n')
        # /postman ################################################################################################

        
folder_path = 'customRoutes2Routes/Route'

for filename in os.listdir(folder_path):
    if filename.endswith(".ts"):
        migration_path = os.path.join(folder_path, filename)
        generate_model(migration_path)
        #print(filename)