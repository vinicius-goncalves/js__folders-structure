import Types from '../js/utils/Types.js'

const structure = [
    {
        type: Types.Folder,
        name: 'empty-folder'
    },
    {
        type: Types.Folder,
        name: 'things',
        content: [
            {
                type: Types.Folder,
                name: 'database',
                content: [
                    {
                        type: Types.File,
                        name: 'mongoose'
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
                        name: 'an amazing folder'
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
        type: Types.Folder,
        name: 'folder1',
        content: [
            {
                type: Types.Folder,
                name: 'folder2',
                content: [
                    {
                        type: Types.Folder,
                        name: 'folder3'
                    },
                    {
                        type: Types.Folder,
                        name: 'folder4'
                    },
                    {
                        type: Types.File,
                        name: 'cool-file.txt'
                    }
                ]
            }
        ]
    },
    {
        type: Types.Folder,
        name: 'languages',
        content: [
            {
                type: Types.Folder,
                name: 'backend',
                content: [
                    {
                        type: Types.File,
                        name: 'java.java'
                    },
                    {
                        type: Types.Folder,
                        name: 'backend_frameworks',
                        content: [
                            {
                                type: Types.Folder,
                                name: 't'
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
                        type: Types.File,
                        name: 'javascript.js',
                    },
                    {
                        type: Types.File,
                        name: 'typescript.ts'
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

            for(const { content } of file.content) {

                if(Array.isArray(content)) {
                    defineEmptyContents(content)
                }
            }
        }
    }

    return structure
}

export default defineEmptyContents(structure)