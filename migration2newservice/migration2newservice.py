import sys
import os
import re
from pathlib import Path
import string

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

def capital_start(string):
    capital_string = string[0].upper() + string[1:]
    
    return capital_string

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

        service_path = "service/" + modelName + "Services.ts"
      
        with open(service_path, 'w', encoding='utf-8-sig', newline='\n') as newfile:
            
            newfile.write("import BaseService from 'App/Services/BaseService';\n")
            newfile.write("import " + modelName + " from 'App/Models/" + modelName + "';\n")
            # newfile.write("import ResponseStatusServices from 'App/Services/ResponseStatusServices';\n")
            # newfile.write("import { DateTime } from 'luxon';\n")
            newfile.write("\n") 
            newfile.write("export default class " + modelName + "Services extends BaseService {\n")
            
            
# getList Function Start---------------------------------------------------------------------------------------------------------------------------------------

            newfile.write("    public async get" + plural(modelName) + "(\n")
            newfile.write("        payload,\n")
            newfile.write("    ): Promise<" + plural(modelName) + "Response> {\n")
            newfile.write("        const " + lower_start(modelName) + "List = await " + modelName + ".query().preload(\n")
            newfile.write("            'employee',\n")
            newfile.write("            (data) => data.preload('personalDetail'),\n")
            newfile.write("        );\n")
            newfile.write("\n")
            newfile.write("        const " + lower_start(modelName) + " = {\n")
            newfile.write("            pageNum: payload.pageNum,\n")
            newfile.write("            totalData: " + lower_start(modelName) + "List.length,\n")
            newfile.write("            totalPage: Math.ceil(\n")
            newfile.write("                " + lower_start(modelName) + "List.length / payload.pageSize,\n")
            newfile.write("            ),\n")
            newfile.write("            " + lower_start(modelName) + "s: " + lower_start(modelName) + "List.map((result) => ({\n")
            newfile.write("                employeeNo: result.employee.employeeNumber,\n")
            newfile.write("                employeeName: result.employee.personalDetail.name,\n")
            newfile.write("                identityCardNo:\n")
            newfile.write("                    result.employee.personalDetail.identityDocumentNumber,\n")
            newfile.write("                category: 'tetap',\n")
            newfile.write("                status: result.status,\n")
            newfile.write("                remark: result.remark,\n")
            newfile.write("            })),\n")
            newfile.write("        } as " + plural(modelName) + "Response;\n")
            newfile.write("\n")
            newfile.write("        // if (payload.orderBy !== null) {\n")
            newfile.write("        //     this.ordering(payload, " + lower_start(modelName) + ");\n")
            newfile.write("        // }\n")
            newfile.write("\n")
            newfile.write("        " + lower_start(modelName) + "." + lower_start(modelName) + "s =\n")
            newfile.write("            " + lower_start(modelName) + "." + lower_start(modelName) + "s.slice(\n")
            newfile.write("                (payload.pageNum - 1) * payload.pageSize,\n")
            newfile.write("                payload.pageNum * payload.pageSize,\n")
            newfile.write("            );\n")
            newfile.write("\n")
            newfile.write("        console.log(" + lower_start(modelName) + "List);\n")
            newfile.write("        return " + lower_start(modelName) + ";\n")
            newfile.write("    }\n")
            
            newfile.write("    public async get" + modelName + "(\n")
            newfile.write("        personalDetailId,\n")
            newfile.write("    ): Promise<" + modelName + "DetailResponse | Error> {\n")
            newfile.write("        let " + lower_start(modelName) + ": " + modelName + "DetailResponse =\n")
            newfile.write("            new " + modelName + "DetailResponse();\n")
            newfile.write("\n")
            newfile.write("        const personalDetail = await PersonalDetail.query()\n")
            newfile.write("            .preload('employee', (employee) => {\n")
            newfile.write("                employee.preload('employeeSalary', (salary) => {\n")
            newfile.write("                    salary.preload('allowance');\n")
            newfile.write("                });\n")
            newfile.write("            })\n")
            newfile.write("            .preload('race')\n")
            newfile.write("            .preload('religion')\n")
            newfile.write("            .where('id', personalDetailId)\n")
            newfile.write("            .firstOrFail();\n")
            newfile.write("        " + lower_start(modelName) + ".employee.populate(personalDetail);\n")
            newfile.write("        return " + lower_start(modelName) + ";\n")
            newfile.write("    }\n")
            
# get Function End---------------------------------------------------------------------------------------------------------------------------------------
            newfile.write("\n")
            newfile.write("///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////")
            newfile.write("\n")
