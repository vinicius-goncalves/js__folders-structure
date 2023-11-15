import EmptyFile from './EmptyFile.js'

const _fileWkMap = new WeakMap()

function createFileName(name) {
    const fileName = document.createElement('span')
    fileName.dataset.file = 'name'
    fileName.textContent = name
    return fileName
}

function createFile(name, mainRootFile) {

    const emptyFile = new EmptyFile().getAsElement()
    emptyFile.details.appendChild(createFileName(name))

    if(mainRootFile) {
        emptyFile.style.setProperty('margin-left', 'var(--folder-structure-margin)')
    }

    return emptyFile
}

const File = (function File(name, mainRootFile) {
    const newFile = createFile(name, mainRootFile)
    _fileWkMap.set(this, { createdAt: Date.now(), newFile })
})

Object.defineProperties(File.prototype, {
    getAsObject: {
        enumerable: true,
        value: function() {
            return _fileWkMap.get(this)
        }
    },
    getAsElement: {
        enumerable: true,
        value: function() {
            return _fileWkMap.get(this).newFile
        }
    }
})

export default File