import { shapesGroup } from "./constants/shapesGroup";

const canvas = document.getElementById("canvas") as HTMLCanvasElement;

canvas.width = 800;
canvas.height = window.innerHeight;

function animate() {
  const ctx = canvas.getContext("2d");
  if (ctx) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    shapesGroup.forEach((group) => {
      group.animate(ctx);
    });

    requestAnimationFrame(animate);
  }
}

animate();
