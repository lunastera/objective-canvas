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
  }

  // 座標が一致するオブジェクトを取得。
  // return: Array[CanvasObject]
  attachObjects(x, y) {
    return this.objects.search(e => e.x === x && e.y === y)
  }

  // 最も近い座標のオブジェクトを取得。
  // return: Array[CanvasObject]
  nearestObjects(x, y) {
    return this.objects.searchNearest(x, y)
  }

  // Canvasの描画をクリア
  clearAll() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
  }

  clearRect(x, y, width, height) {
    this.context.clearRect(x, y, width, height)
  }
}

export { ObjectiveCanvas, CanvasObjectArray, CanvasObject, Circle }
