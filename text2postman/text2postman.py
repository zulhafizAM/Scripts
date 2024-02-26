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
        model_path = "newRoutes.groovy"
      
        with open(model_path, 'w', encoding='utf-8-sig') as newfile:
            
            newfile.write('{\n')
            newfile.write('  "info": {\n')
            newfile.write('      "_postman_id": "your-collection-id",\n')
            newfile.write('      "name": "Service Lookup Collection",\n')
            newfile.write('      "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"\n')
            newfile.write('  },\n')
            newfile.write('  "item": [\n')
            newfile.write('      {\n')
            newfile.write('          "name": "ServiceLookup",\n')
            newfile.write('          "item": [\n')
            
            for index, t in enumerate(text):
                t = re.sub("\[.*?\]"," ", t)
                tl = ''.join([line for line in t])
                ts = ' '.join(tl.split())
                
                routeSnake = ts.replace("router.get('", "").replace("', )", "")
                routePascal = snake_to_pascal(routeSnake)
                newfile.write('              {\n')
                newfile.write('                  "name": "' + routePascal + '",\n')
                newfile.write('                  "item": [\n')
                newfile.write('                      {\n')
                newfile.write('                          "name": "Login as Admin",\n')
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
                newfile.write('                                  "raw": "{\\n    \\"userGroup\\": \\"employee\\",\\n    \\"username\\": \\"871025075011\\",\\n    \\"password\\": \\"P@ssw0rd\\",\\n    \\"currentRole\\": \\"admin\\"\\n}"\n')
                newfile.write('                              },\n')
                newfile.write('                              "url": {\n')
                newfile.write('                              "raw": "{{Url}}/auth/login",\n')
                newfile.write('                              "host": [\n')
                newfile.write('                                  "{{Url}}"\n')
                newfile.write('                              ],\n')
                newfile.write('                              "path": [\n')
                newfile.write('                                  "auth",\n')
                newfile.write('                                  "login"\n')
                newfile.write('                              ]\n')
                newfile.write('                          }\n')
                newfile.write('                          },\n')
                newfile.write('                          "response": []\n')
                newfile.write('                      },\n')
                newfile.write('                      {\n')
                newfile.write('                          "name": "get' + routePascal + '",\n')
                newfile.write('                          "event": [\n')
                newfile.write('                              {\n')
                newfile.write('                                  "listen": "prerequest",\n')
                newfile.write('                                  "script": {\n')
                newfile.write('                                      "type": "text/javascript",\n')
                newfile.write('                                      "exec": [\n')
                newfile.write('                                          "pm.collectionVariables.set(\\"CurrentRequest\\", \\"list\\");"\n')
                newfile.write('                                          \n')
                newfile.write('                                      ]\n')
                newfile.write('                                  }\n')
                newfile.write('                              }\n')
                newfile.write('                          ],\n')
                newfile.write('                          "request": {\n')
                newfile.write('                              "method": "GET",\n')
                newfile.write('                              "header": [],\n')
                newfile.write('                              "url": {\n')
                newfile.write('                                "raw": "{{Url}}/service_lookup/' + routeSnake + '",\n')
                newfile.write('                                "host": [\n')
                newfile.write('                                    "{{Url}}"\n')
                newfile.write('                                ],\n')
                newfile.write('                                "path": [\n')
                newfile.write('                                    "service_lookup",\n')
                newfile.write('                                    "' + routeSnake + '"\n')
                newfile.write('                                ]\n')
                newfile.write('                              }\n')
                newfile.write('                          },\n')
                newfile.write('                          "response": []\n')
                newfile.write('                      },\n')
                newfile.write('                      {\n')
                newfile.write('                          "name": "filter' + routePascal + '",\n')
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
                newfile.write('                              "raw": "{{Url}}/service_lookup/' + routeSnake + '/filter",\n')
                newfile.write('                              "host": [\n')
                newfile.write('                                  "{{Url}}"\n')
                newfile.write('                              ],\n')
                newfile.write('                              "path": [\n')
                newfile.write('                                  "service_lookup",\n')
                newfile.write('                                  "' + routeSnake + '",\n')
                newfile.write('                                  "filter"\n')
                newfile.write('                              ]\n')
                newfile.write('                          }\n')
                newfile.write('                          },\n')
                newfile.write('                          "response": []\n')
                newfile.write('                      },\n')
                newfile.write('                      {\n')
                newfile.write('                          "name": "add' + depluralize(routePascal) + '",\n')
                newfile.write('                          "event": [\n')
                newfile.write('                              {\n')
                newfile.write('                                  "listen": "prerequest",\n')
                newfile.write('                                  "script": {\n')
                newfile.write('                                      "type": "text/javascript",\n')
                newfile.write('                                      "exec": [\n')
                newfile.write('                                          "let randomCd = `RX-${Math.random().toString(36).substring(2,12)}`;",\n')
                newfile.write('                                          "let randomDesc = `' + depluralize(routePascal) + '-${Math.random().toString(36).substring(2,12)}`;",\n')
                newfile.write('                                          "pm.collectionVariables.set(\\"randomCode\\", randomCd);",\n')
                newfile.write('                                          "pm.collectionVariables.set(\\"randomDescription\\", randomDesc);",\n')
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
                newfile.write('                                  "raw": "{\\n    \\"code\\": \\"{{randomCode}}\\",\\n    \\"description\\": \\"{{randomDescription}}\\"\\n}"\n')
                newfile.write('                              },\n')
                newfile.write('                              "url": {\n')
                newfile.write('                              "raw": "{{Url}}/service_lookup/' + routeSnake + '/add",\n')
                newfile.write('                              "host": [\n')
                newfile.write('                                  "{{Url}}"\n')
                newfile.write('                              ],\n')
                newfile.write('                              "path": [\n')
                newfile.write('                                  "service_lookup",\n')
                newfile.write('                                  "' + routeSnake + '",\n')
                newfile.write('                                  "add"\n')
                newfile.write('                              ]\n')
                newfile.write('                          }\n')
                newfile.write('                          },\n')
                newfile.write('                          "response": []\n')
                newfile.write('                      },\n')
                newfile.write('                      {\n')
                newfile.write('                          "name": "edit' + depluralize(routePascal) + '",\n')
                newfile.write('                          "event": [\n')
                newfile.write('                              {\n')
                newfile.write('                                  "listen": "prerequest",\n')
                newfile.write('                                  "script": {\n')
                newfile.write('                                      "type": "text/javascript",\n')
                newfile.write('                                      "exec": [\n')
                newfile.write('                                          "let randomCd = `RX-${Math.random().toString(36).substring(2,12)}`;",\n')
                newfile.write('                                          "let randomDesc = `' + depluralize(routePascal) + '-${Math.random().toString(36).substring(2,12)}`;",\n')
                newfile.write('                                          "pm.collectionVariables.set(\\"randomCode\\", randomCd);",\n')
                newfile.write('                                          "pm.collectionVariables.set(\\"randomDescription\\", randomDesc);",\n')
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
                newfile.write('                                  "raw": "{\\n    \\"id\\": 10000,\\n    \\"code\\": \\"{{randomCode}}\\",\\n    \\"description\\": \\"{{randomDescription}}\\"\\n}"\n')
                newfile.write('                              },\n')
                newfile.write('                              "url": {\n')
                newfile.write('                                "raw": "{{Url}}/service_lookup/' + routeSnake + '/edit",\n')
                newfile.write('                                "host": [\n')
                newfile.write('                                    "{{Url}}"\n')
                newfile.write('                                ],\n')
                newfile.write('                                "path": [\n')
                newfile.write('                                    "service_lookup",\n')
                newfile.write('                                    "' + routeSnake + '",\n')
                newfile.write('                                    "edit"\n')
                newfile.write('                                ]\n')
                newfile.write('                              }\n')
                newfile.write('                          },\n')
                newfile.write('                          "response": []\n')
                newfile.write('                      }\n')
                newfile.write('                    ]\n')
                newfile.write('                },\n')
                
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
        

migration_path = os.path.join('oldRoutes.ts')
generate_model(migration_path)
        #print(filename)