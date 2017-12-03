// This is the swagger config exported as json
module.exports = {
    "swagger": "2.0",
    "info": {
        "description": "This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.",
        "version": "1.0.0",
        "title": "Friendspace",
        "termsOfService": "http://swagger.io/terms/",
        "contact": {
            "email": "apiteam@swagger.io"
        },
        "license": {
            "name": "Apache 2.0",
            "url": "http://www.apache.org/licenses/LICENSE-2.0.html"
        }
    },
    "host": "localhost:7700",
    "basePath": "/",
    "tags": [
        {
            "name": "dude",
            "description": "Something about someone",
            "externalDocs": {
                "description": "Find out more",
                "url": "http://swagger.io"
            }
        }
    ],
    "schemes": [
        "http"
    ],
    "paths": {
        "/dude": {
            "post": {
                "tags": [
                    "dude"
                ],
                "summary": "Add a new dude to the list",
                "description": "",
                "operationId": "addDude",
                "consumes": [
                    "application/json",
                    "application/xml"
                ],
                "produces": [
                    "application/xml",
                    "application/json"
                ],
                "parameters": [
                    {
                        "in": "body",
                        "name": "body",
                        "description": "Dude object that needs to be added to the list",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/Dude"
                        }
                    }
                ],
                "responses": {
                    "405": {
                        "description": "Invalid input"
                    }
                },
                "x-swagger-router-controller": "Dude"
            }
        },
        "/dude/{dudeId}/addFriend/{friendId}": {
            "put": {
                "tags": [
                    "dude"
                ],
                "summary": "Add a friend to an existing dude",
                "description": "",
                "operationId": "addFriend",
                "consumes": [
                    "application/json",
                    "application/xml"
                ],
                "produces": [
                    "application/xml",
                    "application/json"
                ],
                "parameters": [
                    {
                        "name": "dudeId",
                        "in": "path",
                        "description": "ID of dude who has a new friend",
                        "required": true,
                        "type": "integer",
                        "format": "int64"
                    },
                    {
                        "name": "friendId",
                        "in": "path",
                        "description": "ID of new friend",
                        "required": true,
                        "type": "integer",
                        "format": "int64"
                    }
                ],
                "responses": {
                    "400": {
                        "description": "Invalid ID supplied"
                    },
                    "404": {
                        "description": "Dude not found"
                    },
                    "405": {
                        "description": "Validation exception"
                    },
                    "406": {
                        "description": "Friend not found"
                    }
                },
                "x-swagger-router-controller": "Dude"
            }
        },
        "/dude/findByStatus": {
            "get": {
                "tags": [
                    "dude"
                ],
                "summary": "Finds Dudes by status",
                "description": "Multiple status values can be provided with comma separated strings",
                "operationId": "findDudesByStatus",
                "produces": [
                    "application/xml",
                    "application/json"
                ],
                "parameters": [
                    {
                        "name": "status",
                        "in": "query",
                        "description": "Status values that need to be considered for filter",
                        "required": true,
                        "type": "array",
                        "items": {
                            "type": "string",
                            "default": "available",
                            "enum": [
                                "available",
                                "pending",
                                "bowling"
                            ]
                        },
                        "collectionFormat": "multi"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "schema": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/Dude"
                            }
                        }
                    },
                    "400": {
                        "description": "Invalid status value"
                    }
                },
                "x-swagger-router-controller": "Dude"
            }
        },
        "/dude/{dudeId}": {
            "get": {
                "tags": [
                    "dude"
                ],
                "summary": "Find dude by ID",
                "description": "Returns a single dude",
                "operationId": "getDudeById",
                "produces": [
                    "application/xml",
                    "application/json"
                ],
                "parameters": [
                    {
                        "name": "dudeId",
                        "in": "path",
                        "description": "ID of dude to return",
                        "required": true,
                        "type": "integer",
                        "format": "int64"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "schema": {
                            "$ref": "#/definitions/Dude"
                        }
                    },
                    "400": {
                        "description": "Invalid ID supplied"
                    },
                    "404": {
                        "description": "Dude not found"
                    }
                },
                "x-swagger-router-controller": "Dude"
            },
            "post": {
                "tags": [
                    "dude"
                ],
                "summary": "Updates a dude in the list with form data",
                "description": "",
                "operationId": "updateDudeWithForm",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "application/xml",
                    "application/json"
                ],
                "parameters": [
                    {
                        "name": "dudeId",
                        "in": "path",
                        "description": "ID of dude that needs to be updated",
                        "required": true,
                        "type": "integer",
                        "format": "int64"
                    },
                    {
                        "name": "name",
                        "in": "formData",
                        "description": "Updated name of the dude",
                        "required": false,
                        "type": "string"
                    },
                    {
                        "name": "status",
                        "in": "formData",
                        "description": "Updated status of the dude",
                        "required": false,
                        "type": "string"
                    }
                ],
                "responses": {
                    "405": {
                        "description": "Invalid input"
                    }
                },
                "x-swagger-router-controller": "Dude"
            },
            "delete": {
                "tags": [
                    "dude"
                ],
                "summary": "Deletes a dude",
                "description": "",
                "operationId": "deleteDude",
                "produces": [
                    "application/xml",
                    "application/json"
                ],
                "parameters": [
                    {
                        "name": "api_key",
                        "in": "header",
                        "required": false,
                        "type": "string"
                    },
                    {
                        "name": "dudeId",
                        "in": "path",
                        "description": "Dude id to delete",
                        "required": true,
                        "type": "integer",
                        "format": "int64"
                    }
                ],
                "responses": {
                    "400": {
                        "description": "Invalid ID supplied"
                    },
                    "404": {
                        "description": "Dude not found"
                    }
                },
                "x-swagger-router-controller": "Dude"
            }
        }
    },
    "definitions": {
        "Dude": {
            "type": "object",
            "required": [
                "name"
            ],
            "properties": {
                "id": {
                    "type": "integer",
                    "format": "int64"
                },
                "name": {
                    "type": "string",
                    "example": "lebowski"
                },
                "friends": {
                    "type": "array",
                    "xml": {
                        "name": "dude",
                        "wrapped": true
                    },
                    "items": {
                        "$ref": "#/definitions/Dude"
                    }
                },
                "status": {
                    "type": "string",
                    "description": "the dude's status",
                    "enum": [
                        "available",
                        "pending",
                        "bowling"
                    ]
                }
            },
            "xml": {
                "name": "Dude"
            }
        },
        "ApiResponse": {
            "type": "object",
            "properties": {
                "code": {
                    "type": "integer",
                    "format": "int32"
                },
                "type": {
                    "type": "string"
                },
                "message": {
                    "type": "string"
                }
            }
        }
    },
    "externalDocs": {
        "description": "Find out more about Swagger",
        "url": "http://swagger.io"
    }
};