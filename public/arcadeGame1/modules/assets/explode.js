export class Explode {
    constructor({ position, imageSrc, scale = 1, framesMax = 1 }) {
      this.position = position;
      this.image = new Image();
      this.image.src = imageSrc;
      this.scale = scale;
      this.framesMax = framesMax;
      this.image.width = 76;
      this.image.height = 76;
      this.canvas = document.getElementById("canvas");
      this.ctx = this.canvas.getContext("2d");
    }
    draw() {
      this.ctx.drawImage(
        this.image,
        0,
        0,
        this.image.width,
        this.image.height,
        this.position.x,
        this.position.y,
        this.image.width * this.scale,
        this.image.height * this.scale
      );
    }
  }