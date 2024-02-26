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
        
        model_path = "C:/Users/1/Desktop/Projects/MyPSM/mypsm-be/app/Validators/" + modelName + "Validator.ts"
      
        with open(model_path, 'w', encoding='utf-8-sig') as newfile:
            
            newfile.write("import { z } from 'zod';\n")
            newfile.write("\n")
            newfile.write("const " + modelName + "Schema = z.object({")
            
            for index, t in enumerate(text):
                t = re.sub("\[.*?\]"," ", t)
                tl = ''.join([line for line in t])
                ts = ' '.join(tl.split())
                
                
                superIdCheck = "super.extendingIdName"
                columnCheck = "table."
                superCheck = "super.extendingProcessSchema"
                superLogCheck = "super.extendingLogSchema"
                
                if ".notNullable()" in ts or "NOT NULL" in ts:
                    optional = ""
                    if ".defaultTo(" in ts:
                        optional = ".optional()"
                
                else:
                    optional = ".optional()"
                    
                if superIdCheck in ts:
                    newfile.write("\n\tname: z.string().max(75),")
                
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
                        newfile.write("\n\t" + columnName + ": z.number().int().nonnegative(),")
                        
                    if integer in columnType:
                        newfile.write("\n\t" + columnName + ": z.number().int()" + optional + ",")
                        
                    if varchar in columnType:
                        length = columnType.split("VARCHAR(")[1].split(")")[0]
                        if length == "MAX":
                            max = ""
                        else:
                            max = ".max(" + length + ")"
                            
                        if columnName == "email":
                            email = ".email()"
                        else:
                            email = ""
                        
                        newfile.write("\n\t" + columnName + ": z.string()" + email + max + "" + optional + ",")
                        
                    # if varbinary in columnType:
                    #     newfile.write("\n\t\t\t\t" + columnName + ": '',")
                        
                    if timestamp in columnType:
                        newfile.write("\n\t" + columnName + ": z.string().datetime(),")
                        
                    if float in columnType:
                        newfile.write("\n\t" + columnName + ": z.number()" + optional + ",")
                        
                    if boolean in columnType:
                        newfile.write("\n\t" + columnName + ": z.boolean()" + optional + ",")
                        
                if superCheck in ts:
                    column = ts.split(',')
                    idName = column[1].replace("'", "").replace(" ", "").replace(")", "").replace(";", "")
                    actionName = column[2].replace("'", "").replace(" ", "").replace(")", "").replace(";", "")
                    
                    newfile.write("\n\t" + idName + ": z.number().int().nonnegative()" + optional + ",")
                    
                    newfile.write("\n\t" + actionName + "Status: z.string().max(75)" + optional + ",")
                    
                    newfile.write("\n\t" + actionName + "Remark: z.string()" + optional + ",")
                    
                    # newfile.write("\n\t" + actionName + "Date: z.string().datetime().refine((date) => new Date(date) < new Date(), {message: 'Date must be before today.'})" + optional + ",")
                    newfile.write("\n\t" + actionName + "Date: z.string().datetime(),")
                    
                    # newfile.write("\n\t@column.dateTime({ columnName: '" + actionName + "Date' })\n")
                    # newfile.write("\tpublic " + actionName + "Date: DateTime;\n")
                    
                if superLogCheck in ts:
                    
                    newfile.write("\n\tactive: z.boolean().optional(),")

                    newfile.write("\n\tcreatedBy: z.string().max(75).optional(),")
                    
                    newfile.write("\n\tcreatedAt: z.date().optional(),")
                    
                    newfile.write("\n\tmodifiedBy: z.string().max(75).optional(),")
                    
                    newfile.write("\n\tmodifiedAt: z.date().optional(),")
            
            newfile.write("\n});")
            
                
            newfile.write("\n\nexport default " + modelName + "Schema;")
        
folder_path = 'C:/Users/1/Desktop/Projects/MyPSM/mypsm-be/database/migrations'

for filename in os.listdir(folder_path):
    if filename.endswith(".ts"):
        migration_path = os.path.join(folder_path, filename)
        generate_model(migration_path)
        #print(filename)