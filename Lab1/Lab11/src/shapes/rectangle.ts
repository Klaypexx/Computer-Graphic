import Shape, { ShapeConfig } from "./shape";

class Rectangle extends Shape {
  width: number;
  height: number;

  constructor(config: ShapeConfig) {
    super(config);
    this.width = config.width;
    this.height = config.height;
  }

  draw(ctx: CanvasRenderingContext2D, bounceHeight: number) {
    ctx.fillStyle = this.color;
    ctx.fillRect(
      this.position.x,
      this.position.y - bounceHeight,
      this.width,
      this.height
    );
  }
}

export default Rectangle;
