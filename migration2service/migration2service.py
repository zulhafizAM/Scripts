import sys
import os
import re
from pathlib import Path
import string

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
        
        relationship_path = "relationshipModels/" + modelName + "Relationship.ts"
        
        with open(relationship_path, mode='r', encoding="utf-8") as relationshipFile:
            textR = relationshipFile.readlines()
            hasRelation = 0
            hasForeign = 0
            foreignKeyList = []
            oneRelationList = []
            manyRelationList = []
            print("\n" + modelName)
            if len(textR) > 0:
                for t in textR:
                    hasManyCheck = "@hasMany"
                    hasOneCheck = "@hasOne"
                    belongsToCheck = "@belongsTo"
                    tR = re.sub("\[.*?\]"," ", t)
                    tlR = ''.join([line for line in tR])
                    tsR = ' '.join(tlR.split())
                    print(tsR)
                    
                    # if belongsToCheck in tsR:
                    #     hasForeign = hasForeign + 1
                    #     foreignKeyR = re.search(r"'\w+'", tsR).group(0)[1:-1]
                    #     foreignTableR = re.search(r"=> \w+,", tsR).group(0)[1:-1].replace("> ", "")
                    #     foreignKeyList.append(foreignKeyR + ":" + foreignTableR)
                    
                    if hasOneCheck in tsR:
                        hasRelation = hasRelation + 1
                        foreignKeyR = re.search(r"'\w+'", tsR).group(0)[1:-1]
                        foreignTableR = re.search(r"=> \w+,", tsR).group(0)[1:-1].replace("> ", "")
                        oneRelationList.append(foreignKeyR + ":" + foreignTableR)
                    
                    if hasManyCheck in tsR:
                        hasRelation = hasRelation + 1
                        foreignKeyR = re.search(r"'\w+'", tsR).group(0)[1:-1]
                        foreignTableR = re.search(r"=> \w+,", tsR).group(0)[1:-1].replace("> ", "")
                        manyRelationList.append(foreignKeyR + ":" + foreignTableR)
                
        service_path = "service/" + modelName + "Services.ts"
      
        with open(service_path, 'w', encoding='utf-8-sig', newline='\n') as newfile:
            
            newfile.write("import BaseService from 'App/Services/BaseService';\n")
            newfile.write("import " + modelName + " from 'App/Models/" + modelName + "';\n")
            # newfile.write("import ResponseStatusServices from 'App/Services/ResponseStatusServices';\n")
            # newfile.write("import { DateTime } from 'luxon';\n")
            newfile.write("\n") 
            newfile.write("export default class " + modelName + "Services extends BaseService {\n")
            
            
