{
  "info": {
      "_postman_id": "your-collection-id",
      "name": "Promotion Collection",
      "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
  },
  "item": [
      {
          "name": "Promotion",
          "item": [
              {
                  "name": "154",
                  "item": [
                      {
                          "name": "get154s",
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
                              "raw": "{{Url}}/promotion/154/list",
                              "host": [
                                  "{{Url}}"
                              ],
                              "path": [
                                  "promotion",
                                  "154",
                                  "list"
                              ]
                          }
                          },
                          "response": []
                      }
                    ]
                },
              {
                  "name": "Tbk12",
                  "item": [
                      {
                          "name": "getTbk12s",
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
                              "raw": "{{Url}}/promotion/tbk12/list",
                              "host": [
                                  "{{Url}}"
                              ],
                              "path": [
                                  "promotion",
                                  "tbk12",
                                  "list"
                              ]
                          }
                          },
                          "response": []
                      }
                    ]
                },
              {
                  "name": "Main",
                  "item": [
                      {
                          "name": "getMains",
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
                              "raw": "{{Url}}/promotion/main/list",
                              "host": [
                                  "{{Url}}"
                              ],
                              "path": [
                                  "promotion",
                                  "main",
                                  "list"
                              ]
                          }
                          },
                          "response": []
                      }
                    ]
                },
              {
                  "name": "EmployeeList",
                  "item": [
                      {
                          "name": "getEmployeeLists",
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
                              "raw": "{{Url}}/promotion/employee_list/list",
                              "host": [
                                  "{{Url}}"
                              ],
                              "path": [
                                  "promotion",
                                  "employee_list",
                                  "list"
                              ]
                          }
                          },
                          "response": []
                      }
                    ]
                },
              {
                  "name": "Certification",
                  "item": [
                      {
                          "name": "getCertifications",
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
                              "raw": "{{Url}}/promotion/certification/list",
                              "host": [
                                  "{{Url}}"
                              ],
                              "path": [
                                  "promotion",
                                  "certification",
                                  "list"
                              ]
                          }
                          },
                          "response": []
                      },
                      {
                          "name": "getCertification",
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
                              "raw": "{{Url}}/promotion/certification/get",
                              "host": [
                                  "{{Url}}"
                              ],
                              "path": [
                                  "promotion",
                                  "certification",
                                  "get"
                              ]
                          }
                          },
                          "response": []
                      },
                      {
                          "name": "editCertification",
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
                                "raw": "{{Url}}/promotion/certification/edit",
                                "host": [
                                    "{{Url}}"
                                ],
                                "path": [
                                    "promotion",
                                    "certification",
                                    "edit"
                                ]
                              }
                          },
                          "response": []
                      }
                    ]
                },
              {
                  "name": "PlacementMeeting",
                  "item": [
                      {
                          "name": "getPlacementMeetings",
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
                              "raw": "{{Url}}/promotion/placement_meeting/list",
                              "host": [
                                  "{{Url}}"
                              ],
                              "path": [
                                  "promotion",
                                  "placement_meeting",
                                  "list"
                              ]
                          }
                          },
                          "response": []
                      }
                    ]
                },
              {
                  "name": "PlacementMeetingDetail",
                  "item": [
                      {
                          "name": "getPlacementMeetingDetail",
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
                              "raw": "{{Url}}/promotion/placement_meeting_detail/get",
                              "host": [
                                  "{{Url}}"
                              ],
                              "path": [
                                  "promotion",
                                  "placement_meeting_detail",
                                  "get"
                              ]
                          }
                          },
                          "response": []
                      },
                      {
                          "name": "editPlacementMeetingDetail",
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
                                "raw": "{{Url}}/promotion/placement_meeting_detail/edit",
                                "host": [
                                    "{{Url}}"
                                ],
                                "path": [
                                    "promotion",
                                    "placement_meeting_detail",
                                    "edit"
                                ]
                              }
                          },
                          "response": []
                      }
                    ]
                },
              {
                  "name": "PlacementMeetingSalaryAdjustment",
                  "item": [
                      {
                          "name": "getPlacementMeetingSalaryAdjustments",
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
                              "raw": "{{Url}}/promotion/placement_meeting_salary_adjustment/list",
                              "host": [
                                  "{{Url}}"
                              ],
                              "path": [
                                  "promotion",
                                  "placement_meeting_salary_adjustment",
                                  "list"
                              ]
                          }
                          },
                          "response": []
                      },
                      {
                          "name": "getPlacementMeetingSalaryAdjustment",
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
                              "raw": "{{Url}}/promotion/placement_meeting_salary_adjustment/get",
                              "host": [
                                  "{{Url}}"
                              ],
                              "path": [
                                  "promotion",
                                  "placement_meeting_salary_adjustment",
                                  "get"
                              ]
                          }
                          },
                          "response": []
                      }
                    ]
                },
              {
                  "name": "EmployeePromotion",
                  "item": [
                      {
                          "name": "getEmployeePromotions",
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
                              "raw": "{{Url}}/promotion/employee_promotion/list",
                              "host": [
                                  "{{Url}}"
                              ],
                              "path": [
                                  "promotion",
                                  "employee_promotion",
                                  "list"
                              ]
                          }
                          },
                          "response": []
                      },
                      {
                          "name": "getEmployeePromotion",
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
                              "raw": "{{Url}}/promotion/employee_promotion/get",
                              "host": [
                                  "{{Url}}"
                              ],
                              "path": [
                                  "promotion",
                                  "employee_promotion",
                                  "get"
                              ]
                          }
                          },
                          "response": []
                      },
                      {
                          "name": "editEmployeePromotion",
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
                                "raw": "{{Url}}/promotion/employee_promotion/edit",
                                "host": [
                                    "{{Url}}"
                                ],
                                "path": [
                                    "promotion",
                                    "employee_promotion",
                                    "edit"
                                ]
                              }
                          },
                          "response": []
                      }
                    ]
                },
              {
                  "name": "DirectorCertify",
                  "item": [
                      {
                          "name": "getDirectorCertify",
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
                              "raw": "{{Url}}/promotion/director_certify/get",
                              "host": [
                                  "{{Url}}"
                              ],
                              "path": [
                                  "promotion",
                                  "director_certify",
                                  "get"
                              ]
                          }
                          },
                          "response": []
                      },
                      {
                          "name": "editDirectorCertify",
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
                                "raw": "{{Url}}/promotion/director_certify/edit",
                                "host": [
                                    "{{Url}}"
                                ],
                                "path": [
                                    "promotion",
                                    "director_certify",
                                    "edit"
                                ]
                              }
                          },
                          "response": []
                      }
                    ]
                },
              {
                  "name": "Approve",
                  "item": [
                      {
                          "name": "editApprove",
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
                                "raw": "{{Url}}/promotion/approve/edit",
                                "host": [
                                    "{{Url}}"
                                ],
                                "path": [
                                    "promotion",
                                    "approve",
                                    "edit"
                                ]
                              }
                          },
                          "response": []
                      }
                    ]
                },
              {
                  "name": "Support",
                  "item": [
                      {
                          "name": "editSupport",
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
                                "raw": "{{Url}}/promotion/support/edit",
                                "host": [
                                    "{{Url}}"
                                ],
                                "path": [
                                    "promotion",
                                    "support",
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
