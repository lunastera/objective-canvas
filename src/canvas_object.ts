abstract class CanvasObject {
  id: string
  x: number
  y: number

  constructor(id: string, x: number, y:number) {
    this.id = id
    this.x = x
    this.y = y
  }

  abstract update(canvas: HTMLCanvasElement): void
  abstract render(context: CanvasRenderingContext2D): void
  contains(x: number, y: number): boolean {
    return false
  }
  isDead(): boolean {
    return false
  }
}

class Circle extends CanvasObject {
  id: string
  x: number
  y: number
  radius: number

  constructor(x: number, y: number, radius: number) {
    super(undefined, x, y)
    this.radius = radius
  }

  update(canvas: HTMLCanvasElement): void {}
  render(context: CanvasRenderingContext2D): void {
    context.beginPath()
    context.arc(this.x, this.y, this.radius, 0, 360)
    context.stroke()
  }

  contains(x: number, y: number): boolean {
    return Math.abs(this.x - x) + Math.abs(this.y - y) <= this.radius
  }
}

export {
  CanvasObject,
  Circle
}
