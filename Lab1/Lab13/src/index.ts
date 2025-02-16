interface Point {
  x: number;
  y: number;
}

function animateCircle(
  center: Point,
  radius: number,
  borderColor: string,
  fillColor: string
) {
  const canvas = document.getElementById("canvas") as HTMLCanvasElement;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  let currentAngle = 0;
  const totalSteps = 1000; // Количество шагов для полного круга
  const angleIncrement = (2 * Math.PI) / totalSteps;

  const drawFrame = () => {
    // Очистка холста
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Рисуем точки окружности
    ctx.fillStyle = borderColor;
    for (let i = 0; i <= currentAngle; i++) {
      const angle = i * angleIncrement;
      const x = center.x + Math.round(radius * Math.cos(angle));
      const y = center.y + Math.round(radius * Math.sin(angle));
      if (x >= 0 && x < canvas.width && y >= 0 && y < canvas.height) {
        ctx.fillRect(x, y, 1, 1);
      }
    }

    if (currentAngle < totalSteps) {
      currentAngle++;
      requestAnimationFrame(drawFrame);
    } else {
      // Закрашиваем внутреннюю область после завершения рисования
      fillCircle(center, radius, fillColor);
    }
  };

  const fillCircle = (center: Point, radius: number, fillColor: string) => {
    const fillRadius = radius - 0.5; // Уменьшение радиуса заливки на 2 пикселя
    ctx.fillStyle = fillColor;
    for (let y = -fillRadius; y <= fillRadius; y++) {
      const xSpan = Math.floor(Math.sqrt(fillRadius * fillRadius - y * y)); // вычисляется диапазон
      console.log(xSpan);
      const startX = center.x - xSpan;
      const endX = center.x + xSpan;
      for (let x = startX; x <= endX; x++) {
        const px = x;
        const py = center.y + y;
        if (px >= 0 && px < canvas.width && py >= 0 && py < canvas.height) {
          ctx.fillRect(px, py, 1, 1);
        }
      }
    }
  };

  requestAnimationFrame(drawFrame);
}

document.getElementById("circleForm")?.addEventListener("submit", (event) => {
  event.preventDefault();

  const centerX = parseInt(
    (document.getElementById("centerX") as HTMLInputElement).value,
    10
  );
  const centerY = parseInt(
    (document.getElementById("centerY") as HTMLInputElement).value,
    10
  );
  const radius = parseInt(
    (document.getElementById("radius") as HTMLInputElement).value,
    10
  );
  const borderColor = (
    document.getElementById("borderColor") as HTMLInputElement
  ).value;
  const fillColor = (document.getElementById("fillColor") as HTMLInputElement)
    .value;

  animateCircle({ x: centerX, y: centerY }, radius, borderColor, fillColor);
});
