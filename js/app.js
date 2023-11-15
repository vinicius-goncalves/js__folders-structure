await import('./utils/prototype-utils.js')

import Types from '../js/utils/Types.js'
import _Folder from './classes/Folder.js'
import _File from './classes/File.js'

import structure from '../assets/structure.js'

const mainRoot = document.querySelector('.root')

function loadContent(file, root) {

    if(file.type === Types.Folder) {

        const fileName = file.name
        const fileHasContents = file.content === Types.Empty
        const fileIsMainRoot = root === mainRoot && fileHasContents

        const { newFolder, subFoldersWrapper } = new _Folder(fileName, !fileHasContents, fileIsMainRoot).getAsElement()

        const subFiles = Array.isArray(file.content)
            ? file.content
            : [file.content]

        for(const subContent of subFiles) {

            if(!subContent) {
                continue
            }

            if(subContent.type === Types.File) {
                const newFile = new _File(subContent.name).getAsElement()
                subFoldersWrapper.appendChild(newFile)
            }

            loadContent(subContent, subFoldersWrapper)
        }

        root.appendChild(newFolder)
    }

    if(file.type === Types.File && root === mainRoot) {
        const newFile = new _File(file.name, true).getAsElement()
        mainRoot.appendChild(newFile)
    }
}

structure.forEach(file => {
    loadContent(file, mainRoot)
})