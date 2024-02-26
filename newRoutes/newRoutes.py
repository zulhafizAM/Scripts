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

def generate_model(migration_path):
    with open(migration_path, mode='r', encoding="utf-8") as myfile:
        text = myfile.readlines()
        model_path = "newRoutes.ts"
      
        with open(model_path, 'w', encoding='utf-8-sig') as newfile:
            
            for index, t in enumerate(text):
                t = re.sub("\[.*?\]"," ", t)
                tl = ''.join([line for line in t])
                ts = ' '.join(tl.split())
                
                routeSnake = ts.replace("router.get('", "").replace("', )", "")
                routePascal = snake_to_pascal(routeSnake)
                newfile.write("            router\n")
                newfile.write("                .group(() => {\n")
                newfile.write("                    router.get('', [LookupController, 'get" + routePascal + "'])\n")
                newfile.write("                    router.post('filter', [LookupController, 'filter" + routePascal + "'])\n")
                newfile.write("                    router.post('add', [LookupController, 'add" + depluralize(routePascal) + "'])\n")
                newfile.write("                    router.put('edit', [LookupController, 'edit" + depluralize(routePascal) + "'])\n")
                newfile.write("                })\n")
                newfile.write("                .prefix('" + routeSnake + "')\n")
                
            newfile.write("\t\t])\n")
            newfile.write("\t}\n")
            newfile.write("}\n")
        

migration_path = os.path.join('oldRoutes.ts')
generate_model(migration_path)
        #print(filename)