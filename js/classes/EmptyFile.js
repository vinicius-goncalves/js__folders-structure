import { createIcon } from '../utils/methods.js'

const _emptyFileWkMap = new WeakMap()

function createFile() {

    const fileWrapper = document.createElement('div')
    fileWrapper.dataset.file = 'container'

    const fileDetails = document.createElement('div')
    fileDetails.dataset.file = 'details'

    const fileIcon = createIcon('description')

    fileDetails.appendChild(fileIcon)
    fileWrapper.appendChild(fileDetails)

    Object.defineProperty(fileWrapper, 'details', { value: fileDetails })

    return fileWrapper
}

const EmptyFile = (function EmptyFile() {
    const newFile = createFile()
    _emptyFileWkMap.set(this, { createdAt: Date.now(), newFile })
})

Object.defineProperties(EmptyFile.prototype, {
    getAsObject: {
        enumerable: true,
        value: function() {
            return _emptyFileWkMap.get(this)
        }
    },
    getAsElement: {
        enumerable: true,
        value: function() {
            return _emptyFileWkMap.get(this).newFile
        }
    }
})

export default EmptyFile