{
  "info": {
      "_postman_id": "your-collection-id",
      "name": "Clinic Collection",
      "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
  },
  "item": [
      {
          "name": "Clinic",
          "item": [
              {
                  "name": "Clinic",
                  "item": [
                      {
                          "name": "getClinics",
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
                              "raw": "{{Url}}/medical/clinic/clinic/list",
                              "host": [
                                  "{{Url}}"
                              ],
                              "path": [
                                  "medical",
                                  "clinic",
                                  "clinic",
                                  "list"
                              ]
                          }
                          },
                          "response": []
                      },
                      {
                          "name": "getClinic",
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
                                  "raw": "{\n    \"id\": 10000\n}"
                              },
                              "url": {
                              "raw": "{{Url}}/medical/clinic/clinic/get",
                              "host": [
                                  "{{Url}}"
                              ],
                              "path": [
                                  "medical",
                                  "clinic",
                                  "clinic",
                                  "get"
                              ]
                          }
                          },
                          "response": []
                      },
                      {
                          "name": "addClinic",
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
                                  "raw": "{\n    \n}"
                              },
                              "url": {
                              "raw": "{{Url}}/medical/clinic/clinic/add",
                              "host": [
                                  "{{Url}}"
                              ],
                              "path": [
                                  "medical",
                                  "clinic",
                                  "clinic",
                                  "add"
                              ]
                          }
                          },
                          "response": []
                      },
                      {
                          "name": "editClinic",
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
                              "method": "PUT",
                              "header": [
                                  {
                                      "key": "Content-Type",
                                      "value": "application/json"
                                  }
                              ],
                              "body": {
                                  "mode": "raw",
                                  "raw": "{\n    \n}"
                              },
                              "url": {
                                "raw": "{{Url}}/medical/clinic/clinic/edit",
                                "host": [
                                    "{{Url}}"
                                ],
                                "path": [
                                  "medical",
                                    "clinic",
                                    "clinic",
                                    "edit"
                                ]
                              }
                          },
                          "response": []
                      }
                    ]
                },
              {
                  "name": "Date",
                  "item": [
                      {
                          "name": "getDate",
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
                                  "raw": "{\n    \"id\": 10000\n}"
                              },
                              "url": {
                              "raw": "{{Url}}/medical/clinic/date/get",
                              "host": [
                                  "{{Url}}"
                              ],
                              "path": [
                                  "medical",
                                  "clinic",
                                  "date",
                                  "get"
                              ]
                          }
                          },
                          "response": []
                      }
                    ]
                },
              {
                  "name": "ClinicAccount",
                  "item": [
                      {
                          "name": "addClinicAccount",
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
                                  "raw": "{\n    \n}"
                              },
                              "url": {
                              "raw": "{{Url}}/medical/clinic/clinic_account/add",
                              "host": [
                                  "{{Url}}"
                              ],
                              "path": [
                                  "medical",
                                  "clinic",
                                  "clinic_account",
                                  "add"
                              ]
                          }
                          },
                          "response": []
                      }
                    ]
                },
              {
                  "name": "Profile",
                  "item": [
                      {
                          "name": "getProfile",
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
                                  "raw": "{\n    \"id\": 10000\n}"
                              },
                              "url": {
                              "raw": "{{Url}}/medical/clinic/profile/get",
                              "host": [
                                  "{{Url}}"
                              ],
                              "path": [
                                  "medical",
                                  "clinic",
                                  "profile",
                                  "get"
                              ]
                          }
                          },
                          "response": []
                      }
                    ]
                },
              {
                  "name": "Claim",
                  "item": [
                      {
                          "name": "getClaim",
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
                                  "raw": "{\n    \"id\": 10000\n}"
                              },
                              "url": {
                              "raw": "{{Url}}/medical/clinic/claim/get",
                              "host": [
                                  "{{Url}}"
                              ],
                              "path": [
                                  "medical",
                                  "clinic",
                                  "claim",
                                  "get"
                              ]
                          }
                          },
                          "response": []
                      }
                    ]
                },
              {
                  "name": "Treatment",
                  "item": [
                      {
                          "name": "getTreatment",
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
                                  "raw": "{\n    \"id\": 10000\n}"
                              },
                              "url": {
                              "raw": "{{Url}}/medical/clinic/treatment/get",
                              "host": [
                                  "{{Url}}"
                              ],
                              "path": [
                                  "medical",
                                  "clinic",
                                  "treatment",
                                  "get"
                              ]
                          }
                          },
                          "response": []
                      }
                    ]
                },
              {
                  "name": "SecretaryApproval",
                  "item": [
                      {
                          "name": "getSecretaryApproval",
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
                                  "raw": "{\n    \"id\": 10000\n}"
                              },
                              "url": {
                              "raw": "{{Url}}/medical/clinic/secretary_approval/get",
                              "host": [
                                  "{{Url}}"
                              ],
                              "path": [
                                  "medical",
                                  "clinic",
                                  "secretary_approval",
                                  "get"
                              ]
                          }
                          },
                          "response": []
                      },
                      {
                          "name": "addSecretaryApproval",
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
                                  "raw": "{\n    \n}"
                              },
                              "url": {
                              "raw": "{{Url}}/medical/clinic/secretary_approval/add",
                              "host": [
                                  "{{Url}}"
                              ],
                              "path": [
                                  "medical",
                                  "clinic",
                                  "secretary_approval",
                                  "add"
                              ]
                          }
                          },
                          "response": []
                      }
                    ]
                },
              {
                  "name": "SupporterApprover",
                  "item": [
                      {
                          "name": "getSupporterApprover",
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
                                  "raw": "{\n    \"id\": 10000\n}"
                              },
                              "url": {
                              "raw": "{{Url}}/medical/clinic/supporter_approver/get",
                              "host": [
                                  "{{Url}}"
                              ],
                              "path": [
                                  "medical",
                                  "clinic",
                                  "supporter_approver",
                                  "get"
                              ]
                          }
                          },
                          "response": []
                      },
                      {
                          "name": "addSupporterApprover",
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
                                  "raw": "{\n    \n}"
                              },
                              "url": {
                              "raw": "{{Url}}/medical/clinic/supporter_approver/add",
                              "host": [
                                  "{{Url}}"
                              ],
                              "path": [
                                  "medical",
                                  "clinic",
                                  "supporter_approver",
                                  "add"
                              ]
                          }
                          },
                          "response": []
                      }
                    ]
                },
              {
                  "name": "ApproverApproval",
                  "item": [
                      {
                          "name": "getApproverApproval",
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
                                  "raw": "{\n    \"id\": 10000\n}"
                              },
                              "url": {
                              "raw": "{{Url}}/medical/clinic/approver_approval/get",
                              "host": [
                                  "{{Url}}"
                              ],
                              "path": [
                                  "medical",
                                  "clinic",
                                  "approver_approval",
                                  "get"
                              ]
                          }
                          },
                          "response": []
                      },
                      {
                          "name": "addApproverApproval",
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
                                  "raw": "{\n    \n}"
                              },
                              "url": {
                              "raw": "{{Url}}/medical/clinic/approver_approval/add",
                              "host": [
                                  "{{Url}}"
                              ],
                              "path": [
                                  "medical",
                                  "clinic",
                                  "approver_approval",
                                  "add"
                              ]
                          }
                          },
                          "response": []
                      }
                    ]
                },
              {
                  "name": "SupporterApproval",
                  "item": [
                      {
                          "name": "getSupporterApproval",
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
                                  "raw": "{\n    \"id\": 10000\n}"
                              },
                              "url": {
                              "raw": "{{Url}}/medical/clinic/supporter_approval/get",
                              "host": [
                                  "{{Url}}"
                              ],
                              "path": [
                                  "medical",
                                  "clinic",
                                  "supporter_approval",
                                  "get"
                              ]
                          }
                          },
                          "response": []
                      },
                      {
                          "name": "addSupporterApproval",
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
                                  "raw": "{\n    \n}"
                              },
                              "url": {
                              "raw": "{{Url}}/medical/clinic/supporter_approval/add",
                              "host": [
                                  "{{Url}}"
                              ],
                              "path": [
                                  "medical",
                                  "clinic",
                                  "supporter_approval",
                                  "add"
                              ]
                          }
                          },
                          "response": []
                      }
                    ]
                },
              {
                  "name": "Patient",
                  "item": [
                      {
                          "name": "getPatient",
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
                                  "raw": "{\n    \"id\": 10000\n}"
                              },
                              "url": {
                              "raw": "{{Url}}/medical/clinic/patient/get",
                              "host": [
                                  "{{Url}}"
                              ],
                              "path": [
                                  "medical",
                                  "clinic",
                                  "patient",
                                  "get"
                              ]
                          }
                          },
                          "response": []
                      },
                      {
                          "name": "addPatient",
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
                                  "raw": "{\n    \n}"
                              },
                              "url": {
                              "raw": "{{Url}}/medical/clinic/patient/add",
                              "host": [
                                  "{{Url}}"
                              ],
                              "path": [
                                  "medical",
                                  "clinic",
                                  "patient",
                                  "add"
                              ]
                          }
                          },
                          "response": []
                      }
                    ]
                },
              {
                  "name": "Treatment",
                  "item": [
                      {
                          "name": "getTreatment",
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
                                  "raw": "{\n    \"id\": 10000\n}"
                              },
                              "url": {
                              "raw": "{{Url}}/medical/clinic/treatment/get",
                              "host": [
                                  "{{Url}}"
                              ],
                              "path": [
                                  "medical",
                                  "clinic",
                                  "treatment",
                                  "get"
                              ]
                          }
                          },
                          "response": []
                      },
                      {
                          "name": "addTreatment",
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
                                  "raw": "{\n    \n}"
                              },
                              "url": {
                              "raw": "{{Url}}/medical/clinic/treatment/add",
                              "host": [
                                  "{{Url}}"
                              ],
                              "path": [
                                  "medical",
                                  "clinic",
                                  "treatment",
                                  "add"
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
