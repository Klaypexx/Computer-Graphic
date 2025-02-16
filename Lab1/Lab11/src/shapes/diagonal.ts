import Shape, { ShapeConfig } from "./shape";

class Diagonal extends Shape {
  endPosition: { x: number; y: number };
  lineWidth: number;

  constructor(config: ShapeConfig) {
    super(config);
    this.endPosition = config.endPosition;
    this.lineWidth = config.lineWidth;
  }

  draw(ctx: CanvasRenderingContext2D, bounceHeight: number) {
    ctx.strokeStyle = this.color;
    ctx.lineWidth = this.lineWidth;
    ctx.beginPath();
    ctx.moveTo(this.position.x, this.position.y - bounceHeight);
    ctx.lineTo(this.endPosition.x, this.endPosition.y - bounceHeight);
    ctx.stroke();
  }
}

export default Diagonal;
