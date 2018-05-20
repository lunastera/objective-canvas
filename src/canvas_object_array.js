class CanvasObjectArray {
  constructor() {
    this.objects = [];
  }

  push(object) {
    this.objects.push(object);
  }

  // 破壊的な変更
  filter(func) {
    this.objects = this.objects.filter(func);
  }

  // searchで特定されたオブジェクトを指定する
  remove(object) {
    this.filter(obj => obj === object);
  }

  // 破壊的でない
  search(func) {
    this.objects.filter(func);
  }

  searchNearest(x, y) {
    var nearestPoint = null;
    const nearObjects = [];
    this.objects.forEach(obj => {
      const sPointX = obj.x - (obj.width / 2);
      const sPointY = obj.y - (obj.height / 2);
      const ePointX = obj.x + (obj.width / 2);
      const ePointY = obj.y + (obj.height / 2);
      // そのオブジェクトの範囲内に入っているなら
      if (x >= sPointX && x <= ePointX && y >= sPointY && y <= ePointY) {
        // xとobj.xの距離を割り出して最も近いものを返す。
        const point = Math.abs(x - obj.x) + Math.abs(y - obj.y)
        if (nearestPoint === null || nearestPoint >= point) {
          nearestPoint = point;
          nearestObjects.push([point, obj])
        }
      }
    });
    return nearestObjects.filter(row => nearestPoint === row[0]);
  }

  render() {
    this.objects.forEach(obj => {
      obj.update();
      obj.render();
    });
    this.filter(e => e.isDead());
  }
}

export { CanvasObjectArray }
