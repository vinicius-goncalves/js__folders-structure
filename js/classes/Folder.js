import EmptyFolder from './EmptyFolder.js'

import { createIcon } from '../utils/methods.js'
import { changeFolderVisibilityEvent, toggleFolderVisibility } from '../folder-manipulation.js'

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

// function createEmptyFolder(name, hasSubContents = false) {

//     const folderContainer = document.createElement('div')
//     folderContainer.dataset.folder = 'container'

//     const folderDetails = document.createElement('div')
//     folderDetails.dataset.folder = 'details'

//     const folderIcon = createIcon('folder')
//     folderIcon.classList.add('folder-icon')

//     const folderName = document.createElement('span')
//     folderName.classList.add('folder-name')
//     folderName.textContent = name

//     const icons = document.createElement('aside')
//     icons.dataset.id = 'icons'
//     icons.appendChild(folderIcon)

//     if(hasSubContents) {
//         const emptySubFolder = (new EmptyFolder()).getAsElement()
//         emptySubFolder.dataset.folder = 'sub-contents-container'
//         folderContainer.appendChild(emptySubFolder)
//         folderDetails.append(folderIcon, folderName)
//         folderContainer.insertAdjacentElement('afterbegin', folderDetails)
//         return { newFolder: folderContainer, subFoldersWrapper: emptySubFolder }
//     }

//     folderDetails.append(folderIcon, folderName)
//     folderContainer.insertAdjacentElement('afterbegin', folderDetails)

//     return { newFolder: folderContainer }
// }

// const EmptyFolder = (function EmptyFolder(name = '', hasSubContents = false) {

//     const createdAt = Date.now()
//     const { newFolder } = createEmptyFolder(name, hasSubContents)

//     _folderWkMapWkMap.set(this, { name, createdAt, newFolder })
// })

// Object.defineProperties(EmptyFolder.prototype, {
//     getName: {
//         enumerable: true,
//         value: function() {
//             return _folderWkMapWkMap.get(this).name
//         }
//     },
//     getAsObject: {
//         enumerable: true,
//         value: function() {
//             return _folderWkMapWkMap.get(this)
//         }
//     },
//     getAsElement: {
//         enumerable: true,
//         value: function() {
//             return _folderWkMapWkMap.get(this).newFolder
//         }
//     }
// })

// export default EmptyFolder