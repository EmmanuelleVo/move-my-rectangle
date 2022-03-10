import {settings} from "./settings";

export default class Rectangle {
    private x: number
    private y: number
    private width: number
    private height: number
    private color: string
    private ctx:CanvasRenderingContext2D
    private canvas: HTMLCanvasElement
    private speedX: number = 5
    private speedY: number = 5
    private maxSpeed: number = 10
    private speed: number = 0
    private mouse = {x : 0, y : 0}
    private direction: number = Math.PI/4
    private dx: number
    private dy: number
    private dMouse: number
    private fractionOfSpeed: number = 10


    constructor(ctx:CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
        this.ctx = ctx
        this.canvas = canvas
        this.width = Math.ceil(Math.random() * (settings.maxWidth - settings.minWidth) + settings.minWidth)
        this.height = Math.trunc(this.width * settings.heightRatio)
        this.x = Math.ceil(Math.random() * (this.canvas.width - this.width) + this.width / 2)
        this.y = Math.ceil(Math.random() * (this.canvas.height - this.height) + this.height / 2)
        this.color = `hsl(${settings.colors[Math.floor(Math.random()* settings.colors.length)]}, ${Math.ceil(Math.random()*100)}%, ${Math.ceil(Math.random()*100)}%)`
        this.fractionOfSpeed = Math.random() * settings.maxSpeed + settings.minSpeed;
        this.maxSpeed = Math.random() * settings.maxSpeed + settings.minSpeed;
    }

    draw() {
        this.ctx.save()
        this.ctx.translate(this.x, this.y)
        this.ctx.rotate(this.direction)
        this.ctx.fillStyle = this.color
        this.ctx.fillRect(-this.width / 2,-this.height / 2, this.width, this.height)
        this.ctx.restore()
    }

    detectCollision() {
        if((this.x + this.width / 2) >= this.canvas.width || (this.x - this.width / 2) < 0) {
            this.speedX = -this.speedX
        }
        if((this.y + this.height / 2) >= this.canvas.height || (this.y - this.height / 2) < 0) {
            this.speedY = -this.speedY
        }

        //this.x += this.speedX
        //this.y += this.speedY
    }

    moveToMouse() {
        //distance between mouse and rectangle
        this.dy = this.mouse.y - this.y
        this.dx = this.mouse.x - this.x
        //angle between rectangle and mouse
        this.direction = Math.atan2(this.dy,this.dx)
        // distance of rectangle to mouse (absolute value)
        this.dMouse = Math.abs(Math.sqrt(this.dx * this.dx + this.dy * this.dy))
        // speed = a fraction of that distance
        this.speed = this.dMouse / this.fractionOfSpeed
        // speed cannot be > then maxSpeed
        if(this.speed > this.maxSpeed) {
            this.speed = this.maxSpeed
        }
        // recalculate x and y
        this.x += Math.cos(this.direction) * this.speed
        this.y += Math.sin(this.direction) * this.speed

        this.canvas.addEventListener('mousemove', (e) => {
            this.mouse.x = e.clientX
            this.mouse.y = e.clientY
        })
    }

    update() {

        this.detectCollision()
        this.moveToMouse()
        this.draw()
    }


}