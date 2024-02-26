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
        
        model_path = "Response/" + modelName + "Response.ts"
      
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
            newfile.write("\n")
            newfile.write("export default class Get" + modelName + "Response {\n")
            newfile.write("    public " + lower_start(modelName) + ": " + modelName + "Response =\n")
            newfile.write("        new " + modelName + "Response();\n")
            newfile.write("}\n")
            newfile.write("export class " + modelName + "Response {\n")
            # newfile.write("    public employeeNo: string = '';\n")
            # newfile.write("    public name: string = '';\n")
            # newfile.write("    public otherName: string = '';\n")
            # newfile.write("    public identityCard: string = '';\n")
            # newfile.write("    public identityCardColor: string = '';\n")
            # newfile.write("    public dateOfBirth: DateTime;\n")
            # newfile.write("    public placeOfBirth: string = '';\n")
            # newfile.write("    public nationality: string = '';\n")
            # newfile.write("    public race: string = '';\n")
            # newfile.write("    public religion: string = '';\n")
            # newfile.write("    public gender: string = '';\n")
            # newfile.write("    public status: string = '';\n")
            # newfile.write("    public homeAddress: string = '';\n")
            # newfile.write("    public mailAddress: string = '';\n")
            # newfile.write("    public homeNo: string = '';\n")
            # newfile.write("    public mobileNo: string = '';\n")
            # newfile.write("    public housing: string = '';\n")
            # newfile.write("    public houseLoan: number;\n")
            # newfile.write("    public carLoan: string = '';\n")
            # newfile.write("    public isExPolice: boolean = false;\n")

            
            for index, t in enumerate(text):
                t = re.sub("\[.*?\]"," ", t)
                tl = ''.join([line for line in t])
                ts = ' '.join(tl.split())
                
                
                superIdCheck = "super.extendingIdName"
                columnCheck = "table."
                superCheck = "super.extendingProcessSchema"
                superLogCheck = "super.extendingLogSchema"
                
                if superIdCheck in ts:     
                    newfile.write("    public name: string = '';\n")
                
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
                    
                    if bigInt in columnType:
                        newfile.write("    public " + columnName + ": bigint;\n")
                        
                    if integer in columnType:
                        newfile.write("    public " + columnName + ": number;\n")
                        
                    if varchar in columnType:
                        newfile.write("    public " + columnName + ": string = '';\n")
                        
                    if varbinary in columnType:
                        newfile.write("    public " + columnName + ": Blob;\n")
                        
                    if timestamp in columnType:
                        newfile.write("    public " + columnName + ": DateTime;\n")
                        
                    if float in columnType:
                        newfile.write("    public " + columnName + ": number;\n")
                        
                    if boolean in columnType:
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
                    
                    newfile.write("    public " + idName + ": bigint;\n")
                    
                    newfile.write("    public " + actionName + "Status: string;\n")
                
                    newfile.write("    public " + actionName + "Remark: string;\n")
                    
                    newfile.write("    public " + actionName + "Date: DateTime;\n")
                    
            newfile.write("\n")
            newfile.write("    public getFull(data) {\n")
                    
            for index, t in enumerate(text):
                t = re.sub("\[.*?\]"," ", t)
                tl = ''.join([line for line in t])
                ts = ' '.join(tl.split())
                
                
                superIdCheck = "super.extendingIdName"
                columnCheck = "table."
                superCheck = "super.extendingProcessSchema"
                superLogCheck = "super.extendingLogSchema"
                
                if superIdCheck in ts:     
                    newfile.write("        this.name = data.name;\n")
                
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
                    
                    if bigInt in columnType:
                        newfile.write("        this." + columnName + " = data." + columnName + ";\n")
                        
                    if integer in columnType:
                        newfile.write("        this." + columnName + " = data." + columnName + ";\n")
                        
                    if varchar in columnType:
                        newfile.write("        this." + columnName + " = data." + columnName + ";\n")
                        
                    if varbinary in columnType:
                        newfile.write("        this." + columnName + " = data." + columnName + ";\n")
                        
                    if timestamp in columnType:
                        newfile.write("        this." + columnName + " = data." + columnName + ";\n")
                        
                    if float in columnType:
                        newfile.write("        this." + columnName + " = data." + columnName + ";\n")
                        
                    if boolean in columnType:
                        newfile.write("        this." + columnName + " = data." + columnName + ";\n")
                        
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
                    
                    newfile.write("        this." + idName + " = data." + idName + ";\n")
                    
                    newfile.write("        this." + actionName + "Status = data." + actionName + "Status;\n")
                
                    newfile.write("        this." + actionName + "Remark = data." + actionName + "Remark;\n")
                    
                    newfile.write("        this." + actionName + "Date = data." + actionName + "Date;\n")
            
            newfile.write("    }\n")
            newfile.write("}")
        
folder_path = 'C:/Users/1/Desktop/Projects/MyPSM/mypsm-be/database/migrations'

for filename in os.listdir(folder_path):
    if filename.endswith(".ts"):
        migration_path = os.path.join(folder_path, filename)
        generate_model(migration_path)
        print(filename)