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

def generate_model(migration_path):
    with open(migration_path, mode='r', encoding="utf-8") as myfile:
        fileName = migration_path.split('\\')[1].split("Policies for ")[1]
        moduleName = fileName.rstrip('.txt')
        print(moduleName)
        text = myfile.readlines()
        
        
        model_path = "Seeder/" + moduleName + ".txt"
      
        with open(model_path, 'w', encoding='utf-8-sig') as newfile:
            
            foreignKeyList = []
            hasSuper = 0
            
            for index, t in enumerate(text):
                t = re.sub("\[.*?\]"," ", t)
                tl = ''.join([line for line in t])
                ts = ' '.join(tl.split())
            
            # newfile.write("import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';\n")
            # newfile.write("import { DateTime } from 'luxon';\n")
            # newfile.write("import { Faker, en } from '@faker-js/faker';\n")
            # newfile.write("import Permission from 'App/Models/Permission';\n")
            
            # newfile.write("\nexport default class extends BaseSeeder {\n\n")
            # newfile.write("\tpublic async run () {\n")

            # newfile.write("\t\tconst faker = new Faker({ locale: [en] });\n")
            # newfile.write("\t\tawait Permission.createMany([\n")
            
            i = 0
            
            # newfile.write("\t\t\t{")
            
            for index, t in enumerate(text):
                t = re.sub("\[.*?\]"," ", t)
                tl = ''.join([line for line in t])
                ts = ' '.join(tl.split())
                
                
                superIdCheck = "super.extendingIdName"
                columnCheck = "table."
                superCheck = "super.extendingProcessSchema"
                superLogCheck = "super.extendingLogSchema"
                
                if contains_full_number(ts) and ts[-1:] == ".":
                    values = extract_quoted_strings(ts)
                    # print(ts, values)
                    if len(values) > 2:
                        values.append(moduleName)
                        newfile.write(ts + " " + str(values))
                        newfile.write("\n")
                        
                    elif len(values) < 3:
                        if len(values) == 2:
                            if "System" in ts or "HRMIS" in ts:
                                values.append(moduleName)
                                newfile.write("\nIGNORE\n")
                                newfile.write(ts + " " + str(values))
                                newfile.write("\n\n")
                            else:
                                extraAction = ts.split(values[1])[1].replace('" ', "").replace('", ', "")
                                print(extraAction)
                                values.append(extraAction)
                                values.append(moduleName)
                                newfile.write("\nFIX\n")
                                newfile.write(ts + " " + str(values))
                                newfile.write("\n\n")
                        elif len(values) < 2:
                            values.append(moduleName)
                            if "IF" in ts:
                                newfile.write("\nIF STATEMENT\n")
                            else:
                                newfile.write("\nIGNORE\n")
                            newfile.write(ts + " " + str(values))
                            newfile.write("\n\n")
                            
                elif "IF" in ts:
                    newfile.write("\nIF STATEMENT\n")
                    newfile.write(ts + "\n\n")
                
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
                
                
            newfile.write("\t\t])\n")
            newfile.write("\t}\n")
            newfile.write("}\n")
        
folder_path = 'Policies'

for filename in os.listdir(folder_path):
    if filename.endswith(".txt"):
        migration_path = os.path.join(folder_path, filename)
        generate_model(migration_path)
        #print(filename)