# getList Function Start---------------------------------------------------------------------------------------------------------------------------------------

            # newfile.write("    public async get" + plural(modelName) + "(requestParams) {\n")
            # newfile.write("        const {\n")
            # newfile.write("            page = requestParams.page ? requestParams.page : 1,\n")
            # newfile.write("            perPage = requestParams.perPage ? requestParams.perPage : 10,\n")
            # newfile.write("            ...filters\n")
            # newfile.write("        } = requestParams;\n")
            # newfile.write("\n")
            # newfile.write("        const " + lower_start(modelName) + "List = await " + modelName + ".query()\n")
            # newfile.write("            .where('active', true)")
            # newfile.write("            .orderBy('createdAt', 'desc')\n")
            # newfile.write("            .paginate(page, perPage);\n")
            # newfile.write("\n")
            # newfile.write("        // check for invalid parameters\n")
            # newfile.write("        let filterKeys = Object.keys(filters);\n")
            # newfile.write("        if (filterKeys.length > 0) {\n")
            # newfile.write("            let paramsError =\n")
            # newfile.write("                await this.responseStatusService.throwParamsError(filterKeys);\n")
            # newfile.write("            throw Error(paramsError);\n")
            # newfile.write("        }\n")
            # newfile.write("\n")
            # newfile.write("        const " + plural(lower_start(modelName)) + " = " + lower_start(modelName) + "List.serialize({\n")
            # newfile.write("            fields: {\n")
            # newfile.write("                omit: [\n")
            
            model_path = "Models/" + modelName + ".ts"
            with open(model_path, mode='r', encoding="utf-8") as modelFile:
                excludedKeyList = []
                foreignKeyList = []
                superCheckList = []
                for index, t in enumerate(text):
                    t = re.sub("\[.*?\]"," ", t)
                    tl = ''.join([line for line in t])
                    ts = ' '.join(tl.split())
                    
                    foreignKeyCheck = ".bigInteger"
                    superCheck = "super.extendingProcessSchema"
                    
                    if foreignKeyCheck in ts:
                        i = index - 1
                        ts = ""
                        while ";" not in text[i]:
                            ts = ts + text[i]
                            i = i + 1
                        ts = ts + text[i]
                        ts = ts.replace(" ", "")
                        ts = ts.replace("\n", "")
                        print(ts)
                        columnNameMatch = re.search(r"'\w+'", ts)
                        columnName = columnNameMatch.group(0)[1:-1]
                        foreignKeyTableName = re.search(r"inTable\('(\w+)'", ts).group(0).split("inTable('")[1][0:-1]
                        foreignKeyList.append(foreignKeyTableName + ":" + columnName)
                    
                    if superCheck in ts:
                        if 'table' in ts:
                            print(ts)
                            columnNameMatch = re.search(r"'\w+'", ts)
                            columnName = columnNameMatch.group(0)[1:-1]
                            actionEmp = ts.split(',')[1].rstrip(';').rstrip(')').replace("'", "").replace(" ", "")
                            actionName = ts.split(',')[2].rstrip(';').rstrip(')').replace("'", "").replace(" ", "")
                            superCheckList.append(actionEmp + ":" + actionName)
                        elif 'table' not in ts:
                            i = index + 1
                            while ";" not in text[i]:
                                ts = ts + text[i]
                                i = i + 1
                            ts = ts + text[i + 1]
                            ts = ts.replace(" ", "")
                            ts = ts.replace("\n", "")
                            print(ts)
                            columnNameMatch = re.search(r"'\w+'", ts)
                            columnName = columnNameMatch.group(0)[1:-1]
                            actionEmp = ts.split(',')[1].rstrip(';').rstrip(')').replace("'", "").replace(" ", "")
                            actionName = ts.split(',')[2].rstrip(';').rstrip(')').replace("'", "").replace(" ", "")
                            superCheckList.append(actionEmp + ":" + actionName)
                textM = modelFile.readlines()
                for t in textM:
                    keyCheck = "@column({"
                    hasManyCheck = "@hasMany"
                    hasOneCheck = "@hasOne"
                    belongsToCheck = "@belongsTo"
                    tM = re.sub("\[.*?\]"," ", t)
                    tlM = ''.join([line for line in tM])
                    tsM = ' '.join(tlM.split())
                    
                    if keyCheck in tsM and hasManyCheck not in tsM and hasOneCheck not in tsM and belongsToCheck not in tsM:
                        keyName = re.search(r"'\w+'", tsM).group(0)[1:-1]
                        if keyName[-2:] == "Id":
                            excludedKeyList.append(keyName)
                            
            # if len(excludedKeyList) > 0:
            #     for index, excludedKey in enumerate(excludedKeyList):
            #         newfile.write("                    '" + excludedKey + "',\n")

            # newfile.write("                    'createdAt',\n")
            # newfile.write("                    'createdBy',\n")
            # newfile.write("                    'modifiedAt',\n")
            # newfile.write("                    'modifiedBy',\n")
            # newfile.write("                    'active',\n")
            # newfile.write("                ],\n")
            # newfile.write("            },\n")
            # newfile.write("        });\n")
            # newfile.write("\n")
            # newfile.write("        const read" + modelName + " = " + plural(lower_start(modelName)) + ".data;\n")
            # newfile.write("\n")
            # newfile.write("        return read" + modelName + ";\n")
            # newfile.write("    }\n")
            
            newfile.write("    public async get" + plural(modelName) + "({ page = 1, perPage = 10 }) {\n")
            newfile.write("        return this.getDataList(" + modelName + ", { page, perPage });\n")
            newfile.write("    }\n")
            
