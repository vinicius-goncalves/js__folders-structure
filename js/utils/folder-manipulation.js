function toggleFolderVisibility(folder) {

    const newVisibility = folder.style.display !== 'none'
        ? 'none'
        : 'block'

    folder.style.setProperty('display', newVisibility)

    return newVisibility
}

function changeFolderVisibilityEvent(event) {

    event.stopPropagation()

    const targetClicked = event.target
    const isFile = targetClicked.closest('[data-file]') !== null

    if(isFile) {
        return
    }

    const closestFolder = targetClicked.closest('[data-folder="container"]')

    const subContentsIcon = closestFolder.querySelector('.sub-contents-icon')
    const subFolders = closestFolder.querySelector('[data-folder="sub-folder-container"]')

    if(!subFolders) {
        return
    }

    const newExpandIcon = toggleFolderVisibility(subFolders) !== 'none'
        ? 'expand_more'
        : 'chevron_right'

    subContentsIcon.setText(newExpandIcon)
}

export { changeFolderVisibilityEvent, toggleFolderVisibility }