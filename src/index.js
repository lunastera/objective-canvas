import { CanvasObjectArray } from "./canvas_object_array";
class ObjectiveCanvas {
  constructor(canvas) {
    this.canvas = /** @type {HTMLCanvasElement} */ (canvas);
    this.context = /** @type {CanvasRenderringContext2D} */ canvas.getContext('2d');
    this.objects = new CanvasObjectArray();
    this.overlayObjects = new CanvasObjectArray();
  }

  // Canvasに描画したいオブジェクトを追加
  add(object) {
    this.objects.push(object);
  }

  // Canvasからオブジェクトを削除
  remove(object) {
    this.objects.remove(object);
  }

  render() {
    this.objects.render();
    this.overlayObjects.render();
  }

  // 座標が一致するオブジェクトを取得。
  // return: Array[CanvasObject]
  attachObject(x, y) {
    return this.objects.search( e =>
      e.x === x && e.y === y
    );
  }

  // 最も近い座標のオブジェクトを取得。
  // return: Array[CanvasObject]
  nearestObject(x, y) {
    return this.objects.searchNearest(x, y);
  }

  // Canvasの描画をクリア
  clearAll() {
    this.context.clearRect(0, 0, canvas.width, canvas.height);
  }

  clearRect(x, y, w, h) {
    this.context.clearRect(x, y, w, h);
  }
}
