import Point from "./point";

class Shape {
  position: Point;
  color: string;

  constructor(position: Point, color: string) {
    this.position = position;
    this.color = color;
  }

  draw(ctx: CanvasRenderingContext2D, bounceHeight: number) {}
}

export default Shape;
