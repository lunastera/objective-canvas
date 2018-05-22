class CanvasObject {
  constructor(x, y, width, height) {
    // this.id = id;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  update(canvas) {}
  render(context) {}
  isDead() {
    return false;
  }
}

// Circleベース
class Circle extends CanvasObject {
  constructor(x, y, radius) {
    super(x, y, radius * 2, radius * 2);
    this.r = radius;
  }
}

class Rect  {
  constructor(x, y, size) {
    
  }
}

export { CanvasObject, Circle };
