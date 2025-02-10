import Point from "./point";
import Shape from "./shape";

class Rectangle extends Shape {
  width: number;
  height: number;

  constructor(position: Point, width: number, height: number, color: string) {
    super(position, color);
    this.width = width;
    this.height = height;
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
