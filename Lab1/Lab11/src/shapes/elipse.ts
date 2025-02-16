import Shape, { ShapeConfig } from "./shape";

class Ellipse extends Shape {
  radiusX: number;
  radiusY: number;
  lineWidth: number;

  constructor(config: ShapeConfig) {
    super(config);
    this.radiusX = config.radiusX;
    this.radiusY = config.radiusY;
    this.lineWidth = config.lineWidth;
  }

  draw(ctx: CanvasRenderingContext2D, bounceHeight: number) {
    ctx.strokeStyle = this.color;
    ctx.beginPath();
    ctx.ellipse(
      this.position.x,
      this.position.y - bounceHeight,
      this.radiusX,
      this.radiusY,
      0, // rotation
      0,
      Math.PI * 2
    );
    ctx.lineWidth = this.lineWidth;
    ctx.stroke();
  }
}

export default Ellipse;