# getList Function End---------------------------------------------------------------------------------------------------------------------------------------
            newfile.write("\n")
# get Function Start---------------------------------------------------------------------------------------------------------------------------------------
            
            newfile.write("    public async get" + modelName + "(" + lower_start(modelName) + "Id: number) {\n")
            newfile.write("        const read" + modelName + " = await " + modelName + ".query()\n")
            newfile.write("            .where('active', true)\n")
            newfile.write("            .where('id', " + lower_start(modelName) + "Id)\n")
            
            if len(foreignKeyList) > 0:
                for index, table in enumerate(foreignKeyList):
                    model = convert_string(table.split(":")[0])
                    foreignTableName = table.split(":")[0]
                    foreignKey = table.split(":")[1]
                    # newfile.write("            .preload('" + remove_id(foreignKey) + "', (query) => {\n")
                    # newfile.write("                query.where('active', true);\n")
                    # newfile.write("            })\n")
                    newfile.write("            .preload('" + remove_id(foreignKey) + "', (query) => query.where('active', true))\n")
                    
            if len(superCheckList) > 0:
                for index, table in enumerate(superCheckList):
                    foreignEmpId = table.split(":")[0]
                    # newfile.write("            .preload('" + remove_id(foreignEmpId) + "', (query) => {\n")
                    # newfile.write("                query.where('active', true);\n")
                    # newfile.write("            })\n")
                    newfile.write("            .preload('" + remove_id(foreignEmpId) + "', (query) => query.where('active', true))\n")

            if len(oneRelationList) > 0:
                for index, table in enumerate(oneRelationList):
                    model = convert_string(table.split(":")[0])
                    extractedKey = table.split(":")[0]
                    foreignModel = table.split(":")[1]
                    # newfile.write("            .preload('" + lower_start(foreignModel) + "', (query) => {\n")
                    # newfile.write("                query.where('active', true);\n")
                    # newfile.write("            })\n")
                    newfile.write("            .preload('" + lower_start(foreignModel) + "', (query) => query.where('active', true))\n")
            
            if len(manyRelationList) > 0:
                for index, table in enumerate(manyRelationList):
                    model = convert_string(table.split(":")[0])
                    extractedKey = table.split(":")[0]
                    foreignModel = table.split(":")[1]    
                    newfile.write("            .preload('" + plural(lower_start(foreignModel)) + "', (query) =>\n")
                    newfile.write("                query.where('active', true).limit(10),\n")
                    newfile.write("            )\n")

            newfile.write("            .firstOrFail();\n")
            newfile.write("\n")
            # newfile.write("        const read" + modelName + " = " + lower_start(modelName) + ".serialize({\n")
            # newfile.write("            fields: {\n")
            # newfile.write("                omit: [\n")
            # if len(excludedKeyList) > 0:
            #     for index, excludedKey in enumerate(excludedKeyList):
            #         newfile.write("                    '" + excludedKey + "',\n")
            # newfile.write("                    'createdAt',\n")
            # newfile.write("                    'createdBy',\n")
            # newfile.write("                    'modifiedAt',\n")
            # newfile.write("                    'modifiedBy',\n")
            # newfile.write("                    'active',\n")
            # newfile.write("                ],\n")
            # newfile.write("            },\n")
            
            # if len(foreignKeyList) > 0 or len(superCheckList) > 0 or len(oneRelationList) > 0 or len(manyRelationList) > 0:
            #     newfile.write("            relations: {\n")
                
            #     if len(foreignKeyList) > 0:
            #         for index, table in enumerate(foreignKeyList):
            #             model = convert_string(table.split(":")[0])
            #             foreignTableName = table.split(":")[0]
            #             foreignKey = table.split(":")[1]
            #             newfile.write("                " + remove_id(foreignKey) + ": {\n")
            #             newfile.write("                    fields: {\n")
            #             newfile.write("                        omit: [\n")
            #             newfile.write("                            'id',\n")
            #             foreign_key_model_path = "Models/" + model + ".ts"
            #             with open(foreign_key_model_path, mode='r', encoding="utf-8") as foreignKeyModelFile:
            #                 foreignExcludedKeyList = []
            #                 textM = foreignKeyModelFile.readlines()
            #                 for t in textM:
            #                     keyCheck = "@column({"
            #                     hasManyCheck = "@hasMany"
            #                     hasOneCheck = "@hasOne"
            #                     belongsToCheck = "@belongsTo"
            #                     tM = re.sub("\[.*?\]"," ", t)
            #                     tlM = ''.join([line for line in tM])
            #                     tsM = ' '.join(tlM.split())
                                
            #                     if keyCheck in tsM and hasManyCheck not in tsM and hasOneCheck not in tsM and belongsToCheck not in tsM:
            #                         keyName = re.search(r"'\w+'", tsM).group(0)[1:-1]
            #                         if keyName[-2:] == "Id":
            #                             foreignExcludedKeyList.append(keyName)
                                        
            #             if len(foreignExcludedKeyList) > 0:
            #                 for index, foreignExcludedKey in enumerate(foreignExcludedKeyList):
            #                     newfile.write("                            '" + foreignExcludedKey + "',\n")
            #             newfile.write("                            'createdAt',\n")
            #             newfile.write("                            'createdBy',\n")
            #             newfile.write("                            'modifiedAt',\n")
            #             newfile.write("                            'modifiedBy',\n")
            #             newfile.write("                            'active',\n")
            #             newfile.write("                        ],\n")
            #             newfile.write("                    },\n")
            #             newfile.write("                },\n")
                        
            #     if len(superCheckList) > 0:
            #         for index, table in enumerate(superCheckList):
            #             foreignEmpId = table.split(":")[0]
            #             newfile.write("                " + remove_id(foreignEmpId) + ": {\n")
            #             newfile.write("                    fields: {\n")
            #             newfile.write("                        omit: [\n")
            #             newfile.write("                            'id',\n")
            #             foreign_key_model_path = "Models/Employee.ts"
            #             with open(foreign_key_model_path, mode='r', encoding="utf-8") as foreignEmpIdModelFile:
            #                 foreignExcludedKeyList = []
            #                 textM = foreignEmpIdModelFile.readlines()
            #                 for t in textM:
            #                     keyCheck = "@column({"
            #                     hasManyCheck = "@hasMany"
            #                     hasOneCheck = "@hasOne"
            #                     belongsToCheck = "@belongsTo"
            #                     tM = re.sub("\[.*?\]"," ", t)
            #                     tlM = ''.join([line for line in tM])
            #                     tsM = ' '.join(tlM.split())
                                
            #                     if keyCheck in tsM and hasManyCheck not in tsM and hasOneCheck not in tsM and belongsToCheck not in tsM:
            #                         keyName = re.search(r"'\w+'", tsM).group(0)[1:-1]
            #                         if keyName[-2:] == "Id":
            #                             foreignExcludedKeyList.append(keyName)
                                        
            #             if len(foreignExcludedKeyList) > 0:
            #                 for index, foreignExcludedKey in enumerate(foreignExcludedKeyList):
            #                     newfile.write("                            '" + foreignExcludedKey + "',\n")
            #             newfile.write("                            'createdAt',\n")
            #             newfile.write("                            'createdBy',\n")
            #             newfile.write("                            'modifiedAt',\n")
            #             newfile.write("                            'modifiedBy',\n")
            #             newfile.write("                            'active',\n")
            #             newfile.write("                        ],\n")
            #             newfile.write("                    },\n")
            #             newfile.write("                },\n")
                   
            #     if len(oneRelationList) > 0:
            #         for index, table in enumerate(oneRelationList):
            #             model = convert_string(table.split(":")[0])
            #             extractedKey = table.split(":")[0]
            #             foreignModel = table.split(":")[1]   
            #             newfile.write("                " + lower_start(foreignModel) + ": {\n")
            #             newfile.write("                    fields: {\n")
            #             newfile.write("                        omit: [\n")
            #             newfile.write("                            'id',\n")
            #             has_one_model_path = "Models/" + foreignModel + ".ts"
            #             with open(has_one_model_path, mode='r', encoding="utf-8") as hasOneModelFile:
            #                 hasOneExcludedKeyList = []
            #                 textM = hasOneModelFile.readlines()
            #                 for t in textM:
            #                     keyCheck = "@column({"
            #                     hasManyCheck = "@hasMany"
            #                     hasOneCheck = "@hasOne"
            #                     belongsToCheck = "@belongsTo"
            #                     tM = re.sub("\[.*?\]"," ", t)
            #                     tlM = ''.join([line for line in tM])
            #                     tsM = ' '.join(tlM.split())
                                
            #                     if keyCheck in tsM and hasManyCheck not in tsM and hasOneCheck not in tsM and belongsToCheck not in tsM:
            #                         # print(foreignModel + ":" + tsM)
            #                         keyName = re.search(r"'\w+'", tsM).group(0)[1:-1]
            #                         # print(keyName)
            #                         if keyName[-2:] == "Id":
            #                             hasOneExcludedKeyList.append(keyName)
                                        
            #             if len(hasOneExcludedKeyList) > 0:
            #                 for index, hasOneExcludedKey in enumerate(hasOneExcludedKeyList):
            #                     newfile.write("                            '" + hasOneExcludedKey + "',\n")
            #             newfile.write("                            'createdAt',\n")
            #             newfile.write("                            'createdBy',\n")
            #             newfile.write("                            'modifiedAt',\n")
            #             newfile.write("                            'modifiedBy',\n")
            #             newfile.write("                            'active',\n")
            #             newfile.write("                        ],\n")
            #             newfile.write("                    },\n")
            #             newfile.write("                },\n")

            #     if len(manyRelationList) > 0:
            #         for index, table in enumerate(manyRelationList):
            #             model = convert_string(table.split(":")[0])
            #             extractedKey = table.split(":")[0]
            #             foreignModel = table.split(":")[1]
            #             newfile.write("                " + plural(lower_start(foreignModel)) + ": {\n")
            #             newfile.write("                    fields: {\n")
            #             newfile.write("                        omit: [\n")
            #             newfile.write("                            'id',\n")
            #             has_many_model_path = "Models/" + foreignModel + ".ts"
            #             with open(has_many_model_path, mode='r', encoding="utf-8") as hasManyModelFile:
            #                 hasManyExcludedKeyList = []
            #                 textM = hasManyModelFile.readlines()
            #                 for t in textM:
            #                     keyCheck = "@column({"
            #                     hasManyCheck = "@hasMany"
            #                     hasOneCheck = "@hasOne"
            #                     belongsToCheck = "@belongsTo"
            #                     tM = re.sub("\[.*?\]"," ", t)
            #                     tlM = ''.join([line for line in tM])
            #                     tsM = ' '.join(tlM.split())
                                
            #                     if keyCheck in tsM and hasManyCheck not in tsM and hasOneCheck not in tsM and belongsToCheck not in tsM:
            #                         # print(foreignModel + ":" + tsM)
            #                         keyName = re.search(r"'\w+'", tsM).group(0)[1:-1]
            #                         # print(keyName)
            #                         if keyName[-2:] == "Id":
            #                             hasManyExcludedKeyList.append(keyName)
                                        
            #             if len(hasManyExcludedKeyList) > 0:
            #                 for index, hasManyExcludedKey in enumerate(hasManyExcludedKeyList):
            #                     newfile.write("                            '" + hasManyExcludedKey + "',\n")
            #             newfile.write("                            'createdAt',\n")
            #             newfile.write("                            'createdBy',\n")
            #             newfile.write("                            'modifiedAt',\n")
            #             newfile.write("                            'modifiedBy',\n")
            #             newfile.write("                            'active',\n")
            #             newfile.write("                        ],\n")
            #             newfile.write("                    },\n")
            #             newfile.write("                },\n")
    
            #     newfile.write("            },\n")
                
                
            # newfile.write("        });\n")
            # newfile.write("\n")
            newfile.write("        return read" + modelName + ";\n")
            newfile.write("    }\n")
            
