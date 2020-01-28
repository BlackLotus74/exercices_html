window.addEventListener('DOMContentLoaded', () => {

    const container = document.querySelector('.container')
    const card = document.querySelector('.card')
    const output = document.querySelector('.output')
    let x = document.querySelector('.x-axis')
    let y = document.querySelector('.y-axis')

    container.addEventListener('mousemove', (e) => {
        let xOffset = e.offsetX
        let yOffset = e.offsetY
        let cardHeight = card.clientHeight
        let cardWidth = card.clientWidth
        let heightCenter = Math.round(cardHeight / 2)
        let widthCenter = Math.round(cardWidth / 2)
        let rotateBaseValue = 20
        let rotateXValue = (yOffset - heightCenter) / heightCenter * rotateBaseValue
        let rotateYValue = (widthCenter - xOffset) / widthCenter * rotateBaseValue

        card.style.transform = `scale(1.1) rotateX(${rotateXValue}deg) rotateY(${rotateYValue}deg)`
    })

    container.addEventListener('mouseout', (e) => {
        card.style.transform = ''
    })
});