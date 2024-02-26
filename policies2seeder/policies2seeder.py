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
        
        
        model_path = "Seeder/" + moduleName + ".ts"
      
        with open(model_path, 'w', encoding='utf-8-sig') as newfile:
            
            foreignKeyList = []
            hasSuper = 0
            
            for index, t in enumerate(text):
                t = re.sub("\[.*?\]"," ", t)
                tl = ''.join([line for line in t])
                ts = ' '.join(tl.split())
            
            newfile.write("import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';\n")
            newfile.write("import Employee from 'App/Models/Employee';\n")
            newfile.write("import Permission from 'App/Models/Permission';\n")
            newfile.write("import Role from 'App/Models/Role';\n")
            
            newfile.write("\nexport default class extends BaseSeeder {\n\n")
            newfile.write("\tpublic async run () {\n")
            newfile.write("\t\tconst employees = await Employee.all();\n")
            newfile.write("\t\tconst roles = await Role.all();\n")

            newfile.write("\t\tawait Permission.createMany([\n")
            
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
                
                if contains_full_number(ts) and ts[-1:] == "." and "System" not in ts:
                    values = extract_quoted_strings(ts)
                    # print(ts, values)
                    if len(values) > 2:
                        values.append(moduleName)
                        # newfile.write(ts + " " + str(values))
                        # newfile.write("\n")
                        newfile.write('\t\t\t{\n')
                        if values[0] == "Kakitangan":
                            roleId = 2
                        elif values[0] == "US Perjawatan" or values[0] == "Urus Setia Perjawatan":
                            roleId = 3
                        elif values[0] == "US Cuti" or values[0] == "Urus Setia Cuti":
                            roleId = 4
                        elif values[0] == "US Gaji" or values[0] == "Urus Setia Gaji":
                            roleId = 5
                        elif values[0] == "US Integriti" or values[0] == "Urus Setia Integriti" or values[0] == "USI":
                            roleId = 6
                        elif values[0] == "US LNPT" or values[0] == "Urus Setia LNPT":
                            roleId = 7
                        elif values[0] == "US Latihan" or values[0] == "Urus Setia Latihan":
                            roleId = 8
                        elif values[0] == "US Kakitangan Kontrak" or values[0] == "Urus Setia Kakitangan Kontrak":
                            roleId = 9
                        elif values[0] == "US Pinjaman" or values[0] == "Urus Setia Pinjaman":
                            roleId = 10
                        elif values[0] == "US Perubatan" or values[0] == "Urus Setia Perubatan":
                            roleId = 11
                        elif values[0] == "US Elaun" or values[0] == "Urus Setia Elaun":
                            roleId = 12
                        elif values[0] == "Penyokong" or values[0] == "Penyokong I" or values[0] == "Penyokong II":
                            roleId = 13
                        elif values[0] == "Pelulus":
                            roleId = 14
                        elif values[0] == "Pengarah Negeri" or values[0] == "PN" or values[0] == "PB" or values[0] == "Pengarah Bahagian":
                            roleId = 15
                        elif values[0] == "Pengarah Khidmat Pengurusan" or values[0] == "PKP":
                            roleId = 16
                        elif values[0] == "Ketua Seksyen" or values[0] == "KS":
                            roleId = 17
                        elif values[0] == "Ketua Pengarah" or values[0] == "KP":
                            roleId = 18
                        elif values[0] == "Calon":
                            roleId = 20
                        elif values[0] == "Klinik Panel":
                            roleId = 21
                        elif values[0] == "Unit Bahagian/Negeri":
                            roleId = 90
                        elif values[0] == "UPF" or values[0] == "Unit Pengurusan Fasiliti":
                            roleId = 91
                        elif values[0] == "PIA" or values[0] == "Pengarah Integriti/Audit":
                            roleId = 92
                        elif values[0] == "TKS" or values[0] == "Timbalan Ketua Seksyen":
                            roleId = 93
                        elif values[0] == "USP" or values[0] == "Urus Setia Persaraan":
                            roleId = 94
                        else:
                            roleId = 99
                        newfile.write('\t\t\t\temployeeId: employees![Math.floor(Math.random() *10)].id,\n')
                        newfile.write('\t\t\t\troleId: roles[' + str(roleId) + ']!.id,\n')
                        newfile.write('\t\t\t\taction: "' + values[1] + '",\n')
                        newfile.write('\t\t\t\tresource: "' + values[2] + '",\n')
                        newfile.write('\t\t\t\tmodule: "' + moduleName + '",\n')
                        # newfile.write('\t\t\t\tcondition_attribute: "",\n')
                        # newfile.write('\t\t\t\tcondition_operator: "",\n')
                        # newfile.write('\t\t\t\tcondition_value: "",\n')
                        newfile.write('\t\t\t\tactive: true,\n')
                        newfile.write('\t\t\t\tcreatedBy: "Admin",\n')
                        newfile.write('\t\t\t},\n')
                        
                    elif len(values) < 3:
                        if len(values) == 2:
                            if "System" in ts or "HRMIS" in ts:
                                values.append(moduleName)
                                # newfile.write("\nIGNORE\n")
                                # newfile.write(ts + " " + str(values))
                                # newfile.write("\n\n")
                            else:
                                extraAction = ts.split(values[1])[1].replace('" ', "").replace('", ', "").replace(".", "")
                                print(extraAction)
                                values.append(extraAction)
                                values.append(moduleName)
                                # newfile.write("\nFIX\n")
                                # newfile.write(ts + " " + str(values))
                                # newfile.write("\n\n")
                                newfile.write('\t\t\t{\n')
                                if values[0] == "Kakitangan":
                                    roleId = 2
                                elif values[0] == "US Perjawatan" or values[0] == "Urus Setia Perjawatan":
                                    roleId = 3
                                elif values[0] == "US Cuti" or values[0] == "Urus Setia Cuti":
                                    roleId = 4
                                elif values[0] == "US Gaji" or values[0] == "Urus Setia Gaji":
                                    roleId = 5
                                elif values[0] == "US Integriti" or values[0] == "Urus Setia Integriti" or values[0] == "USI":
                                    roleId = 6
                                elif values[0] == "US LNPT" or values[0] == "Urus Setia LNPT":
                                    roleId = 7
                                elif values[0] == "US Latihan" or values[0] == "Urus Setia Latihan":
                                    roleId = 8
                                elif values[0] == "US Kakitangan Kontrak" or values[0] == "Urus Setia Kakitangan Kontrak":
                                    roleId = 9
                                elif values[0] == "US Pinjaman" or values[0] == "Urus Setia Pinjaman":
                                    roleId = 10
                                elif values[0] == "US Perubatan" or values[0] == "Urus Setia Perubatan":
                                    roleId = 11
                                elif values[0] == "US Elaun" or values[0] == "Urus Setia Elaun":
                                    roleId = 12
                                elif values[0] == "Penyokong" or values[0] == "Penyokong I" or values[0] == "Penyokong II":
                                    roleId = 13
                                elif values[0] == "Pelulus":
                                    roleId = 14
                                elif values[0] == "Pengarah Negeri" or values[0] == "PN" or values[0] == "PB" or values[0] == "Pengarah Bahagian":
                                    roleId = 15
                                elif values[0] == "Pengarah Khidmat Pengurusan" or values[0] == "PKP":
                                    roleId = 16
                                elif values[0] == "Ketua Seksyen" or values[0] == "KS":
                                    roleId = 17
                                elif values[0] == "Ketua Pengarah" or values[0] == "KP":
                                    roleId = 18
                                elif values[0] == "Calon":
                                    roleId = 20
                                elif values[0] == "Klinik Panel":
                                    roleId = 21
                                elif values[0] == "Unit Bahagian/Negeri":
                                    roleId = 90
                                elif values[0] == "UPF" or values[0] == "Unit Pengurusan Fasiliti":
                                    roleId = 91
                                elif values[0] == "PIA" or values[0] == "Pengarah Integriti/Audit":
                                    roleId = 92
                                elif values[0] == "TKS" or values[0] == "Timbalan Ketua Seksyen":
                                    roleId = 93
                                elif values[0] == "USP" or values[0] == "Urus Setia Persaraan":
                                    roleId = 94
                                else:
                                    roleId = 99
                                newfile.write('\t\t\t\temployeeId: employees![Math.floor(Math.random() *10)].id,\n')
                                newfile.write('\t\t\t\troleId: roles[' + str(roleId) + ']!.id,\n')
                                newfile.write('\t\t\t\taction: "' + values[1] + '",\n')
                                newfile.write('\t\t\t\tresource: "' + values[2] + '",\n')
                                newfile.write('\t\t\t\tmodule: "' + moduleName + '",\n')
                                # newfile.write('\t\t\t\tcondition_attribute: "",\n')
                                # newfile.write('\t\t\t\tcondition_operator: "",\n')
                                # newfile.write('\t\t\t\tcondition_value: "",\n')
                                newfile.write('\t\t\t\tactive: true,\n')
                                newfile.write('\t\t\t\tcreatedBy: "Admin",\n')
                                newfile.write('\t\t\t},\n')
                                
                        elif len(values) < 2:
                            values.append(moduleName)
                            # newfile.write("\nIGNORE\n")
                            # newfile.write(ts + " " + str(values))
                            # newfile.write("\n\n")
                
            newfile.write("\t\t])\n")
            newfile.write("\t}\n")
            newfile.write("}\n")
        
folder_path = 'Policies'

for filename in os.listdir(folder_path):
    if filename.endswith(".txt"):
        migration_path = os.path.join(folder_path, filename)
        generate_model(migration_path)
        #print(filename)