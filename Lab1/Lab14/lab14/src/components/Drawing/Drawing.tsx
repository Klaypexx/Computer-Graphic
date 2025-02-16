import { useEffect, useRef } from "react";
import style from "./Drawing.module.css";

const Rope = (ctx: CanvasRenderingContext2D) => {
  ctx.beginPath();
  ctx.rect(15, 20, 5, 120);
  ctx.moveTo(15, 20);
  ctx.rect(15, 20, 50, 5);
  ctx.fillStyle = "#92d050";
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.rect(62, 23, 1.5, 25);
  ctx.fillStyle = "#5f497a";
  ctx.fill();
  ctx.closePath();
};

const Head = (ctx: CanvasRenderingContext2D) => {
  ctx.beginPath();
  ctx.ellipse(63, 50, 10, 10, 0, 0, Math.PI * 2);
  ctx.fillStyle = "#5f497a";
  ctx.fill();
  ctx.closePath();
};

const Body = (ctx: CanvasRenderingContext2D) => {
  ctx.beginPath();
  ctx.rect(62, 55, 2, 40);
  ctx.fillStyle = "#5f497a";
  ctx.fill();
  ctx.closePath();
};

const LeftLeg = (ctx: CanvasRenderingContext2D) => {
  ctx.beginPath();
  ctx.moveTo(63, 95);
  ctx.lineTo(50, 120);
  ctx.strokeStyle = "#5f497a";
  ctx.lineWidth = 1.5;
  ctx.stroke();
  ctx.closePath();
};

const RightLeg = (ctx: CanvasRenderingContext2D) => {
  ctx.beginPath();
  ctx.moveTo(63, 95);
  ctx.lineTo(75, 120);
  ctx.strokeStyle = "#5f497a";
  ctx.lineWidth = 1.5;
  ctx.stroke();
  ctx.closePath();
};

const LeftArm = (ctx: CanvasRenderingContext2D) => {
  ctx.beginPath();
  ctx.moveTo(63, 65);
  ctx.lineTo(50, 85);
  ctx.strokeStyle = "#5f497a";
  ctx.lineWidth = 1.5;
  ctx.stroke();
  ctx.closePath();
};

const RightArm = (ctx: CanvasRenderingContext2D) => {
  ctx.beginPath();
  ctx.moveTo(63, 65);
  ctx.lineTo(75, 85);
  ctx.strokeStyle = "#5f497a";
  ctx.lineWidth = 1.5;
  ctx.stroke();
  ctx.closePath();
};

const DrawParts = [Rope, Head, Body, LeftLeg, RightLeg, LeftArm, RightArm];

interface DrawProps {
  numberOfGuesses: number;
}

const Drawing: React.FC<DrawProps> = ({ numberOfGuesses }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  useEffect(() => {
    const canvas = canvasRef.current;

    const context = canvas!.getContext("2d");
    if (context != null) {
      {
        if (numberOfGuesses == 0) {
          context.reset();
        }
        DrawParts.slice(0, numberOfGuesses).forEach((drawPart) => {
          drawPart(context);
        });
      }
    }
  }, [numberOfGuesses]);
  return <canvas ref={canvasRef} className={style.canvas}></canvas>;
};

export default Drawing;
