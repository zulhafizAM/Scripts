{
    "info": {
        "_postman_id": "your-collection-id",
        "name": "Your API Collection",
        "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
    },
    "item": [
        {
            "name": "lookup",
            "item": [
                {
                    "name": "cities",
                    "item": [
                        {
                            "name": "getCities",
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
                                  "raw": "{{Url}}/lookup/cities",
                                  "host": [
                                      "{{Url}}"
                                  ],
                                  "path": [
                                      "lookup",
                                      "cities"
                                  ]
                                }
                            },
                            "response": []
                        },
                        {
                            "name": "filterCities",
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
                                "raw": "{{Url}}/lookup/cities/filter",
                                "host": [
                                    "{{Url}}"
                                ],
                                "path": [
                                    "lookup",
                                    "cities",
                                    "filter"
                                ]
                            }
                            },
                            "response": []
                        },
                        {
                            "name": "addCity",
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
                                    "raw": "{\n    \"code\": \"KAC01\",\n    \"description\": \"Random City Name\"\n}"
                                },
                                "url": {
                                "raw": "{{Url}}/lookup/cities/add",
                                "host": [
                                    "{{Url}}"
                                ],
                                "path": [
                                    "lookup",
                                    "cities",
                                    "add"
                                ]
                            }
                            },
                            "response": []
                        },
                        {
                            "name": "Update City",
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
                                    "raw": "{\n    \"id\": 25,\n    \"code\": \"KAC01\",\n    \"description\": \"Random City Name\"\n}"
                                },
                                "url": {
                                  "raw": "{{Url}}/lookup/cities/edit",
                                  "host": [
                                      "{{Url}}"
                                  ],
                                  "path": [
                                      "lookup",
                                      "cities",
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
