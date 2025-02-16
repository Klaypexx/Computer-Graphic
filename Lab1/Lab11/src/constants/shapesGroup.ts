import AnimatedShapesGroup from "../animatedShapesGroup";
import Diagonal from "../shapes/diagonal";
import Ellipse from "../shapes/elipse";
import Rectangle from "../shapes/rectangle";

export const shapesGroup: AnimatedShapesGroup[] = [
  new AnimatedShapesGroup({
    shapes: [
      new Rectangle({
        position: { x: 100, y: 200 },
        width: 40,
        height: 200,
        color: "#31859b",
      }),
      new Rectangle({
        position: { x: 220, y: 200 },
        width: 40,
        height: 200,
        color: "#31859b",
      }),
      new Diagonal({
        position: { x: 120, y: 220 },
        endPosition: { x: 180, y: 395 },
        lineWidth: 40,
        color: "#31859b",
      }),
      new Diagonal({
        position: { x: 240, y: 220 },
        endPosition: { x: 180, y: 395 },
        lineWidth: 40,
        color: "#31859b",
      }),
    ],
    bounceHeight: 25,
    bounceSpeed: 0.05,
  }),
  new AnimatedShapesGroup({
    shapes: [
      new Rectangle({
        position: { x: 300, y: 360 },
        width: 160,
        height: 40,
        color: "#76923c",
      }),
      new Rectangle({
        position: { x: 320, y: 200 },
        width: 40,
        height: 160,
        color: "#76923c",
      }),
      new Rectangle({
        position: { x: 400, y: 200 },
        width: 40,
        height: 160,
        color: "#76923c",
      }),
      new Rectangle({
        position: { x: 340, y: 200 },
        width: 100,
        height: 40,
        color: "#76923c",
      }),
    ],
    bounceHeight: 100,
    bounceSpeed: 0.01,
  }),
  new AnimatedShapesGroup({
    shapes: [
      new Ellipse({
        position: { x: 580, y: 300 },
        radiusX: 60,
        radiusY: 80,
        lineWidth: 40,
        color: "#953734",
      }),
    ],
    bounceHeight: 5,
    bounceSpeed: 0.05,
  }),
];
