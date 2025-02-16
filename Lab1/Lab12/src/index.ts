class Kaile {
  canvas: HTMLCanvasElement;
  isDragging: boolean = false;
  dragOffsetX: number = 0;
  dragOffsetY: number = 0;
  offsetX: number = 0;
  offsetY: number = 0;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.canvas.width = 1920;
    this.canvas.height = 1080;
    this.addEventListeners();
  }

  drawKaile(): void {
    const ctx = this.canvas.getContext("2d");

    if (ctx) {
      ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      ctx.save();
      ctx.translate(this.offsetX, this.offsetY);
      this.drawHead(ctx);
      this.drawHat(ctx);
      this.drawLegs(ctx);
      this.drawBody(ctx);
      this.drawHands(ctx);
      this.drawScarf(ctx);
      ctx.restore();
    }
  }

  private drawHead(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(600, 300, 200, 0, Math.PI * 2, false);
    ctx.fillStyle = "#ffecc4";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.ellipse(640, 320, 50, 40, Math.PI / 3, 0, Math.PI * 2);
    ctx.fillStyle = "#ffffff";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.ellipse(560, 320, 50, 40, Math.PI / -3, 0, Math.PI * 2);
    ctx.fillStyle = "#ffffff";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(570, 320, 5, 0, Math.PI * 2, false);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(620, 320, 5, 0, Math.PI * 2, false);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(600, 330);
    ctx.bezierCurveTo(600, 330, 595, 330, 600, 290);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(600, 410, 35, 0, Math.PI * 0.5, false);
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.closePath();
  }

  private drawHat(ctx: CanvasRenderingContext2D) {
    const x = 400;
    const y = 90;
    const width = 400;
    const height = 150;
    const radius = 30;

    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.arcTo(x + width, y, x + width, y + radius, radius);
    ctx.lineTo(x + width, y + height);
    ctx.lineTo(x, y + height);
    ctx.lineTo(x, y + radius);
    ctx.arcTo(x, y, x + radius, y, radius);
    ctx.fillStyle = "#57ba46";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.ellipse(400, 300, 40, 100, 60, 0, Math.PI * 2);
    ctx.fillStyle = "#55b949";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.ellipse(800, 300, 40, 100, 50, 0, Math.PI * 2);
    ctx.fillStyle = "#55b949";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(400, 220);
    ctx.bezierCurveTo(400, 220, 400, 205, 430, 205);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(800, 215);
    ctx.bezierCurveTo(800, 215, 800, 205, 770, 205);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(435, 270);
    ctx.bezierCurveTo(450, 240, 740, 240, 770, 270);
    ctx.lineTo(770, 160);
    ctx.lineTo(435, 160);
    ctx.lineTo(435, 270);
    ctx.fillStyle = "#00ac51";
    ctx.fill();
    ctx.strokeStyle = "#00ac51";
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(500, 260);
    ctx.lineTo(570, 230);
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 8;
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(670, 260);
    ctx.lineTo(600, 230);
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 8;
    ctx.stroke();
    ctx.closePath();
  }

  private drawLegs(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.rect(500, 640, 180, 50);
    ctx.fillStyle = "#2e7a76";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.ellipse(540, 692, 65, 7, 178 * (Math.PI / 180), 0, Math.PI * 2);
    ctx.fillStyle = "#403e43";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.ellipse(640, 692, 65, 7, 182 * (Math.PI / 180), 0, Math.PI * 2);
    ctx.fillStyle = "#403e43";
    ctx.fill();
    ctx.closePath();
  }

  private drawBody(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.moveTo(480, 460);
    ctx.bezierCurveTo(570, 520, 650, 510, 720, 460);
    ctx.bezierCurveTo(740, 500, 760, 580, 720, 630);
    ctx.bezierCurveTo(720, 610, 660, 690, 480, 640);
    ctx.bezierCurveTo(440, 660, 410, 560, 480, 460);
    ctx.lineWidth = 2;
    ctx.fillStyle = "#ef6325";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(490, 550);
    ctx.bezierCurveTo(490, 550, 486, 550, 490, 595);
    ctx.moveTo(685, 550);
    ctx.bezierCurveTo(685, 550, 690, 550, 685, 595);
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(600, 502);
    ctx.lineTo(595, 656);
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(521, 540);
    ctx.lineTo(520, 595);
    ctx.lineTo(570, 595);
    ctx.lineTo(570, 540);
    ctx.lineTo(521, 540);
    ctx.lineTo(545, 570);
    ctx.lineTo(570, 540);
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(621, 540);
    ctx.lineTo(620, 595);
    ctx.lineTo(670, 595);
    ctx.lineTo(670, 540);
    ctx.lineTo(621, 540);
    ctx.lineTo(645, 570);
    ctx.lineTo(670, 540);
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.closePath();
  }

  private drawHands(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(460, 620, 35, 0, 2 * Math.PI);
    ctx.arc(710, 620, 35, 0, 2 * Math.PI);
    ctx.fillStyle = "#56b847";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(485, 610, 15, 0, 2 * Math.PI);
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.fillStyle = "#56b847";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(685, 610, 15, 0, 2 * Math.PI);
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.fillStyle = "#56b847";
    ctx.fill();
    ctx.closePath();
  }

  private drawScarf(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.moveTo(480, 460);
    ctx.bezierCurveTo(570, 520, 650, 510, 720, 460);
    ctx.bezierCurveTo(700, 520, 600, 510, 600, 510);
    ctx.bezierCurveTo(480, 520, 480, 450, 480, 460);
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.fillStyle = "#56b847";
    ctx.fill();
    ctx.closePath();
  }

  private addEventListeners() {
    this.canvas.addEventListener("mousedown", this.onMouseDown.bind(this));
    this.canvas.addEventListener("mousemove", this.onMouseMove.bind(this));
    this.canvas.addEventListener("mouseup", this.onMouseUp.bind(this));
  }

  private onMouseDown(event: MouseEvent) {
    this.isDragging = true;
    this.dragOffsetX = event.offsetX - this.offsetX;
    this.dragOffsetY = event.offsetY - this.offsetY;
  }

  private onMouseMove(event: MouseEvent) {
    if (this.isDragging) {
      this.offsetX = event.offsetX - this.dragOffsetX;
      this.offsetY = event.offsetY - this.dragOffsetY;
      this.drawKaile();
    }
  }

  private onMouseUp() {
    this.isDragging = false;
  }
}

const canvas = document.getElementById("kaile") as HTMLCanvasElement;
const kaile = new Kaile(canvas);
kaile.drawKaile();
