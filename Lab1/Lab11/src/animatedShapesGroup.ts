import Shape from "./shapes/shape";

class AnimatedShapesGroup {
  shapes: Shape[];
  angle: number;
  bounceHeight: number;
  bounceSpeed: number;

  constructor(config: {
    shapes: Shape[];
    bounceHeight: number;
    bounceSpeed: number;
  }) {
    this.angle = 0;
    this.shapes = config.shapes;
    this.bounceHeight = config.bounceHeight;
    this.bounceSpeed = config.bounceSpeed;
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
