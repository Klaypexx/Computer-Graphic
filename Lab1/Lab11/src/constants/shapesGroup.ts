import {
  default as AnimatedShapesGroup,
  default as animatedShapesGroup,
} from "../animatedShapesGroup";
import Diagonal from "../shapes/diagonal";
import Ellipse from "../shapes/elipse";
import Point from "../shapes/point";
import Rectangle from "../shapes/rectangle";

export const shapesGroup: animatedShapesGroup[] = [
  // Группа для буквы М
  new AnimatedShapesGroup(
    [
      new Rectangle(new Point(100, 200), 40, 200, "#31859b"),
      new Rectangle(new Point(220, 200), 40, 200, "#31859b"),
      new Diagonal(new Point(120, 220), new Point(180, 395), 40, "#31859b"),
      new Diagonal(new Point(240, 220), new Point(180, 395), 40, "#31859b"),
    ],
    25,
    0.05
  ),

  // Группа для буквы Д
  new AnimatedShapesGroup(
    [
      new Rectangle(new Point(300, 360), 160, 40, "#76923c"),
      new Rectangle(new Point(320, 200), 40, 160, "#76923c"),
      new Rectangle(new Point(400, 200), 40, 160, "#76923c"),
      new Rectangle(new Point(340, 200), 100, 40, "#76923c"),
    ],
    100,
    0.01
  ),

  // Группа для буквы О
  new AnimatedShapesGroup(
    [new Ellipse(new Point(580, 300), 60, 80, 40, "#953734")],
    5,
    0.05
  ),
];
