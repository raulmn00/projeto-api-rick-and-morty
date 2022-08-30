export const swaggerDocumentation = {
    openapi: '3.0.0',
    info: {
        title: 'Projeto 02 Blue - CRUD Rick and Morty',
        description: 'Rick and Morty Crud',
        termsOfService: '',
        contact: {
            email: 'raul.mariaci@gmail.com',
        },
        version: '1.0.0',
    },
    servers: [
        {
            url: 'https://api-rick-and-morty-crud-c017.herokuapp.com/',
            description: 'API Production',
        },
        {
            url: 'http://localhost:3000',
            description: 'DEV API',
        },
    ],
    paths: {
        '/users': {
            get: {
                summary: 'List with all users',
                description: 'Route responsible for listing all users',
                tags: ['users'],
                security: [
                    {
                        token: [],
                    },
                ],
                responses: {
                    404: {
                        description: 'Not Found',
                    },
                    200: {
                        description: 'OK',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'object',
                                    items: {
                                        $ref: '#components/schemas/getUsers',
                                    },
                                },
                            },
                        },
                    },
                },
            },
        },
        '/users/{id}': {
            get: {
                summary: 'Search for a user by ID',
                description: 'Route responsible for searching for a user by ID',
                tags: ['users'],
                security: [
                    {
                        token: [],
                    },
                ],
                parameters: [
                    {
                        name: 'id',
                        in: 'path',
                        description: 'User ID for the search',
                        required: true,
                    },
                ],
                responses: {
                    400: {
                        description: 'Bad Request',
                    },
                    200: {
                        description: 'OK',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'object',
                                    $ref: '#components/schemas/getUsers',
                                },
                            },
                        },
                    },
                },
            },
        },
        '/users/create': {
            post: {
                summary: 'Register a user',
                description: 'Route responsible for registering a user',
                tags: ['users'],
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#components/schemas/postUsers',
                            },
                            examples: {
                                user: {
                                    value: {
                                        name: 'User Name',
                                        email: 'username@email.com',
                                        password: 'strong@password.com',
                                        image: 'http://image.com',
                                    },
                                },
                            },
                        },
                    },
                },
                responses: {
                    400: {
                        description: 'Bad Request',
                    },
                    201: {
                        description: 'Created',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'object',
                                    $ref: '#components/schemas/getUsers',
                                },
                            },
                        },
                    },
                },
            },
        },
        '/users/update/{id}': {
            patch: {
                summary: 'Edit a user by ID',
                description: 'Route responsible for editing a user by ID',
                tags: ['users'],
                security: [
                    {
                        token: [],
                    },
                ],
                parameters: [
                    {
                        name: 'id',
                        in: 'path',
                        description: 'User ID for the search',
                        required: true,
                    },
                ],
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#components/schemas/postUsers',
                            },
                            examples: {
                                user: {
                                    value: {
                                        name: 'User Name',
                                        email: 'user@image.com',
                                        password: '',
                                        image: 'http://image.com',
                                    },
                                },
                            },
                        },
                    },
                },
                responses: {
                    400: {
                        description: 'Bad Request',
                    },
                    200: {
                        description: 'OK',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'object',
                                    $ref: '#components/schemas/getUsers',
                                },
                            },
                        },
                    },
                },
            },
        },
        '/users/delete/{id}': {
            delete: {
                summary: 'Delete a user by ID',
                description: 'Route responsible for deleting a user by ID',
                tags: ['users'],
                security: [
                    {
                        token: [],
                    },
                ],
                parameters: [
                    {
                        name: 'id',
                        in: 'path',
                        description: 'User id for deletion',
                        required: true,
                    },
                ],
                responses: {
                    400: {
                        description: 'Bad Request',
                    },
                    200: {
                        description: 'OK',
                    },
                },
            },
        },
        '/auth/login': {
            post: {
                sumarry: 'user access route',
                description:
                    'Route responsible for logging in a registered user',
                tags: ['auth'],
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#components/schemas/postUsers',
                            },
                            examples: {
                                user: {
                                    value: {
                                        email: '',
                                        password: '',
                                    },
                                },
                            },
                        },
                    },
                },
                responses: {
                    401: {
                        description: 'invalid password',
                    },
                    200: {
                        description: 'OK',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#components/schemas/getUsers',
                                },
                                examples: {
                                    user: {
                                        value: {
                                            email: 'test@dev.com.br',
                                            password: 'strong@password',
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
                response: {
                    400: {
                        description: 'not found',
                    },
                    200: {
                        description: 'OK',
                    },
                },
            },
        },
        '/characters/all-chars': {
            get: {
                summary: 'list with all characters',
                description: 'Route responsible for listing all characters',
                tags: ['characters'],
                responses: {
                    404: {
                        description: 'Not Found',
                    },
                    200: {
                        description: 'OK',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'object',
                                    items: {
                                        $ref: '#components/schemas/characters',
                                    },
                                },
                                examples: {
                                    character: {
                                        value: {
                                            name: 'Rick',
                                            image: 'http://rickimage.com',
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            },
        },
        '/characters/find-character/{id}': {
            get: {
                summary: 'Search for a character by ID',
                description:
                    'Route responsible for searching for a character by ID',
                tags: ['characters'],
                parameters: [
                    {
                        name: 'id',
                        in: 'path',
                        description: 'Character ID for the search',
                        required: true,
                    },
                ],
                responses: {
                    400: {
                        description: 'Bad Request',
                    },
                    200: {
                        description: 'OK',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'object',
                                    $ref: '#components/schemas/characters',
                                },
                                examples: {
                                    character: {
                                        value: {
                                            name: 'Rick',
                                            image: 'http://rickimage.com',
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            },
        },
        '/characters/search': {
            get: {
                summary: 'Search for a character by name',
                description: 'Searching for a character by name',
                tags: ['characters'],
                parameters: [
                    {
                        name: 'name',
                        in: 'query',
                        description: 'Character name for the search',
                        required: true,
                    },
                ],
                responses: {
                    400: {
                        description: 'Invalid name',
                    },
                    200: {
                        description: 'OK',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'object',
                                    $ref: '#components/schemas/characters',
                                },
                                examples: {
                                    character: {
                                        value: {
                                            name: 'Rick',
                                            image: 'http://rickimage.com',
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            },
        },
        '/characters/create-char': {
            post: {
                summary: 'register a character',
                description: 'Route responsible for registering a character',
                tags: ['characters'],
                security: [
                    {
                        token: [],
                    },
                ],
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#components/schemas/characters',
                            },
                            examples: {
                                character: {
                                    value: {
                                        name: 'Rick',
                                        image: 'http://rickimage.com',
                                    },
                                },
                            },
                        },
                    },
                },
                responses: {
                    400: {
                        description: 'Bad Request',
                    },
                    201: {
                        description: 'Created',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'object',
                                    $ref: '#components/schemas/characters',
                                },
                                examples: {
                                    character: {
                                        value: {
                                            name: 'Rick',
                                            image: 'http://rickimage.com',
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            },
        },
        '/characters/update-character/{id}': {
            patch: {
                summary: 'Edit a character by ID',
                description: 'Route responsible for editing a character by ID',
                tags: ['characters'],
                security: [
                    {
                        token: [],
                    },
                ],
                parameters: [
                    {
                        name: 'id',
                        in: 'path',
                        description: 'character ID for the search',
                        required: true,
                    },
                ],
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#components/schemas/characters',
                            },
                            examples: {
                                character: {
                                    value: {
                                        name: 'Diane Sanchez',
                                        image: 'http://dianeimage.com',
                                    },
                                },
                            },
                        },
                    },
                },
                responses: {
                    400: {
                        description: 'Bad Request',
                    },
                    200: {
                        description: 'OK',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'object',
                                    $ref: '#components/schemas/characters',
                                },
                                examples: {
                                    user: {
                                        value: {
                                            name: 'Rick',
                                            image: 'http://rickimage.com',
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            },
        },
        '/characters/delete-character/{id}': {
            delete: {
                summary: 'Delete a character by ID',
                description: 'Route responsible for deleting a character by ID',
                tags: ['characters'],
                security: [
                    {
                        token: [],
                    },
                ],
                parameters: [
                    {
                        name: 'id',
                        in: 'path',
                        description: 'character id for deletion',
                        required: true,
                    },
                ],
                responses: {
                    400: {
                        description: 'Bad Request',
                    },
                    200: {
                        description: 'OK',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'object',
                                    $ref: '#components/schemas/characters',
                                },
                                examples: {
                                    user: {
                                        value: {
                                            name: 'Rick',
                                            image: 'http://rickimage.com',
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            },
        },
    },
    components: {
        schemas: {
            getUsers: {
                type: 'object',
                properties: {
                    name: {
                        type: 'string',
                    },
                    email: {
                        type: 'string',
                    },
                    image: {
                        type: 'string',
                    },
                },
            },
            postUsers: {
                type: 'object',
                properties: {
                    name: {
                        type: 'string',
                    },
                    email: {
                        type: 'string',
                    },
                    password: {
                        type: 'string',
                    },
                    image: {
                        type: 'string',
                    },
                },
            },
            characters: {
                type: 'object',
                properties: {
                    name: {
                        type: 'string',
                    },
                    image: {
                        type: 'string',
                    },
                },
            },
        },
        securitySchemes: {
            token: {
                type: 'http',
                scheme: 'bearer',
                bearerFormat: 'jwt',
            },
        },
    },
    security: {
        token: [],
    },
};
