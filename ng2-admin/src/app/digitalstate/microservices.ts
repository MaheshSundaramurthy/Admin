import { DsEnvironmentConfig } from '../shared/providers/environment.provider';

export class MicroservicesDefinition {

    constructor(protected dsEnv: DsEnvironmentConfig) {

    }

    getAll() {
        let scheme = this.dsEnv.msUrlScheme;
        let host = this.dsEnv.msHost;

        return {
            'authentication': {
                label: 'Authentication',
                entrypoint: {
                    url: `${scheme}://${host}:8010/app_dev.php/`,
                },
                paths: {
                    registration: 'registration',
                    login: 'tokens/staff',
                    anonymous: 'tokens/anonymous',
                },
                entities: {
                    'users': {
                        properties: {
                            'uuid': {
                                label: 'UUID',
                                type: 'string',
                            },
                            'username': {
                                label: 'Username',
                                type: 'string',
                                validation: {
                                    'required': {message: 'required'}, // translation key prefixed by 'ds.microservices.entity.validation'
                                },
                            },
                            'plainPassword': {
                                label: 'Password',
                                type: 'string',
                                validation: {
                                    'required': {message: 'required'}, // translation key prefixed by 'ds.microservices.entity.validation'
                                },
                            },
                            'email': {
                                label: 'Email',
                                type: 'string',
                                validation: {
                                    'required': {message: 'required'}, // translation key prefixed by 'ds.microservices.entity.validation'
                                    'email': {message: 'email'},
                                },
                            },
                            'enabled': {
                                label: 'Enabled',
                                type: 'boolean',
                                default: true,
                                validation: {
                                    'required': { message: 'required'},
                                },
                            },
                            'identity': {
                                label: 'Identity',
                                type: 'string',
                                validation: {
                                    'required': {message: 'required'}, // translation key prefixed by 'ds.microservices.entity.validation'
                                },
                                default: 'Individual',
                            },
                            'identityUuid': {
                                label: 'Identity UUID',
                                type: 'string',
                                validation: {
                                    'required': {message: 'required'}, // translation key prefixed by 'ds.microservices.entity.validation'
                                },
                            },
                            'owner': {
                                label: 'Owner',
                                type: 'string',
                                validation: {
                                    'required': {message: 'required'}, // translation key prefixed by 'ds.microservices.entity.validation'
                                },
                                default: 'BusinessUnit',
                            },
                            'ownerUuid': {
                                label: 'Owner UUID',
                                type: 'string',
                                validation: {
                                    'required': {message: 'required'}, // translation key prefixed by 'ds.microservices.entity.validation'
                                },
                                default: '8454c987-cbc5-4a24-ba1a-d420283caabd',
                            },
                            'updatedAt': {
                                label: 'Updated At',
                                type: 'date',
                            },
                            'createdAt': {
                                label: 'Created At',
                                type: 'date',
                            },
                            'lastLogin': {
                                label: 'Last Login',
                                type: 'date',
                            },
                        },
                    },
                },
            },
            'cms': {
                label: 'CMS',
                entrypoint: {
                    url: `${scheme}://${host}:8056/app_dev.php/`,
                },
                paths: {
                    content: 'content',
                    datas: 'datas',
                },
                translationSlugs: [ 'translation', 'admin-translation' ], // Order matters; latter overrides former
            },
            'services': {
                label: 'Services',
                entrypoint: {
                    url: `${scheme}://${host}:8051/app_dev.php/`,
                },
                entities: {
                    'services': {
                        properties: {
                            'uuid': {
                                label: 'UUID',
                                type: 'string',
                            },
                            'title': {
                                label: 'Title',
                                type: 'string',
                                default: '',
                                translated: true,
                                validation: {
                                    'required': {message: 'required'}, // translation key prefixed by 'ds.microservices.entity.validation'
                                    'minlength': {
                                        message: 'minlength',
                                        params: { chars: 4 }
                                    },
                                    // 'maxlength': { message: 'Title cannot be more than 24 characters long.'},
                                    // 'someCustomValidationDirective': { message: 'Someone named "Bob" cannot be a hero.'},
                                },
                            },
                            'presentation': {
                                label: 'Presentation',
                                type: 'string',
                                default: '',
                                translated: true,
                                validation: {
                                    'required': { message: 'required'},
                                },
                            },
                            'slug': {
                                label: 'Slug',
                                type: 'string',
                                default: '',
                                validation: {
                                    'required': { message: 'required'},
                                },
                            },
                            'description': {
                                label: 'Description',
                                type: 'string',
                                default: '',
                                translated: true,
                                validation: {
                                    'required': { message: 'required'},
                                },
                            },
                            'data': {
                                label: 'Data',
                                type: 'json',
                                default: {},
                                translated: true,
                                validation: {
                                    'json': { message: 'json' },
                                    'required': { message: 'required'},
                                },
                            },
                            'weight': {
                                label: 'Weight',
                                type: 'number',
                                default: 0,
                                validation: {
                                    'required': { message: 'required' },
                                }
                            },
                            'enabled': {
                                label: 'Enabled',
                                type: 'boolean',
                                default: true,
                                validation: {
                                    'required': { message: 'required'},
                                },
                            },
                        },
                    },
                    'scenarios': {
                        properties: {
                            'uuid': {
                                label: 'UUID',
                                type: 'string',
                            },
                            'updatedAt': {
                                label: 'Updated At',
                                type: 'date',
                            },
                            'title': {
                                label: 'Title',
                                type: 'string',
                                default: '',
                                translated: true,
                                validation: {
                                    'required': {message: 'required'}, // translation key prefixed by 'ds.microservices.entity.validation'
                                    'minlength': {
                                        message: 'minlength',
                                        params: { chars: 4 }
                                    },
                                    // 'maxlength': { message: 'Title cannot be more than 24 characters long.'},
                                    // 'someCustomValidationDirective': { message: 'Someone named "Bob" cannot be a hero.'},
                                },
                            },
                            'presentation': {
                                label: 'Presentation',
                                type: 'string',
                                default: '',
                                translated: true,
                                validation: {
                                    'required': { message: 'required'},
                                },
                            },
                            'slug': {
                                label: 'Slug',
                                type: 'string',
                                default: '',
                                validation: {
                                    'required': { message: 'required'},
                                },
                            },
                            'description': {
                                label: 'Description',
                                type: 'string',
                                default: '',
                                translated: true,
                                validation: {
                                    'required': { message: 'required'},
                                },
                            },
                            'weight': {
                                label: 'Weight',
                                type: 'number',
                                default: 0,
                                validation: {
                                    'required': { message: 'required' },
                                }
                            },
                            'enabled': {
                                label: 'Enabled',
                                type: 'boolean',
                                default: true,
                                validation: {
                                    'required': { message: 'required'},
                                },
                            },
                            'type': {
                                label: 'Type',
                                type: 'string',
                                // default: 'bpm',
                                field: {
                                    type: 'select',
                                    options: {
                                        'info': 'Info',
                                        'bpm': 'BPM',
                                        'url': 'URL',
                                        'api': 'API',
                                    },
                                },
                                validation: {
                                    'required': { message: 'required' },
                                },
                            },
                            'config': {
                                label: 'Config',
                                type: 'json',
                                default: {},
                                validation: {
                                    'json': { message: 'json' },
                                },
                            },
                            'data': {
                                label: 'Data',
                                type: 'json',
                                default: {},
                                translated: true,
                                validation: {
                                    'json': { message: 'json' },
                                },
                            },
                        },
                        conditionalProperties: { // based on scenario types
                            'process_definition_key': {
                                parent: 'config',
                                label: 'Process definition key',
                                type: 'string',
                                default: '',
                                validation: {
                                    'required': { message: 'required' },
                                },
                            },
                            'url': {
                                parent: 'config',
                                label: 'url',
                                type: 'string',
                                default: '',
                                validation: {
                                    'required': { message: 'required' },
                                },
                            },
                            'button_text': {
                                parent: 'data',
                                label: 'Button Text',
                                type: 'string',
                                validation: {
                                    'required': { message: 'required' },
                                },
                            },
                        },
                    },
                    'submissions': {
                        properties: {
                            'uuid': {
                                label: 'UUID',
                                type: 'string',
                            },
                            'updatedAt': {
                                label: 'Updated At',
                                type: 'date',
                            },
                            'createdAt': {
                                label: 'Updated At',
                                type: 'date',
                            },
                        },
                    },
                },
            },
            'cases': {
                label: 'Cases',
                entrypoint: {
                    url: `${scheme}://${host}:8050/app_dev.php/`,
                },
                entities: {
                    'cases': {
                        properties: {
                            'uuid': {
                                label: 'UUID',
                                type: 'string',
                            },
                            'title': {
                                label: 'Title',
                                type: 'string',
                                default: '',
                                translated: true,
                                validation: {
                                    'required': {message: 'required'}, // translation key prefixed by 'ds.microservices.entity.validation'
                                    'minlength': {
                                        message: 'minlength',
                                        params: { chars: 4 }
                                    },
                                },
                            },
                            'customId': {
                                label: 'Custom ID',
                                type: 'string',
                            },
                            'state': {
                                label: 'State',
                                type: 'string',
                                default: 'open',
                                field: {
                                    type: 'select',
                                    options: {
                                        'open': 'Open',
                                        'closed': 'Closed',
                                    },
                                },
                            },
                            'identity': {
                                label: 'Identity',
                                type: 'string',
                                default: 'Individual',
                            },
                            'identityUuid': {
                                label: 'Identity UUID',
                                type: 'string',
                                default: 'd0daa7e4-07d1-47e6-93f2-0629adaa3b49',
                            },
                            'owner': {
                                label: 'Owner',
                                type: 'string',
                                validation: {
                                    'required': {message: 'required'}, // translation key prefixed by 'ds.microservices.entity.validation'
                                },
                                default: 'BusinessUnit',
                            },
                            'ownerUuid': {
                                label: 'Owner UUID',
                                type: 'string',
                                validation: {
                                    'required': {message: 'required'}, // translation key prefixed by 'ds.microservices.entity.validation'
                                },
                                default: '8454c987-cbc5-4a24-ba1a-d420283caabd',
                            },
                            'statuses': {
                                label: 'Status',
                                type: 'string',
                                default: []
                            },
                            'data': {
                                label: 'Data',
                                type: 'json',
                                default: {},
                                translated: true,
                                validation: {
                                    'json': { message: 'json' },
                                    'required': { message: 'required'},
                                },
                            },
                        },
                    },
                    'case-statuses': {
                        properties: {
                            'uuid': {
                                label: 'UUID',
                                type: 'string',
                            },
                            'title': {
                                label: 'Title',
                                type: 'string',
                                default: '',
                                translated: true,
                                validation: {
                                    'required': {message: 'required'}, // translation key prefixed by 'ds.microservices.entity.validation'
                                },
                            },
                            'description': {
                                label: 'Description',
                                type: 'string',
                                default: '',
                                translated: true,
                                validation: {
                                    'required': {message: 'required'}, // translation key prefixed by 'ds.microservices.entity.validation'
                                },
                            },
                            'data': {
                                label: 'Data',
                                type: 'json',
                                default: {},
                                translated: true,
                                validation: {
                                    'required': {message: 'required'}, // translation key prefixed by 'ds.microservices.entity.validation'
                                    'json': { message: 'json' },
                                },
                            },
                            'createdAt': {
                                label: 'Created At',
                                type: 'date',
                            },
                            'updatedAt': {
                                label: 'Updated At',
                                type: 'date',
                            },
                        },
                    },
                },
            },
            'identities': {
                label: 'Identities',
                entrypoint: {
                    url: `${scheme}://${host}:8054/app_dev.php/`,
                },
                entities: {
                    'individuals': {
                        properties: {
                            'uuid': {
                                label: 'UUID',
                                type: 'string',
                            },
                            'owner': {
                                label: 'Owner',
                                type: 'string',
                                validation: {
                                    'required': {message: 'required'}, // translation key prefixed by 'ds.microservices.entity.validation'
                                },
                                default: 'BusinessUnit',
                            },
                            'ownerUuid': {
                                label: 'Owner UUID',
                                type: 'string',
                                validation: {
                                    'required': {message: 'required'}, // translation key prefixed by 'ds.microservices.entity.validation'
                                },
                                default: '8454c987-cbc5-4a24-ba1a-d420283caabd',
                            },
                            'updatedAt': {
                                label: 'Updated At',
                                type: 'date',
                            },
                        },
                    },
                    'staffs': {
                        properties: {
                            'uuid': {
                                label: 'UUID',
                                type: 'string',
                            },
                            'owner': {
                                label: 'Owner',
                                type: 'string',
                                validation: {
                                    'required': {message: 'required'}, // translation key prefixed by 'ds.microservices.entity.validation'
                                },
                                default: 'BusinessUnit',
                            },
                            'ownerUuid': {
                                label: 'Owner UUID',
                                type: 'string',
                                validation: {
                                    'required': {message: 'required'}, // translation key prefixed by 'ds.microservices.entity.validation'
                                },
                                default: '8454c987-cbc5-4a24-ba1a-d420283caabd',
                            },
                            'updatedAt': {
                                label: 'Updated At',
                                type: 'date',
                            },
                        },
                    },
                    'anonymouses': {
                        properties: {
                            'uuid': {
                                label: 'UUID',
                                type: 'string',
                            },
                            'owner': {
                                label: 'Owner',
                                type: 'string',
                                validation: {
                                    'required': {message: 'required'}, // translation key prefixed by 'ds.microservices.entity.validation'
                                },
                                default: 'BusinessUnit',
                            },
                            'ownerUuid': {
                                label: 'Owner UUID',
                                type: 'string',
                                validation: {
                                    'required': {message: 'required'}, // translation key prefixed by 'ds.microservices.entity.validation'
                                },
                                default: '8454c987-cbc5-4a24-ba1a-d420283caabd',
                            },
                            'updatedAt': {
                                label: 'Updated At',
                                type: 'date',
                            },
                        },
                    },
                    'individual-personas': {
                        properties: {
                            'title': {
                                label: 'Title',
                                type: 'string',
                                default: '',
                                translated: true,
                                validation: {
                                    'required': {message: 'required'},
                                },
                            },
                            'data': {
                                label: 'Data',
                                type: 'json',
                                default: {},
                                validation: {
                                    'required': {message: 'required'}, // translation key prefixed by 'ds.microservices.entity.validation'
                                    'json': { message: 'json' },
                                },
                            },
                        },
                    },
                    'staff-personas': {
                        properties: {
                            'title': {
                                label: 'Title',
                                type: 'string',
                                default: '',
                                translated: true,
                                validation: {
                                    'required': {message: 'required'},
                                },
                            },
                            'data': {
                                label: 'Data',
                                type: 'json',
                                default: {},
                            },
                        },
                    },
                    'anonymous-personas': {
                        properties: {
                            'title': {
                                label: 'Title',
                                type: 'string',
                                default: '',
                                translated: true,
                                validation: {
                                    'required': {message: 'required'},
                                },
                            },
                            'data': {
                                label: 'Data',
                                type: 'json',
                                default: {},
                            },
                        },
                    },
                },
            },
            'assets': {
                label: 'Assets',
                entrypoint: {
                    url: `${scheme}://${host}:8053/`,
                },
                entities: {
                    'assets': {
                        properties: {
                            'title': {
                                label: 'Title',
                                type: 'string',
                                default: '',
                                validation: {
                                    'required': {message: 'required'},
                                },
                            },
                        },
                    },
                },
            },
            'topics': {
                label: 'Topics',
                entrypoint: {
                    url: `${scheme}://${host}:8016/app_dev.php/`,
                },
                entities: {
                    'topics': {
                        properties: {
                            'title': {
                                label: 'Title',
                                type: 'string',
                                default: '',
                                validation: {
                                    'required': {message: 'required'},
                                },
                            },
                        },
                    },
                },
            },
            'tasks': {
                label: 'Tasks',
                entrypoint: {
                    url: `${scheme}://${host}:8060/app_dev.php/`,
                },
                entities: {
                    'tasks': {
                        properties: {
                            'uuid': {
                                label: 'UUID',
                                type: 'string',
                            },
                            'title': {
                                label: 'Title',
                                type: 'string',
                            },
                            'description': {
                                label: 'Description',
                                type: 'string',
                            },
                            'form': {
                                label: 'Form',
                                type: 'string',
                            },
                            'identity': {
                                label: 'Identity',
                                type: 'string',
                                validation: {
                                    'required': {message: 'required'}, // translation key prefixed by 'ds.microservices.entity.validation'
                                },
                                default: 'Individual',
                            },
                            'identityUuid': {
                                label: 'Identity UUID',
                                type: 'string',
                                validation: {
                                    'required': {message: 'required'}, // translation key prefixed by 'ds.microservices.entity.validation'
                                },
                            },
                            'owner': {
                                label: 'Owner',
                                type: 'string',
                                validation: {
                                    'required': {message: 'required'}, // translation key prefixed by 'ds.microservices.entity.validation'
                                },
                                default: 'BusinessUnit',
                            },
                            'ownerUuid': {
                                label: 'Owner UUID',
                                type: 'string',
                                validation: {
                                    'required': {message: 'required'}, // translation key prefixed by 'ds.microservices.entity.validation'
                                },
                                default: '8454c987-cbc5-4a24-ba1a-d420283caabd',
                            },
                            'createdAt': {
                                label: 'Created At',
                                type: 'date',
                            },
                            'dueAt': {
                                label: 'Due At',
                                type: 'date',
                            },
                            'followUpAt': {
                                label: 'Follow-up At',
                                type: 'date',
                            },
                            'priority': {
                                label: 'Priority',
                                type: 'date',
                            },
                        },
                    },
                    'submissions': {
                        properties: {
                            'uuid': {
                                label: 'UUID',
                                type: 'string',
                            },
                            'updatedAt': {
                                label: 'Updated At',
                                type: 'date',
                            },
                            'createdAt': {
                                label: 'Created At',
                                type: 'date',
                            },
                        },
                    },
                },
            },
            'records': {
                label: 'Records',
                entrypoint: {
                    url: `${scheme}://${host}:8052/`,
                },
                entities: {
                    'records': {
                        properties: {
                            'title': {
                                label: 'Title',
                                type: 'string',
                                default: '',
                                validation: {
                                    'required': {message: 'required'},
                                },
                            },
                        },
                    },
                },
            },
            'interactions': {
                label: 'Interactions',
                entrypoint: {
                    url: `${scheme}://${host}:8017/`,
                },
                entities: {
                    'communications': {
                        properties: {
                            'title': {
                                label: 'Title',
                                type: 'string',
                                default: '',
                                validation: {
                                    'required': {message: 'required'},
                                },
                            },
                        },
                    },
                    'interactions': {
                        properties: {
                            'title': {
                                label: 'Title',
                                type: 'string',
                                default: '',
                                validation: {
                                    'required': {message: 'required'},
                                },
                            },
                            'channel': {
                                label: 'Channel',
                                type: 'string',
                                default: '',
                                field: {
                                    type: 'select',
                                    options: {
                                        'sms': 'SMS',
                                        'email': 'Email',
                                        'in_person': 'In-Person',
                                        'inbox': 'Inbox',
                                    },
                                },
                                validation: {
                                    'required': {message: 'Inbox is required.'},
                                },
                            },
                        },
                    },
                },
            },
            // 'individuals': {
            //     label: 'Individuals',
            //     entrypoint: {
            //         url: `${scheme}://${host}:8013/`,
            //     },
            //     entities: {
            //         'individuals': {
            //             properties: {
            //                 'username': {
            //                     label: 'Username',
            //                     type: 'string',
            //                     default: '',
            //                     validation: {
            //                         'required': {message: 'username is required.'},
            //                     },
            //                 },
            //             },
            //         },
            //     },
            // },
        };
    }
}
