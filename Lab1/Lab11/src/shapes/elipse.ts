import Point from "./point";
import Shape from "./shape";

class Ellipse extends Shape {
  radiusX: number;
  radiusY: number;
  lineWidth: number;

  constructor(
    position: Point,
    radiusX: number,
    radiusY: number,
    lineWidth: number,
    color: string
  ) {
    super(position, color);
    this.radiusX = radiusX;
    this.radiusY = radiusY;
    this.lineWidth = lineWidth;
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
