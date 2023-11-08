//platform 1 from x=320 to x= 720 y=380
export class Platform1 {
    constructor() {
      this.position = {
        x: 315,
        y: 380,
      };
      this.width = 400;
      this.height = 10;
      this.color = "grey";
      this.canvas = document.getElementById("canvas");
      this.ctx = canvas.getContext("2d");
    }
    draw() {
      this.ctx.fillStyle = this.color;
      this.ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
  }
  
  //platform 2 from x=701 to x= 900 y=320
export class Platform2 {
    constructor() {
      this.position = {
        x: 701,
        y: 320,
      };
      this.width = 199;
      this.height = 10;
      this.color = "grey";
      this.canvas = document.getElementById("canvas");
      this.ctx = canvas.getContext("2d");
    }
    draw() {
      this.ctx.fillStyle = this.color;
      this.ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
  }
  
  //platform 3 from x=125 to x= 324 y=320
 export class Platform3 {
    constructor() {
      this.position = {
        x: 125,
        y: 320,
      };
      this.width = 199;
      this.height = 10;
      this.color = "grey";
      this.canvas = document.getElementById("canvas");
      this.ctx = canvas.getContext("2d");
    }
    draw() {
      this.ctx.fillStyle = this.color;
      this.ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
  }
  
  //platform 4 from x=179 to x= 276 y=406
  export class Platform4 {
    constructor() {
      this.position = {
        x: 179,
        y: 406,
      };
      this.width = 97;
      this.height = 5;
      this.color = "blue";
      this.canvas = document.getElementById("canvas");
      this.ctx = canvas.getContext("2d");
    }
    draw() {
      this.ctx.fillStyle = this.color;
      this.ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
  }
  
  //platform 5 from x= 750 to x= 847 y=406
  export class Platform5 {
    constructor() {
      this.position = {
        x: 750,
        y: 406,
      };
      this.width = 97;
      this.height = 5;
      this.color = "blue";
      this.canvas = document.getElementById("canvas");
      this.ctx = canvas.getContext("2d");
    }
    draw() {
      this.ctx.fillStyle = this.color;
      this.ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
  }
  
  //platform 6 from x= 750 to x= 847 y=406
  export class Platform6 {
    constructor() {
      this.position = {
        x: 100,
        y: 470,
      };
      this.width = 900;
      this.height = 5;
      this.color = "tan";
      this.canvas = document.getElementById("canvas");
      this.ctx = canvas.getContext("2d");
    }
    draw() {
      this.ctx.fillStyle = this.color;
      this.ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
  }
  
  //platform 7 from x= 777 to x= 820 y=270
  export class Platform7 {
    constructor() {
      this.position = {
        x: 777,
        y: 270,
      };
      this.width = 43;
      this.height = 5;
      this.color = "blue";
      this.canvas = document.getElementById("canvas");
      this.ctx = canvas.getContext("2d");
    }
    draw() {
      this.ctx.fillStyle = this.color;
      this.ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
  }
  
  //platform 8 from x= 205 to x= 248 y=270
  export class Platform8 {
    constructor() {
      this.position = {
        x: 205,
        y: 270,
      };
      this.width = 43;
      this.height = 5;
      this.color = "blue";
      this.canvas = document.getElementById("canvas");
      this.ctx = canvas.getContext("2d");
    }
    draw() {
      this.ctx.fillStyle = this.color;
      this.ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
  }
  
  //platform 9 from x= 360 to x= 670 y=160
  export class Platform9 {
    constructor() {
      this.position = {
        x: 360,
        y: 160,
      };
      this.width = 310;
      this.height = 5;
      this.color = "grey";
      this.canvas = document.getElementById("canvas");
      this.ctx = canvas.getContext("2d");
    }
    draw() {
      this.ctx.fillStyle = this.color;
      this.ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
  }
  