# add Function Start---------------------------------------------------------------------------------------------------------------------------------------
            newfile.write("export default class " + modelName + "DetailResponse {\n")
            newfile.write("    public employee: " + modelName + "EmployeeResponse =\n")
            newfile.write("        new " + modelName + "EmployeeResponse();\n")
            newfile.write("    public service: " + modelName + "ServiceResponse =\n")
            newfile.write("        new " + modelName + "ServiceResponse();\n")
            newfile.write("}\n")
            
            newfile.write("export class " + modelName + "EmployeeResponse {\n")
            newfile.write("    public employeeNo: string = '';\n")
            newfile.write("    public name: string = '';\n")
            newfile.write("    public otherName: string = '';\n")
            newfile.write("    public identityCard: string = '';\n")
            newfile.write("    public identityCardColor: string = '';\n")
            newfile.write("    public dateOfBirth: string = '';\n")
            newfile.write("    public placeOfBirth: string = '';\n")
            newfile.write("    public nationality: string = '';\n")
            newfile.write("    public race: string = '';\n")
            newfile.write("    public religion: string = '';\n")
            newfile.write("    public gender: string = '';\n")
            newfile.write("    public status: string = '';\n")
            newfile.write("    public homeAddress: string = '';\n")
            newfile.write("    public mailAddress: string = '';\n")
            newfile.write("    public homeNo: string = '';\n")
            newfile.write("    public mobileNo: string = '';\n")
            newfile.write("    public housing: string = '';\n")
            newfile.write("    public houseLoan: string = '';\n")
            newfile.write("    public carLoan: string = '';\n")
            newfile.write("    public isExPolice: boolean = false;\n")
            newfile.write("\n")
            newfile.write("    public populate(data) {\n")
            newfile.write("        this.employeeNo =\n")
            newfile.write("            data.employee === null ? '-' : data.employee.employeeNumber;\n")
            newfile.write("        this.name = data.name;\n")
            newfile.write("        this.otherName = data.alternativeName;\n")
            newfile.write("        this.identityCard = data.identityDocumentNumber;\n")
            newfile.write("        this.identityCardColor = data.identityDocumentType;\n")
            newfile.write("        this.dateOfBirth = data.birthDate;\n")
            newfile.write("        this.placeOfBirth = data.birthPlace;\n")
            newfile.write("        this.nationality = data.isMalaysian ? 'Malaysia' : 'Other Country';\n")
            newfile.write("        this.race = data.race.name;\n")
            newfile.write("        this.religion = data.religion.name;\n")
            newfile.write("        this.gender = data.gender;\n")
            newfile.write("        this.status = data.maritial;\n")
            newfile.write("        this.homeAddress = data.homeAddress;\n")
            newfile.write("        this.mailAddress = data.mailAddress;\n")
            newfile.write("        this.homeNo = data.homeNumber;\n")
            newfile.write("        this.mobileNo = data.mobileNo;\n")
            newfile.write("        this.housing =\n")
            newfile.write("            data.employee === null\n")
            newfile.write("                ? ''\n")
            newfile.write("                : data.employee.employeeSalary.allowance.houseAllowanceType;\n")
            newfile.write("        this.houseLoan =\n")
            newfile.write("            data.employee === null\n")
            newfile.write("                ? ''\n")
            newfile.write("                : data.employee.employeeSalary.allowance.houseAllowance;\n")
            newfile.write("        this.isExPolice = data.isExPoliceOrSoldier;\n")
            newfile.write("    }\n")
            newfile.write("}\n")
            newfile.write("export class " + modelName + "ServiceResponse {\n")
            newfile.write("    public grade: string = '';\n")
            newfile.write("    public position: string = '';\n")
            newfile.write("    public placement: string = '';\n")
            newfile.write("    public serviceLevel: string = '';\n")
            newfile.write("    public hireDate: DateTime;\n")
            newfile.write("    public retirementType: string = '';\n")
            newfile.write("    public kwspNo: string = '';\n")
            newfile.write("    public maybankAccount: string = '';\n")
            newfile.write("    public program: string = '';\n")
            newfile.write("    public leaveEntitlement: string = '';\n")
            newfile.write("    public hireByGovermentDate: DateTime;\n")
            newfile.write("    public hireByLKIMDate: DateTime;\n")
            newfile.write("    public hireCurrentPositionDate: DateTime;\n")
            newfile.write("    public confirmedLKIM: string = '';\n")
            newfile.write("    public currentActing: string = '';\n")
            newfile.write("    public currentInterim: string | null = null;\n")
            newfile.write("    public enterPension: string = '';\n")
            newfile.write("    public lastSalary: string = '';\n")
            newfile.write("    public lastPromotion: string = '';\n")
            newfile.write("    public retirementDate: DateTime | null = null;\n")
            newfile.write("}\n")

# add Function End---------------------------------------------------------------------------------------------------------------------------------------
            newfile.write("\n")
            newfile.write("///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////")
            newfile.write("\n")
# edit Function Start---------------------------------------------------------------------------------------------------------------------------------------
            newfile.write("import { DateTime } from 'luxon';\n")
            newfile.write("import { BaseResponse } from './BaseResponse';\n")
            newfile.write("\n")
            newfile.write("export default class " + plural(modelName) + "Response extends BaseResponse<" + modelName + "Response> {\n")
            newfile.write("    private " + lower_start(modelName) + "List: " + modelName + "Response[] = [];\n")
            newfile.write("    public get " + plural(lower_start(modelName)) + "(): " + modelName + "Response[] {\n")
            newfile.write("        return this." + lower_start(modelName) + "List;\n")
            newfile.write("    }\n")
            newfile.write("    public set " + plural(lower_start(modelName)) + "(v: " + modelName + "Response[]) {\n")
            newfile.write("        this." + lower_start(modelName) + "List = v;\n")
            newfile.write("        this.currentPageSize = this." + lower_start(modelName) + "List.length;\n")
            newfile.write("    }\n")
            newfile.write("}\n")
            newfile.write("export class " + modelName + "Response {\n")
            newfile.write("    public employeeNo: string;\n")
            newfile.write("    public employeeName: string;\n")
            newfile.write("    public identityCardNo: string;\n")
            newfile.write("    public applicationDate: DateTime;\n")
            newfile.write("    public status: string;\n")
            newfile.write("    public remark: string;\n")
            newfile.write("}\n")

# edit Function End---------------------------------------------------------------------------------------------------------------------------------------

folder_path = 'C:/Users/1/Desktop/Projects/MyPSM/mypsm-be/database/migrations'

for filename in os.listdir(folder_path):
    if filename.endswith(".ts"):
        migration_path = os.path.join(folder_path, filename)
        generate_model(migration_path)
        #print(filename)