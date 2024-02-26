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
        modelName = migration_path.replace('Models\\', '').replace('.ts', '')
        tableName = table_name(modelName)
        print("MODEL: " + modelName)
        text = myfile.readlines()
        
        fileText = ''
        
        for t in text:
            tableNameCheck = "protected tableName"
            t = re.sub("\[.*?\]"," ", t)
            tl = ''.join([line for line in t])
            ts = ' '.join(tl.split())
            fileText = fileText + "\n" + ts
        
        modelFile =  fileText.split('public modifiedAt: DateTime;')[0]
        modelFile = modelFile.split('public static namingStrategy = new CamelCaseNamingStrategy();')[1]
        modelFile = modelFile.replace('\n', '\n    ').replace('({\n', '({\n    ').replace('autoCreate: true,', '    autoCreate: true,').replace('serializeAs: null,', '    serializeAs: null,').replace('autoUpdate: true,', '    autoUpdate: true,')
        relationshipFile = fileText.split('public modifiedAt: DateTime;')[1]
        
        belongsRelationList = []
        oneRelationList = []
        manyRelationList = []
        foreignModelList = []
        hasRelation = 0
        
        for relationship in relationshipFile.split('\n\n'):
            
            belongsToCheck = "@belongsTo"
            hasOneCheck = "@hasOne"
            hasManyCheck = "@hasMany"
            
            if belongsToCheck in relationship:
                hasRelation = hasRelation + 1
                foreignKeyR = re.search(r"'\w+'", relationship).group(0)[1:-1]
                foreignModel = re.search(r"=> \w+,", relationship).group(0)[1:-1].replace("> ", "")
                preloadName = relationship.split('public ')[1].split(':')[0]
                belongsRelationList.append(foreignKeyR + ":" + foreignModel + ":" + preloadName)
                if foreignModel not in foreignModelList:
                    foreignModelList.append(foreignModel)
                # print(foreignKeyR)
            
            if hasOneCheck in relationship:
                hasRelation = hasRelation + 1
                foreignKeyR = re.search(r"'\w+'", relationship).group(0)[1:-1]
                foreignModel = re.search(r"=> \w+,", relationship).group(0)[1:-1].replace("> ", "")
                preloadName = relationship.split('public ')[1].split(':')[0]
                oneRelationList.append(foreignKeyR + ":" + foreignModel + ":" + preloadName)
                if foreignModel not in foreignModelList:
                    foreignModelList.append(foreignModel)
                # print(foreignKeyR)
            
            if hasManyCheck in relationship:
                hasRelation = hasRelation + 1
                foreignKeyR = re.search(r"'\w+'", relationship).group(0)[1:-1]
                foreignModel = re.search(r"=> \w+,", relationship).group(0)[1:-1].replace("> ", "")
                preloadName = relationship.split('public ')[1].split(':')[0]
                manyRelationList.append(foreignKeyR + ":" + foreignModel + ":" + preloadName)
                if foreignModel not in foreignModelList:
                    foreignModelList.append(foreignModel)
                # print(foreignKeyR)
            
        
        
        new_model_path = "newModels/" + modelName + ".ts"
    
        with open(new_model_path, 'w', encoding='utf-8-sig') as newfile:
        
            newfile.write("import { DateTime } from 'luxon';\n")
            newfile.write("import {\n")
            newfile.write("    column,\n")
            newfile.write("    BaseModel,\n")
            if len(belongsRelationList) > 0:
                newfile.write("    belongsTo,\n")
                newfile.write("    BelongsTo,\n")
            if len(oneRelationList) > 0:
                newfile.write("    hasOne,\n")
                newfile.write("    HasOne,\n")
            if len(manyRelationList) > 0:
                newfile.write("    HasMany,\n")
                newfile.write("    hasMany,\n")
            newfile.write("    beforeFind,\n")
            newfile.write("    scope,\n")
            newfile.write("} from '@ioc:Adonis/Lucid/Orm';\n")
            newfile.write("import CamelCaseNamingStrategy from 'App/Strategies/CamelCaseNamingStrategy';\n")
            if hasRelation > 0:
                for foreignModel in foreignModelList:
                    newfile.write("import " + foreignModel + " from './" + foreignModel + "';\n")
                if "Employee" in foreignModelList:
                    newfile.write("import { employeePreloads } from 'App/Helpers/preloads';\n")
                if "PersonalDetail" in foreignModelList:
                    newfile.write("import { personalDetailPreloads } from 'App/Helpers/preloads';\n")
            newfile.write("\n")
            newfile.write("export default class " + modelName + " extends BaseModel {\n")
            newfile.write("    public static table = '" + tableName + "';\n")
            newfile.write("    public static primaryKey = 'id';\n")
            newfile.write("    public static incrementing = false;\n")
            newfile.write("\n")
            newfile.write("    public static namingStrategy = new CamelCaseNamingStrategy();\n")
            if hasRelation > 0:
                newfile.write("\n    public static withPreloadedList = scope<typeof " + modelName + ">((query) => {")
                newfile.write("\n        query")
                if len(belongsRelationList) > 0:
                    for belongsRelation in belongsRelationList:
                        foreignId = belongsRelation.split(':')[0]
                        foreignModel = belongsRelation.split(':')[1]
                        preloadName = belongsRelation.split(':')[2]
                        if foreignModel == "Employee":
                            newfile.write("\n            .preload('" + preloadName + "', employeePreloads)")
                        elif foreignModel == "PersonalDetail":
                            newfile.write("\n            .preload('" + preloadName + "', personalDetailPreloads)")
                        else:
                            newfile.write("\n            .preload('" + preloadName + "')")
                if len(oneRelationList) > 0 and modelName[-7:] != "Process":
                    for oneRelation in oneRelationList:
                        foreignId = oneRelation.split(':')[0]
                        foreignModel = oneRelation.split(':')[1]
                        preloadName = oneRelation.split(':')[2]
                        
                        if "Process" in foreignModel:
                            process_model_path = "Models/" + foreignModel + ".ts"
                            with open(process_model_path, mode='r', encoding="utf-8") as myfile:
                                foreignTableName = table_name(modelName)
                                # print("FOREIGNPROCESSMODEL: " + foreignModel)
                                foreign_process_text = myfile.readlines()
                                foreignProcessFileText = ''
                                foreignProcessList = []
        
                            for t in foreign_process_text:
                                tableNameCheck = "protected tableName"
                                t = re.sub("\[.*?\]"," ", t)
                                tl = ''.join([line for line in t])
                                ts = ' '.join(tl.split())
                                foreignProcessFileText = foreignProcessFileText + "\n" + ts
                            
                            foreignProcessRelationshipFile = foreignProcessFileText.split('public modifiedAt: DateTime;')[1]
                            
                            newfile.write("\n            .preload('" + lower_start(foreignModel) + "', (query) =>\n")
                            newfile.write("                query\n")
                            for foreignProcessRelationship in foreignProcessRelationshipFile.split('\n\n'):
                                belongsToCheck = "@belongsTo"
                                hasOneCheck = "@hasOne"
                                hasManyCheck = "@hasMany"
                                
                                if belongsToCheck in foreignProcessRelationship:
                                    hasRelation = hasRelation + 1
                                    foreignProcessKey = re.search(r"'\w+'", foreignProcessRelationship).group(0)[1:-1]
                                    foreignProcessModel = re.search(r"=> \w+,", foreignProcessRelationship).group(0)[1:-1].replace("> ", "")
                                    foreignProcessList.append(foreignProcessKey + ":" + foreignProcessModel)
                                    
                                    if foreignProcessModel == "Employee":
                           
                                        newfile.write("                    .preload('" + remove_id(foreignProcessKey) + "', employeePreloads)\n")
                            newfile.write("            )")
                            
                        else:     
                            newfile.write("\n            .preload('" + preloadName + "')")
                            
                if len(oneRelationList) > 0 and modelName[-7:] == "Process":
                    for oneRelation in oneRelationList:
                        foreignId = oneRelation.split(':')[0]
                        foreignModel = oneRelation.split(':')[1]
                        preloadName = oneRelation.split(':')[2]
                        newfile.write("\n            .preload('" + preloadName + "')")
                if len(manyRelationList) > 0 :
                    for manyRelation in manyRelationList:
                        foreignId = manyRelation.split(':')[0]
                        foreignModel = manyRelation.split(':')[1]
                        preloadName = manyRelation.split(':')[2]
                        newfile.write("\n            .preload('" + preloadName + "')")
                
                
                newfile.write(";\n")
                newfile.write("    });")
                
            relationshipFile = fileText.split('public modifiedAt: DateTime;')[1]
            relationshipFile = relationshipFile.replace('\n', '\n    ').replace('{\n', '{\n    ').replace('onQuery', '    onQuery').replace('},', '    },')
            relationshipFile = relationshipFile[:-1]
            newfile.write(modelFile)
            newfile.write('public modifiedAt: DateTime;')
            newfile.write(relationshipFile)
            newfile.write('\n')
            if hasRelation > 0:
                newfile.write("    @beforeFind()\n")
                newfile.write("    public static async preloadTables(query) {")
                newfile.write("\n        query")
                if len(belongsRelationList) > 0:
                    for belongsRelation in belongsRelationList:
                        foreignId = belongsRelation.split(':')[0]
                        foreignModel = belongsRelation.split(':')[1]
                        preloadName = belongsRelation.split(':')[2]
                        if foreignModel == "Employee":
                            newfile.write("\n            .preload('" + remove_id(foreignId) + "', employeePreloads)")
                        elif foreignModel == "PersonalDetail":
                            newfile.write("\n            .preload('" + remove_id(foreignId) + "', personalDetailPreloads)")
                        else:
                            newfile.write("\n            .preload('" + remove_id(foreignId) + "')")
                if len(oneRelationList) > 0 and modelName[-7:] != "Process":
                    for oneRelation in oneRelationList:
                        foreignId = oneRelation.split(':')[0]
                        foreignModel = oneRelation.split(':')[1]
                        preloadName = oneRelation.split(':')[2]
                        
                        if "Process" in foreignModel:
                            process_model_path = "Models/" + foreignModel + ".ts"
                            with open(process_model_path, mode='r', encoding="utf-8") as myfile:
                                foreignTableName = table_name(modelName)
                                # print("FOREIGNPROCESSMODEL: " + foreignModel)
                                foreign_process_text = myfile.readlines()
                                foreignProcessFileText = ''
                                foreignProcessList = []
        
                            for t in foreign_process_text:
                                tableNameCheck = "protected tableName"
                                t = re.sub("\[.*?\]"," ", t)
                                tl = ''.join([line for line in t])
                                ts = ' '.join(tl.split())
                                foreignProcessFileText = foreignProcessFileText + "\n" + ts
                            
                            foreignProcessRelationshipFile = foreignProcessFileText.split('public modifiedAt: DateTime;')[1]
                            
                            newfile.write("\n            .preload('" + lower_start(foreignModel) + "', (query) =>\n")
                            newfile.write("                query\n")
                            for foreignProcessRelationship in foreignProcessRelationshipFile.split('\n\n'):
                                belongsToCheck = "@belongsTo"
                                hasOneCheck = "@hasOne"
                                hasManyCheck = "@hasMany"
                                
                                if belongsToCheck in foreignProcessRelationship:
                                    hasRelation = hasRelation + 1
                                    foreignProcessKey = re.search(r"'\w+'", foreignProcessRelationship).group(0)[1:-1]
                                    foreignProcessModel = re.search(r"=> \w+,", foreignProcessRelationship).group(0)[1:-1].replace("> ", "")
                                    foreignProcessList.append(foreignProcessKey + ":" + foreignProcessModel)
                           
                                    if foreignProcessModel == 'Employee':
                                        newfile.write("                    .preload('" + remove_id(foreignProcessKey) + "', employeePreloads)\n")
                            newfile.write("            )")
                            
                        else:     
                            newfile.write("\n            .preload('" + lower_start(foreignModel) + "')")
                if len(oneRelationList) > 0 and modelName[-7:] == "Process":
                    for oneRelation in oneRelationList:
                        foreignId = oneRelation.split(':')[0]
                        foreignModel = oneRelation.split(':')[1]
                        preloadName = oneRelation.split(':')[2]
                        newfile.write("\n            .preload('" + preloadName + "')")
                if len(manyRelationList) > 0 :
                    for manyRelation in manyRelationList:
                        foreignId = manyRelation.split(':')[0]
                        foreignModel = manyRelation.split(':')[1]
                        preloadName = manyRelation.split(':')[2]
                        newfile.write("\n            .preload('" + preloadName + "')")
                newfile.write(";")
                newfile.write("\n    }\n")
            newfile.write("}")
    
            
        
folder_path = 'Models'

for filename in os.listdir(folder_path):
    if filename.endswith(".ts"):
        migration_path = os.path.join(folder_path, filename)
        generate_model(migration_path)
        # print(filename)