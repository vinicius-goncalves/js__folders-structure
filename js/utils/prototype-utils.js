const a = Element.prototype.hasOwnProperty('getText')
const b = Element.prototype.hasOwnProperty('setText')

if(!a || b) {

    Object.defineProperties(Element.prototype, {
        'getText': {
            value: function getText() {
                return this.textContent
            }
        },
        'setText': {
            value: function setText(newText) {
                this.textContent = newText
                return this.getText()
            }
        }
    })

}