# get Function End---------------------------------------------------------------------------------------------------------------------------------------
            newfile.write("\n")
# add Function Start---------------------------------------------------------------------------------------------------------------------------------------
            newfile.write("    public async add" + modelName + "(payload) {\n")
            # newfile.write("        const create" + modelName + " = " + modelName + ".create({")
            
            # for index, t in enumerate(text):
            #     t = re.sub("\[.*?\]"," ", t)
            #     tl = ''.join([line for line in t])
            #     ts = ' '.join(tl.split())
                
            #     superIdCheck = "super.extendingIdName"
            #     superCheck = "super.extendingProcessSchema"
            #     superLogCheck = "super.extendingLogSchema"
                
            #     if superIdCheck in ts:
            #         newfile.write("\n            name: payload.name,")
                
            #     if "table" in ts and "tableName" not in ts and "super" not in ts and "table," not in ts and "Id'," not in ts:
                    
            #         if "table." not in ts:
            #             i = index + 1
            #             while ";" not in text[i]:
            #                 ts = ts + text[i]
            #                 i = i + 1
            #             ts = ts + text[i]
            #             ts = ts.replace(" ", "")
            #             ts = ts.replace("\n", "")
                    
            #         bigInc = 'bigIncrements'
            #         bigInt = 'bigInteger'
            #         integer = 'integer'
            #         varchar = 'VARCHAR'
            #         varbinary = 'VARBINARY'
            #         timestamp = 'timestamp'
            #         float = 'float'
            #         boolean = 'boolean'
                    
            #         print(ts)
            #         split_ts = ts.split('.')
            #         columnType = split_ts[1]

            #         columnNameMatch = re.search(r"'\w+'", ts)
                    
            #         if columnNameMatch != None:
            #             columnName = columnNameMatch.group(0)[1:-1]
                    
            #         else:
            #             i = index + 1
            #             while ";" not in text[i]:
            #                 ts = ts + text[i]
            #                 i = i + 1
            #             columnNameMatch = re.search(r"'\w+'", ts)
            #             columnName = columnNameMatch.group(0)[1:-1]
            #             split_ts = ts.split('.')
            #             columnType = split_ts[1]
                    
            #         if bigInt in ts:
            #             newfile.write("\n            " + columnName + ": payload." + columnName + ",")
                        
            #         if integer in ts:
            #             newfile.write("\n            " + columnName + ": payload." + columnName + ",")
                        
            #         if varchar in ts:
            #             newfile.write("\n            " + columnName + ": payload." + columnName + ",")
                        
            #         # if varbinary in ts:
            #         #     newfile.write("\n                " + columnName + ": '',")
                        
            #         if timestamp in ts:
            #             newfile.write("\n            " + columnName + ": payload." + columnName + ",")
                        
            #         if float in ts:
            #             newfile.write("\n            " + columnName + ": payload." + columnName + ",")
                        
            #         if boolean in ts:
            #             newfile.write("\n            " + columnName + ": payload." + columnName + ",")
                        
            #     if superCheck in ts:
            #         if 'table' in ts:
            #             print(ts)
            #             column = ts.split(',')
            #             idName = column[1].replace("'", "").replace(" ", "").replace(")", "").replace(";", "")
            #             actionName = column[2].replace("'", "").replace(" ", "").replace(")", "").replace(";", "")
            #         elif 'table' not in ts:
            #             i = index + 1
            #             while ";" not in text[i]:
            #                 ts = ts + text[i]
            #                 i = i + 1
            #             ts = ts + text[i]
            #             ts = ts.replace(" ", "")
            #             ts = ts.replace("\n", "")
            #             print(ts)
            #             column = ts.split(',')
            #             idName = column[1].replace("'", "").replace(" ", "").replace(")", "").replace(";", "")
            #             actionName = column[2].replace("'", "").replace(" ", "").replace(")", "").replace(";", "")
                    
            #         newfile.write("\n            " + idName + ": payload." + idName + ",")
                    
            #         newfile.write("\n            " + actionName + "Status: payload." + actionName + "Status,")
                    
            #         newfile.write("\n            " + actionName + "Remark: payload." + actionName + "Remark,")
                    
            #         newfile.write("\n            " + actionName + "Date: DateTime.fromISO(payload." + actionName + "Date),")
                    
            #         # newfile.write("\n    @column.dateTime({ columnName: '" + actionName + "Date' })\n")
            #         # newfile.write("    public " + actionName + "Date: DateTime;\n")
                    
            #     if superLogCheck in ts:
                    
            #         newfile.write("\n            active: true,")

            #         newfile.write("\n            createdBy: 'Admin'\n")
            
            # newfile.write("        });\n")
            # newfile.write("\n")
            # newfile.write("        return create" + modelName + ";\n")
            newfile.write("        return this.createData(" + modelName + ", payload, 'Admin');\n")
            newfile.write("    }\n")
