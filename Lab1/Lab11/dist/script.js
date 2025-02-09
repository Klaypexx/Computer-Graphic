"use strict";
const canvas = document.getElementById("canvas");
canvas.width = 800;
canvas.height = window.innerHeight;
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
class Shape {
    constructor(position, color) {
        this.position = position;
        this.color = color;
    }
    draw(ctx, bounceHeight) { }
}
class Rectangle extends Shape {
    constructor(position, width, height, color) {
        super(position, color);
        this.width = width;
        this.height = height;
    }
    draw(ctx, bounceHeight) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.position.x, this.position.y - bounceHeight, this.width, this.height);
    }
}
class Diagonal extends Shape {
    constructor(startPosition, endPosition, lineWidth, color) {
        super(startPosition, color);
        this.endPosition = endPosition;
        this.lineWidth = lineWidth;
    }
    draw(ctx, bounceHeight) {
        ctx.strokeStyle = this.color;
        ctx.lineWidth = this.lineWidth;
        ctx.beginPath();
        ctx.moveTo(this.position.x, this.position.y - bounceHeight);
        ctx.lineTo(this.endPosition.x, this.endPosition.y - bounceHeight);
        ctx.stroke();
    }
}
class Ellipse extends Shape {
    constructor(position, radiusX, radiusY, lineWidth, color) {
        super(position, color);
        this.radiusX = radiusX;
        this.radiusY = radiusY;
        this.lineWidth = lineWidth;
    }
    draw(ctx, bounceHeight) {
        ctx.strokeStyle = this.color;
        ctx.beginPath();
        ctx.ellipse(this.position.x, this.position.y - bounceHeight, this.radiusX, this.radiusY, 0, // rotation
        0, Math.PI * 2);
        ctx.lineWidth = this.lineWidth;
        ctx.stroke();
    }
}
class LetterGroup {
    constructor(shapes, bounceHeight, bounceSpeed) {
        this.shapes = shapes;
        this.angle = Math.random() * Math.PI * 2; // Разные начальные углы
        this.bounceHeight = bounceHeight;
        this.bounceSpeed = bounceSpeed;
    }
    animate(ctx) {
        this.angle += this.bounceSpeed;
        const currentBounceHeight = Math.abs(Math.sin(this.angle) * this.bounceHeight);
        this.shapes.forEach((shape) => {
            shape.draw(ctx, currentBounceHeight);
        });
    }
}
const letterGroups = [
    // Группа для буквы М
    new LetterGroup([
        new Rectangle(new Point(100, 200), 40, 200, "#31859b"),
        new Rectangle(new Point(220, 200), 40, 200, "#31859b"),
        new Diagonal(new Point(120, 220), new Point(180, 395), 40, "#31859b"),
        new Diagonal(new Point(240, 220), new Point(180, 395), 40, "#31859b"),
    ], 25, 0.05),
    // Группа для буквы Д
    new LetterGroup([
        new Rectangle(new Point(300, 360), 160, 40, "#76923c"),
        new Rectangle(new Point(320, 200), 40, 160, "#76923c"),
        new Rectangle(new Point(400, 200), 40, 160, "#76923c"),
        new Rectangle(new Point(340, 200), 100, 40, "#76923c"),
    ], 100, 0.01),
    // Группа для буквы О
    new LetterGroup([new Ellipse(new Point(580, 300), 60, 80, 40, "#953734")], 5, 0.05),
];
function animate() {
    const ctx = canvas.getContext("2d");
    if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        letterGroups.forEach((group) => {
            group.animate(ctx);
        });
        requestAnimationFrame(animate);
    }
}
animate();
