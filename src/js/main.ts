import Rectangle from "./Rectangle";

const canvas: HTMLCanvasElement = document.querySelector('.canvas') as HTMLCanvasElement
const ctx: CanvasRenderingContext2D = canvas.getContext('2d')

const rectangles: Rectangle[] = []

function updateCanvasSize() {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
}

window.addEventListener('resize', (e) => {
    updateCanvasSize()
})

updateCanvasSize()

canvas.addEventListener('click', (e) => {
    rectangles.push(new Rectangle(ctx, canvas))
})


function animate(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    for (const rectangle of rectangles) {
        rectangle.update()
    }
    window.requestAnimationFrame(animate)
}
animate()
