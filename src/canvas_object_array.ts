import { CanvasObject } from './canvas_object'

export class CanvasObjectArray {
  objects: Array<CanvasObject>
  constructor() {
    this.objects = []
  }

  push(object) {
    this.objects.push(object)
  }

  // 破壊的な変更
  filter(func) {
    this.objects = this.objects.filter(func)
  }

  // searchで特定されたオブジェクトを指定する
  remove(object) {
    this.filter(obj => obj === object)
  }

  // 破壊的でない
  search(func) {
    this.objects.filter(func)
  }

  render(canvas, context) {
    this.objects.forEach((obj: CanvasObject) => {
      obj.update(canvas)
      obj.render(context)
    })
    this.filter(v => !v.isDead())
  }
}
