import EmptyFolder from './EmptyFolder.js'

import { createIcon } from '../utils/methods.js'
import { changeFolderVisibilityEvent, toggleFolderVisibility } from '../utils/folder-manipulation.js'

const _folderWkMap = new WeakMap()

function createFolderName(name) {
    const folderName = document.createElement('span')
    folderName.dataset.folder = 'name'
    folderName.textContent = name
    return folderName
}

function createFolder(name, hasSubContents = false, mainRootFile) {

    const emptyFolder = new EmptyFolder().getAsElement()
    emptyFolder.details.appendChild(createFolderName(name))

    emptyFolder.addEventListener('click', changeFolderVisibilityEvent)

    if(mainRootFile) {
        emptyFolder.style.setProperty('margin-left', 'var(--folder-structure-margin)')
    }

    if(!hasSubContents) {
        return { newFolder: emptyFolder }
    }

    const expandMore = createIcon('chevron_right')
    expandMore.classList.add('sub-contents-icon')
    emptyFolder.icons.prepend(expandMore)

    const subContentsContainer = document.createElement('div')
    subContentsContainer.dataset.folder = 'sub-folder-container'
    emptyFolder.appendChild(subContentsContainer)

    toggleFolderVisibility(subContentsContainer)

    return { newFolder: emptyFolder, subFoldersWrapper: subContentsContainer }
}

const Folder = (function(name, hasSubContents = false, mainRootFile) {
    const folder = createFolder(name, hasSubContents, mainRootFile)
    _folderWkMap.set(this, { newFolder: folder })
})

Object.defineProperties(Folder.prototype, {
    getAsObject: {
        enumerable: true,
        value: function() {
            return _folderWkMap.get(this)
        }
    },
    getAsElement: {
        enumerable: true,
        value: function() {
            return _folderWkMap.get(this).newFolder
        }
    }
})

export default Folder