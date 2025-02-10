import Point from "./point";
import Shape from "./shape";

class Diagonal extends Shape {
  endPosition: Point;
  lineWidth: number;

  constructor(
    startPosition: Point,
    endPosition: Point,
    lineWidth: number,
    color: string
  ) {
    super(startPosition, color);
    this.endPosition = endPosition;
    this.lineWidth = lineWidth;
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