# add Function End---------------------------------------------------------------------------------------------------------------------------------------
            newfile.write("\n")
# edit Function Start---------------------------------------------------------------------------------------------------------------------------------------
            newfile.write("    public async edit" + modelName + "(id: number, payload) {\n")
            # newfile.write("        const " + lower_start(modelName) + " = await " + modelName + ".findOrFail(id);")
            # newfile.write("\n")
            
            # for index, t in enumerate(text):
            #     t = re.sub("\[.*?\]"," ", t)
            #     tl = ''.join([line for line in t])
            #     ts = ' '.join(tl.split())
                
            #     superIdCheck = "super.extendingIdName"
            #     superCheck = "super.extendingProcessSchema"
            #     superLogCheck = "super.extendingLogSchema"
                
            #     if superIdCheck in ts:
            #         newfile.write("\n        " + lower_start(modelName) + ".name = payload.name;")
                
            #     if "table" in ts and "tableName" not in ts and "super" not in ts and "table," not in ts and "Id'," not in ts:
                    
            #         if "table." not in ts:
            #             i = index + 1
            #             while ";" not in text[i]:
            #                 ts = ts + text[i]
            #                 i = i + 1
            #             ts = ts + text[i]
            #             ts = ts.replace(" ", "")
            #             ts = ts.replace("\n", "")
                    
            #         bigInc = 'bigIncrements'
            #         bigInt = 'bigInteger'
            #         integer = 'integer'
            #         varchar = 'VARCHAR'
            #         varbinary = 'VARBINARY'
            #         timestamp = 'timestamp'
            #         float = 'float'
            #         boolean = 'boolean'
                    
            #         split_ts = ts.split('.')
            #         columnType = split_ts[1]

            #         columnNameMatch = re.search(r"'\w+'", ts)
                    
            #         if columnNameMatch != None:
            #             columnName = columnNameMatch.group(0)[1:-1]
                    
            #         else:
            #             i = index + 1
            #             while ";" not in text[i]:
            #                 ts = ts + text[i]
            #                 i = i + 1
            #             columnNameMatch = re.search(r"'\w+'", ts)
            #             columnName = columnNameMatch.group(0)[1:-1]
            #             split_ts = ts.split('.')
            #             columnType = split_ts[1]
                    
            #         if bigInt in columnType:
            #             newfile.write("\n        " + lower_start(modelName) + "." + columnName + " = payload." + columnName + ";")
                        
            #         if integer in columnType:
            #             newfile.write("\n        " + lower_start(modelName) + "." + columnName + " = payload." + columnName + ";")
                        
            #         if varchar in columnType:
            #             newfile.write("\n        " + lower_start(modelName) + "." + columnName + " = payload." + columnName + ";")
                        
            #         # if varbinary in columnType:
            #         #     newfile.write("\n                " + columnName + ": '',")
                        
            #         if timestamp in columnType:
            #             newfile.write("\n        " + lower_start(modelName) + "." + columnName + " = payload." + columnName + ";")
                        
            #         if float in columnType:
            #             newfile.write("\n        " + lower_start(modelName) + "." + columnName + " = payload." + columnName + ";")
                        
            #         if boolean in columnType:
            #             newfile.write("\n        " + lower_start(modelName) + "." + columnName + " = payload." + columnName + ";")
                        
            #     if superCheck in ts:
            #         if 'table' in ts:
            #             column = ts.split(',')
            #             idName = column[1].replace("'", "").replace(" ", "").replace(")", "").replace(";", "")
            #             actionName = column[2].replace("'", "").replace(" ", "").replace(")", "").replace(";", "")
            #         elif 'table' not in ts:
            #             i = index + 1
            #             while ";" not in text[i]:
            #                 ts = ts + text[i]
            #                 i = i + 1
            #             ts = ts + text[i]
            #             ts = ts.replace(" ", "")
            #             ts = ts.replace("\n", "")
            #             column = ts.split(',')
            #             idName = column[1].replace("'", "").replace(" ", "").replace(")", "").replace(";", "")
            #             actionName = column[2].replace("'", "").replace(" ", "").replace(")", "").replace(";", "")
              
            #         newfile.write("\n        " + lower_start(modelName) + "." + idName + " = payload." + idName + ";")
                    
            #         newfile.write("\n        " + lower_start(modelName) + "." + actionName + "Status = payload." + actionName + "Status;")
                    
            #         newfile.write("\n        " + lower_start(modelName) + "." + actionName + "Remark = payload." + actionName + "Remark;")
                    
            #         newfile.write("\n        " + lower_start(modelName) + "." + actionName + "Date = DateTime.fromISO(payload." + actionName + "Date);")
                    
            #         # newfile.write("\n    @column.dateTime({ columnName: '" + actionName + "Date' })\n")
            #         # newfile.write("    public " + actionName + "Date: DateTime;\n")
                    
            #     if superLogCheck in ts:
                    
            #         newfile.write("\n        " + lower_start(modelName) + ".active = true;")

            #         newfile.write("\n        " + lower_start(modelName) + ".createdBy = 'Admin';\n")
            
            # newfile.write("\n")
            # newfile.write("        let update" + modelName + " = " + lower_start(modelName) + ".save();\n")
            # newfile.write("        return update" + modelName + ";\n")
            newfile.write("        return this.updateData(" + modelName + ", id, payload, 'Admin');\n")
            newfile.write("    }\n")
# edit Function End---------------------------------------------------------------------------------------------------------------------------------------

            newfile.write("}\n")

folder_path = 'C:/Users/1/Desktop/Projects/MyPSM/mypsm-be/database/migrations'

for filename in os.listdir(folder_path):
    if filename.endswith(".ts"):
        migration_path = os.path.join(folder_path, filename)
        generate_model(migration_path)
        #print(filename)