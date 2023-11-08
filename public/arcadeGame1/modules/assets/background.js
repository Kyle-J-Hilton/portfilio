export class Background {
    constructor(CANVAS_WIDTH, CANVAS_HEIGHT) {
      this.position = {
        x: 0,
        y: 0,
      };
      this.width = CANVAS_WIDTH;
      this.height = CANVAS_HEIGHT;
      this.image = new Image();
      this.image.src = "/arcadeGame1/modules/img/castel_background.png";
      this.canvas = document.getElementById("canvas");
      this.ctx = this.canvas.getContext("2d");
    }
    draw() {
      this.ctx.drawImage(
        this.image,
        this.position.x,
        this.position.y,
        this.width,
        this.height
      );
    }
    update() {
      this.draw();
    }
  }
  