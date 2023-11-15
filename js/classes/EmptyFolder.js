import { createIcon } from '../utils/methods.js'

const emptyFolderWkMap = new WeakMap()

function createEmptyFolder() {

    const folderContainer = document.createElement('div')
    folderContainer.dataset.folder = 'container'

    const folderDetails = document.createElement('div')
    folderDetails.dataset.folder = 'details'

    const folderIcon = createIcon('folder')
    folderIcon.classList.add('folder-icon')

    const icons = document.createElement('aside')
    icons.dataset.id = 'icons'
    icons.appendChild(folderIcon)

    folderDetails.append(icons)
    folderContainer.prepend(folderDetails)

    Object.defineProperty(folderContainer, 'details', { value: folderDetails })
    Object.defineProperty(folderContainer, 'icons', { value: icons })

    return folderContainer
}

const EmptyFolder = (function EmptyFolder() {

    const createdAt = Date.now()
    const newFolder = createEmptyFolder()

    emptyFolderWkMap.set(this, { createdAt, newFolder })
})

Object.defineProperties(EmptyFolder.prototype, {
    getAsObject: {
        enumerable: true,
        value: function() {
            return emptyFolderWkMap.get(this)
        }
    },
    getAsElement: {
        enumerable: true,
        value: function() {
            return emptyFolderWkMap.get(this).newFolder
        }
    }
})

export default EmptyFolder