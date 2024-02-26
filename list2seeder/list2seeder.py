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
        text = myfile.readlines()
        model_path = "1000000146000_create_seed_permissions.ts"
      
        with open(model_path, 'w', encoding='utf-8-sig') as newfile:
            
            for index, t in enumerate(text):
                t = re.sub("\[.*?\]"," ", t)
                tl = ''.join([line for line in t])
                ts = ' '.join(tl.split())
            
            newfile.write("import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';\n")
            newfile.write("import Permission from 'App/Models/Permission';\n")
            
            newfile.write("\nexport default class extends BaseSeeder {\n\n")
            newfile.write("\tpublic async run () {\n")

            newfile.write("\t\tawait Permission.createMany([\n")
            
            i = 0
            
            # newfile.write("\t\t\t{")
            
            for index, t in enumerate(text):
                t = re.sub("\[.*?\]"," ", t)
                tl = ''.join([line for line in t])
                ts = ' '.join(tl.split())
                
                values = ts.split(",")
                newfile.write('\t\t\t{\n')
                newfile.write('\t\t\t\taction: "' + values[0] + '",\n')
                newfile.write('\t\t\t\tresource: "' + values[1] + '",\n')
                newfile.write('\t\t\t\tmodule: "' + values[2] + '",\n')
                newfile.write('\t\t\t\tactive: true,\n')
                newfile.write('\t\t\t\tcreatedBy: "Admin",\n')
                newfile.write('\t\t\t},\n')
                
            newfile.write("\t\t])\n")
            newfile.write("\t}\n")
            newfile.write("}\n")
        
folder_path = 'List'

for filename in os.listdir(folder_path):
    if filename.endswith(".csv"):
        migration_path = os.path.join(folder_path, filename)
        generate_model(migration_path)
        #print(filename)