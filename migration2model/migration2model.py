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
            oneRelationList = []
            manyRelationList = []
            if len(textR) > 0:
                for t in textR:
                    hasManyCheck = "@hasMany"
                    hasOneCheck = "@hasOne"
                    belongsToCheck = "@belongsTo"
                    tR = re.sub("\[.*?\]"," ", t)
                    tlR = ''.join([line for line in tR])
                    tsR = ' '.join(tlR.split())
                    
                    if hasOneCheck in tsR:
                        hasRelation = hasRelation + 1
                        foreignKeyR = re.search(r"'\w+'", tsR).group(0)[1:-1]
                        foreignTableR = re.search(r"=> \w+,", tsR).group(0)[1:-1].replace("> ", "")
                        oneRelationList.append(foreignKeyR + ":" + foreignTableR)
                        # print(foreignTableR)
                    
                    if hasManyCheck in tsR:
                        hasRelation = hasRelation + 1
                        foreignKeyR = re.search(r"'\w+'", tsR).group(0)[1:-1]
                        foreignTableR = re.search(r"=> \w+,", tsR).group(0)[1:-1].replace("> ", "")
                        manyRelationList.append(foreignKeyR + ":" + foreignTableR)
                        # print(foreignTableR)
                        
                print(modelName + " One: " + str(oneRelationList))
                print(modelName + " Many: " + str(manyRelationList))
                
            else:
                print(modelName)
        
        model_path = "Models/" + modelName + ".ts"
      
        with open(model_path, 'w', encoding='utf-8-sig') as newfile:
            
            foreignKeyList = []
            superCheckList = []
            hasSuper = 0
            
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
                
            newfile.write("import { DateTime } from 'luxon';\n")
            # if "Process" in modelName:
            #     newfile.write("import { column, BaseModel } from '@ioc:Adonis/Lucid/Orm';\n\n")
            # else:
            newfile.write("import { column, BaseModel")
            if len(foreignKeyList) > 0 or len(superCheckList) > 0:
                newfile.write(", belongsTo, BelongsTo")
            if len(oneRelationList) > 0:
                newfile.write(", hasOne, HasOne")
            if len(manyRelationList) > 0:
                newfile.write(", hasMany, HasMany")
            newfile.write(" } from '@ioc:Adonis/Lucid/Orm';\n")
            newfile.write("import CamelCaseNamingStrategy from 'App/Strategies/CamelCaseNamingStrategy';\n")
            if len(foreignKeyList) > 0:
                for index, table in enumerate(foreignKeyList):
                    model = convert_string(table.split(":")[0])
                    newfile.write("import " + model + " from './" + model + "';\n")
            if len(superCheckList) > 0:
                newfile.write("import Employee from './Employee';\n")
            if len(oneRelationList) > 0:
                for index, table in enumerate(oneRelationList):
                    extractedKey = table.split(":")[0]
                    foreignModel = table.split(":")[1]
                    newfile.write("import " + foreignModel + " from './" + foreignModel + "';\n")
            if len(manyRelationList) > 0:
                for index, table in enumerate(manyRelationList):
                    extractedKey = table.split(":")[0]
                    foreignModel = table.split(":")[1]
                    newfile.write("import " + foreignModel + " from './" + foreignModel + "';\n")
            newfile.write("\n")
            newfile.write("export default class " + modelName + " extends BaseModel {\n")
            newfile.write("    public static table = '" + tableName + "';\n")
            newfile.write("    public static primaryKey = 'id';\n")
            newfile.write("    public static incrementing = false;\n")
            newfile.write("\n")
            newfile.write("    public static namingStrategy = new CamelCaseNamingStrategy();\n")
            
            for index, t in enumerate(text):
                t = re.sub("\[.*?\]"," ", t)
                tl = ''.join([line for line in t])
                ts = ' '.join(tl.split())
                
                
                superIdCheck = "super.extendingIdName"
                columnCheck = "table."
                superCheck = "super.extendingProcessSchema"
                superLogCheck = "super.extendingLogSchema"
                
                if superIdCheck in ts:
                    newfile.write("\n    @column({ isPrimary: true, columnName: 'id' })\n")
                    newfile.write("    public id: bigint;\n")
                    
                    newfile.write("\n    @column({ columnName: 'name' })\n")
                    newfile.write("    public name: string;\n")
                
                if "table" in ts and "tableName" not in ts and "super" not in ts and "table," not in ts and "Id'," not in ts:
                    
                    if "table." not in ts:
                        i = index + 1
                        while ";" not in text[i]:
                            ts = ts + text[i]
                            i = i + 1
                        ts = ts + text[i]
                        ts = ts.replace(" ", "")
                        ts = ts.replace("\n", "")
                        
                    bigInc = 'bigIncrements'
                    bigInt = 'bigInteger'
                    integer = 'integer'
                    varchar = 'VARCHAR'
                    varbinary = 'VARBINARY'
                    timestamp = 'timestamp'
                    float = 'float'
                    boolean = 'boolean'
                    
                    split_ts = ts.split('.')
                    columnType = split_ts[1]

                    columnNameMatch = re.search(r"'\w+'", ts)
                    
                    if columnNameMatch != None:
                        columnName = columnNameMatch.group(0)[1:-1]
                    
                    else:
                        print(ts)
                        i = index + 1
                        while columnCheck not in text[i]:
                            ts = ts + text[i]
                            i = i + 1
                        columnNameMatch = re.search(r"'\w+'", ts)
                        columnName = columnNameMatch.group(0)[1:-1]
                        split_ts = ts.split('.')
                        columnType = split_ts[1]
                        print(columnName)
                        
                    if bigInc in columnType:
                        newfile.write("\n    @column({ isPrimary: true, columnName: '" + columnName + "' })\n")
                        newfile.write("    public " + columnName + ": bigint;\n")
                    
                    if bigInt in columnType:
                        newfile.write("\n    @column({ columnName: '" + columnName + "' })\n")
                        newfile.write("    public " + columnName + ": bigint;\n")
                        
                    if integer in columnType:
                        newfile.write("\n    @column({ columnName: '" + columnName + "' })\n")
                        newfile.write("    public " + columnName + ": number;\n")
                        
                    if varchar in columnType:
                        newfile.write("\n    @column({ columnName: '" + columnName + "' })\n")
                        newfile.write("    public " + columnName + ": string;\n")
                        
                    if varbinary in columnType:
                        newfile.write("\n    @column({ columnName: '" + columnName + "' })\n")
                        newfile.write("    public " + columnName + ": Blob;\n")
                        
                    if timestamp in columnType:
                        newfile.write("\n    @column.dateTime({ columnName: '" + columnName + "' })\n")
                        newfile.write("    public " + columnName + ": DateTime;\n")
                        
                    if float in columnType:
                        newfile.write("\n    @column({ columnName: '" + columnName + "' })\n")
                        newfile.write("    public " + columnName + ": number;\n")
                        
                    if boolean in columnType:
                        newfile.write("\n    @column({ columnName: '" + columnName + "' })\n")
                        newfile.write("    public " + columnName + ": boolean;\n")
                        
                if superCheck in ts:
                    if 'table' in ts:
                        print(ts)
                        column = ts.split(',')
                        idName = column[1].replace("'", "").replace(" ", "").replace(")", "").replace(";", "")
                        actionName = column[2].replace("'", "").replace(" ", "").replace(")", "").replace(";", "")
                    elif 'table' not in ts:
                        i = index + 1
                        while ";" not in text[i]:
                            ts = ts + text[i]
                            i = i + 1
                        ts = ts + text[i + 1]
                        ts = ts.replace(" ", "")
                        ts = ts.replace("\n", "")
                        print(ts)
                        column = ts.split(',')
                        idName = column[1].replace("'", "").replace(" ", "").replace(")", "").replace(";", "")
                        actionName = column[2].replace("'", "").replace(" ", "").replace(")", "").replace(";", "")
                    
                    newfile.write("\n    @column({ columnName: '" + idName + "' })\n")
                    newfile.write("    public " + idName + ": bigint;\n")
                    
                    newfile.write("\n    @column({ columnName: '" + actionName + "Status' })\n")
                    newfile.write("    public " + actionName + "Status: string;\n")
                    
                    newfile.write("\n    @column({ columnName: '" + actionName + "Remark' })\n")
                    newfile.write("    public " + actionName + "Remark: string;\n")
                    
                    newfile.write("\n    @column.dateTime({ columnName: '" + actionName + "Date' })\n")
                    newfile.write("    public " + actionName + "Date: DateTime;\n")
                    
                if superLogCheck in ts:
                    
                    newfile.write("\n    @column({ columnName: 'active' })\n")
                    newfile.write("    public active: boolean;\n")
                    
                    newfile.write("\n    @column({ columnName: 'createdBy' })\n")
                    newfile.write("    public createdBy: string;\n")
                    
                    newfile.write("\n    @column.dateTime({ columnName: 'createdAt', autoCreate: true })\n")
                    newfile.write("    public createdAt: DateTime;\n")
                    
                    newfile.write("\n    @column({ columnName: 'modifiedBy' })\n")
                    newfile.write("    public modifiedBy: string;\n")
                    
                    newfile.write("\n    @column.dateTime({\n")
                    newfile.write("        columnName: 'modifiedAt',\n")
                    newfile.write("        autoCreate: true,\n")
                    newfile.write("        autoUpdate: true,\n")
                    newfile.write("\n    })\n")
                    newfile.write("    public modifiedAt: DateTime;\n")
                    
                    if len(foreignKeyList) > 0:
                        for index, table in enumerate(foreignKeyList):
                            model = convert_string(table.split(":")[0])
                            foreignTableName = table.split(":")[0]
                            foreignKey = table.split(":")[1]
                            newfile.write("\n    @belongsTo(() => " + model + ", { foreignKey: '" + foreignKey + "' })\n")
                            newfile.write("    public " + remove_id(foreignKey) + ": BelongsTo<typeof " + model + ">;\n")
                    
                    if len(superCheckList) > 0:
                        for table in superCheckList:
                            foreignEmpId = table.split(":")[0]
                            foreignEmpAction = table.split(":")[1]
                            newfile.write("\n    @belongsTo(() => Employee, { foreignKey: '" + foreignEmpId + "' })\n")
                            newfile.write("    public " + remove_id(foreignEmpId) + ": BelongsTo<typeof Employee>;\n")
                    
                    if len(oneRelationList) > 0:
                        for table in oneRelationList:
                            extractedKey = table.split(":")[0]
                            foreignModel = table.split(":")[1]
                            newfile.write("\n    @hasOne(() => " + foreignModel + ", { foreignKey: '" + extractedKey + "' })\n")
                            newfile.write("    public " + lower_start(foreignModel) + ": HasOne<typeof " + foreignModel + ">;\n")
                    
                    if len(manyRelationList) > 0:
                        for table in manyRelationList:
                            extractedKey = table.split(":")[0]
                            foreignModel = table.split(":")[1]
                            newfile.write("\n    @hasMany(() => " + foreignModel + ", { foreignKey: '" + extractedKey + "' })\n")
                            newfile.write("    public " + plural(lower_start(foreignModel)) + ": HasMany<typeof " + foreignModel + ">;\n")
            
            newfile.write("}")
        
folder_path = 'C:/Users/1/Desktop/Projects/MyPSM/mypsm-be/database/migrations'

for filename in os.listdir(folder_path):
    if filename.endswith(".ts"):
        migration_path = os.path.join(folder_path, filename)
        generate_model(migration_path)
        print(filename)