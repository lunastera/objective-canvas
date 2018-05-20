class CanvasObject {
  constructor(id, x, y, width, height) {
    this.id = id;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
  update(canvas) {}
  render(context) {}
  isDead() {}
}
