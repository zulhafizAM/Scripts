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
        
        model_path = "C:/Users/1/Desktop/Projects/MyPSM/mypsm-be/database/seeders/" + migrationNumbering[0] + "_" + migrationNumbering[1] + "_seed_" + migrationNumbering[2]
      
        with open(model_path, 'w', encoding='utf-8-sig') as newfile:
            
            foreignKeyList = []
            hasSuper = 0
            
            for index, t in enumerate(text):
                t = re.sub("\[.*?\]"," ", t)
                tl = ''.join([line for line in t])
                ts = ' '.join(tl.split())
                
                foreignKeyCheck = "table.bigInteger"
                superCheck = "super.extendingProcessSchema"
                
                if foreignKeyCheck in ts:
                    # columnNameMatch = re.search(r"'\w+'", ts)
                    # columnName = columnNameMatch.group(0)[1:-1]
                    foreignKeyTableName = re.search(r"inTable\('(\w+)'", ts).group(0).split("inTable('")[1][0:-1]
                    foreignKeyList.append(foreignKeyTableName)
                
                if superCheck in ts:
                    hasSuper = 1
                    
            
            if len(foreignKeyList) > 0:
                print(tableName + ": " + str(foreignKeyList))
            
            else:
                print("Table " + tableName + " has no foreign keys")
            
            newfile.write("import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';\n")
            newfile.write("import { DateTime } from 'luxon';\n")
            newfile.write("import { Faker, en } from '@faker-js/faker';\n")
            newfile.write("import " + modelName + " from 'App/Models/" + modelName + "';\n")
            
            if len(foreignKeyList) > 0:
                for table in foreignKeyList:
                    model = convert_string(table)
                    newfile.write("import " + model + " from 'App/Models/" + model + "';\n")
                    
            if hasSuper == 1:
                newfile.write("import Employee from 'App/Models/Employee';\n")
                
            # if "Process" in modelName:
            #     newfile.write("import { column, BaseModel } from '@ioc:Adonis/Lucid/Orm';\n\n")
            # else:
            newfile.write("\nexport default class extends BaseSeeder {\n\n")
            newfile.write("\tpublic async run () {\n")
            if len(foreignKeyList) > 0:
                for table in foreignKeyList:
                    model = convert_string(table)
                    newfile.write("\t\tconst " + table + " = await " + model + ".all();\n")
            if hasSuper == 1:
                newfile.write("\t\tconst employees = await Employee.all();\n")
            
            newfile.write("\t\tconst faker = new Faker({ locale: [en] });\n")
            newfile.write("\t\tawait " + modelName + ".createMany([\n")
            
            i = 0
            
            while i < 10:
                newfile.write("\t\t\t{")
                
                for index, t in enumerate(text):
                    t = re.sub("\[.*?\]"," ", t)
                    tl = ''.join([line for line in t])
                    ts = ' '.join(tl.split())
                    
                    
                    superIdCheck = "super.extendingIdName"
                    columnCheck = "table."
                    superCheck = "super.extendingProcessSchema"
                    superLogCheck = "super.extendingLogSchema"
                    
                    if superIdCheck in ts:
                        newfile.write("\n\t\t\t\tname: faker.person.fullName(),")
                    
                    if columnCheck in ts:
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
                            #print(ts)
                            i = index + 1
                            while columnCheck not in text[i]:
                                ts = ts + text[i]
                                i = i + 1
                            columnNameMatch = re.search(r"'\w+'", ts)
                            columnName = columnNameMatch.group(0)[1:-1]
                            split_ts = ts.split('.')
                            columnType = split_ts[1]
                            print(columnName)
                        
                        if bigInt in columnType:
                            foreignKeyTableName = re.search(r"inTable\('(\w+)'", ts).group(0).split("inTable('")[1][0:-1]
                            newfile.write("\n\t\t\t\t" + columnName + ": " + foreignKeyTableName + "![Math.floor(Math.random() * 10)].id,")
                            
                        if integer in columnType:
                            newfile.write("\n\t\t\t\t" + columnName + ": faker.number.int({ max: 10 }),")
                            
                        if varchar in columnType:
                            newfile.write("\n\t\t\t\t" + columnName + ": faker.person.fullName(),")
                            
                        # if varbinary in columnType:
                        #     newfile.write("\n\t\t\t\t" + columnName + ": '',")
                            
                        if timestamp in columnType:
                            newfile.write("\n\t\t\t\t" + columnName + ": DateTime.fromJSDate(faker.date.past()),")
                            
                        if float in columnType:
                            newfile.write("\n\t\t\t\t" + columnName + ": faker.number.float({ precision: 0.01 }),")
                            
                        if boolean in columnType:
                            newfile.write("\n\t\t\t\t" + columnName + ": true,")
                            
                    if superCheck in ts:
                        column = ts.split(',')
                        idName = column[1].replace("'", "").replace(" ", "").replace(")", "").replace(";", "")
                        actionName = column[2].replace("'", "").replace(" ", "").replace(")", "").replace(";", "")
                        
                        newfile.write("\n\t\t\t\t" + idName + ": employees![Math.floor(Math.random() * 10)].id,")
                        
                        newfile.write("\n\t\t\t\t" + actionName + "Status: faker.person.firstName(),")
                        
                        newfile.write("\n\t\t\t\t" + actionName + "Remark: faker.commerce.productDescription(),")
                        
                        newfile.write("\n\t\t\t\t" + actionName + "Date: DateTime.fromJSDate(faker.date.past()),")
                        
                        # newfile.write("\n\t@column.dateTime({ columnName: '" + actionName + "Date' })\n")
                        # newfile.write("\tpublic " + actionName + "Date: DateTime;\n")
                        
                    if superLogCheck in ts:
                        
                        newfile.write("\n\t\t\t\tactive: true,")

                        newfile.write("\n\t\t\t\tcreatedBy: 'Admin'\n")
                
                newfile.write("\t\t\t},\n")
                
                i += 1
                
            newfile.write("\t\t])\n")
            newfile.write("\t}\n")
            newfile.write("}\n")
        
folder_path = 'C:/Users/1/Desktop/Projects/MyPSM/mypsm-be/database/migrations'

for filename in os.listdir(folder_path):
    if filename.endswith(".ts"):
        migration_path = os.path.join(folder_path, filename)
        generate_model(migration_path)
        #print(filename)