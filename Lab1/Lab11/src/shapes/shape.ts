export interface ShapeConfig {
  position: { x: number; y: number };
  color: string;
  [key: string]: any; // Позволяет добавлять специфические свойства фигур
}

class Shape {
  position: { x: number; y: number };
  color: string;

  constructor(config: ShapeConfig) {
    this.position = config.position;
    this.color = config.color;
  }

  draw(ctx: CanvasRenderingContext2D, bounceHeight: number) {}
}

export default Shape;
