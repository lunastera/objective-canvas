import { CanvasObjectArray } from "./canvas_object_array"
import { CanvasObject } from "./canvas_object"

export default class ObjectiveCanvas {
  canvas: HTMLCanvasElement
  context: CanvasRenderingContext2D
  objects: CanvasObjectArray
  overlayObjects: CanvasObjectArray
  layerdObject: CanvasObject

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas
    this.context = canvas.getContext('2d')
    this.objects = new CanvasObjectArray()
    this.overlayObjects = new CanvasObjectArray()
  }

  get width() {
    return this.canvas.width
  }

  get height() {
    return this.canvas.height
  }

  add(object: CanvasObject) {
    this.objects.push(object)
  }

  remove(object: CanvasObject) {
    this.objects.remove(object)
  }

  removeAll() {
    this.objects = new CanvasObjectArray()
    this.overlayObjects = new CanvasObjectArray()
  }

  render() {
    this.objects.render(this.canvas, this.context)
  }

  clearRect(x: number, y: number, width: number, height: number) {
    this.context.clearRect(x, y, width, height)
  }
}
