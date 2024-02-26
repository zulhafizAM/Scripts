{
  "info": {
      "_postman_id": "your-collection-id",
      "name": "Service Lookup Collection",
      "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
  },
  "item": [
      {
          "name": "ServiceLookup",
          "item": [
              {
                  "name": "Departments",
                  "item": [
                      {
                          "name": "Login as Admin",
                          "event": [
                              {
                                  "listen": "prerequest",
                                  "script": {
                                      "type": "text/javascript",
                                      "exec": [
                                          "pm.collectionVariables.set(\"CurrentRequest\", \"details\");"
                                          
                                      ]
                                  }
                              }
                          ],
                          "request": {
                              "method": "POST",
                              "header": [
                                  {
                                      "key": "Content-Type",
                                      "value": "application/json"
                                  }
                              ],
                              "body": {
                                  "mode": "raw",
                                  "raw": "{\n    \"userGroup\": \"employee\",\n    \"username\": \"871025075011\",\n    \"password\": \"P@ssw0rd\",\n    \"currentRole\": \"admin\"\n}"
                              },
                              "url": {
                              "raw": "{{Url}}/auth/login",
                              "host": [
                                  "{{Url}}"
                              ],
                              "path": [
                                  "auth",
                                  "login"
                              ]
                          }
                          },
                          "response": []
                      },
                      {
                          "name": "getDepartments",
                          "event": [
                              {
                                  "listen": "prerequest",
                                  "script": {
                                      "type": "text/javascript",
                                      "exec": [
                                          "pm.collectionVariables.set(\"CurrentRequest\", \"list\");"
                                          
                                      ]
                                  }
                              }
                          ],
                          "request": {
                              "method": "GET",
                              "header": [],
                              "url": {
                                "raw": "{{Url}}/service_lookup/departments",
                                "host": [
                                    "{{Url}}"
                                ],
                                "path": [
                                    "service_lookup",
                                    "departments"
                                ]
                              }
                          },
                          "response": []
                      },
                      {
                          "name": "filterDepartments",
                          "event": [
                              {
                                  "listen": "prerequest",
                                  "script": {
                                      "type": "text/javascript",
                                      "exec": [
                                          "pm.collectionVariables.set(\"CurrentRequest\", \"listFilter\");"
                                          
                                      ]
                                  }
                              }
                          ],
                          "request": {
                              "method": "POST",
                              "header": [
                                  {
                                      "key": "Content-Type",
                                      "value": "application/json"
                                  }
                              ],
                              "body": {
                                  "mode": "raw",
                                  "raw": "{\n    \"pageNum\": 1,\n    \"pageSize\": 5,\n    \"orderBy\": \"\",\n    \"orderType\": 0,\n    \"filter\": {\n        \"code\": \"\",\n        \"description\": \"\"\n    }\n}"
                              },
                              "url": {
                              "raw": "{{Url}}/service_lookup/departments/filter",
                              "host": [
                                  "{{Url}}"
                              ],
                              "path": [
                                  "service_lookup",
                                  "departments",
                                  "filter"
                              ]
                          }
                          },
                          "response": []
                      },
                      {
                          "name": "addDepartment",
                          "event": [
                              {
                                  "listen": "prerequest",
                                  "script": {
                                      "type": "text/javascript",
                                      "exec": [
                                          "let randomCd = `RX-${Math.random().toString(36).substring(2,12)}`;",
                                          "let randomDesc = `Department-${Math.random().toString(36).substring(2,12)}`;",
                                          "pm.collectionVariables.set(\"randomCode\", randomCd);",
                                          "pm.collectionVariables.set(\"randomDescription\", randomDesc);",
                                          "pm.collectionVariables.set(\"CurrentRequest\", \"details\");"
                                          
                                      ]
                                  }
                              }
                          ],
                          "request": {
                              "method": "POST",
                              "header": [
                                  {
                                      "key": "Content-Type",
                                      "value": "application/json"
                                  }
                              ],
                              "body": {
                                  "mode": "raw",
                                  "raw": "{\n    \"code\": \"{{randomCode}}\",\n    \"description\": \"{{randomDescription}}\"\n}"
                              },
                              "url": {
                              "raw": "{{Url}}/service_lookup/departments/add",
                              "host": [
                                  "{{Url}}"
                              ],
                              "path": [
                                  "service_lookup",
                                  "departments",
                                  "add"
                              ]
                          }
                          },
                          "response": []
                      },
                      {
                          "name": "editDepartment",
                          "event": [
                              {
                                  "listen": "prerequest",
                                  "script": {
                                      "type": "text/javascript",
                                      "exec": [
                                          "let randomCd = `RX-${Math.random().toString(36).substring(2,12)}`;",
                                          "let randomDesc = `Department-${Math.random().toString(36).substring(2,12)}`;",
                                          "pm.collectionVariables.set(\"randomCode\", randomCd);",
                                          "pm.collectionVariables.set(\"randomDescription\", randomDesc);",
                                          "pm.collectionVariables.set(\"CurrentRequest\", \"details\");"
                                          
                                      ]
                                  }
                              }
                          ],
                          "request": {
                              "method": "PUT",
                              "header": [
                                  {
                                      "key": "Content-Type",
                                      "value": "application/json"
                                  }
                              ],
                              "body": {
                                  "mode": "raw",
                                  "raw": "{\n    \"id\": 10000,\n    \"code\": \"{{randomCode}}\",\n    \"description\": \"{{randomDescription}}\"\n}"
                              },
                              "url": {
                                "raw": "{{Url}}/service_lookup/departments/edit",
                                "host": [
                                    "{{Url}}"
                                ],
                                "path": [
                                    "service_lookup",
                                    "departments",
                                    "edit"
                                ]
                              }
                          },
                          "response": []
                      }
                    ]
                },
              {
                  "name": "EmploymentStatuses",
                  "item": [
                      {
                          "name": "Login as Admin",
                          "event": [
                              {
                                  "listen": "prerequest",
                                  "script": {
                                      "type": "text/javascript",
                                      "exec": [
                                          "pm.collectionVariables.set(\"CurrentRequest\", \"details\");"
                                          
                                      ]
                                  }
                              }
                          ],
                          "request": {
                              "method": "POST",
                              "header": [
                                  {
                                      "key": "Content-Type",
                                      "value": "application/json"
                                  }
                              ],
                              "body": {
                                  "mode": "raw",
                                  "raw": "{\n    \"userGroup\": \"employee\",\n    \"username\": \"871025075011\",\n    \"password\": \"P@ssw0rd\",\n    \"currentRole\": \"admin\"\n}"
                              },
                              "url": {
                              "raw": "{{Url}}/auth/login",
                              "host": [
                                  "{{Url}}"
                              ],
                              "path": [
                                  "auth",
                                  "login"
                              ]
                          }
                          },
                          "response": []
                      },
                      {
                          "name": "getEmploymentStatuses",
                          "event": [
                              {
                                  "listen": "prerequest",
                                  "script": {
                                      "type": "text/javascript",
                                      "exec": [
                                          "pm.collectionVariables.set(\"CurrentRequest\", \"list\");"
                                          
                                      ]
                                  }
                              }
                          ],
                          "request": {
                              "method": "GET",
                              "header": [],
                              "url": {
                                "raw": "{{Url}}/service_lookup/employment_statuses",
                                "host": [
                                    "{{Url}}"
                                ],
                                "path": [
                                    "service_lookup",
                                    "employment_statuses"
                                ]
                              }
                          },
                          "response": []
                      },
                      {
                          "name": "filterEmploymentStatuses",
                          "event": [
                              {
                                  "listen": "prerequest",
                                  "script": {
                                      "type": "text/javascript",
                                      "exec": [
                                          "pm.collectionVariables.set(\"CurrentRequest\", \"listFilter\");"
                                          
                                      ]
                                  }
                              }
                          ],
                          "request": {
                              "method": "POST",
                              "header": [
                                  {
                                      "key": "Content-Type",
                                      "value": "application/json"
                                  }
                              ],
                              "body": {
                                  "mode": "raw",
                                  "raw": "{\n    \"pageNum\": 1,\n    \"pageSize\": 5,\n    \"orderBy\": \"\",\n    \"orderType\": 0,\n    \"filter\": {\n        \"code\": \"\",\n        \"description\": \"\"\n    }\n}"
                              },
                              "url": {
                              "raw": "{{Url}}/service_lookup/employment_statuses/filter",
                              "host": [
                                  "{{Url}}"
                              ],
                              "path": [
                                  "service_lookup",
                                  "employment_statuses",
                                  "filter"
                              ]
                          }
                          },
                          "response": []
                      },
                      {
                          "name": "addEmploymentStatuse",
                          "event": [
                              {
                                  "listen": "prerequest",
                                  "script": {
                                      "type": "text/javascript",
                                      "exec": [
                                          "let randomCd = `RX-${Math.random().toString(36).substring(2,12)}`;",
                                          "let randomDesc = `EmploymentStatuse-${Math.random().toString(36).substring(2,12)}`;",
                                          "pm.collectionVariables.set(\"randomCode\", randomCd);",
                                          "pm.collectionVariables.set(\"randomDescription\", randomDesc);",
                                          "pm.collectionVariables.set(\"CurrentRequest\", \"details\");"
                                          
                                      ]
                                  }
                              }
                          ],
                          "request": {
                              "method": "POST",
                              "header": [
                                  {
                                      "key": "Content-Type",
                                      "value": "application/json"
                                  }
                              ],
                              "body": {
                                  "mode": "raw",
                                  "raw": "{\n    \"code\": \"{{randomCode}}\",\n    \"description\": \"{{randomDescription}}\"\n}"
                              },
                              "url": {
                              "raw": "{{Url}}/service_lookup/employment_statuses/add",
                              "host": [
                                  "{{Url}}"
                              ],
                              "path": [
                                  "service_lookup",
                                  "employment_statuses",
                                  "add"
                              ]
                          }
                          },
                          "response": []
                      },
                      {
                          "name": "editEmploymentStatuse",
                          "event": [
                              {
                                  "listen": "prerequest",
                                  "script": {
                                      "type": "text/javascript",
                                      "exec": [
                                          "let randomCd = `RX-${Math.random().toString(36).substring(2,12)}`;",
                                          "let randomDesc = `EmploymentStatuse-${Math.random().toString(36).substring(2,12)}`;",
                                          "pm.collectionVariables.set(\"randomCode\", randomCd);",
                                          "pm.collectionVariables.set(\"randomDescription\", randomDesc);",
                                          "pm.collectionVariables.set(\"CurrentRequest\", \"details\");"
                                          
                                      ]
                                  }
                              }
                          ],
                          "request": {
                              "method": "PUT",
                              "header": [
                                  {
                                      "key": "Content-Type",
                                      "value": "application/json"
                                  }
                              ],
                              "body": {
                                  "mode": "raw",
                                  "raw": "{\n    \"id\": 10000,\n    \"code\": \"{{randomCode}}\",\n    \"description\": \"{{randomDescription}}\"\n}"
                              },
                              "url": {
                                "raw": "{{Url}}/service_lookup/employment_statuses/edit",
                                "host": [
                                    "{{Url}}"
                                ],
                                "path": [
                                    "service_lookup",
                                    "employment_statuses",
                                    "edit"
                                ]
                              }
                          },
                          "response": []
                      }
                    ]
                },
              {
                  "name": "Grades",
                  "item": [
                      {
                          "name": "Login as Admin",
                          "event": [
                              {
                                  "listen": "prerequest",
                                  "script": {
                                      "type": "text/javascript",
                                      "exec": [
                                          "pm.collectionVariables.set(\"CurrentRequest\", \"details\");"
                                          
                                      ]
                                  }
                              }
                          ],
                          "request": {
                              "method": "POST",
                              "header": [
                                  {
                                      "key": "Content-Type",
                                      "value": "application/json"
                                  }
                              ],
                              "body": {
                                  "mode": "raw",
                                  "raw": "{\n    \"userGroup\": \"employee\",\n    \"username\": \"871025075011\",\n    \"password\": \"P@ssw0rd\",\n    \"currentRole\": \"admin\"\n}"
                              },
                              "url": {
                              "raw": "{{Url}}/auth/login",
                              "host": [
                                  "{{Url}}"
                              ],
                              "path": [
                                  "auth",
                                  "login"
                              ]
                          }
                          },
                          "response": []
                      },
                      {
                          "name": "getGrades",
                          "event": [
                              {
                                  "listen": "prerequest",
                                  "script": {
                                      "type": "text/javascript",
                                      "exec": [
                                          "pm.collectionVariables.set(\"CurrentRequest\", \"list\");"
                                          
                                      ]
                                  }
                              }
                          ],
                          "request": {
                              "method": "GET",
                              "header": [],
                              "url": {
                                "raw": "{{Url}}/service_lookup/grades",
                                "host": [
                                    "{{Url}}"
                                ],
                                "path": [
                                    "service_lookup",
                                    "grades"
                                ]
                              }
                          },
                          "response": []
                      },
                      {
                          "name": "filterGrades",
                          "event": [
                              {
                                  "listen": "prerequest",
                                  "script": {
                                      "type": "text/javascript",
                                      "exec": [
                                          "pm.collectionVariables.set(\"CurrentRequest\", \"listFilter\");"
                                          
                                      ]
                                  }
                              }
                          ],
                          "request": {
                              "method": "POST",
                              "header": [
                                  {
                                      "key": "Content-Type",
                                      "value": "application/json"
                                  }
                              ],
                              "body": {
                                  "mode": "raw",
                                  "raw": "{\n    \"pageNum\": 1,\n    \"pageSize\": 5,\n    \"orderBy\": \"\",\n    \"orderType\": 0,\n    \"filter\": {\n        \"code\": \"\",\n        \"description\": \"\"\n    }\n}"
                              },
                              "url": {
                              "raw": "{{Url}}/service_lookup/grades/filter",
                              "host": [
                                  "{{Url}}"
                              ],
                              "path": [
                                  "service_lookup",
                                  "grades",
                                  "filter"
                              ]
                          }
                          },
                          "response": []
                      },
                      {
                          "name": "addGrade",
                          "event": [
                              {
                                  "listen": "prerequest",
                                  "script": {
                                      "type": "text/javascript",
                                      "exec": [
                                          "let randomCd = `RX-${Math.random().toString(36).substring(2,12)}`;",
                                          "let randomDesc = `Grade-${Math.random().toString(36).substring(2,12)}`;",
                                          "pm.collectionVariables.set(\"randomCode\", randomCd);",
                                          "pm.collectionVariables.set(\"randomDescription\", randomDesc);",
                                          "pm.collectionVariables.set(\"CurrentRequest\", \"details\");"
                                          
                                      ]
                                  }
                              }
                          ],
                          "request": {
                              "method": "POST",
                              "header": [
                                  {
                                      "key": "Content-Type",
                                      "value": "application/json"
                                  }
                              ],
                              "body": {
                                  "mode": "raw",
                                  "raw": "{\n    \"code\": \"{{randomCode}}\",\n    \"description\": \"{{randomDescription}}\"\n}"
                              },
                              "url": {
                              "raw": "{{Url}}/service_lookup/grades/add",
                              "host": [
                                  "{{Url}}"
                              ],
                              "path": [
                                  "service_lookup",
                                  "grades",
                                  "add"
                              ]
                          }
                          },
                          "response": []
                      },
                      {
                          "name": "editGrade",
                          "event": [
                              {
                                  "listen": "prerequest",
                                  "script": {
                                      "type": "text/javascript",
                                      "exec": [
                                          "let randomCd = `RX-${Math.random().toString(36).substring(2,12)}`;",
                                          "let randomDesc = `Grade-${Math.random().toString(36).substring(2,12)}`;",
                                          "pm.collectionVariables.set(\"randomCode\", randomCd);",
                                          "pm.collectionVariables.set(\"randomDescription\", randomDesc);",
                                          "pm.collectionVariables.set(\"CurrentRequest\", \"details\");"
                                          
                                      ]
                                  }
                              }
                          ],
                          "request": {
                              "method": "PUT",
                              "header": [
                                  {
                                      "key": "Content-Type",
                                      "value": "application/json"
                                  }
                              ],
                              "body": {
                                  "mode": "raw",
                                  "raw": "{\n    \"id\": 10000,\n    \"code\": \"{{randomCode}}\",\n    \"description\": \"{{randomDescription}}\"\n}"
                              },
                              "url": {
                                "raw": "{{Url}}/service_lookup/grades/edit",
                                "host": [
                                    "{{Url}}"
                                ],
                                "path": [
                                    "service_lookup",
                                    "grades",
                                    "edit"
                                ]
                              }
                          },
                          "response": []
                      }
                    ]
                },
              {
                  "name": "Placements",
                  "item": [
                      {
                          "name": "Login as Admin",
                          "event": [
                              {
                                  "listen": "prerequest",
                                  "script": {
                                      "type": "text/javascript",
                                      "exec": [
                                          "pm.collectionVariables.set(\"CurrentRequest\", \"details\");"
                                          
                                      ]
                                  }
                              }
                          ],
                          "request": {
                              "method": "POST",
                              "header": [
                                  {
                                      "key": "Content-Type",
                                      "value": "application/json"
                                  }
                              ],
                              "body": {
                                  "mode": "raw",
                                  "raw": "{\n    \"userGroup\": \"employee\",\n    \"username\": \"871025075011\",\n    \"password\": \"P@ssw0rd\",\n    \"currentRole\": \"admin\"\n}"
                              },
                              "url": {
                              "raw": "{{Url}}/auth/login",
                              "host": [
                                  "{{Url}}"
                              ],
                              "path": [
                                  "auth",
                                  "login"
                              ]
                          }
                          },
                          "response": []
                      },
                      {
                          "name": "getPlacements",
                          "event": [
                              {
                                  "listen": "prerequest",
                                  "script": {
                                      "type": "text/javascript",
                                      "exec": [
                                          "pm.collectionVariables.set(\"CurrentRequest\", \"list\");"
                                          
                                      ]
                                  }
                              }
                          ],
                          "request": {
                              "method": "GET",
                              "header": [],
                              "url": {
                                "raw": "{{Url}}/service_lookup/placements",
                                "host": [
                                    "{{Url}}"
                                ],
                                "path": [
                                    "service_lookup",
                                    "placements"
                                ]
                              }
                          },
                          "response": []
                      },
                      {
                          "name": "filterPlacements",
                          "event": [
                              {
                                  "listen": "prerequest",
                                  "script": {
                                      "type": "text/javascript",
                                      "exec": [
                                          "pm.collectionVariables.set(\"CurrentRequest\", \"listFilter\");"
                                          
                                      ]
                                  }
                              }
                          ],
                          "request": {
                              "method": "POST",
                              "header": [
                                  {
                                      "key": "Content-Type",
                                      "value": "application/json"
                                  }
                              ],
                              "body": {
                                  "mode": "raw",
                                  "raw": "{\n    \"pageNum\": 1,\n    \"pageSize\": 5,\n    \"orderBy\": \"\",\n    \"orderType\": 0,\n    \"filter\": {\n        \"code\": \"\",\n        \"description\": \"\"\n    }\n}"
                              },
                              "url": {
                              "raw": "{{Url}}/service_lookup/placements/filter",
                              "host": [
                                  "{{Url}}"
                              ],
                              "path": [
                                  "service_lookup",
                                  "placements",
                                  "filter"
                              ]
                          }
                          },
                          "response": []
                      },
                      {
                          "name": "addPlacement",
                          "event": [
                              {
                                  "listen": "prerequest",
                                  "script": {
                                      "type": "text/javascript",
                                      "exec": [
                                          "let randomCd = `RX-${Math.random().toString(36).substring(2,12)}`;",
                                          "let randomDesc = `Placement-${Math.random().toString(36).substring(2,12)}`;",
                                          "pm.collectionVariables.set(\"randomCode\", randomCd);",
                                          "pm.collectionVariables.set(\"randomDescription\", randomDesc);",
                                          "pm.collectionVariables.set(\"CurrentRequest\", \"details\");"
                                          
                                      ]
                                  }
                              }
                          ],
                          "request": {
                              "method": "POST",
                              "header": [
                                  {
                                      "key": "Content-Type",
                                      "value": "application/json"
                                  }
                              ],
                              "body": {
                                  "mode": "raw",
                                  "raw": "{\n    \"code\": \"{{randomCode}}\",\n    \"description\": \"{{randomDescription}}\"\n}"
                              },
                              "url": {
                              "raw": "{{Url}}/service_lookup/placements/add",
                              "host": [
                                  "{{Url}}"
                              ],
                              "path": [
                                  "service_lookup",
                                  "placements",
                                  "add"
                              ]
                          }
                          },
                          "response": []
                      },
                      {
                          "name": "editPlacement",
                          "event": [
                              {
                                  "listen": "prerequest",
                                  "script": {
                                      "type": "text/javascript",
                                      "exec": [
                                          "let randomCd = `RX-${Math.random().toString(36).substring(2,12)}`;",
                                          "let randomDesc = `Placement-${Math.random().toString(36).substring(2,12)}`;",
                                          "pm.collectionVariables.set(\"randomCode\", randomCd);",
                                          "pm.collectionVariables.set(\"randomDescription\", randomDesc);",
                                          "pm.collectionVariables.set(\"CurrentRequest\", \"details\");"
                                          
                                      ]
                                  }
                              }
                          ],
                          "request": {
                              "method": "PUT",
                              "header": [
                                  {
                                      "key": "Content-Type",
                                      "value": "application/json"
                                  }
                              ],
                              "body": {
                                  "mode": "raw",
                                  "raw": "{\n    \"id\": 10000,\n    \"code\": \"{{randomCode}}\",\n    \"description\": \"{{randomDescription}}\"\n}"
                              },
                              "url": {
                                "raw": "{{Url}}/service_lookup/placements/edit",
                                "host": [
                                    "{{Url}}"
                                ],
                                "path": [
                                    "service_lookup",
                                    "placements",
                                    "edit"
                                ]
                              }
                          },
                          "response": []
                      }
                    ]
                },
              {
                  "name": "Positions",
                  "item": [
                      {
                          "name": "Login as Admin",
                          "event": [
                              {
                                  "listen": "prerequest",
                                  "script": {
                                      "type": "text/javascript",
                                      "exec": [
                                          "pm.collectionVariables.set(\"CurrentRequest\", \"details\");"
                                          
                                      ]
                                  }
                              }
                          ],
                          "request": {
                              "method": "POST",
                              "header": [
                                  {
                                      "key": "Content-Type",
                                      "value": "application/json"
                                  }
                              ],
                              "body": {
                                  "mode": "raw",
                                  "raw": "{\n    \"userGroup\": \"employee\",\n    \"username\": \"871025075011\",\n    \"password\": \"P@ssw0rd\",\n    \"currentRole\": \"admin\"\n}"
                              },
                              "url": {
                              "raw": "{{Url}}/auth/login",
                              "host": [
                                  "{{Url}}"
                              ],
                              "path": [
                                  "auth",
                                  "login"
                              ]
                          }
                          },
                          "response": []
                      },
                      {
                          "name": "getPositions",
                          "event": [
                              {
                                  "listen": "prerequest",
                                  "script": {
                                      "type": "text/javascript",
                                      "exec": [
                                          "pm.collectionVariables.set(\"CurrentRequest\", \"list\");"
                                          
                                      ]
                                  }
                              }
                          ],
                          "request": {
                              "method": "GET",
                              "header": [],
                              "url": {
                                "raw": "{{Url}}/service_lookup/positions",
                                "host": [
                                    "{{Url}}"
                                ],
                                "path": [
                                    "service_lookup",
                                    "positions"
                                ]
                              }
                          },
                          "response": []
                      },
                      {
                          "name": "filterPositions",
                          "event": [
                              {
                                  "listen": "prerequest",
                                  "script": {
                                      "type": "text/javascript",
                                      "exec": [
                                          "pm.collectionVariables.set(\"CurrentRequest\", \"listFilter\");"
                                          
                                      ]
                                  }
                              }
                          ],
                          "request": {
                              "method": "POST",
                              "header": [
                                  {
                                      "key": "Content-Type",
                                      "value": "application/json"
                                  }
                              ],
                              "body": {
                                  "mode": "raw",
                                  "raw": "{\n    \"pageNum\": 1,\n    \"pageSize\": 5,\n    \"orderBy\": \"\",\n    \"orderType\": 0,\n    \"filter\": {\n        \"code\": \"\",\n        \"description\": \"\"\n    }\n}"
                              },
                              "url": {
                              "raw": "{{Url}}/service_lookup/positions/filter",
                              "host": [
                                  "{{Url}}"
                              ],
                              "path": [
                                  "service_lookup",
                                  "positions",
                                  "filter"
                              ]
                          }
                          },
                          "response": []
                      },
                      {
                          "name": "addPosition",
                          "event": [
                              {
                                  "listen": "prerequest",
                                  "script": {
                                      "type": "text/javascript",
                                      "exec": [
                                          "let randomCd = `RX-${Math.random().toString(36).substring(2,12)}`;",
                                          "let randomDesc = `Position-${Math.random().toString(36).substring(2,12)}`;",
                                          "pm.collectionVariables.set(\"randomCode\", randomCd);",
                                          "pm.collectionVariables.set(\"randomDescription\", randomDesc);",
                                          "pm.collectionVariables.set(\"CurrentRequest\", \"details\");"
                                          
                                      ]
                                  }
                              }
                          ],
                          "request": {
                              "method": "POST",
                              "header": [
                                  {
                                      "key": "Content-Type",
                                      "value": "application/json"
                                  }
                              ],
                              "body": {
                                  "mode": "raw",
                                  "raw": "{\n    \"code\": \"{{randomCode}}\",\n    \"description\": \"{{randomDescription}}\"\n}"
                              },
                              "url": {
                              "raw": "{{Url}}/service_lookup/positions/add",
                              "host": [
                                  "{{Url}}"
                              ],
                              "path": [
                                  "service_lookup",
                                  "positions",
                                  "add"
                              ]
                          }
                          },
                          "response": []
                      },
                      {
                          "name": "editPosition",
                          "event": [
                              {
                                  "listen": "prerequest",
                                  "script": {
                                      "type": "text/javascript",
                                      "exec": [
                                          "let randomCd = `RX-${Math.random().toString(36).substring(2,12)}`;",
                                          "let randomDesc = `Position-${Math.random().toString(36).substring(2,12)}`;",
                                          "pm.collectionVariables.set(\"randomCode\", randomCd);",
                                          "pm.collectionVariables.set(\"randomDescription\", randomDesc);",
                                          "pm.collectionVariables.set(\"CurrentRequest\", \"details\");"
                                          
                                      ]
                                  }
                              }
                          ],
                          "request": {
                              "method": "PUT",
                              "header": [
                                  {
                                      "key": "Content-Type",
                                      "value": "application/json"
                                  }
                              ],
                              "body": {
                                  "mode": "raw",
                                  "raw": "{\n    \"id\": 10000,\n    \"code\": \"{{randomCode}}\",\n    \"description\": \"{{randomDescription}}\"\n}"
                              },
                              "url": {
                                "raw": "{{Url}}/service_lookup/positions/edit",
                                "host": [
                                    "{{Url}}"
                                ],
                                "path": [
                                    "service_lookup",
                                    "positions",
                                    "edit"
                                ]
                              }
                          },
                          "response": []
                      }
                    ]
                },
              {
                  "name": "Programmes",
                  "item": [
                      {
                          "name": "Login as Admin",
                          "event": [
                              {
                                  "listen": "prerequest",
                                  "script": {
                                      "type": "text/javascript",
                                      "exec": [
                                          "pm.collectionVariables.set(\"CurrentRequest\", \"details\");"
                                          
                                      ]
                                  }
                              }
                          ],
                          "request": {
                              "method": "POST",
                              "header": [
                                  {
                                      "key": "Content-Type",
                                      "value": "application/json"
                                  }
                              ],
                              "body": {
                                  "mode": "raw",
                                  "raw": "{\n    \"userGroup\": \"employee\",\n    \"username\": \"871025075011\",\n    \"password\": \"P@ssw0rd\",\n    \"currentRole\": \"admin\"\n}"
                              },
                              "url": {
                              "raw": "{{Url}}/auth/login",
                              "host": [
                                  "{{Url}}"
                              ],
                              "path": [
                                  "auth",
                                  "login"
                              ]
                          }
                          },
                          "response": []
                      },
                      {
                          "name": "getProgrammes",
                          "event": [
                              {
                                  "listen": "prerequest",
                                  "script": {
                                      "type": "text/javascript",
                                      "exec": [
                                          "pm.collectionVariables.set(\"CurrentRequest\", \"list\");"
                                          
                                      ]
                                  }
                              }
                          ],
                          "request": {
                              "method": "GET",
                              "header": [],
                              "url": {
                                "raw": "{{Url}}/service_lookup/programmes",
                                "host": [
                                    "{{Url}}"
                                ],
                                "path": [
                                    "service_lookup",
                                    "programmes"
                                ]
                              }
                          },
                          "response": []
                      },
                      {
                          "name": "filterProgrammes",
                          "event": [
                              {
                                  "listen": "prerequest",
                                  "script": {
                                      "type": "text/javascript",
                                      "exec": [
                                          "pm.collectionVariables.set(\"CurrentRequest\", \"listFilter\");"
                                          
                                      ]
                                  }
                              }
                          ],
                          "request": {
                              "method": "POST",
                              "header": [
                                  {
                                      "key": "Content-Type",
                                      "value": "application/json"
                                  }
                              ],
                              "body": {
                                  "mode": "raw",
                                  "raw": "{\n    \"pageNum\": 1,\n    \"pageSize\": 5,\n    \"orderBy\": \"\",\n    \"orderType\": 0,\n    \"filter\": {\n        \"code\": \"\",\n        \"description\": \"\"\n    }\n}"
                              },
                              "url": {
                              "raw": "{{Url}}/service_lookup/programmes/filter",
                              "host": [
                                  "{{Url}}"
                              ],
                              "path": [
                                  "service_lookup",
                                  "programmes",
                                  "filter"
                              ]
                          }
                          },
                          "response": []
                      },
                      {
                          "name": "addProgramme",
                          "event": [
                              {
                                  "listen": "prerequest",
                                  "script": {
                                      "type": "text/javascript",
                                      "exec": [
                                          "let randomCd = `RX-${Math.random().toString(36).substring(2,12)}`;",
                                          "let randomDesc = `Programme-${Math.random().toString(36).substring(2,12)}`;",
                                          "pm.collectionVariables.set(\"randomCode\", randomCd);",
                                          "pm.collectionVariables.set(\"randomDescription\", randomDesc);",
                                          "pm.collectionVariables.set(\"CurrentRequest\", \"details\");"
                                          
                                      ]
                                  }
                              }
                          ],
                          "request": {
                              "method": "POST",
                              "header": [
                                  {
                                      "key": "Content-Type",
                                      "value": "application/json"
                                  }
                              ],
                              "body": {
                                  "mode": "raw",
                                  "raw": "{\n    \"code\": \"{{randomCode}}\",\n    \"description\": \"{{randomDescription}}\"\n}"
                              },
                              "url": {
                              "raw": "{{Url}}/service_lookup/programmes/add",
                              "host": [
                                  "{{Url}}"
                              ],
                              "path": [
                                  "service_lookup",
                                  "programmes",
                                  "add"
                              ]
                          }
                          },
                          "response": []
                      },
                      {
                          "name": "editProgramme",
                          "event": [
                              {
                                  "listen": "prerequest",
                                  "script": {
                                      "type": "text/javascript",
                                      "exec": [
                                          "let randomCd = `RX-${Math.random().toString(36).substring(2,12)}`;",
                                          "let randomDesc = `Programme-${Math.random().toString(36).substring(2,12)}`;",
                                          "pm.collectionVariables.set(\"randomCode\", randomCd);",
                                          "pm.collectionVariables.set(\"randomDescription\", randomDesc);",
                                          "pm.collectionVariables.set(\"CurrentRequest\", \"details\");"
                                          
                                      ]
                                  }
                              }
                          ],
                          "request": {
                              "method": "PUT",
                              "header": [
                                  {
                                      "key": "Content-Type",
                                      "value": "application/json"
                                  }
                              ],
                              "body": {
                                  "mode": "raw",
                                  "raw": "{\n    \"id\": 10000,\n    \"code\": \"{{randomCode}}\",\n    \"description\": \"{{randomDescription}}\"\n}"
                              },
                              "url": {
                                "raw": "{{Url}}/service_lookup/programmes/edit",
                                "host": [
                                    "{{Url}}"
                                ],
                                "path": [
                                    "service_lookup",
                                    "programmes",
                                    "edit"
                                ]
                              }
                          },
                          "response": []
                      }
                    ]
                },
              {
                  "name": "Schemes",
                  "item": [
                      {
                          "name": "Login as Admin",
                          "event": [
                              {
                                  "listen": "prerequest",
                                  "script": {
                                      "type": "text/javascript",
                                      "exec": [
                                          "pm.collectionVariables.set(\"CurrentRequest\", \"details\");"
                                          
                                      ]
                                  }
                              }
                          ],
                          "request": {
                              "method": "POST",
                              "header": [
                                  {
                                      "key": "Content-Type",
                                      "value": "application/json"
                                  }
                              ],
                              "body": {
                                  "mode": "raw",
                                  "raw": "{\n    \"userGroup\": \"employee\",\n    \"username\": \"871025075011\",\n    \"password\": \"P@ssw0rd\",\n    \"currentRole\": \"admin\"\n}"
                              },
                              "url": {
                              "raw": "{{Url}}/auth/login",
                              "host": [
                                  "{{Url}}"
                              ],
                              "path": [
                                  "auth",
                                  "login"
                              ]
                          }
                          },
                          "response": []
                      },
                      {
                          "name": "getSchemes",
                          "event": [
                              {
                                  "listen": "prerequest",
                                  "script": {
                                      "type": "text/javascript",
                                      "exec": [
                                          "pm.collectionVariables.set(\"CurrentRequest\", \"list\");"
                                          
                                      ]
                                  }
                              }
                          ],
                          "request": {
                              "method": "GET",
                              "header": [],
                              "url": {
                                "raw": "{{Url}}/service_lookup/schemes",
                                "host": [
                                    "{{Url}}"
                                ],
                                "path": [
                                    "service_lookup",
                                    "schemes"
                                ]
                              }
                          },
                          "response": []
                      },
                      {
                          "name": "filterSchemes",
                          "event": [
                              {
                                  "listen": "prerequest",
                                  "script": {
                                      "type": "text/javascript",
                                      "exec": [
                                          "pm.collectionVariables.set(\"CurrentRequest\", \"listFilter\");"
                                          
                                      ]
                                  }
                              }
                          ],
                          "request": {
                              "method": "POST",
                              "header": [
                                  {
                                      "key": "Content-Type",
                                      "value": "application/json"
                                  }
                              ],
                              "body": {
                                  "mode": "raw",
                                  "raw": "{\n    \"pageNum\": 1,\n    \"pageSize\": 5,\n    \"orderBy\": \"\",\n    \"orderType\": 0,\n    \"filter\": {\n        \"code\": \"\",\n        \"description\": \"\"\n    }\n}"
                              },
                              "url": {
                              "raw": "{{Url}}/service_lookup/schemes/filter",
                              "host": [
                                  "{{Url}}"
                              ],
                              "path": [
                                  "service_lookup",
                                  "schemes",
                                  "filter"
                              ]
                          }
                          },
                          "response": []
                      },
                      {
                          "name": "addScheme",
                          "event": [
                              {
                                  "listen": "prerequest",
                                  "script": {
                                      "type": "text/javascript",
                                      "exec": [
                                          "let randomCd = `RX-${Math.random().toString(36).substring(2,12)}`;",
                                          "let randomDesc = `Scheme-${Math.random().toString(36).substring(2,12)}`;",
                                          "pm.collectionVariables.set(\"randomCode\", randomCd);",
                                          "pm.collectionVariables.set(\"randomDescription\", randomDesc);",
                                          "pm.collectionVariables.set(\"CurrentRequest\", \"details\");"
                                          
                                      ]
                                  }
                              }
                          ],
                          "request": {
                              "method": "POST",
                              "header": [
                                  {
                                      "key": "Content-Type",
                                      "value": "application/json"
                                  }
                              ],
                              "body": {
                                  "mode": "raw",
                                  "raw": "{\n    \"code\": \"{{randomCode}}\",\n    \"description\": \"{{randomDescription}}\"\n}"
                              },
                              "url": {
                              "raw": "{{Url}}/service_lookup/schemes/add",
                              "host": [
                                  "{{Url}}"
                              ],
                              "path": [
                                  "service_lookup",
                                  "schemes",
                                  "add"
                              ]
                          }
                          },
                          "response": []
                      },
                      {
                          "name": "editScheme",
                          "event": [
                              {
                                  "listen": "prerequest",
                                  "script": {
                                      "type": "text/javascript",
                                      "exec": [
                                          "let randomCd = `RX-${Math.random().toString(36).substring(2,12)}`;",
                                          "let randomDesc = `Scheme-${Math.random().toString(36).substring(2,12)}`;",
                                          "pm.collectionVariables.set(\"randomCode\", randomCd);",
                                          "pm.collectionVariables.set(\"randomDescription\", randomDesc);",
                                          "pm.collectionVariables.set(\"CurrentRequest\", \"details\");"
                                          
                                      ]
                                  }
                              }
                          ],
                          "request": {
                              "method": "PUT",
                              "header": [
                                  {
                                      "key": "Content-Type",
                                      "value": "application/json"
                                  }
                              ],
                              "body": {
                                  "mode": "raw",
                                  "raw": "{\n    \"id\": 10000,\n    \"code\": \"{{randomCode}}\",\n    \"description\": \"{{randomDescription}}\"\n}"
                              },
                              "url": {
                                "raw": "{{Url}}/service_lookup/schemes/edit",
                                "host": [
                                    "{{Url}}"
                                ],
                                "path": [
                                    "service_lookup",
                                    "schemes",
                                    "edit"
                                ]
                              }
                          },
                          "response": []
                      }
                    ]
                },
              {
                  "name": "Sections",
                  "item": [
                      {
                          "name": "Login as Admin",
                          "event": [
                              {
                                  "listen": "prerequest",
                                  "script": {
                                      "type": "text/javascript",
                                      "exec": [
                                          "pm.collectionVariables.set(\"CurrentRequest\", \"details\");"
                                          
                                      ]
                                  }
                              }
                          ],
                          "request": {
                              "method": "POST",
                              "header": [
                                  {
                                      "key": "Content-Type",
                                      "value": "application/json"
                                  }
                              ],
                              "body": {
                                  "mode": "raw",
                                  "raw": "{\n    \"userGroup\": \"employee\",\n    \"username\": \"871025075011\",\n    \"password\": \"P@ssw0rd\",\n    \"currentRole\": \"admin\"\n}"
                              },
                              "url": {
                              "raw": "{{Url}}/auth/login",
                              "host": [
                                  "{{Url}}"
                              ],
                              "path": [
                                  "auth",
                                  "login"
                              ]
                          }
                          },
                          "response": []
                      },
                      {
                          "name": "getSections",
                          "event": [
                              {
                                  "listen": "prerequest",
                                  "script": {
                                      "type": "text/javascript",
                                      "exec": [
                                          "pm.collectionVariables.set(\"CurrentRequest\", \"list\");"
                                          
                                      ]
                                  }
                              }
                          ],
                          "request": {
                              "method": "GET",
                              "header": [],
                              "url": {
                                "raw": "{{Url}}/service_lookup/sections",
                                "host": [
                                    "{{Url}}"
                                ],
                                "path": [
                                    "service_lookup",
                                    "sections"
                                ]
                              }
                          },
                          "response": []
                      },
                      {
                          "name": "filterSections",
                          "event": [
                              {
                                  "listen": "prerequest",
                                  "script": {
                                      "type": "text/javascript",
                                      "exec": [
                                          "pm.collectionVariables.set(\"CurrentRequest\", \"listFilter\");"
                                          
                                      ]
                                  }
                              }
                          ],
                          "request": {
                              "method": "POST",
                              "header": [
                                  {
                                      "key": "Content-Type",
                                      "value": "application/json"
                                  }
                              ],
                              "body": {
                                  "mode": "raw",
                                  "raw": "{\n    \"pageNum\": 1,\n    \"pageSize\": 5,\n    \"orderBy\": \"\",\n    \"orderType\": 0,\n    \"filter\": {\n        \"code\": \"\",\n        \"description\": \"\"\n    }\n}"
                              },
                              "url": {
                              "raw": "{{Url}}/service_lookup/sections/filter",
                              "host": [
                                  "{{Url}}"
                              ],
                              "path": [
                                  "service_lookup",
                                  "sections",
                                  "filter"
                              ]
                          }
                          },
                          "response": []
                      },
                      {
                          "name": "addSection",
                          "event": [
                              {
                                  "listen": "prerequest",
                                  "script": {
                                      "type": "text/javascript",
                                      "exec": [
                                          "let randomCd = `RX-${Math.random().toString(36).substring(2,12)}`;",
                                          "let randomDesc = `Section-${Math.random().toString(36).substring(2,12)}`;",
                                          "pm.collectionVariables.set(\"randomCode\", randomCd);",
                                          "pm.collectionVariables.set(\"randomDescription\", randomDesc);",
                                          "pm.collectionVariables.set(\"CurrentRequest\", \"details\");"
                                          
                                      ]
                                  }
                              }
                          ],
                          "request": {
                              "method": "POST",
                              "header": [
                                  {
                                      "key": "Content-Type",
                                      "value": "application/json"
                                  }
                              ],
                              "body": {
                                  "mode": "raw",
                                  "raw": "{\n    \"code\": \"{{randomCode}}\",\n    \"description\": \"{{randomDescription}}\"\n}"
                              },
                              "url": {
                              "raw": "{{Url}}/service_lookup/sections/add",
                              "host": [
                                  "{{Url}}"
                              ],
                              "path": [
                                  "service_lookup",
                                  "sections",
                                  "add"
                              ]
                          }
                          },
                          "response": []
                      },
                      {
                          "name": "editSection",
                          "event": [
                              {
                                  "listen": "prerequest",
                                  "script": {
                                      "type": "text/javascript",
                                      "exec": [
                                          "let randomCd = `RX-${Math.random().toString(36).substring(2,12)}`;",
                                          "let randomDesc = `Section-${Math.random().toString(36).substring(2,12)}`;",
                                          "pm.collectionVariables.set(\"randomCode\", randomCd);",
                                          "pm.collectionVariables.set(\"randomDescription\", randomDesc);",
                                          "pm.collectionVariables.set(\"CurrentRequest\", \"details\");"
                                          
                                      ]
                                  }
                              }
                          ],
                          "request": {
                              "method": "PUT",
                              "header": [
                                  {
                                      "key": "Content-Type",
                                      "value": "application/json"
                                  }
                              ],
                              "body": {
                                  "mode": "raw",
                                  "raw": "{\n    \"id\": 10000,\n    \"code\": \"{{randomCode}}\",\n    \"description\": \"{{randomDescription}}\"\n}"
                              },
                              "url": {
                                "raw": "{{Url}}/service_lookup/sections/edit",
                                "host": [
                                    "{{Url}}"
                                ],
                                "path": [
                                    "service_lookup",
                                    "sections",
                                    "edit"
                                ]
                              }
                          },
                          "response": []
                      }
                    ]
                },
              {
                  "name": "ServiceGroups",
                  "item": [
                      {
                          "name": "Login as Admin",
                          "event": [
                              {
                                  "listen": "prerequest",
                                  "script": {
                                      "type": "text/javascript",
                                      "exec": [
                                          "pm.collectionVariables.set(\"CurrentRequest\", \"details\");"
                                          
                                      ]
                                  }
                              }
                          ],
                          "request": {
                              "method": "POST",
                              "header": [
                                  {
                                      "key": "Content-Type",
                                      "value": "application/json"
                                  }
                              ],
                              "body": {
                                  "mode": "raw",
                                  "raw": "{\n    \"userGroup\": \"employee\",\n    \"username\": \"871025075011\",\n    \"password\": \"P@ssw0rd\",\n    \"currentRole\": \"admin\"\n}"
                              },
                              "url": {
                              "raw": "{{Url}}/auth/login",
                              "host": [
                                  "{{Url}}"
                              ],
                              "path": [
                                  "auth",
                                  "login"
                              ]
                          }
                          },
                          "response": []
                      },
                      {
                          "name": "getServiceGroups",
                          "event": [
                              {
                                  "listen": "prerequest",
                                  "script": {
                                      "type": "text/javascript",
                                      "exec": [
                                          "pm.collectionVariables.set(\"CurrentRequest\", \"list\");"
                                          
                                      ]
                                  }
                              }
                          ],
                          "request": {
                              "method": "GET",
                              "header": [],
                              "url": {
                                "raw": "{{Url}}/service_lookup/service_groups",
                                "host": [
                                    "{{Url}}"
                                ],
                                "path": [
                                    "service_lookup",
                                    "service_groups"
                                ]
                              }
                          },
                          "response": []
                      },
                      {
                          "name": "filterServiceGroups",
                          "event": [
                              {
                                  "listen": "prerequest",
                                  "script": {
                                      "type": "text/javascript",
                                      "exec": [
                                          "pm.collectionVariables.set(\"CurrentRequest\", \"listFilter\");"
                                          
                                      ]
                                  }
                              }
                          ],
                          "request": {
                              "method": "POST",
                              "header": [
                                  {
                                      "key": "Content-Type",
                                      "value": "application/json"
                                  }
                              ],
                              "body": {
                                  "mode": "raw",
                                  "raw": "{\n    \"pageNum\": 1,\n    \"pageSize\": 5,\n    \"orderBy\": \"\",\n    \"orderType\": 0,\n    \"filter\": {\n        \"code\": \"\",\n        \"description\": \"\"\n    }\n}"
                              },
                              "url": {
                              "raw": "{{Url}}/service_lookup/service_groups/filter",
                              "host": [
                                  "{{Url}}"
                              ],
                              "path": [
                                  "service_lookup",
                                  "service_groups",
                                  "filter"
                              ]
                          }
                          },
                          "response": []
                      },
                      {
                          "name": "addServiceGroup",
                          "event": [
                              {
                                  "listen": "prerequest",
                                  "script": {
                                      "type": "text/javascript",
                                      "exec": [
                                          "let randomCd = `RX-${Math.random().toString(36).substring(2,12)}`;",
                                          "let randomDesc = `ServiceGroup-${Math.random().toString(36).substring(2,12)}`;",
                                          "pm.collectionVariables.set(\"randomCode\", randomCd);",
                                          "pm.collectionVariables.set(\"randomDescription\", randomDesc);",
                                          "pm.collectionVariables.set(\"CurrentRequest\", \"details\");"
                                          
                                      ]
                                  }
                              }
                          ],
                          "request": {
                              "method": "POST",
                              "header": [
                                  {
                                      "key": "Content-Type",
                                      "value": "application/json"
                                  }
                              ],
                              "body": {
                                  "mode": "raw",
                                  "raw": "{\n    \"code\": \"{{randomCode}}\",\n    \"description\": \"{{randomDescription}}\"\n}"
                              },
                              "url": {
                              "raw": "{{Url}}/service_lookup/service_groups/add",
                              "host": [
                                  "{{Url}}"
                              ],
                              "path": [
                                  "service_lookup",
                                  "service_groups",
                                  "add"
                              ]
                          }
                          },
                          "response": []
                      },
                      {
                          "name": "editServiceGroup",
                          "event": [
                              {
                                  "listen": "prerequest",
                                  "script": {
                                      "type": "text/javascript",
                                      "exec": [
                                          "let randomCd = `RX-${Math.random().toString(36).substring(2,12)}`;",
                                          "let randomDesc = `ServiceGroup-${Math.random().toString(36).substring(2,12)}`;",
                                          "pm.collectionVariables.set(\"randomCode\", randomCd);",
                                          "pm.collectionVariables.set(\"randomDescription\", randomDesc);",
                                          "pm.collectionVariables.set(\"CurrentRequest\", \"details\");"
                                          
                                      ]
                                  }
                              }
                          ],
                          "request": {
                              "method": "PUT",
                              "header": [
                                  {
                                      "key": "Content-Type",
                                      "value": "application/json"
                                  }
                              ],
                              "body": {
                                  "mode": "raw",
                                  "raw": "{\n    \"id\": 10000,\n    \"code\": \"{{randomCode}}\",\n    \"description\": \"{{randomDescription}}\"\n}"
                              },
                              "url": {
                                "raw": "{{Url}}/service_lookup/service_groups/edit",
                                "host": [
                                    "{{Url}}"
                                ],
                                "path": [
                                    "service_lookup",
                                    "service_groups",
                                    "edit"
                                ]
                              }
                          },
                          "response": []
                      }
                    ]
                },
              {
                  "name": "ServiceTypes",
                  "item": [
                      {
                          "name": "Login as Admin",
                          "event": [
                              {
                                  "listen": "prerequest",
                                  "script": {
                                      "type": "text/javascript",
                                      "exec": [
                                          "pm.collectionVariables.set(\"CurrentRequest\", \"details\");"
                                          
                                      ]
                                  }
                              }
                          ],
                          "request": {
                              "method": "POST",
                              "header": [
                                  {
                                      "key": "Content-Type",
                                      "value": "application/json"
                                  }
                              ],
                              "body": {
                                  "mode": "raw",
                                  "raw": "{\n    \"userGroup\": \"employee\",\n    \"username\": \"871025075011\",\n    \"password\": \"P@ssw0rd\",\n    \"currentRole\": \"admin\"\n}"
                              },
                              "url": {
                              "raw": "{{Url}}/auth/login",
                              "host": [
                                  "{{Url}}"
                              ],
                              "path": [
                                  "auth",
                                  "login"
                              ]
                          }
                          },
                          "response": []
                      },
                      {
                          "name": "getServiceTypes",
                          "event": [
                              {
                                  "listen": "prerequest",
                                  "script": {
                                      "type": "text/javascript",
                                      "exec": [
                                          "pm.collectionVariables.set(\"CurrentRequest\", \"list\");"
                                          
                                      ]
                                  }
                              }
                          ],
                          "request": {
                              "method": "GET",
                              "header": [],
                              "url": {
                                "raw": "{{Url}}/service_lookup/service_types",
                                "host": [
                                    "{{Url}}"
                                ],
                                "path": [
                                    "service_lookup",
                                    "service_types"
                                ]
                              }
                          },
                          "response": []
                      },
                      {
                          "name": "filterServiceTypes",
                          "event": [
                              {
                                  "listen": "prerequest",
                                  "script": {
                                      "type": "text/javascript",
                                      "exec": [
                                          "pm.collectionVariables.set(\"CurrentRequest\", \"listFilter\");"
                                          
                                      ]
                                  }
                              }
                          ],
                          "request": {
                              "method": "POST",
                              "header": [
                                  {
                                      "key": "Content-Type",
                                      "value": "application/json"
                                  }
                              ],
                              "body": {
                                  "mode": "raw",
                                  "raw": "{\n    \"pageNum\": 1,\n    \"pageSize\": 5,\n    \"orderBy\": \"\",\n    \"orderType\": 0,\n    \"filter\": {\n        \"code\": \"\",\n        \"description\": \"\"\n    }\n}"
                              },
                              "url": {
                              "raw": "{{Url}}/service_lookup/service_types/filter",
                              "host": [
                                  "{{Url}}"
                              ],
                              "path": [
                                  "service_lookup",
                                  "service_types",
                                  "filter"
                              ]
                          }
                          },
                          "response": []
                      },
                      {
                          "name": "addServiceType",
                          "event": [
                              {
                                  "listen": "prerequest",
                                  "script": {
                                      "type": "text/javascript",
                                      "exec": [
                                          "let randomCd = `RX-${Math.random().toString(36).substring(2,12)}`;",
                                          "let randomDesc = `ServiceType-${Math.random().toString(36).substring(2,12)}`;",
                                          "pm.collectionVariables.set(\"randomCode\", randomCd);",
                                          "pm.collectionVariables.set(\"randomDescription\", randomDesc);",
                                          "pm.collectionVariables.set(\"CurrentRequest\", \"details\");"
                                          
                                      ]
                                  }
                              }
                          ],
                          "request": {
                              "method": "POST",
                              "header": [
                                  {
                                      "key": "Content-Type",
                                      "value": "application/json"
                                  }
                              ],
                              "body": {
                                  "mode": "raw",
                                  "raw": "{\n    \"code\": \"{{randomCode}}\",\n    \"description\": \"{{randomDescription}}\"\n}"
                              },
                              "url": {
                              "raw": "{{Url}}/service_lookup/service_types/add",
                              "host": [
                                  "{{Url}}"
                              ],
                              "path": [
                                  "service_lookup",
                                  "service_types",
                                  "add"
                              ]
                          }
                          },
                          "response": []
                      },
                      {
                          "name": "editServiceType",
                          "event": [
                              {
                                  "listen": "prerequest",
                                  "script": {
                                      "type": "text/javascript",
                                      "exec": [
                                          "let randomCd = `RX-${Math.random().toString(36).substring(2,12)}`;",
                                          "let randomDesc = `ServiceType-${Math.random().toString(36).substring(2,12)}`;",
                                          "pm.collectionVariables.set(\"randomCode\", randomCd);",
                                          "pm.collectionVariables.set(\"randomDescription\", randomDesc);",
                                          "pm.collectionVariables.set(\"CurrentRequest\", \"details\");"
                                          
                                      ]
                                  }
                              }
                          ],
                          "request": {
                              "method": "PUT",
                              "header": [
                                  {
                                      "key": "Content-Type",
                                      "value": "application/json"
                                  }
                              ],
                              "body": {
                                  "mode": "raw",
                                  "raw": "{\n    \"id\": 10000,\n    \"code\": \"{{randomCode}}\",\n    \"description\": \"{{randomDescription}}\"\n}"
                              },
                              "url": {
                                "raw": "{{Url}}/service_lookup/service_types/edit",
                                "host": [
                                    "{{Url}}"
                                ],
                                "path": [
                                    "service_lookup",
                                    "service_types",
                                    "edit"
                                ]
                              }
                          },
                          "response": []
                      }
                    ]
                },
              {
                  "name": "Units",
                  "item": [
                      {
                          "name": "Login as Admin",
                          "event": [
                              {
                                  "listen": "prerequest",
                                  "script": {
                                      "type": "text/javascript",
                                      "exec": [
                                          "pm.collectionVariables.set(\"CurrentRequest\", \"details\");"
                                          
                                      ]
                                  }
                              }
                          ],
                          "request": {
                              "method": "POST",
                              "header": [
                                  {
                                      "key": "Content-Type",
                                      "value": "application/json"
                                  }
                              ],
                              "body": {
                                  "mode": "raw",
                                  "raw": "{\n    \"userGroup\": \"employee\",\n    \"username\": \"871025075011\",\n    \"password\": \"P@ssw0rd\",\n    \"currentRole\": \"admin\"\n}"
                              },
                              "url": {
                              "raw": "{{Url}}/auth/login",
                              "host": [
                                  "{{Url}}"
                              ],
                              "path": [
                                  "auth",
                                  "login"
                              ]
                          }
                          },
                          "response": []
                      },
                      {
                          "name": "getUnits",
                          "event": [
                              {
                                  "listen": "prerequest",
                                  "script": {
                                      "type": "text/javascript",
                                      "exec": [
                                          "pm.collectionVariables.set(\"CurrentRequest\", \"list\");"
                                          
                                      ]
                                  }
                              }
                          ],
                          "request": {
                              "method": "GET",
                              "header": [],
                              "url": {
                                "raw": "{{Url}}/service_lookup/units",
                                "host": [
                                    "{{Url}}"
                                ],
                                "path": [
                                    "service_lookup",
                                    "units"
                                ]
                              }
                          },
                          "response": []
                      },
                      {
                          "name": "filterUnits",
                          "event": [
                              {
                                  "listen": "prerequest",
                                  "script": {
                                      "type": "text/javascript",
                                      "exec": [
                                          "pm.collectionVariables.set(\"CurrentRequest\", \"listFilter\");"
                                          
                                      ]
                                  }
                              }
                          ],
                          "request": {
                              "method": "POST",
                              "header": [
                                  {
                                      "key": "Content-Type",
                                      "value": "application/json"
                                  }
                              ],
                              "body": {
                                  "mode": "raw",
                                  "raw": "{\n    \"pageNum\": 1,\n    \"pageSize\": 5,\n    \"orderBy\": \"\",\n    \"orderType\": 0,\n    \"filter\": {\n        \"code\": \"\",\n        \"description\": \"\"\n    }\n}"
                              },
                              "url": {
                              "raw": "{{Url}}/service_lookup/units/filter",
                              "host": [
                                  "{{Url}}"
                              ],
                              "path": [
                                  "service_lookup",
                                  "units",
                                  "filter"
                              ]
                          }
                          },
                          "response": []
                      },
                      {
                          "name": "addUnit",
                          "event": [
                              {
                                  "listen": "prerequest",
                                  "script": {
                                      "type": "text/javascript",
                                      "exec": [
                                          "let randomCd = `RX-${Math.random().toString(36).substring(2,12)}`;",
                                          "let randomDesc = `Unit-${Math.random().toString(36).substring(2,12)}`;",
                                          "pm.collectionVariables.set(\"randomCode\", randomCd);",
                                          "pm.collectionVariables.set(\"randomDescription\", randomDesc);",
                                          "pm.collectionVariables.set(\"CurrentRequest\", \"details\");"
                                          
                                      ]
                                  }
                              }
                          ],
                          "request": {
                              "method": "POST",
                              "header": [
                                  {
                                      "key": "Content-Type",
                                      "value": "application/json"
                                  }
                              ],
                              "body": {
                                  "mode": "raw",
                                  "raw": "{\n    \"code\": \"{{randomCode}}\",\n    \"description\": \"{{randomDescription}}\"\n}"
                              },
                              "url": {
                              "raw": "{{Url}}/service_lookup/units/add",
                              "host": [
                                  "{{Url}}"
                              ],
                              "path": [
                                  "service_lookup",
                                  "units",
                                  "add"
                              ]
                          }
                          },
                          "response": []
                      },
                      {
                          "name": "editUnit",
                          "event": [
                              {
                                  "listen": "prerequest",
                                  "script": {
                                      "type": "text/javascript",
                                      "exec": [
                                          "let randomCd = `RX-${Math.random().toString(36).substring(2,12)}`;",
                                          "let randomDesc = `Unit-${Math.random().toString(36).substring(2,12)}`;",
                                          "pm.collectionVariables.set(\"randomCode\", randomCd);",
                                          "pm.collectionVariables.set(\"randomDescription\", randomDesc);",
                                          "pm.collectionVariables.set(\"CurrentRequest\", \"details\");"
                                          
                                      ]
                                  }
                              }
                          ],
                          "request": {
                              "method": "PUT",
                              "header": [
                                  {
                                      "key": "Content-Type",
                                      "value": "application/json"
                                  }
                              ],
                              "body": {
                                  "mode": "raw",
                                  "raw": "{\n    \"id\": 10000,\n    \"code\": \"{{randomCode}}\",\n    \"description\": \"{{randomDescription}}\"\n}"
                              },
                              "url": {
                                "raw": "{{Url}}/service_lookup/units/edit",
                                "host": [
                                    "{{Url}}"
                                ],
                                "path": [
                                    "service_lookup",
                                    "units",
                                    "edit"
                                ]
                              }
                          },
                          "response": []
                      }
                    ]
                }
            ]
        }
    ],
    "variable": [
        {
            "key": "Url",
            "value": "http://localhost:3333"
        }
    ]
}
