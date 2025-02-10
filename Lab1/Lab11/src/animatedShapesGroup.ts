import Shape from "./shapes/shape";

class AnimatedShapesGroup {
  shapes: Shape[];
  angle: number;
  bounceHeight: number;
  bounceSpeed: number;

  constructor(shapes: Shape[], bounceHeight: number, bounceSpeed: number) {
    this.shapes = shapes;
    this.angle = Math.random() * Math.PI * 2; // Разные начальные углы
    this.bounceHeight = bounceHeight;
    this.bounceSpeed = bounceSpeed;
  }

  animate(ctx: CanvasRenderingContext2D) {
    this.angle += this.bounceSpeed;
    const currentBounceHeight = Math.abs(
      Math.sin(this.angle) * this.bounceHeight
    );

    this.shapes.forEach((shape) => {
      shape.draw(ctx, currentBounceHeight);
    });
  }
}

export default AnimatedShapesGroup;
