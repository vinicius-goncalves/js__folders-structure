function createIcon(name) {
    const span = document.createElement('span')
    span.classList.add('material-icons-outlined')
    span.textContent = name
    return span
}

export {
    createIcon
}