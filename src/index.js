import { CanvasObjectArray } from './canvas_object_array'
import { CanvasObject, Circle } from './canvas_object'
class ObjectiveCanvas {
  constructor(canvas) {
    this.canvas = /** @type {HTMLCanvasElement} */ (canvas)
    this.width = this.canvas.width
    this.height = this.canvas.height
    this.context = /** @type {CanvasRenderringContext2D} */ canvas.getContext(
      '2d'
    )
    this.objects = new CanvasObjectArray()
    this.overlayObjects = new CanvasObjectArray()
    this.layeredObject = null
  }

  // Canvasに描画したいオブジェクトを追加
  add(object) {
    this.objects.push(object)
  }

  addOverlay(object) {
    this.overlayObjects.push(object)
  }

  // Canvasからオブジェクトを削除
  remove(object) {
    this.objects.remove(object)
  }

  removeOverlay(object) {
    this.overlayObjects.remove(object)
  }

  render() {
    this.objects.render(this.canvas, this.context)
    this.overlayObjects.render(this.canvas, this.context)
    if (this.layeredObject !== null) {
      this.layeredObject.render(this.context)
    }
  }

  // 最も近い座標のオブジェクトを取得。
  // return: Array[CanvasObject]
  nearestObjects(x, y) {
    return this.objects.searchNearest(x, y)
  }

  // Canvasのオブジェクトをすべて削除
  clearAll() {
    this.objects = new CanvasObjectArray()
    this.overlayObjects = new CanvasObjectArray()
    this.layeredObject = null
  }

  clearRect(x, y, width, height) {
    this.context.clearRect(x, y, width, height)
  }
}

export { ObjectiveCanvas, CanvasObjectArray, CanvasObject, Circle }
