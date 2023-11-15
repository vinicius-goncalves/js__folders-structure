import Types from '../js/utils/Types.js'

const structure = [
    {
        type: Types.Folder,
        name: 'utils',
        content: [
            {
                type: Types.Folder,
                name: 'database',
                content: [
                    {
                        type: Types.File,
                        name: 'mongodb'
                    },
                    {
                        type: Types.File,
                        name: 'sql'
                    },
                    {
                        type: Types.File,
                        name: 'firestore'
                    }
                ]
            },
            {
                type: Types.Folder,
                name: 'images',
                content: [
                    {
                        type: Types.File,
                        name: 'nature.jpg'
                    },
                    {
                        type: Types.File,
                        name: 'cars.jpg'
                    },
                    {
                        type: Types.File,
                        name: 'flowers.jpg'
                    },
                    {
                        type: Types.Folder,
                        name: 'an amazing empty folder'
                    }
                ]
            }
        ]
    },
    {
        type: Types.File,
        name: 'book.pdf'
    },
    {
        type: Types.File,
        name: 'windows-xp-wallpaper.jpg'
    },
    {
        type: Types.Folder,
        name: 'nested-folder',
        content: [
            {
                type: Types.Folder,
                name: 'other-folder-here',
                content: [
                    {
                        type: Types.Folder,
                        name: 'promise-this-is-the-last-one',
                        content: [
                            {
                                type: Types.Folder,
                                name: 'do-not-trust-me',
                                content: [
                                    {
                                        type: Types.Folder,
                                        name: 'if-you-open-me-youll-have-to-learn-python >:)',
                                        content: [
                                            {
                                                type: Types.File,
                                                name: 'now-youll-need-to-learn-python-in-24-hours.txt'
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        type: Types.Folder,
                        name: 'just-testing-a-folder-inside-other-inside-other'
                    },
                    {
                        type: Types.File,
                        name: 'a-random-file.html'
                    }
                ]
            }
        ]
    },
    {
        type: Types.Folder,
        name: 'projects',
        content: [
            {
                type: Types.Folder,
                name: 'backend',
                content: [
                    {
                        type: Types.Folder,
                        name: 'with-java',
                        content: [
                            {
                                type: Types.File,
                                name: 'GetYourName.java'
                            },
                            {
                                type: Types.File,
                                name: 'IPrint.java'
                            }
                        ]
                    },
                ]
            },
            {
                type: Types.Folder,
                name: 'frontend',
                content: [
                    {
                        type: Types.Folder,
                        name: 'with-js',
                        content: [
                            {
                                type: Types.File,
                                name: 'am-I-hired-if-i-have-either-a-pokedex-or-todo-list-with-three-weeks.doubt'
                            },
                            {
                                type: Types.File,
                                name: 'todo-list.js'
                            },
                            {
                                type: Types.File,
                                name: 'pokedex.js'
                            }
                        ]
                    },
                    {
                        type: Types.Folder,
                        name: 'with-ts',
                        content: [
                            {
                                type: Types.File,
                                name: 'types-studies.ts'
                            },
                            {
                                type: Types.File,
                                name: 'generics-classes.ts'
                            },
                            {
                                type: Types.File,
                                name: 'interfaces-studies.ts'
                            }
                        ]
                    }
                ]
            }
        ]
    }
]

function defineEmptyContents(structure) {

    for(const file of structure) {

        if(file.type !== Types.Folder) {
            continue
        }

        if(file.content === undefined) {
            file.content = Types.Empty
            continue
        }

        if(Array.isArray(file.content)) {
            defineEmptyContents(file.content)
        }
    }

    return structure
}

export default defineEmptyContents(structure)