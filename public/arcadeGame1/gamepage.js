//const { Sprite } = require("pixi.js");

//canvas setup
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = (canvas.width = 1024);
const CANVAS_HEIGHT = (canvas.height = 576);
ctx.fillStyle = "rgba(255, 255, 255, .3)";
ctx.fillRect(0, 0, canvas.width, canvas.height);

const gravity = 0.7;
const spearGravity = 0.05;
let timer = 60;
let timerId;
let hitTakenLongRange = false;
let lastGame = 0;

class Sprite {
  constructor({
    position,
    imageSrc,
    scale = 1,
    framesMax = 1,
    offset = { x: 0, y: 0 },
    //  offset2 = { x: 0, y: 0 }
  }) {
    this.position = position;
    this.width = 50;
    this.height = 150;
    this.image = new Image();
    this.image.src = imageSrc;
    this.scale = scale;
    this.framesMax = framesMax;
    this.framesCurrent = 0;
    this.framesElapsed = 0;
    this.framesHold = 5;
    this.offset = offset;
  }

  draw() {
    ctx.drawImage(
      this.image,
      this.framesCurrent * (this.image.width / this.framesMax),
      0,
      this.image.width / this.framesMax,
      this.image.height,
      this.position.x - this.offset.x,
      this.position.y - this.offset.y,
      (this.image.width / this.framesMax) * this.scale,
      this.image.height * this.scale
    );
  }

  animateFrames() {
    this.framesElapsed++;

    if (this.framesElapsed % this.framesHold === 0) {
      if (this.framesCurrent < this.framesMax - 1) {
        this.framesCurrent++;
      } else {
        this.framesCurrent = 0;
      }
    }
  }

  update() {
    this.draw();
    this.animateFrames();
  }
}

//platform 1 from x=320 to x= 720 y=380
class Platform1 {
  constructor() {
    this.position = {
      x: 315,
      y: 380,
    };
    this.width = 400;
    this.height = 10;
    this.color = "grey";
  }
  draw() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}

//platform 2 from x=701 to x= 900 y=320
class Platform2 {
  constructor() {
    this.position = {
      x: 701,
      y: 320,
    };
    this.width = 199;
    this.height = 10;
    this.color = "grey";
  }
  draw() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}

//platform 3 from x=125 to x= 324 y=320
class Platform3 {
  constructor() {
    this.position = {
      x: 125,
      y: 320,
    };
    this.width = 199;
    this.height = 10;
    this.color = "grey";
  }
  draw() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}

//platform 4 from x=179 to x= 276 y=406
class Platform4 {
  constructor() {
    this.position = {
      x: 179,
      y: 406,
    };
    this.width = 97;
    this.height = 5;
    this.color = "blue";
  }
  draw() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}

//platform 5 from x= 750 to x= 847 y=406
class Platform5 {
  constructor() {
    this.position = {
      x: 750,
      y: 406,
    };
    this.width = 97;
    this.height = 5;
    this.color = "blue";
  }
  draw() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}

//platform 6 from x= 750 to x= 847 y=406
class Platform6 {
  constructor() {
    this.position = {
      x: 100,
      y: 470,
    };
    this.width = 900;
    this.height = 5;
    this.color = "tan";
  }
  draw() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}

//platform 7 from x= 777 to x= 820 y=270
class Platform7 {
  constructor() {
    this.position = {
      x: 777,
      y: 270,
    };
    this.width = 43;
    this.height = 5;
    this.color = "blue";
  }
  draw() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}

//platform 8 from x= 205 to x= 248 y=270
class Platform8 {
  constructor() {
    this.position = {
      x: 205,
      y: 270,
    };
    this.width = 43;
    this.height = 5;
    this.color = "blue";
  }
  draw() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}

//platform 9 from x= 360 to x= 670 y=160
class Platform9 {
  constructor() {
    this.position = {
      x: 360,
      y: 160,
    };
    this.width = 310;
    this.height = 5;
    this.color = "grey";
  }
  draw() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}

//class for background image
class Background {
  constructor() {
    this.position = {
      x: 0,
      y: 0,
    };
    this.width = canvas.width;
    this.height = canvas.height;
    this.image = new Image();
    this.image.src = "./img/castel_background.png";
  }
  draw() {
    ctx.drawImage(
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

class Explode {
  constructor({ position, imageSrc, scale = 1, framesMax = 1 }) {
    this.position = position;
    this.image = new Image();
    this.image.src = imageSrc;
    this.scale = scale;
    this.framesMax = framesMax;
    this.image.width = 76;
    this.image.height = 76;
  }
  draw() {
    ctx.drawImage(
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

let platform1 = new Platform1();
let platform2 = new Platform2();
let platform3 = new Platform3();
let platform4 = new Platform4();
let platform5 = new Platform5();
let platform6 = new Platform6();
let platform7 = new Platform7();
let platform8 = new Platform8();
let platform9 = new Platform9();
let background = new Background();

class Fighter extends Sprite {
  constructor({
    position,
    velocity,
    color = "red",
    imageSrc,
    scale = 1,
    framesMax = 1,
    offset = { x: 0, y: 0 },
    sprites,
    attackBox = { offset: {}, width: undefined, height: undefined },
    substitutionZone = { offset: {}, width: undefined, height: undefined },
  }) {
    super({
      position,
      imageSrc,
      scale,
      framesMax,
      offset,
    });

    this.velocity = velocity;
    this.width = 50;
    this.height = 100;
    this.lastKey;
    this.attackBox = {
      position: {
        x: this.position.x,
        y: this.position.y,
      },
      offset: attackBox.offset,
      width: attackBox.width,
      height: attackBox.height,
    };
    this.substitutionZone = {
      position: {
        x: this.position.x,
        y: this.position.y,
      },
      offset: substitutionZone.offset,
      radius: substitutionZone.radius,
    };
    this.color = color;
    this.isAttacking = false;

    this.isSubstituting = false;
    this.isJumping;
    this.islongRange;
    this.health = 100;
    this.framesCurrent = 0;
    this.framesElapsed = 0;
    this.framesHold = 5;
    this.sprites = sprites;
    this.dead = false;

    for (const sprite in this.sprites) {
      sprites[sprite].image = new Image();
      sprites[sprite].image.src = sprites[sprite].imageSrc;
    }
  }

  update() {
    this.draw();
    if (!this.dead) this.animateFrames();

    // attack boxes
    this.attackBox.position.x = this.position.x + this.attackBox.offset.x;
    this.attackBox.position.y = this.position.y + this.attackBox.offset.y;

    this.substitutionZone.position.x =
      this.position.x + this.substitutionZone.offset.x;
    this.substitutionZone.position.y =
      this.position.y + this.substitutionZone.offset.y;

    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

    // gravity function
    if (
      this.position.y + this.height + this.velocity.y >= 520 ||
      //platform 1 from x=320 to x= 720 y=380
      (this.position.x >= platform1.position.x &&
        this.position.x <= platform1.position.x + platform1.width &&
        this.position.y + this.height + this.velocity.y >=
          platform1.position.y + 50 &&
        this.position.y + this.height <= platform1.position.y + 53) ||
      //platform 2 from x=701 to x= 900 y=320
      (this.position.x >= platform2.position.x &&
        this.position.x <= platform2.position.x + platform2.width &&
        this.position.y + this.height + this.velocity.y >=
          platform2.position.y + 50 &&
        this.position.y + this.height <= platform2.position.y + 53) ||
      //platform 3 from x=125 to x= 324 y=320
      (this.position.x >= platform3.position.x &&
        this.position.x <= platform3.position.x + platform3.width &&
        this.position.y + this.height + this.velocity.y >=
          platform3.position.y + 50 &&
        this.position.y + this.height <= platform3.position.y + 53) ||
      //platform 4 from x=179 to x= 276 y=406
      (this.position.x >= platform4.position.x &&
        this.position.x <= platform4.position.x + platform4.width &&
        this.position.y + this.height + this.velocity.y >=
          platform4.position.y + 50 &&
        this.position.y + this.height <= platform4.position.y + 53) ||
      //platform 5 from x= 750 to x= 847 y=406
      (this.position.x >= platform5.position.x &&
        this.position.x <= platform5.position.x + platform5.width &&
        this.position.y + this.height + this.velocity.y >=
          platform5.position.y + 50 &&
        this.position.y + this.height <= platform5.position.y + 53) ||
      //platform 6
      (this.position.x >= platform6.position.x &&
        this.position.x <= platform6.position.x + platform6.width &&
        this.position.y + this.height + this.velocity.y >=
          platform6.position.y + 50 &&
        this.position.y + this.height <= platform6.position.y + 53) ||
      //platform 7 from x= 777 to x= 820 y=270
      (this.position.x >= platform7.position.x &&
        this.position.x <= platform7.position.x + platform7.width &&
        this.position.y + this.height + this.velocity.y >=
          platform7.position.y + 50 &&
        this.position.y + this.height <= platform7.position.y + 53) ||
      //platform 8 from x= 205 to x= 248 y=270
      (this.position.x >= platform8.position.x &&
        this.position.x <= platform8.position.x + platform8.width &&
        this.position.y + this.height + this.velocity.y >=
          platform8.position.y + 50 &&
        this.position.y + this.height <= platform8.position.y + 53) ||
      //platform 9 from x= 360 to x= 670 y=160
      (this.position.x >= platform9.position.x &&
        this.position.x <= platform9.position.x + platform9.width &&
        this.position.y + this.height + this.velocity.y >=
          platform9.position.y + 50 &&
        this.position.y + this.height <= platform9.position.y + 53) ||
      //platform 10 from x= 130 to x= 320
      (this.position.x >= 130 &&
        this.position.x <= 320 &&
        this.position.y + this.height + this.velocity.y >= 240 + 45 &&
        this.position.y + this.height <= 240 + 48) ||
      //platform 11 from x= 706 to x= 895 y=240
      (this.position.x >= 706 &&
        this.position.x <= 895 &&
        this.position.y + this.height + this.velocity.y >= 240 + 45 &&
        this.position.y + this.height <= 240 + 48)
    ) {
      this.velocity.y = 0;
    } else this.velocity.y += gravity;
  }

  attack() {
    if ((this.isAttacking = true)) {
      this.switchSprite("attack1");
    }
  }

  attackLeft() {
    if ((this.isAttacking = true)) {
      this.switchSprite("attackLeft");
    }
  }
  longRange() {
    this.islongRange = true;
    this.switchSprite("longRangeAttack");
  }
  longRangeLeft() {
    this.islongRange = true;
    this.switchSprite("longRangeAttackLeft");
  }

  takeHit() {
    this.health -= 5;
    if (this.health <= 0) {
      this.switchSprite("death");
    } else this.switchSprite("takeHit");
    setTimeout(() => {
      console.log("hit taken");
    }, 700);
  }

  takeHitLongRange() {
    this.health -= 5;
    if (this.health <= 0) {
      this.switchSprite("death");
    } else this.switchSprite("takeHit");
    setTimeout(() => {
      hitTakenLongRange = false;
      console.log("hit taken");
    }, 700);
  }

  switchSprite(sprite) {
    if (this.image === this.sprites.death.image) {
      if (this.framesCurrent === this.sprites.death.framesMax - 1)
        this.dead = true;
      return;
    }

    // overriding all other animations with the attack animation
    if (
      (this.image === this.sprites.attack1.image &&
        this.framesCurrent < this.sprites.attack1.framesMax - 1) ||
      (this.image === this.sprites.attackLeft.image &&
        this.framesCurrent < this.sprites.attackLeft.framesMax - 1)
    )
      return;

    //  overriding all other animations with the long range attack animation
    if (
      (this.image === this.sprites.longRangeAttack.image &&
        this.framesCurrent < this.sprites.longRangeAttack.framesMax - 1) ||
      (this.image === this.sprites.longRangeAttackLeft.image &&
        this.framesCurrent < this.sprites.longRangeAttackLeft.framesMax - 1)
    )
      return;

    // override when fighter gets hit
    if (
      this.image === this.sprites.takeHit.image &&
      this.framesCurrent < this.sprites.takeHit.framesMax - 1
    )
      return;

    switch (sprite) {
      case "idle":
        if (this.image !== this.sprites.idle.image) {
          this.image = this.sprites.idle.image;
          this.framesMax = this.sprites.idle.framesMax;
          this.framesCurrent = 0;
        }
        break;
      case "idleLeft":
        if (this.image !== this.sprites.idleLeft.image) {
          this.image = this.sprites.idleLeft.image;
          this.framesMax = this.sprites.idleLeft.framesMax;
          this.framesCurrent = 0;
        }
        break;
      case "run":
        if (this.image !== this.sprites.run.image) {
          this.image = this.sprites.run.image;
          this.framesMax = this.sprites.run.framesMax;
          this.framesCurrent = 0;
        }
        break;
      case "runLeft":
        if (this.image !== this.sprites.runLeft.image) {
          this.image = this.sprites.runLeft.image;
          this.framesMax = this.sprites.runLeft.framesMax;
          this.framesCurrent = 0;
        }
        break;

      case "jump":
        if (this.image !== this.sprites.jump.image) {
          this.image = this.sprites.jump.image;
          this.framesMax = this.sprites.jump.framesMax;
          this.framesCurrent = 0;
        }
        break;

      case "fall":
        if (this.image !== this.sprites.fall.image) {
          this.image = this.sprites.fall.image;
          this.framesMax = this.sprites.fall.framesMax;
          this.framesCurrent = 0;
        }
        break;

      case "attack1":
        if (this.image !== this.sprites.attack1.image) {
          this.image = this.sprites.attack1.image;
          this.framesMax = this.sprites.attack1.framesMax;
          this.framesCurrent = 0;
        }
        break;

      case "attackLeft":
        if (this.image !== this.sprites.attackLeft.image) {
          this.image = this.sprites.attackLeft.image;
          this.framesMax = this.sprites.attackLeft.framesMax;
          this.framesCurrent = 0;
        }
        break;

      case "longRangeAttack":
        if (this.image !== this.sprites.longRangeAttack.image) {
          this.image = this.sprites.longRangeAttack.image;
          this.framesMax = this.sprites.longRangeAttack.framesMax;
          this.framesCurrent = 0;
        }
        break;

      case "longRangeAttackLeft":
        if (this.image !== this.sprites.longRangeAttackLeft.image) {
          this.image = this.sprites.longRangeAttackLeft.image;
          this.framesMax = this.sprites.longRangeAttackLeft.framesMax;
          this.framesCurrent = 0;
        }
        break;
      case "takeHit":
        if (this.image !== this.sprites.takeHit.image) {
          this.image = this.sprites.takeHit.image;
          this.framesMax = this.sprites.takeHit.framesMax;
          this.framesCurrent = 0;
        }
        break;

      case "death":
        if (this.image !== this.sprites.death.image) {
          this.image = this.sprites.death.image;
          this.framesMax = this.sprites.death.framesMax;
          this.framesCurrent = 0;
        }
        break;
    }
  }
}

//player 1
const huntress = new Fighter({
  position: {
    x: 220,
    y: 0,
  },
  velocity: {
    x: 0,
    y: 0,
  },
  offset: {
    x: 0,
    y: 0,
  },

  imageSrc: "./img/huntres/Idle.png",
  framesMax: 8,
  scale: 2,
  offset: {
    x: 150,
    y: 150,
  },
  sprites: {
    idle: {
      imageSrc: "./img/huntres/Idle.png",
      framesMax: 8,
    },
    idleLeft: {
      imageSrc: "../img/huntres/IdleLeft.png",
      framesMax: 8,
    },
    run: {
      imageSrc: "./img/huntres/Run.png",
      framesMax: 8,
    },
    runLeft: {
      imageSrc: "./img/huntres/RunLeft.png",
      framesMax: 8,
    },
    jump: {
      imageSrc: "./img/huntres/Jump.png",
      framesMax: 2,
    },
    fall: {
      imageSrc: "./img/huntres/Fall.png",
      framesMax: 2,
    },
    attack1: {
      imageSrc: "./img/huntres/Attack1.png",
      framesMax: 5,
    },
    attackLeft: {
      imageSrc: "./img/huntres/AttackLeft.png",
      framesMax: 5,
    },
    longRangeAttack: {
      imageSrc: "./img/huntres/Attack3.png",
      framesMax: 7,
    },
    longRangeAttackLeft: {
      imageSrc: "./img/huntres/Attack3left.png",
      framesMax: 7,
    },
    takeHit: {
      imageSrc: "./img/huntres/Take hit.png",
      framesMax: 3,
    },
    death: {
      imageSrc: "./img/huntres/Death.png",
      framesMax: 8,
    },
  },
  attackBox: {
    offset: {
      x: 0,
      y: 0,
    },
    width: 80,
    height: 50,
  },
  substitutionZone: {
    offset: {
      x: 0,
      y: 0,
    },
    radius: 75,
  },
});

//player 2
const goblin = new Fighter({
  position: {
    x: 800,
    y: 0,
  },
  velocity: {
    x: 0,
    y: 0,
  },
  color: "blue",
  offset: {
    x: 0,
    y: 0,
  },

  imageSrc: "./img/Goblin/IdleLeft.png",
  framesMax: 4,
  scale: 2,
  offset: {
    x: 150,
    y: 150,
  },
  sprites: {
    idleLeft: {
      imageSrc: "./img/Goblin/IdleLeft.png",
      framesMax: 4,
    },
    idle: {
      imageSrc: "./img/Goblin/Idle.png",
      framesMax: 4,
    },
    run: {
      imageSrc: "./img/Goblin/Run.png",
      framesMax: 8,
    },
    runLeft: {
      imageSrc: "./img/Goblin/RunLeft.png",
      framesMax: 8,
    },
    jump: {
      imageSrc: "./img/Goblin/Idle.png",
      framesMax: 4,
    },
    fall: {
      imageSrc: "./img/Goblin/Idle.png",
      framesMax: 4,
    },
    attack1: {
      imageSrc: "./img/Goblin/Attack.png",
      framesMax: 8,
    },
    attackLeft: {
      imageSrc: "./img/Goblin/AttackLeft.png",
      framesMax: 8,
    },
    longRangeAttack: {
      imageSrc: "./img/Goblin/Attack3.png",
      framesMax: 12,
    },
    longRangeAttackLeft: {
      imageSrc: "./img/Goblin/Attack3left.png",
      framesMax: 12,
    },
    takeHit: {
      imageSrc: "./img/Goblin/Take hit.png",
      framesMax: 4,
    },
    death: {
      imageSrc: "./img/Goblin/Death.png",
      framesMax: 4,
    },
  },
  attackBox: {
    offset: {
      x: 0,
      y: 0,
    },
    width: 80,
    height: 50,
  },
  substitutionZone: {
    offset: {
      x: 0,
      y: 0,
    },
    radius: 75,
  },
});

//player 3
const luffy = new Fighter({
  position: {
    x: 500,
    y: 0,
  },
  velocity: {
    x: 0,
    y: 0,
  },
  offset: {
    x: 0,
    y: 0,
  },

  imageSrc: "./img/Luffy/idleRight.png",
  framesMax: 10,
  scale: 1,
  offset: {
    x: 15,
    y: 15,
  },
  sprites: {
    idle: {
      imageSrc: "./img/Luffy/idleRight.png",
      framesMax: 10,
    },
    idleLeft: {
      imageSrc: "./img/Luffy/idle.png",
      framesMax: 10,
    },
    run: {
      imageSrc: "./img/Luffy/runRight.png",
      framesMax: 8,
    },
    runLeft: {
      imageSrc: "./img/Luffy/runLeft.png",
      framesMax: 8,
    },
    jump: {
      imageSrc: "./img/Luffy/jumpRight.png",
      framesMax: 4,
    },
    fall: {
      imageSrc: "./img/Luffy/jumpRight.png",
      framesMax: 4,
    },
    attack1: {
      imageSrc: "./img/Luffy/kickRight.png",
      framesMax: 9,
    },
    attackLeft: {
      imageSrc: "./img/Luffy/kickLeft.png",
      framesMax: 9,
    },
    longRangeAttack: {
      imageSrc: "./img/Luffy/headbuttRight.png",
      framesMax: 12,
    },
    longRangeAttackLeft: {
      imageSrc: "./img/Luffy/headbuttLeft.png",
      framesMax: 12,
    },
    takeHit: {
      imageSrc: "./img/Luffy/fallRight.png",
      framesMax: 4,
    },
    death: {
      imageSrc: "./img/Luffy/headbuttright.png",
      framesMax: 12,
    },
  },
  attackBox: {
    offset: {
      x: 0,
      y: 0,
    },
    width: 80,
    height: 50,
  },
  substitutionZone: {
    offset: {
      x: 0,
      y: 0,
    },
    radius: 75,
  },
});

//player 4
const naruto = new Fighter({
  position: {
    x: 100,
    y: 0,
  },
  velocity: {
    x: 0,
    y: 0,
  },
  offset: {
    x: 0,
    y: 0,
  },

  imageSrc: "./img/naruto/idleRight.png",
  framesMax: 4,
  scale: 1,
  offset: {
    x: 20,
    y: 5,
  },
  sprites: {
    idle: {
      imageSrc: "./img/naruto/idleRight.png",
      framesMax: 4,
    },
    idleLeft: {
      imageSrc: "./img/naruto/idleLeft.png",
      framesMax: 4,
    },
    run: {
      imageSrc: "./img/naruto/runRight.png",
      framesMax: 6,
    },
    runLeft: {
      imageSrc: "./img/naruto/runLeft.png",
      framesMax: 6,
    },
    jump: {
      imageSrc: "./img/naruto/jumpRight.png",
      framesMax: 2,
    },
    fall: {
      imageSrc: "./img/naruto/fallRight.png",
      framesMax: 2,
    },
    attack1: {
      imageSrc: "./img/naruto/punchRight.png",
      framesMax: 12,
    },
    attackLeft: {
      imageSrc: "./img/naruto/punchLeft.png",
      framesMax: 12,
    },
    longRangeAttack: {
      imageSrc: "./img/naruto/longrangeRight.png",
      framesMax: 6,
    },
    longRangeAttackLeft: {
      imageSrc: "./img/naruto/longrangeLeft.png",
      framesMax: 6,
    },
    takeHit: {
      imageSrc: "./img/naruto/takeHit.png",
      framesMax: 12,
    },
    death: {
      imageSrc: "./img/naruto/takeHit.png",
      framesMax: 12,
    },
  },
  attackBox: {
    offset: {
      x: 0,
      y: 0,
    },
    width: 80,
    height: 50,
  },
  substitutionZone: {
    offset: {
      x: 0,
      y: 0,
    },
    radius: 75,
  },
});

//player 5
const cat = new Fighter({
  position: {
    x: 750,
    y: 0,
  },
  velocity: {
    x: 0,
    y: 0,
  },
  offset: {
    x: 0,
    y: 0,
  },

  imageSrc: "./img/cat/idleRight.png",
  framesMax: 5,
  scale: 1,
  offset: {
    x: 50,
    y: 30,
  },
  sprites: {
    idle: {
      imageSrc: "./img/cat/idleRight.png",
      framesMax: 5,
    },
    idleLeft: {
      imageSrc: "./img/cat/idleLeft.png",
      framesMax: 5,
    },
    run: {
      imageSrc: "./img/cat/runRight.png",
      framesMax: 6,
    },
    runLeft: {
      imageSrc: "./img/cat/runLeft.png",
      framesMax: 5,
    },
    jump: {
      imageSrc: "./img/cat/jumpRight.png",
      framesMax: 3,
    },
    fall: {
      imageSrc: "./img/cat/fallRight.png",
      framesMax: 2,
    },
    attack1: {
      imageSrc: "./img/cat/attackRight.png",
      framesMax: 3,
    },
    attackLeft: {
      imageSrc: "./img/cat/attackLeft.png",
      framesMax: 3,
    },
    longRangeAttack: {
      imageSrc: "./img/cat/longrangeRight.png",
      framesMax: 3,
    },
    longRangeAttackLeft: {
      imageSrc: "./img/cat/longrangeLeft.png",
      framesMax: 3,
    },
    takeHit: {
      imageSrc: "./img/cat/takeHit.png",
      framesMax: 3,
    },
    death: {
      imageSrc: "./img/cat/takeHit.png",
      framesMax: 3,
    },
  },
  attackBox: {
    offset: {
      x: 0,
      y: 0,
    },
    width: 80,
    height: 50,
  },
  substitutionZone: {
    offset: {
      x: 0,
      y: 0,
    },
    radius: 75,
  },
});

//player 5
const starFire = new Fighter({
  position: {
    x: 700,
    y: 0,
  },
  velocity: {
    x: 0,
    y: 0,
  },
  offset: {
    x: 0,
    y: 0,
  },

  imageSrc: "./img/starfire/idleRight.png",
  framesMax: 6,
  scale: 1,
  offset: {
    x: 50,
    y: 30,
  },
  sprites: {
    idle: {
      imageSrc: "./img/starfire/idleRight.png",
      framesMax: 6,
    },
    idleLeft: {
      imageSrc: "./img/starfire/idleLeft.png",
      framesMax: 6,
    },
    run: {
      imageSrc: "./img/starfire/runRight.png",
      framesMax: 2,
    },
    runLeft: {
      imageSrc: "./img/starfire/runLeft.png",
      framesMax: 2,
    },
    jump: {
      imageSrc: "./img/starfire/jumpRight.png",
      framesMax: 2,
    },
    fall: {
      imageSrc: "./img/starfire/jumpRight.png",
      framesMax: 2,
    },
    attack1: {
      imageSrc: "./img/starfire/attackRight.png",
      framesMax: 6,
    },
    attackLeft: {
      imageSrc: "./img/starfire/attackLeft.png",
      framesMax: 6,
    },
    longRangeAttack: {
      imageSrc: "./starfire/longRangeRight.png",
      framesMax: 5,
    },
    longRangeAttackLeft: {
      imageSrc: "./img/starfire/longRangeLeft.png",
      framesMax: 5,
    },
    takeHit: {
      imageSrc: "./img/starfire/takeHit.png",
      framesMax: 2,
    },
    death: {
      imageSrc: "./img/starfire/takeHitLeft.png",
      framesMax: 2,
    },
  },
  attackBox: {
    offset: {
      x: 0,
      y: 0,
    },
    width: 80,
    height: 50,
  },
  substitutionZone: {
    offset: {
      x: 0,
      y: 0,
    },
    radius: 75,
  },
});

//makes the keys natural state unpressed
const keys = {
  a: {
    pressed: false,
  },
  d: {
    pressed: false,
  },
  w: {
    pressed: false,
  },
  ArrowLeft: {
    pressed: false,
  },
  ArrowRight: {
    pressed: false,
  },
  ArrowUp: {
    pressed: false,
  },
  Shift: {
    pressed: false,
  },
  Control: {
    pressed: false,
  },
  Meta: {
    pressed: false,
  },
  Alt: {
    pressed: false,
  },
  m: {
    pressed: false,
  },
  z: {
    pressed: false,
  },
};

// determines if attack hit substitution bubble
function circularCollision({ rectangle, circle }) {
  return (
    rectangle.attackBox.position.x + rectangle.attackBox.width >=
      circle.substitutionZone.position.x - circle.substitutionZone.radius &&
    rectangle.attackBox.position.x <=
      circle.substitutionZone.position.x + circle.substitutionZone.radius &&
    rectangle.attackBox.position.y + rectangle.attackBox.height >=
      circle.position.y &&
    rectangle.attackBox.position.y <= circle.position.y + circle.height
  );
}

// determines if attack hit other player
function rectangularCollision({ rectangle1, rectangle2 }) {
  return (
    rectangle1.attackBox.position.x + rectangle1.attackBox.width >=
      rectangle2.position.x &&
    rectangle1.attackBox.position.x <=
      rectangle2.position.x + rectangle2.width &&
    rectangle1.attackBox.position.y + rectangle1.attackBox.height >=
      rectangle2.position.y &&
    rectangle1.attackBox.position.y <= rectangle2.position.y + rectangle2.height
  );
}

// determines who won
function determineWinner({ player, enemy, timerId }) {
  clearTimeout(timerId);
  document.querySelector("#displayText").style.display = "flex";
  if (player.health === enemy.health) {
    document.querySelector("#displayText").innerHTML = "Tie";
    setTimeout(() => {
      document.getElementById("playAgain").style.display = "block";
    }, 2000);
  } else if (player.health > enemy.health) {
    document.querySelector("#displayText").innerHTML = "Player 1 Wins";
    setTimeout(() => {
      document.getElementById("playAgain").style.display = "block";
    }, 2000);
  } else if (player.health < enemy.health) {
    document.querySelector("#displayText").innerHTML = "Player 2 Wins";
    setTimeout(() => {
      document.getElementById("playAgain").style.display = "block";
    }, 2000);
  }
}

function playAgain() {
  setTimeout(() => {
    location.reload();
  }, 500);
}

function playNext() {
  if (lastGame == 1) {
    console.log("Next Opponent Is... luffy");
    setTimeout(() => {
      location.reload();
    }, 1000);
  } else if (lastGame == 2) {
    console.log("Next Opponent Is... naruto");
    setTimeout(() => {
      location.reload();
    }, 1000);
  } else if (lastGame == 3) {
    console.log("Next Opponent Is... cat");
    setTimeout(() => {
      location.reload();
    }, 1000);
  } else if (lastGame == 4) {
    console.log("Next Opponent Is... huntress");
    setTimeout(() => {
      location.reload();
    }, 1000);
  } else if (lastGame == 5) {
    console.log("Next Opponent Is... goblin");
    setTimeout(() => {
      location.reload();
    }, 1000);
  }
}

// Chose huntress $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
function choseHuntress() {
  console.log("you chose huntress");
  lastGame = 1;
  let player = huntress;
  let enemy = goblin;
  class Bomb {
    constructor({ position, velocity }) {
      this.position = position;
      this.velocity = velocity;

      this.radius = 7;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = "black";
      ctx.fill();
      ctx.closePath();
    }

    update() {
      this.draw();
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;

      // gravity function
      if (
        this.position.y + this.radius + this.velocity.y >= 470 ||
        //platform 1 from x=320 to x= 720 y=380
        (this.position.x >= 320 &&
          this.position.x <= 720 &&
          this.position.y + this.radius + this.velocity.y >= 380 &&
          this.position.y + this.radius <= 383) ||
        //platform 2 from x=701 to x= 900 y=320
        (this.position.x >= 701 &&
          this.position.x <= 900 &&
          this.position.y + this.radius + this.velocity.y >= 320 &&
          this.position.y + this.radius <= 323) ||
        //platform 3 from x=125 to x= 324 y=320
        (this.position.x >= 125 &&
          this.position.x <= 324 &&
          this.position.y + this.radius + this.velocity.y >= 320 &&
          this.position.y + this.radius <= 323) ||
        //platform 4 from x=179 to x= 276 y=406
        (this.position.x >= 179 &&
          this.position.x <= 276 &&
          this.position.y + this.radius + this.velocity.y >= 406 &&
          this.position.y + this.radius <= 409) ||
        //platform 5 from x= 750 to x= 847 y=406
        (this.position.x >= 750 &&
          this.position.x <= 847 &&
          this.position.y + this.radius + this.velocity.y >= 406 &&
          this.position.y + this.radius <= 409) ||
        //platform 7 from x= 777 to x= 820 y=270
        (this.position.x >= 777 &&
          this.position.x <= 820 &&
          this.position.y + this.radius + this.velocity.y >= 270 &&
          this.position.y + this.radius <= 273) ||
        //platform 8 from x= 205 to x= 248 y=270
        (this.position.x >= 205 &&
          this.position.x <= 248 &&
          this.position.y + this.radius + this.velocity.y >= 270 &&
          this.position.y + this.radius <= 273) ||
        //platform 9 from x= 360 to x= 670 y=160
        (this.position.x >= 360 &&
          this.position.x <= 670 &&
          this.position.y + this.radius + this.velocity.y >= 160 &&
          this.position.y + this.radius <= 163) ||
        //platform 10 from x= 130 to x= 320
        (this.position.x >= 130 &&
          this.position.x <= 320 &&
          this.position.y + this.radius + this.velocity.y >= 240 &&
          this.position.y + this.radius <= 243) ||
        //platform 11 from x= 706 to x= 895 y=240
        (this.position.x >= 706 &&
          this.position.x <= 895 &&
          this.position.y + this.radius + this.velocity.y >= 240 &&
          this.position.y + this.radius <= 243)
      ) {
        this.velocity.y = 0;
        if (this.velocity.x <= -1) {
          this.velocity.x += 0.25;
        } else if (this.velocity.x >= 1) {
          this.velocity.x -= 0.25;
        } else {
          this.velocity.x = 0;
        }
      } else this.velocity.y += gravity;

      if (
        this.position.x + this.radius >= huntress.position.x &&
        this.position.x <= huntress.position.x + huntress.width &&
        this.position.y + this.radius >= huntress.position.y &&
        this.position.y <= huntress.position.y + huntress.height &&
        goblin.islongRange == true &&
        huntress.isSubstituting != true
      ) {
        console.log("bomb hit");
        huntress.takeHitLongRange();
        goblin.islongRange = false;
        this.velocity.x = 0;
        this.velocity.y = 0;
        this.radius = 15;
        bombs.splice(0, 1);
        gsap.to("#playerHealth", {
          width: player.health + "%",
        });
      }
    }
  }

  class Spear {
    constructor({ position, velocity }) {
      this.position = position;
      this.velocity = velocity;
      //this.image = imageSrc
      this.framesElapsed = 0;
      this.width = 60;
      this.height = 3;
    }
    draw() {
      ctx.fillStyle = "brown";
      ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
      // ctx.drawImage(this.image, 0, 0, 60, 20, this.position.x, this.position.y, this.width, this.height)
    }

    update() {
      this.draw();
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;

      // gravity function
      if (
        this.position.y + this.height >= 470 ||
        //platform 1 from x=320 to x= 720 y=380
        (this.position.x + this.width >= 320 &&
          this.position.x + this.width <= 720 &&
          this.position.y + this.height >= 380 &&
          this.position.y + this.height <= 385) ||
        //platform 2 from x=701 to x= 900 y=320
        (this.position.x + this.width >= 701 &&
          this.position.x + this.width <= 900 &&
          this.position.y + this.height >= 320 &&
          this.position.y + this.height <= 325) ||
        //platform 3 from x=125 to x= 324 y=320
        (this.position.x + this.width >= 125 &&
          this.position.x + this.width <= 324 &&
          this.position.y + this.height >= 320 &&
          this.position.y + this.height <= 325) ||
        //platform 4 from x=179 to x= 276 y=406
        (this.position.x + this.width >= 179 &&
          this.position.x + this.width <= 276 &&
          this.position.y + this.height >= 406 &&
          this.position.y + this.height <= 411) ||
        //platform 5 from x= 750 to x= 847 y=406
        (this.position.x >= 750 &&
          this.position.x <= 847 &&
          this.position.y + this.height >= 406 &&
          this.position.y + this.height <= 411) ||
        //platform 7 from x= 777 to x= 820 y=270
        (this.position.x + this.width >= 777 &&
          this.position.x + this.width <= 820 &&
          this.position.y + this.height >= 270 &&
          this.position.y + this.height <= 275) ||
        //platform 8 from x= 205 to x= 248 y=270
        (this.position.x + this.width >= 205 &&
          this.position.x + this.width <= 248 &&
          this.position.y + this.height >= 270 &&
          this.position.y + this.height <= 275) ||
        //platform 9 from x= 360 to x= 670 y=160
        (this.position.x + this.width >= 360 &&
          this.position.x + this.width <= 670 &&
          this.position.y + this.height >= 160 &&
          this.position.y + this.height <= 165) ||
        //platform 10 from x= 130 to x= 320
        (this.position.x + this.width >= 130 &&
          this.position.x + this.width <= 320 &&
          this.position.y + this.height >= 240 &&
          this.position.y + this.height <= 245) ||
        //platform 11 from x= 706 to x= 895 y=240
        (this.position.x + this.width >= 706 &&
          this.position.x + this.width <= 895 &&
          this.position.y + this.height >= 240 &&
          this.position.y + this.height <= 245)
      ) {
        this.velocity.y = 0;
        this.velocity.x = 0;
      } else this.velocity.y += spearGravity;

      if (
        this.position.x + this.width >= goblin.position.x &&
        this.position.x <= goblin.position.x + goblin.width &&
        this.position.y + this.height >= goblin.position.y &&
        this.position.y <= goblin.position.y + goblin.height &&
        huntress.islongRange == true &&
        goblin.isSubstituting != true
      ) {
        console.log("spear hit");
        goblin.takeHit();
        huntress.islongRange = false;
        gsap.to("#enemyHealth", {
          width: enemy.health + "%",
        });
      }
    }
  }
  let bombs = [];
  let spears = [];

  //game timer
  function decreaseTimer() {
    if (timer > 0) {
      timerId = setTimeout(decreaseTimer, 1000);
      timer--;
      document.querySelector("#timer").innerHTML = timer;
    }

    if (timer === 0) {
      determineWinner({ player, enemy, timerId });
    }
  }
  decreaseTimer();
  document.getElementById("myForm").style.display = "none";
  document.getElementById("playAgain").style.display = "none";

  //Animation function
  function animate() {
    window.requestAnimationFrame(animate);
    ctx.fillStyle = "rgba(67, 200, 220, .3)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    background.draw();
    huntress.update();
    goblin.update();
    platform1.draw();
    platform2.draw();
    platform3.draw();
    platform4.draw();
    platform5.draw();
    platform6.draw();
    platform7.draw();
    platform8.draw();
    platform9.draw();
    if (hitTakenLongRange == true) {
      const explode = new Explode({
        position: {
          x: huntress.position.x,
          y: huntress.position.y,
        },
        imageSrc: "./img/explosion.png",
        scale: 1,
        framesMax: 1,
      });
      explode.draw();
    }
    bombs.forEach((bomb, index) => {
      if (bomb.position.x <= -20 || bomb.position.x >= 1044) {
        setTimeout(() => {
          bombs.splice(index, 1);
        }, 0);
      } else {
        bomb.update(huntress.position.x, huntress.position.y);
      }
    });

    spears.forEach((spear, index) => {
      if (spear.position.x <= -20 || spear.position.x >= 1044) {
        setTimeout(() => {
          spears.splice(index, 1);
        }, 0);
      } else {
        spear.update(goblin.position.x, goblin.position.y);
      }
    });

    player.velocity.x = 0;
    enemy.velocity.x = 0;

    // player movement

    if (keys.d.pressed && player.lastKey === "d") {
      player.velocity.x = 5;
      player.switchSprite("run");
    } else if (keys.a.pressed && player.lastKey === "a") {
      player.velocity.x = -5;
      player.switchSprite("runLeft");
    } else {
      if (player.position.x <= enemy.position.x) {
        player.switchSprite("idle");
      } else if (player.position.x >= enemy.position.x) {
        player.switchSprite("idleLeft");
        player.attackBox.offset.x - 150;
        player.substitutionZone.offset.x - 150;
      }
    }

    // jumping
    if (player.velocity.y < 0) {
      player.switchSprite("jump");
    } else if (player.velocity.y > 0) {
      player.switchSprite("fall");
    }

    // Enemy movement
    if (keys.ArrowLeft.pressed && enemy.lastKey === "ArrowLeft") {
      enemy.velocity.x = -5;
      enemy.switchSprite("runLeft");
    } else if (keys.ArrowRight.pressed && enemy.lastKey === "ArrowRight") {
      enemy.velocity.x = 5;
      enemy.switchSprite("run");
    } else {
      if (player.position.x <= enemy.position.x) {
        enemy.switchSprite("idleLeft");
        enemy.attackBox.offset.x - 150;
        enemy.substitutionZone.offset.x - 150;
      } else if (player.position.x >= enemy.position.x) {
        enemy.switchSprite("idle");
      }
    }

    // jumping
    if (enemy.velocity.y < 0) {
      enemy.switchSprite("jump");
    } else if (enemy.velocity.y > 0) {
      enemy.switchSprite("fall");
    }

    // detect for collision if Huntres hits Goblin
    if (
      rectangularCollision({
        rectangle1: player,
        rectangle2: enemy,
      }) &&
      player.isAttacking &&
      player.framesCurrent === 2 &&
      enemy.isSubstituting != true
    ) {
      enemy.takeHit();
      player.isAttacking = false;

      gsap.to("#enemyHealth", {
        width: enemy.health + "%",
      });
    }

    // if player misses
    if (player.isAttacking && player.framesCurrent === 4) {
      player.isAttacking = false;
    }

    // If Goblin hits Huntres
    if (
      rectangularCollision({
        rectangle1: enemy,
        rectangle2: player,
      }) &&
      enemy.isAttacking &&
      enemy.framesCurrent === 2 &&
      player.isSubstituting != true
    ) {
      player.takeHit();
      enemy.isAttacking = false;

      gsap.to("#playerHealth", {
        width: player.health + "%",
      });
    }

    // if player misses
    if (enemy.isAttacking && enemy.framesCurrent === 2) {
      enemy.isAttacking = false;
    }

    // end game based on health
    if (enemy.health <= 0 || player.health <= 0) {
      determineWinner({ player, enemy, timerId });
    }

    //detect for collision between attack and substitution
    if (
      circularCollision({
        rectangle: player,
        circle: enemy,
      }) &&
      player.isAttacking &&
      enemy.isSubstituting
    ) {
      player.isAttacking = false;
      enemy.position.y -= 100;
      enemy.switchSprite("fall");
      console.log("Goblin uses Substitution Jutsu");
    }
    if (
      circularCollision({
        rectangle: enemy,
        circle: player,
      }) &&
      enemy.isAttacking &&
      player.isSubstituting
    ) {
      player.isAttacking = false;
      player.position.y -= 100;
      player.switchSprite("fall");
      console.log("Huntres uses Substitution Jutsu");
    }

    // end game based on health
    if (enemy.health <= 0 || player.health <= 0) {
      determineWinner({ player, enemy, timerId });
    }
  }
  animate();
  //Listens for when key is pressed
  window.addEventListener("keydown", (event) => {
    console.log(event.key);

    switch (event.key) {
      //Player 1 movement a, w, d for left, up, right
      case "d":
        keys.d.pressed = true;
        player.lastKey = "d";
        player.switchSprite("run");
        break;
      case "a":
        keys.a.pressed = true;
        player.lastKey = "a";
        player.switchSprite("runLeft");
        break;
      case "w":
        if (player.isJumping != true) {
          player.isJumping = true;
          player.velocity.y = -10;
          player.switchSprite("jump");
        }
        break;
      //Player 2 movement uses arrow keys
      case "ArrowRight":
        keys.ArrowRight.pressed = true;
        enemy.lastKey = "ArrowRight";
        break;
      case "ArrowLeft":
        keys.ArrowLeft.pressed = true;
        enemy.lastKey = "ArrowLeft";
        break;
      case "ArrowUp":
        if (enemy.isJumping != true) {
          enemy.isJumping = true;
          enemy.velocity.y = -10;
          enemy.switchSprite("jump");
        }
        break;
      //player 1 attack
      case "Shift":
        //player 1 attack
        player.isAttacking = true;
        if (enemy.position.x >= player.position.x) {
          player.attackBox.offset.x = 20;
          player.attack();
        } else {
          player.attackBox.offset.x = -50;
          player.attackLeft();
        }
        break;
      //player 2 attack
      case "Control":
        //player 2 attack
        enemy.isAttacking = true;
        if (enemy.position.x >= player.position.x) {
          enemy.attackBox.offset.x = -50;
          enemy.attackLeft();
        } else {
          enemy.attackBox.offset.x = 20;
          enemy.attack();
        }
        break;
      //player 2 substitution jutsu
      case "Meta":
        enemy.isSubstituting = true;
        break;
      //player 1 substitution jutsu
      case "Alt":
        //player 1 substitution jutsu
        player.isSubstituting = true;
        break;
      //player 2 throws bomb
      case "m":
        //player 2 throw attack
        enemy.islongRange = true;
        if (enemy.position.x >= player.position.x) {
          enemy.longRangeLeft();
          setTimeout(() => {
            bombs.push(
              new Bomb({
                position: {
                  x: enemy.position.x - 50,
                  y: enemy.position.y,
                },
                velocity: {
                  x: -9,
                  y: -3,
                },
              })
            );
          }, 500);

          console.log(bombs);
        } else {
          enemy.longRange();
          setTimeout(() => {
            bombs.push(
              new Bomb({
                position: {
                  x: enemy.position.x + 50,
                  y: enemy.position.y,
                },
                velocity: {
                  x: 9,
                  y: -3,
                },
              })
            );
          }, 500);
          console.log(bombs);
        }
        break;
      //player 1 throws spear
      case "z":
        //player 2 throw attack
        player.islongRange = true;
        if (enemy.position.x >= player.position.x) {
          player.longRange();
          setTimeout(() => {
            spears.push(
              new Spear({
                position: {
                  x: player.position.x + 20,
                  y: player.position.y - 25,
                },
                velocity: {
                  x: 11,
                  y: -1,
                },
              })
            );
          }, 500);
          console.log(spears);
        } else {
          player.longRangeLeft();
          setTimeout(() => {
            spears.push(
              new Spear({
                position: {
                  x: player.position.x - 20,
                  y: player.position.y - 25,
                },
                velocity: {
                  x: -11,
                  y: -1,
                }, //,
                // imageSrc: 'huntres/SpearLeft.png'
              })
            );
          }, 500);
          console.log(spears);
        }
        break;
    }
  });

  //listens for when key is lifted up
  window.addEventListener("keyup", (event) => {
    switch (event.key) {
      case "d":
        keys.d.pressed = false;
        break;
      case "a":
        keys.a.pressed = false;
        break;
      case "w":
        keys.w.pressed = false;
        setTimeout(jumpCheck1, 680);
      case "ArrowRight":
        keys.ArrowRight.pressed = false;
        break;
      case "ArrowLeft":
        keys.ArrowLeft.pressed = false;
        break;
      case "ArrowUp":
        keys.ArrowUp.pressed = false;
        setTimeout(jumpCheck2, 680);
        break;
      case "Shift":
        keys.Shift.pressed = false;
        break;
      case "Control":
        keys.Control.pressed = false;
        break;
      case "Meta":
        keys.Meta.pressed = false;
        enemy.isSubstituting = false;
        break;
      case "Alt":
        keys.Alt.pressed = false;
        player.isSubstituting = false;
        break;
      case "m":
        keys.m.pressed = false;
        setTimeout(() => {
          bombs.splice(0, 1);
        }, 5000);
        break;
      case "z":
        keys.z.pressed = false;
        setTimeout(() => {
          spears.splice(0, 1);
        }, 5000);
        break;
    }
  });
  function jumpCheck1() {
    return (player.isJumping = false);
  }
  function jumpCheck2() {
    return (enemy.isJumping = false);
  }
}

// Chose Goblin $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
function choseGoblin() {
  console.log("you chose goblin");
  lastGame = 2;
  let count = 0;
  let lcount = 0;
  let player = goblin;
  let enemy = luffy;
  platform9.position.y = 174;
  platform9.position.x = 1;
  platform9.width = 220;
  platform9.color = "tan";
  platform1.position.y = 294;
  platform1.position.x = 300;
  platform1.width = 336;
  platform1.color = "tan";
  platform2.position.y = 210;
  platform2.position.x = 786;
  platform2.color = "tan";
  platform3.position.y = 222;
  platform3.position.x = 5;
  platform3.color = "tan";
  platform4.position.y = 336;
  platform4.position.x = 870;
  platform4.color = "tan";
  platform5.position.y = 278;
  platform5.position.x = 40;
  platform5.color = "grey";
  platform6.position.y = 406;
  platform6.color = "tan";
  platform7.position.y = 275;
  platform7.position.x = 791;
  platform7.width = 80;
  platform7.color = "tan";
  platform8.position.y = 340;
  platform8.position.x = 140;
  platform8.color = "tan";
  platform8.width = 90;
  class Bomb {
    constructor({ position, velocity }) {
      this.position = position;
      this.velocity = velocity;

      this.radius = 7;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = "black";
      ctx.fill();
      ctx.closePath();
    }

    update() {
      this.draw();
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;

      // gravity function
      if (
        this.position.y + this.radius + this.velocity.y >= 470 ||
        //platform 1 from x=320 to x= 720 y=380
        (this.position.x >= 320 &&
          this.position.x <= 720 &&
          this.position.y + this.radius + this.velocity.y >= 380 &&
          this.position.y + this.radius <= 383) ||
        //platform 2 from x=701 to x= 900 y=320
        (this.position.x >= 701 &&
          this.position.x <= 900 &&
          this.position.y + this.radius + this.velocity.y >= 320 &&
          this.position.y + this.radius <= 323) ||
        //platform 3 from x=125 to x= 324 y=320
        (this.position.x >= 125 &&
          this.position.x <= 324 &&
          this.position.y + this.radius + this.velocity.y >= 320 &&
          this.position.y + this.radius <= 323) ||
        //platform 4 from x=179 to x= 276 y=406
        (this.position.x >= 179 &&
          this.position.x <= 276 &&
          this.position.y + this.radius + this.velocity.y >= 406 &&
          this.position.y + this.radius <= 409) ||
        //platform 5 from x= 750 to x= 847 y=406
        (this.position.x >= 750 &&
          this.position.x <= 847 &&
          this.position.y + this.radius + this.velocity.y >= 406 &&
          this.position.y + this.radius <= 409) ||
        //platform 7 from x= 777 to x= 820 y=270
        (this.position.x >= 777 &&
          this.position.x <= 820 &&
          this.position.y + this.radius + this.velocity.y >= 270 &&
          this.position.y + this.radius <= 273) ||
        //platform 8 from x= 205 to x= 248 y=270
        (this.position.x >= 205 &&
          this.position.x <= 248 &&
          this.position.y + this.radius + this.velocity.y >= 270 &&
          this.position.y + this.radius <= 273) ||
        //platform 9 from x= 360 to x= 670 y=160
        (this.position.x >= 360 &&
          this.position.x <= 670 &&
          this.position.y + this.radius + this.velocity.y >= 160 &&
          this.position.y + this.radius <= 163) ||
        //platform 10 from x= 130 to x= 320
        (this.position.x >= 130 &&
          this.position.x <= 320 &&
          this.position.y + this.radius + this.velocity.y >= 240 &&
          this.position.y + this.radius <= 243) ||
        //platform 11 from x= 706 to x= 895 y=240
        (this.position.x >= 706 &&
          this.position.x <= 895 &&
          this.position.y + this.radius + this.velocity.y >= 240 &&
          this.position.y + this.radius <= 243)
      ) {
        this.velocity.y = 0;
        if (this.velocity.x <= -1) {
          this.velocity.x += 0.25;
        } else if (this.velocity.x >= 1) {
          this.velocity.x -= 0.25;
        } else {
          this.velocity.x = 0;
        }
      } else this.velocity.y += gravity;

      if (
        this.position.x + this.radius >= luffy.position.x &&
        this.position.x <= luffy.position.x + 50 &&
        this.position.y + this.radius >= luffy.position.y &&
        this.position.y <= luffy.position.y + 150 &&
        goblin.islongRange == true &&
        luffy.isSubstituting != true
      ) {
        console.log("bomb hit");
        luffy.takeHitLongRange();
        hitTakenLongRange = true;
        goblin.islongRange = false;
        this.velocity.x = 0;
        this.velocity.y = 0;
        this.radius = 15;
        bombs.splice(0, 1);
        gsap.to("#enemyHealth", {
          width: enemy.health + "%",
        });
        ctx.fillStyle = "red";
      }
    }
  }

  class Head {
    constructor({ position, velocity }) {
      this.position = position;
      this.velocity = velocity;
      //this.image = imageSrc
      this.framesElapsed = 0;
      this.radius = 7;
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = "brown";
      ctx.fill();
      ctx.closePath();
    }

    update() {
      this.draw();
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;

      // gravity function
      if (
        this.position.y + this.height >= 470 ||
        //platform 1 from x=320 to x= 720 y=380
        (this.position.x + this.width >= 320 &&
          this.position.x + this.width <= 720 &&
          this.position.y + this.height >= 380 &&
          this.position.y + this.height <= 385) ||
        //platform 2 from x=701 to x= 900 y=320
        (this.position.x + this.width >= 701 &&
          this.position.x + this.width <= 900 &&
          this.position.y + this.height >= 320 &&
          this.position.y + this.height <= 325) ||
        //platform 3 from x=125 to x= 324 y=320
        (this.position.x + this.width >= 125 &&
          this.position.x + this.width <= 324 &&
          this.position.y + this.height >= 320 &&
          this.position.y + this.height <= 325) ||
        //platform 4 from x=179 to x= 276 y=406
        (this.position.x + this.width >= 179 &&
          this.position.x + this.width <= 276 &&
          this.position.y + this.height >= 406 &&
          this.position.y + this.height <= 411) ||
        //platform 5 from x= 750 to x= 847 y=406
        (this.position.x >= 750 &&
          this.position.x <= 847 &&
          this.position.y + this.height >= 406 &&
          this.position.y + this.height <= 411) ||
        //platform 7 from x= 777 to x= 820 y=270
        (this.position.x + this.width >= 777 &&
          this.position.x + this.width <= 820 &&
          this.position.y + this.height >= 270 &&
          this.position.y + this.height <= 275) ||
        //platform 8 from x= 205 to x= 248 y=270
        (this.position.x + this.width >= 205 &&
          this.position.x + this.width <= 248 &&
          this.position.y + this.height >= 270 &&
          this.position.y + this.height <= 275) ||
        //platform 9 from x= 360 to x= 670 y=160
        (this.position.x + this.width >= 360 &&
          this.position.x + this.width <= 670 &&
          this.position.y + this.height >= 160 &&
          this.position.y + this.height <= 165) ||
        //platform 10 from x= 130 to x= 320
        (this.position.x + this.width >= 130 &&
          this.position.x + this.width <= 320 &&
          this.position.y + this.height >= 240 &&
          this.position.y + this.height <= 245) ||
        //platform 11 from x= 706 to x= 895 y=240
        (this.position.x + this.width >= 706 &&
          this.position.x + this.width <= 895 &&
          this.position.y + this.height >= 240 &&
          this.position.y + this.height <= 245)
      ) {
        this.velocity.y = 0;
        this.velocity.x = 0;
      } else this.velocity.y += spearGravity;

      if (
        this.position.x + this.radius >= player.position.x + 21 &&
        this.position.x + this.radius <= player.position.x + 29 &&
        this.position.y >= player.position.y &&
        this.position.y <= player.position.y + player.height &&
        enemy.islongRange == true &&
        player.isSubstituting != true
      ) {
        console.log("headbutt hit");
        player.takeHitLongRange();
        gsap.to("#playerHealth", {
          width: player.health + "%",
        });
        this.position.x = 1;
        this.position.y = 576;
      }
    }
  }
  let bombs = [];
  let heads = [];

  //game timer
  function decreaseTimer() {
    if (timer > 0) {
      timerId = setTimeout(decreaseTimer, 1000);
      timer--;
      document.querySelector("#timer").innerHTML = timer;
    }

    if (timer === 0) {
      determineWinner({ player, enemy, timerId });
    }
  }
  //clear pop-up
  document.getElementById("myForm").style.display = "none";
  document.getElementById("playAgain").style.display = "none";
  background.image.src = "./img/pirateship_background.png";
  //start timer
  decreaseTimer();
  function animate() {
    window.requestAnimationFrame(animate);
    ctx.fillStyle = "rgba(67, 200, 220, .3)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    background.draw();
    player.update();
    enemy.update();
    platform1.draw();
    platform2.draw();
    platform3.draw();
    platform4.draw();
    platform5.draw();
    platform6.draw();
    platform7.draw();
    platform8.draw();
    platform9.draw();

    if (hitTakenLongRange == true) {
      const explode = new Explode({
        position: {
          x: enemy.position.x,
          y: enemy.position.y,
        },
        imageSrc: "./img/explosion.png",
        scale: 1,
        framesMax: 1,
      });
      explode.draw();
    }
    bombs.forEach((bomb, index) => {
      if (bomb.position.x <= -20 || bomb.position.x >= 1044) {
        setTimeout(() => {
          bombs.splice(index, 1);
        }, 0);
      } else {
        bomb.update();
      }
    });

    heads.forEach((head, index) => {
      if (head.position.x <= -20 || head.position.x >= 1044) {
        setTimeout(() => {
          heads.splice(index, 1);
        }, 0);
      } else {
        head.update();
      }
    });

    goblin.velocity.x = 0;
    luffy.velocity.x = 0;

    // player movement

    if (keys.d.pressed && player.lastKey === "d") {
      goblin.velocity.x = 5;
      goblin.switchSprite("run");
    } else if (keys.a.pressed && player.lastKey === "a") {
      goblin.velocity.x = -5;
      goblin.switchSprite("runLeft");
    } else {
      if (goblin.position.x <= enemy.position.x) {
        goblin.switchSprite("idle");
      } else if (goblin.position.x >= enemy.position.x) {
        goblin.switchSprite("idleLeft");
        goblin.attackBox.offset.x - 150;
        goblin.substitutionZone.offset.x - 150;
      }
    }

    // jumping
    if (goblin.velocity.y < 0) {
      goblin.switchSprite("jump");
    } else if (goblin.velocity.y > 0) {
      goblin.switchSprite("fall");
    }

    // Enemy movement
    if (player.position.x <= enemy.position.x - 220) {
      setTimeout(() => {
        enemy.switchSprite("runLeft");
        enemy.velocity.x = -5;
      }, 500);
    } else if (player.position.x >= enemy.position.x + 110) {
      setTimeout(() => {
        enemy.switchSprite("run");
        enemy.velocity.x = 5;
      }, 500);
    } else {
      enemy.velocity.x = 0;
      enemy.switchSprite("idleLeft");
      if (
        player.position.x <= enemy.position.x &&
        enemy.position.y >= player.position.y - 25 &&
        enemy.position.y <= player.position.y + 75 &&
        count <= 0
      ) {
        enemy.attackBox.offset.x = -70;
        enemy.substitutionZone.offset.x = -70;
        enemy.isAttacking = true;
        enemy.switchSprite("attackLeft");
        count += 1;
        setTimeout(() => {
          count = 0;
        }, 800);
      } else if (
        player.position.x >= enemy.position.x &&
        enemy.position.y >= player.position.y - 25 &&
        enemy.position.y <= player.position.y + 75 &&
        count <= 0
      ) {
        enemy.attackBox.offset.x = 20;
        enemy.isAttacking = true;
        enemy.switchSprite("attack1");
        count += 1;
        setTimeout(() => {
          count = 0;
        }, 800);
      } else {
        if (player.position.x <= enemy.position.x) {
          enemy.switchSprite("idleLeft");
          setTimeout(() => {
            if (player.position.y <= enemy.position.y - 75) {
              if (enemy.isJumping != true) {
                enemy.isJumping = true;
                enemy.velocity.y = -11;
                enemy.switchSprite("jump");
                setTimeout(jumpCheck2, 680);
              }
            }
          }, 700);
        } else {
          enemy.switchSprite("idle");
          setTimeout(() => {
            if (player.position.y <= enemy.position.y - 75) {
              if (enemy.isJumping != true) {
                enemy.isJumping = true;
                enemy.velocity.y = -11;
                enemy.switchSprite("jump");
                setTimeout(jumpCheck2, 680);
              }
            }
          }, 700);
        }
      }
    }

    if (
      player.position.y <= enemy.position.y + 125 &&
      player.position.y >= enemy.position.y - 40 &&
      Math.abs(player.position.x - enemy.position.x) >= 300
    ) {
      //player 2 throw attack
      enemy.islongRange = true;
      if (enemy.position.x >= player.position.x && lcount <= 0) {
        enemy.longRangeLeft();
        setTimeout(() => {
          heads.push(
            new Head({
              position: {
                x: enemy.position.x - 50,
                y: enemy.position.y + 25,
              },
              velocity: {
                x: -9,
                y: -1,
              },
            })
          );
        }, 500);
        console.log(heads);
        lcount += 1;
        setTimeout(() => {
          lcount = 0;
        }, 500);
      } else if (enemy.position.x <= player.position.x && lcount <= 0) {
        enemy.longRange();
        setTimeout(() => {
          heads.push(
            new Head({
              position: {
                x: enemy.position.x + 50,
                y: enemy.position.y + 25,
              },
              velocity: {
                x: 9,
                y: -1,
              },
            })
          );
        }, 500);
        console.log(heads);
        lcount += 1;
        setTimeout(() => {
          lcount = 0;
        }, 500);
      }
    }

    // jumping
    if (enemy.velocity.y < 0) {
      enemy.switchSprite("jump");
    } else if (enemy.velocity.y > 0) {
      enemy.switchSprite("fall");
    }

    // detect for collision if Huntres hits Goblin
    if (
      rectangularCollision({
        rectangle1: player,
        rectangle2: enemy,
      }) &&
      player.isAttacking &&
      player.framesCurrent === 2 &&
      enemy.isSubstituting != true
    ) {
      enemy.takeHit();
      player.isAttacking = false;

      gsap.to("#enemyHealth", {
        width: enemy.health + "%",
      });
    }

    // if player misses
    if (player.isAttacking && player.framesCurrent === 4) {
      player.isAttacking = false;
    }

    // If Goblin hits Huntres
    if (
      rectangularCollision({
        rectangle1: enemy,
        rectangle2: player,
      }) &&
      enemy.isAttacking &&
      enemy.framesCurrent === 2 &&
      player.isSubstituting != true
    ) {
      player.takeHit();
      enemy.isAttacking = false;

      gsap.to("#playerHealth", {
        width: player.health + "%",
      });
    }

    // if player misses
    if (enemy.isAttacking && enemy.framesCurrent === 2) {
      enemy.isAttacking = false;
    }

    // end game based on health
    if (enemy.health <= 0 || player.health <= 0) {
      determineWinner({ player, enemy, timerId });
    }

    //detect for collision between attack and substitution
    if (
      circularCollision({
        rectangle: player,
        circle: enemy,
      }) &&
      player.isAttacking &&
      enemy.isSubstituting
    ) {
      player.isAttacking = false;
      enemy.position.y -= 100;
      enemy.switchSprite("fall");
      console.log("Goblin uses Substitution Jutsu");
    }
    if (
      circularCollision({
        rectangle: enemy,
        circle: player,
      }) &&
      enemy.isAttacking &&
      player.isSubstituting
    ) {
      player.isAttacking = false;
      player.position.y -= 100;
      player.switchSprite("fall");
      console.log("Huntres uses Substitution Jutsu");
    }

    // end game based on health
    if (enemy.health <= 0 || player.health <= 0) {
      determineWinner({ player, enemy, timerId });
    }
  }
  animate();
  //Listens for when key is pressed
  window.addEventListener("keydown", (event) => {
    console.log(event.key);

    switch (event.key) {
      //Player 1 movement a, w, d for left, up, right
      case "d":
        keys.d.pressed = true;
        player.lastKey = "d";
        player.switchSprite("run");
        break;
      case "a":
        keys.a.pressed = true;
        player.lastKey = "a";
        player.switchSprite("runLeft");
        break;
      case "w":
        if (player.isJumping != true) {
          player.isJumping = true;
          player.velocity.y = -10;
          player.switchSprite("jump");
        }
        break;
      //Player 2 movement uses arrow keys
      case "ArrowRight":
        keys.ArrowRight.pressed = true;
        enemy.lastKey = "ArrowRight";
        break;
      case "ArrowLeft":
        keys.ArrowLeft.pressed = true;
        enemy.lastKey = "ArrowLeft";
        break;
      case "ArrowUp":
        if (enemy.isJumping != true) {
          enemy.isJumping = true;
          enemy.velocity.y = -10;
          enemy.switchSprite("jump");
        }
        break;
      //player 1 attack
      case "Shift":
        //player 1 attack
        player.isAttacking = true;
        if (enemy.position.x >= player.position.x) {
          player.attackBox.offset.x = 20;
          player.attack();
        } else {
          player.attackBox.offset.x = -50;
          player.attackLeft();
        }
        break;
      //player 2 attack
      case "Control":
        //player 2 attack

        break;
      //player 2 substitution jutsu
      case "Meta":
        enemy.isSubstituting = true;
        break;
      //player 1 substitution jutsu
      case "Alt":
        //player 1 substitution jutsu
        player.isSubstituting = true;
        break;
      //player 2 throws bomb
      case "z":
        //player 2 throw attack
        goblin.islongRange = true;
        if (goblin.position.x >= luffy.position.x) {
          goblin.longRangeLeft();
          setTimeout(() => {
            bombs.push(
              new Bomb({
                position: {
                  x: goblin.position.x - 50,
                  y: goblin.position.y,
                },
                velocity: {
                  x: -9,
                  y: -3,
                },
              })
            );
          }, 500);

          console.log(bombs);
        } else {
          goblin.longRange();
          setTimeout(() => {
            bombs.push(
              new Bomb({
                position: {
                  x: goblin.position.x + 50,
                  y: goblin.position.y,
                },
                velocity: {
                  x: 9,
                  y: -3,
                },
              })
            );
          }, 500);
          console.log(bombs);
        }
        break;
      //player 1 throws spear
      case "m":
        //player 2 throw attack

        break;
    }
  });

  //listens for when key is lifted up
  window.addEventListener("keyup", (event) => {
    switch (event.key) {
      case "d":
        keys.d.pressed = false;
        break;
      case "a":
        keys.a.pressed = false;
        break;
      case "w":
        keys.w.pressed = false;
        setTimeout(jumpCheck1, 680);
      case "ArrowRight":
        keys.ArrowRight.pressed = false;
        break;
      case "ArrowLeft":
        keys.ArrowLeft.pressed = false;
        break;
      case "ArrowUp":
        keys.ArrowUp.pressed = false;
        setTimeout(jumpCheck2, 680);
        break;
      case "Shift":
        keys.Shift.pressed = false;
        break;
      case "Control":
        keys.Control.pressed = false;
        break;
      case "Meta":
        keys.Meta.pressed = false;
        enemy.isSubstituting = false;
        break;
      case "Alt":
        keys.Alt.pressed = false;
        player.isSubstituting = false;
        break;
      case "m":
        break;
      case "z":
        keys.z.pressed = false;
        setTimeout(() => {
          bombs.splice(0, 1);
        }, 5000);
        break;
    }
  });
  function jumpCheck1() {
    return (player.isJumping = false);
  }
  function jumpCheck2() {
    return (enemy.isJumping = false);
  }
}

// Chose Luffy $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
function choseLuffy() {
  console.log("you chose luffy");
  lastGame = 3;
  let count = 0;
  let lcount = 0;
  let player = luffy;
  let enemy = naruto;
  platform9.position.y = 186;
  platform9.color = "tan";
  platform1.position.y = 325;
  platform1.position.x = 390;
  platform1.width = 270;
  platform1.color = "tan";
  platform2.position.y = 290;
  platform2.position.x = 780;
  platform2.color = "red";
  platform3.position.y = 290;
  platform3.position.x = 5;
  platform3.color = "red";
  platform4.position.y = 360;
  platform4.position.x = 870;
  platform4.color = "tan";
  platform5.position.y = 360;
  platform5.position.x = 98;
  platform5.color = "tan";
  platform6.position.y = 406;
  platform6.color = "tan";
  platform7.position.y = 250;
  platform7.position.x = 780;
  platform7.width = 80;
  platform7.color = "tan";
  platform8.position.y = 225;
  platform8.position.x = 180;
  platform8.color = "tan";
  platform8.width = 110;
  class Jutsu {
    constructor({ position, velocity }) {
      this.position = position;
      this.velocity = velocity;

      this.radius = 7;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = "white";
      ctx.fill();
      ctx.closePath();
    }

    update() {
      this.draw();
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;

      // gravity function
      if (
        this.position.y + this.radius + this.velocity.y >= 470 ||
        //platform 1 from x=320 to x= 720 y=380
        (this.position.x >= 320 &&
          this.position.x <= 720 &&
          this.position.y + this.radius + this.velocity.y >= 380 &&
          this.position.y + this.radius <= 383) ||
        //platform 2 from x=701 to x= 900 y=320
        (this.position.x >= 701 &&
          this.position.x <= 900 &&
          this.position.y + this.radius + this.velocity.y >= 320 &&
          this.position.y + this.radius <= 323) ||
        //platform 3 from x=125 to x= 324 y=320
        (this.position.x >= 125 &&
          this.position.x <= 324 &&
          this.position.y + this.radius + this.velocity.y >= 320 &&
          this.position.y + this.radius <= 323) ||
        //platform 4 from x=179 to x= 276 y=406
        (this.position.x >= 179 &&
          this.position.x <= 276 &&
          this.position.y + this.radius + this.velocity.y >= 406 &&
          this.position.y + this.radius <= 409) ||
        //platform 5 from x= 750 to x= 847 y=406
        (this.position.x >= 750 &&
          this.position.x <= 847 &&
          this.position.y + this.radius + this.velocity.y >= 406 &&
          this.position.y + this.radius <= 409) ||
        //platform 7 from x= 777 to x= 820 y=270
        (this.position.x >= 777 &&
          this.position.x <= 820 &&
          this.position.y + this.radius + this.velocity.y >= 270 &&
          this.position.y + this.radius <= 273) ||
        //platform 8 from x= 205 to x= 248 y=270
        (this.position.x >= 205 &&
          this.position.x <= 248 &&
          this.position.y + this.radius + this.velocity.y >= 270 &&
          this.position.y + this.radius <= 273) ||
        //platform 9 from x= 360 to x= 670 y=160
        (this.position.x >= 360 &&
          this.position.x <= 670 &&
          this.position.y + this.radius + this.velocity.y >= 160 &&
          this.position.y + this.radius <= 163) ||
        //platform 10 from x= 130 to x= 320
        (this.position.x >= 130 &&
          this.position.x <= 320 &&
          this.position.y + this.radius + this.velocity.y >= 240 &&
          this.position.y + this.radius <= 243) ||
        //platform 11 from x= 706 to x= 895 y=240
        (this.position.x >= 706 &&
          this.position.x <= 895 &&
          this.position.y + this.radius + this.velocity.y >= 240 &&
          this.position.y + this.radius <= 243)
      ) {
        this.velocity.y = 0;
        if (this.velocity.x <= -1) {
          this.velocity.x += 0.25;
        } else if (this.velocity.x >= 1) {
          this.velocity.x -= 0.25;
        } else {
          this.velocity.x = 0;
        }
      } else this.velocity.y += spearGravity;

      if (
        this.position.x + this.radius >= player.position.x + 21 &&
        this.position.x + this.radius <= player.position.x + 29 &&
        this.position.y >= player.position.y &&
        this.position.y <= player.position.y + player.height &&
        enemy.islongRange == true &&
        player.isSubstituting != true
      ) {
        console.log("jutsu hit");
        hitTakenLongRange = true;
        player.takeHitLongRange();
        gsap.to("#playerHealth", {
          width: player.health + "%",
        });
        this.position.x = 1;
        this.position.y = 576;
      }
    }
  }

  class Head {
    constructor({ position, velocity }) {
      this.position = position;
      this.velocity = velocity;
      //this.image = imageSrc
      this.framesElapsed = 0;
      this.radius = 7;
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = "brown";
      ctx.fill();
      ctx.closePath();
    }

    update() {
      this.draw();
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;

      // gravity function
      if (
        this.position.y + this.height >= 470 ||
        //platform 1 from x=320 to x= 720 y=380
        (this.position.x + this.width >= 320 &&
          this.position.x + this.width <= 720 &&
          this.position.y + this.height >= 380 &&
          this.position.y + this.height <= 385) ||
        //platform 2 from x=701 to x= 900 y=320
        (this.position.x + this.width >= 701 &&
          this.position.x + this.width <= 900 &&
          this.position.y + this.height >= 320 &&
          this.position.y + this.height <= 325) ||
        //platform 3 from x=125 to x= 324 y=320
        (this.position.x + this.width >= 125 &&
          this.position.x + this.width <= 324 &&
          this.position.y + this.height >= 320 &&
          this.position.y + this.height <= 325) ||
        //platform 4 from x=179 to x= 276 y=406
        (this.position.x + this.width >= 179 &&
          this.position.x + this.width <= 276 &&
          this.position.y + this.height >= 406 &&
          this.position.y + this.height <= 411) ||
        //platform 5 from x= 750 to x= 847 y=406
        (this.position.x >= 750 &&
          this.position.x <= 847 &&
          this.position.y + this.height >= 406 &&
          this.position.y + this.height <= 411) ||
        //platform 7 from x= 777 to x= 820 y=270
        (this.position.x + this.width >= 777 &&
          this.position.x + this.width <= 820 &&
          this.position.y + this.height >= 270 &&
          this.position.y + this.height <= 275) ||
        //platform 8 from x= 205 to x= 248 y=270
        (this.position.x + this.width >= 205 &&
          this.position.x + this.width <= 248 &&
          this.position.y + this.height >= 270 &&
          this.position.y + this.height <= 275) ||
        //platform 9 from x= 360 to x= 670 y=160
        (this.position.x + this.width >= 360 &&
          this.position.x + this.width <= 670 &&
          this.position.y + this.height >= 160 &&
          this.position.y + this.height <= 165) ||
        //platform 10 from x= 130 to x= 320
        (this.position.x + this.width >= 130 &&
          this.position.x + this.width <= 320 &&
          this.position.y + this.height >= 240 &&
          this.position.y + this.height <= 245) ||
        //platform 11 from x= 706 to x= 895 y=240
        (this.position.x + this.width >= 706 &&
          this.position.x + this.width <= 895 &&
          this.position.y + this.height >= 240 &&
          this.position.y + this.height <= 245)
      ) {
        this.velocity.y = 0;
        this.velocity.x = 0;
      } else this.velocity.y += spearGravity;

      if (
        this.position.x + this.radius >= naruto.position.x &&
        this.position.x <= naruto.position.x + 50 &&
        this.position.y + this.radius >= naruto.position.y &&
        this.position.y <= naruto.position.y + 150 &&
        luffy.islongRange == true &&
        naruto.isSubstituting != true
      ) {
        console.log("headbutt hit");
        naruto.takeHit();
        luffy.islongRange = false;
        ctx.fillStyle = "red";
        gsap.to("#enemyHealth", {
          width: enemy.health + "%",
        });
      }
    }
  }
  let jutsus = [];
  let heads = [];

  //game timer
  function decreaseTimer() {
    if (timer > 0) {
      timerId = setTimeout(decreaseTimer, 1000);
      timer--;
      document.querySelector("#timer").innerHTML = timer;
    }

    if (timer === 0) {
      determineWinner({ player, enemy, timerId });
    }
  }
  //clear popup
  document.getElementById("myForm").style.display = "none";
  document.getElementById("playAgain").style.display = "none";

  background.image.src = "./img/hiddenleaf_background.png";
  //start timer
  decreaseTimer();
  //start animations
  function animate() {
    window.requestAnimationFrame(animate);
    ctx.fillStyle = "rgba(67, 200, 220, .3)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    background.draw();
    luffy.update();
    naruto.update();
    platform1.draw();
    platform2.draw();
    platform3.draw();
    platform4.draw();
    platform5.draw();
    platform6.draw();
    platform7.draw();
    platform8.draw();
    platform9.draw();

    if (hitTakenLongRange == true) {
      const explode = new Explode({
        position: {
          x: luffy.position.x,
          y: luffy.position.y,
        },
        imageSrc: "./img/rasenshuriken.png",
        scale: 1,
        framesMax: 1,
      });
      explode.draw();
    }

    jutsus.forEach((jutsu, index) => {
      if (jutsu.position.x <= -20 || jutsu.position.x >= 1044) {
        setTimeout(() => {
          jutsus.splice(index, 1);
        }, 0);
      } else {
        jutsu.update();
      }
    });

    heads.forEach((head, index) => {
      if (head.position.x <= -20 || head.position.x >= 1044) {
        setTimeout(() => {
          heads.splice(index, 1);
        }, 0);
      } else {
        head.update();
      }
    });

    player.velocity.x = 0;
    enemy.velocity.x = 0;

    // player movement

    if (keys.d.pressed && player.lastKey === "d") {
      player.velocity.x = 5;
      player.switchSprite("run");
    } else if (keys.a.pressed && player.lastKey === "a") {
      player.velocity.x = -5;
      player.switchSprite("runLeft");
    } else {
      if (player.position.x <= enemy.position.x) {
        player.switchSprite("idle");
      } else if (player.position.x >= enemy.position.x) {
        player.switchSprite("idleLeft");
        player.attackBox.offset.x - 150;
        player.substitutionZone.offset.x - 150;
      }
    }

    // jumping
    if (player.velocity.y < 0) {
      player.switchSprite("jump");
    } else if (player.velocity.y > 0) {
      player.switchSprite("fall");
    }

    // Enemy movement
    if (player.position.x <= enemy.position.x - 220) {
      setTimeout(() => {
        enemy.switchSprite("runLeft");
        enemy.velocity.x = -4;
      }, 500);
    } else if (player.position.x >= enemy.position.x + 110) {
      setTimeout(() => {
        enemy.switchSprite("run");
        enemy.velocity.x = 4;
      }, 500);
    } else {
      enemy.velocity.x = 0;
      enemy.switchSprite("idleLeft");
      if (
        player.position.x <= enemy.position.x &&
        enemy.position.y >= player.position.y - 25 &&
        enemy.position.y <= player.position.y + 75 &&
        count <= 0
      ) {
        enemy.attackBox.offset.x = -70;
        enemy.substitutionZone.offset.x = -70;
        enemy.isAttacking = true;
        enemy.switchSprite("attackLeft");
        count += 1;
        setTimeout(() => {
          count = 0;
        }, 800);
      } else if (
        player.position.x >= enemy.position.x &&
        enemy.position.y >= player.position.y - 25 &&
        enemy.position.y <= player.position.y + 75 &&
        count <= 0
      ) {
        enemy.attackBox.offset.x = 20;
        enemy.isAttacking = true;
        enemy.switchSprite("attack1");
        count += 1;
        setTimeout(() => {
          count = 0;
        }, 800);
      } else {
        if (player.position.x <= enemy.position.x) {
          enemy.switchSprite("idleLeft");
          setTimeout(() => {
            if (player.position.y <= enemy.position.y - 75) {
              if (enemy.isJumping != true) {
                enemy.isJumping = true;
                enemy.velocity.y = -11;
                enemy.switchSprite("jump");
                setTimeout(jumpCheck2, 680);
              }
            }
          }, 700);
        } else {
          enemy.switchSprite("idle");
          setTimeout(() => {
            if (player.position.y <= enemy.position.y - 75) {
              if (enemy.isJumping != true) {
                enemy.isJumping = true;
                enemy.velocity.y = -11;
                enemy.switchSprite("jump");
                setTimeout(jumpCheck2, 680);
              }
            }
          }, 700);
        }
      }
    }

    if (
      player.position.y <= enemy.position.y + 125 &&
      player.position.y >= enemy.position.y - 40 &&
      Math.abs(player.position.x - enemy.position.x) >= 300
    ) {
      //player 2 throw attack
      enemy.islongRange = true;
      if (enemy.position.x >= player.position.x && lcount <= 0) {
        enemy.longRangeLeft();
        setTimeout(() => {
          jutsus.push(
            new Jutsu({
              position: {
                x: enemy.position.x - 50,
                y: enemy.position.y + 25,
              },
              velocity: {
                x: -9,
                y: -1,
              },
            })
          );
        }, 500);
        console.log(jutsus);
        lcount += 1;
        setTimeout(() => {
          lcount = 0;
        }, 500);
      } else if (enemy.position.x <= player.position.x && lcount <= 0) {
        enemy.longRange();
        setTimeout(() => {
          jutsus.push(
            new Jutsu({
              position: {
                x: enemy.position.x + 50,
                y: enemy.position.y + 25,
              },
              velocity: {
                x: 9,
                y: -1,
              },
            })
          );
        }, 500);
        console.log(jutsus);
        lcount += 1;
        setTimeout(() => {
          lcount = 0;
        }, 500);
      }
    }

    // jumping
    if (enemy.velocity.y < 0) {
      enemy.switchSprite("jump");
    } else if (enemy.velocity.y > 0) {
      enemy.switchSprite("fall");
    }

    // detect for collision if Huntres hits Goblin
    if (
      rectangularCollision({
        rectangle1: player,
        rectangle2: enemy,
      }) &&
      player.isAttacking &&
      player.framesCurrent === 2 &&
      enemy.isSubstituting != true
    ) {
      enemy.takeHit();
      player.isAttacking = false;

      gsap.to("#enemyHealth", {
        width: enemy.health + "%",
      });
    }

    // if player misses
    if (player.isAttacking && player.framesCurrent === 4) {
      player.isAttacking = false;
    }

    // If Goblin hits Huntres
    if (
      rectangularCollision({
        rectangle1: enemy,
        rectangle2: player,
      }) &&
      enemy.isAttacking &&
      enemy.framesCurrent === 2 &&
      player.isSubstituting != true
    ) {
      player.takeHit();
      enemy.isAttacking = false;

      gsap.to("#playerHealth", {
        width: player.health + "%",
      });
    }

    // if player misses
    if (enemy.isAttacking && enemy.framesCurrent === 2) {
      enemy.isAttacking = false;
    }

    // end game based on health
    if (enemy.health <= 0 || player.health <= 0) {
      determineWinner({ player, enemy, timerId });
    }

    //detect for collision between attack and substitution
    if (
      circularCollision({
        rectangle: player,
        circle: enemy,
      }) &&
      player.isAttacking &&
      enemy.isSubstituting
    ) {
      player.isAttacking = false;
      enemy.position.y -= 100;
      enemy.switchSprite("fall");
      console.log("Goblin uses Substitution Jutsu");
    }
    if (
      circularCollision({
        rectangle: enemy,
        circle: player,
      }) &&
      enemy.isAttacking &&
      player.isSubstituting
    ) {
      player.isAttacking = false;
      player.position.y -= 100;
      player.switchSprite("fall");
      console.log("Huntres uses Substitution Jutsu");
    }

    // end game based on health
    if (enemy.health <= 0 || player.health <= 0) {
      determineWinner({ player, enemy, timerId });
    }
  }
  animate();
  //Listens for when key is pressed
  window.addEventListener("keydown", (event) => {
    console.log(event.key);

    switch (event.key) {
      //Player 1 movement a, w, d for left, up, right
      case "d":
        keys.d.pressed = true;
        player.lastKey = "d";
        player.switchSprite("run");
        break;
      case "a":
        keys.a.pressed = true;
        player.lastKey = "a";
        player.switchSprite("runLeft");
        break;
      case "w":
        if (player.isJumping != true) {
          player.isJumping = true;
          player.velocity.y = -10;
          player.switchSprite("jump");
        }
        break;
      //Player 2 movement uses arrow keys
      case "ArrowRight":
        keys.ArrowRight.pressed = true;
        enemy.lastKey = "ArrowRight";
        break;
      case "ArrowLeft":
        keys.ArrowLeft.pressed = true;
        enemy.lastKey = "ArrowLeft";
        break;
      case "ArrowUp":
        if (enemy.isJumping != true) {
          enemy.isJumping = true;
          enemy.velocity.y = -10;
          enemy.switchSprite("jump");
        }
        break;
      //player 1 attack
      case "Shift":
        //player 1 attack
        player.isAttacking = true;
        if (enemy.position.x >= player.position.x) {
          player.attackBox.offset.x = 20;
          player.attack();
        } else {
          player.attackBox.offset.x = -50;
          player.attackLeft();
        }
        break;
      //player 2 attack
      case "Control":
        //player 2 attack
        enemy.isAttacking = true;
        if (enemy.position.x >= player.position.x) {
          enemy.attackBox.offset.x = -50;
          enemy.attackLeft();
        } else {
          enemy.attackBox.offset.x = 20;
          enemy.attack();
        }
        break;
      //player 2 substitution jutsu
      case "Meta":
        enemy.isSubstituting = true;
        break;
      //player 1 substitution jutsu
      case "Alt":
        //player 1 substitution jutsu
        player.isSubstituting = true;
        break;
      //player 2 throws bomb
      case "m":
        //player 2 throw attack
        naruto.islongRange = true;
        if (naruto.position.x >= player.position.x) {
          naruto.longRangeLeft();
          setTimeout(() => {
            jutsus.push(
              new Jutsu({
                position: {
                  x: naruto.position.x - 50,
                  y: naruto.position.y,
                },
                velocity: {
                  x: -9,
                  y: -3,
                },
              })
            );
          }, 500);

          console.log(jutsus);
        } else {
          naruto.longRange();
          setTimeout(() => {
            jutsus.push(
              new Jutsu({
                position: {
                  x: naruto.position.x + 50,
                  y: naruto.position.y,
                },
                velocity: {
                  x: 9,
                  y: -3,
                },
              })
            );
          }, 500);
          console.log(jutsus);
        }
        break;
      //player 1 throws spear
      case "z":
        //player 2 throw attack
        luffy.islongRange = true;
        if (enemy.position.x >= player.position.x) {
          luffy.longRange();
          setTimeout(() => {
            heads.push(
              new Head({
                position: {
                  x: luffy.position.x + 20,
                  y: luffy.position.y + 5,
                },
                velocity: {
                  x: 12,
                  y: 0,
                },
              })
            );
          }, 500);
          console.log(heads);
        } else {
          luffy.longRangeLeft();
          setTimeout(() => {
            heads.push(
              new Head({
                position: {
                  x: luffy.position.x - 20,
                  y: luffy.position.y + 5,
                },
                velocity: {
                  x: -12,
                  y: 0,
                },
              })
            );
          }, 500);
          console.log(heads);
        }
        break;
    }
  });

  //listens for when key is lifted up
  window.addEventListener("keyup", (event) => {
    switch (event.key) {
      case "d":
        keys.d.pressed = false;
        break;
      case "a":
        keys.a.pressed = false;
        break;
      case "w":
        keys.w.pressed = false;
        setTimeout(jumpCheck1, 680);
      case "ArrowRight":
        keys.ArrowRight.pressed = false;
        break;
      case "ArrowLeft":
        keys.ArrowLeft.pressed = false;
        break;
      case "ArrowUp":
        keys.ArrowUp.pressed = false;
        setTimeout(jumpCheck2, 680);
        break;
      case "Shift":
        keys.Shift.pressed = false;
        break;
      case "Control":
        keys.Control.pressed = false;
        break;
      case "Meta":
        keys.Meta.pressed = false;
        enemy.isSubstituting = false;
        break;
      case "Alt":
        keys.Alt.pressed = false;
        player.isSubstituting = false;
        break;
      case "m":
        keys.m.pressed = false;
        setTimeout(() => {
          jutsus.splice(0, 1);
        }, 5000);
        break;
      case "z":
        keys.z.pressed = false;
        setTimeout(() => {
          heads.splice(0, 1);
        }, 5000);
        break;
    }
  });
  function jumpCheck1() {
    return (player.isJumping = false);
  }
  function jumpCheck2() {
    return (enemy.isJumping = false);
  }
}

// Chose Naruto $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
function choseNaruto() {
  console.log("you chose naruto");
  lastGame = 4;
  let player = naruto;
  let enemy = cat;
  let count = 0;
  let lcount = 0;

  class Jutsu {
    constructor({ position, velocity }) {
      this.position = position;
      this.velocity = velocity;

      this.radius = 7;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = "white";
      ctx.fill();
      ctx.closePath();
    }

    update() {
      this.draw();
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;

      // gravity function
      if (
        this.position.y + this.radius + this.velocity.y >= 470 ||
        //platform 1 from x=320 to x= 720 y=380
        (this.position.x >= 320 &&
          this.position.x <= 720 &&
          this.position.y + this.radius + this.velocity.y >= 380 &&
          this.position.y + this.radius <= 383) ||
        //platform 2 from x=701 to x= 900 y=320
        (this.position.x >= 701 &&
          this.position.x <= 900 &&
          this.position.y + this.radius + this.velocity.y >= 320 &&
          this.position.y + this.radius <= 323) ||
        //platform 3 from x=125 to x= 324 y=320
        (this.position.x >= 125 &&
          this.position.x <= 324 &&
          this.position.y + this.radius + this.velocity.y >= 320 &&
          this.position.y + this.radius <= 323) ||
        //platform 4 from x=179 to x= 276 y=406
        (this.position.x >= 179 &&
          this.position.x <= 276 &&
          this.position.y + this.radius + this.velocity.y >= 406 &&
          this.position.y + this.radius <= 409) ||
        //platform 5 from x= 750 to x= 847 y=406
        (this.position.x >= 750 &&
          this.position.x <= 847 &&
          this.position.y + this.radius + this.velocity.y >= 406 &&
          this.position.y + this.radius <= 409) ||
        //platform 7 from x= 777 to x= 820 y=270
        (this.position.x >= 777 &&
          this.position.x <= 820 &&
          this.position.y + this.radius + this.velocity.y >= 270 &&
          this.position.y + this.radius <= 273) ||
        //platform 8 from x= 205 to x= 248 y=270
        (this.position.x >= 205 &&
          this.position.x <= 248 &&
          this.position.y + this.radius + this.velocity.y >= 270 &&
          this.position.y + this.radius <= 273) ||
        //platform 9 from x= 360 to x= 670 y=160
        (this.position.x >= 360 &&
          this.position.x <= 670 &&
          this.position.y + this.radius + this.velocity.y >= 160 &&
          this.position.y + this.radius <= 163) ||
        //platform 10 from x= 130 to x= 320
        (this.position.x >= 130 &&
          this.position.x <= 320 &&
          this.position.y + this.radius + this.velocity.y >= 240 &&
          this.position.y + this.radius <= 243) ||
        //platform 11 from x= 706 to x= 895 y=240
        (this.position.x >= 706 &&
          this.position.x <= 895 &&
          this.position.y + this.radius + this.velocity.y >= 240 &&
          this.position.y + this.radius <= 243)
      ) {
        this.velocity.y = 0;
        if (this.velocity.x <= -1) {
          this.velocity.x += 0.25;
        } else if (this.velocity.x >= 1) {
          this.velocity.x -= 0.25;
        } else {
          this.velocity.x = 0;
        }
      } else this.velocity.y += spearGravity;

      if (
        this.position.x + this.radius >= cat.position.x &&
        this.position.x <= cat.position.x + 50 &&
        this.position.y + this.radius >= cat.position.y &&
        this.position.y <= cat.position.y + 150 &&
        naruto.islongRange == true
      ) {
        console.log("justsu hit");
        hitTakenLongRange = true;
        cat.takeHitLongRange();
        naruto.islongRange = false;
        this.velocity.x = 0;
        this.velocity.y = 0;
        jutsus.splice(0, 1);
        ctx.fillStyle = "red";
        gsap.to("#enemyHealth", {
          width: enemy.health + "%",
        });
      }
    }
  }

  class Spear {
    constructor({ position, velocity }) {
      this.position = position;
      this.velocity = velocity;
      //this.image = imageSrc
      this.framesElapsed = 0;
      this.width = 60;
      this.height = 3;
    }
    draw() {
      ctx.fillStyle = "brown";
      ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
      // ctx.drawImage(this.image, 0, 0, 60, 20, this.position.x, this.position.y, this.width, this.height)
    }

    update() {
      this.draw();
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;

      // gravity function
      if (
        this.position.y + this.height >= 470 ||
        //platform 1 from x=320 to x= 720 y=380
        (this.position.x + this.width >= 320 &&
          this.position.x + this.width <= 720 &&
          this.position.y + this.height >= 380 &&
          this.position.y + this.height <= 385) ||
        //platform 2 from x=701 to x= 900 y=320
        (this.position.x + this.width >= 701 &&
          this.position.x + this.width <= 900 &&
          this.position.y + this.height >= 320 &&
          this.position.y + this.height <= 325) ||
        //platform 3 from x=125 to x= 324 y=320
        (this.position.x + this.width >= 125 &&
          this.position.x + this.width <= 324 &&
          this.position.y + this.height >= 320 &&
          this.position.y + this.height <= 325) ||
        //platform 4 from x=179 to x= 276 y=406
        (this.position.x + this.width >= 179 &&
          this.position.x + this.width <= 276 &&
          this.position.y + this.height >= 406 &&
          this.position.y + this.height <= 411) ||
        //platform 5 from x= 750 to x= 847 y=406
        (this.position.x >= 750 &&
          this.position.x <= 847 &&
          this.position.y + this.height >= 406 &&
          this.position.y + this.height <= 411) ||
        //platform 7 from x= 777 to x= 820 y=270
        (this.position.x + this.width >= 777 &&
          this.position.x + this.width <= 820 &&
          this.position.y + this.height >= 270 &&
          this.position.y + this.height <= 275) ||
        //platform 8 from x= 205 to x= 248 y=270
        (this.position.x + this.width >= 205 &&
          this.position.x + this.width <= 248 &&
          this.position.y + this.height >= 270 &&
          this.position.y + this.height <= 275) ||
        //platform 9 from x= 360 to x= 670 y=160
        (this.position.x + this.width >= 360 &&
          this.position.x + this.width <= 670 &&
          this.position.y + this.height >= 160 &&
          this.position.y + this.height <= 165) ||
        //platform 10 from x= 130 to x= 320
        (this.position.x + this.width >= 130 &&
          this.position.x + this.width <= 320 &&
          this.position.y + this.height >= 240 &&
          this.position.y + this.height <= 245) ||
        //platform 11 from x= 706 to x= 895 y=240
        (this.position.x + this.width >= 706 &&
          this.position.x + this.width <= 895 &&
          this.position.y + this.height >= 240 &&
          this.position.y + this.height <= 245)
      ) {
        this.velocity.y = 0;
        this.velocity.x = 0;
        setTimeout(() => {
          this.position.x = 1024;
          this.position.y = 576;
        }, 2000);
      } else this.velocity.y += spearGravity;

      if (
        this.position.x + this.width >= player.position.x + 21 &&
        this.position.x + this.width <= player.position.x + 29 &&
        this.position.y >= player.position.y &&
        this.position.y <= player.position.y + player.height &&
        enemy.islongRange == true &&
        player.isSubstituting != true
      ) {
        console.log("spear hit");
        player.takeHitLongRange();
        gsap.to("#playerHealth", {
          width: player.health + "%",
        });
        this.position.x = 1024;
        this.position.y = 576;
      }
    }
  }
  let jutsus = [];
  let spears = [];

  //game timer
  function decreaseTimer() {
    if (timer > 0) {
      timerId = setTimeout(decreaseTimer, 1000);
      timer--;
      document.querySelector("#timer").innerHTML = timer;
    }

    if (timer === 0) {
      determineWinner({ player, enemy, timerId });
    }
  }
  document.getElementById("myForm").style.display = "none";
  document.getElementById("playAgain").style.display = "none";
  background.image.src = "./img/library_background.png";
  decreaseTimer();
  function animate() {
    window.requestAnimationFrame(animate);
    ctx.fillStyle = "rgba(67, 200, 220, .3)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    background.draw();
    player.update();
    enemy.update();
    platform1.draw();
    platform2.draw();
    platform3.draw();
    platform4.draw();
    platform5.draw();
    platform6.draw();
    platform7.draw();
    platform8.draw();
    platform9.draw();
    if (hitTakenLongRange == true) {
      const explode = new Explode({
        position: {
          x: cat.position.x,
          y: cat.position.y,
        },
        imageSrc: "./img/rasenshuriken.png",
        scale: 1,
        framesMax: 1,
      });
      explode.draw();
    }
    jutsus.forEach((jutsu, index) => {
      if (jutsu.position.x <= -20 || jutsu.position.x >= 1044) {
        setTimeout(() => {
          jutsus.splice(index, 1);
        }, 0);
      } else {
        jutsu.update();
      }
    });

    spears.forEach((spear, index) => {
      if (spear.position.x <= -20 || spear.position.x >= 1044) {
        setTimeout(() => {
          spears.splice(index, 1);
        }, 0);
      } else {
        spear.update();
      }
    });

    player.velocity.x = 0;
    enemy.velocity.x = 0;

    // player movement

    if (keys.d.pressed && player.lastKey === "d") {
      player.velocity.x = 5;
      player.switchSprite("run");
    } else if (keys.a.pressed && player.lastKey === "a") {
      player.velocity.x = -5;
      player.switchSprite("runLeft");
    } else {
      if (player.position.x <= enemy.position.x) {
        player.switchSprite("idle");
      } else if (player.position.x >= enemy.position.x) {
        player.switchSprite("idleLeft");
        player.attackBox.offset.x - 150;
        player.substitutionZone.offset.x - 150;
      }
    }

    // jumping
    if (player.velocity.y < 0) {
      player.switchSprite("jump");
    } else if (player.velocity.y > 0) {
      player.switchSprite("fall");
    }

    // Enemy movement
    if (player.position.x <= enemy.position.x - 220) {
      setTimeout(() => {
        enemy.switchSprite("runLeft");
        enemy.velocity.x = -5;
      }, 500);
    } else if (player.position.x >= enemy.position.x + 110) {
      setTimeout(() => {
        enemy.switchSprite("run");
        enemy.velocity.x = 5;
      }, 500);
    } else {
      enemy.velocity.x = 0;
      enemy.switchSprite("idleLeft");
      if (
        player.position.x <= enemy.position.x &&
        enemy.position.y >= player.position.y - 25 &&
        enemy.position.y <= player.position.y + 75 &&
        count <= 0
      ) {
        enemy.attackBox.offset.x = -70;
        enemy.substitutionZone.offset.x = -70;
        enemy.isAttacking = true;
        enemy.switchSprite("attackLeft");
        count += 1;
        setTimeout(() => {
          count = 0;
        }, 800);
      } else if (
        player.position.x >= enemy.position.x &&
        enemy.position.y >= player.position.y - 25 &&
        enemy.position.y <= player.position.y + 75 &&
        count <= 0
      ) {
        enemy.attackBox.offset.x = 20;
        enemy.isAttacking = true;
        enemy.switchSprite("attack1");
        count += 1;
        setTimeout(() => {
          count = 0;
        }, 800);
      } else {
        if (player.position.x <= enemy.position.x) {
          enemy.switchSprite("idleLeft");
          setTimeout(() => {
            if (player.position.y <= enemy.position.y - 75) {
              if (enemy.isJumping != true) {
                enemy.isJumping = true;
                enemy.velocity.y = -11;
                enemy.switchSprite("jump");
                setTimeout(jumpCheck2, 680);
              }
            }
          }, 700);
        } else {
          enemy.switchSprite("idle");
          setTimeout(() => {
            if (player.position.y <= enemy.position.y - 75) {
              if (enemy.isJumping != true) {
                enemy.isJumping = true;
                enemy.velocity.y = -11;
                enemy.switchSprite("jump");
                setTimeout(jumpCheck2, 680);
              }
            }
          }, 700);
        }
      }
    }

    if (
      player.position.y <= enemy.position.y + 125 &&
      player.position.y >= enemy.position.y - 40 &&
      Math.abs(player.position.x - enemy.position.x) >= 300
    ) {
      //player 2 throw attack
      enemy.islongRange = true;
      if (enemy.position.x >= player.position.x && lcount <= 0) {
        enemy.longRangeLeft();
        setTimeout(() => {
          spears.push(
            new Spear({
              position: {
                x: enemy.position.x - 50,
                y: enemy.position.y,
              },
              velocity: {
                x: -9,
                y: -1,
              },
            })
          );
        }, 500);
        console.log(spears);
        lcount += 1;
        setTimeout(() => {
          lcount = 0;
        }, 500);
      } else if (enemy.position.x <= player.position.x && lcount <= 0) {
        enemy.longRange();
        setTimeout(() => {
          spears.push(
            new Spear({
              position: {
                x: enemy.position.x + 50,
                y: enemy.position.y,
              },
              velocity: {
                x: 9,
                y: -1,
              },
            })
          );
        }, 500);
        console.log(spears);
        lcount += 1;
        setTimeout(() => {
          lcount = 0;
        }, 500);
      }
    }

    // jumping
    if (enemy.velocity.y < 0) {
      enemy.switchSprite("jump");
    } else if (enemy.velocity.y > 0) {
      enemy.switchSprite("fall");
    }

    // detect for collision if Huntres hits Goblin
    if (
      rectangularCollision({
        rectangle1: player,
        rectangle2: enemy,
      }) &&
      player.isAttacking &&
      player.framesCurrent === 2 &&
      enemy.isSubstituting != true
    ) {
      enemy.takeHit();
      player.isAttacking = false;

      gsap.to("#enemyHealth", {
        width: enemy.health + "%",
      });
    }

    // if player misses
    if (player.isAttacking && player.framesCurrent === 4) {
      player.isAttacking = false;
    }

    // If Goblin hits Huntres
    if (
      rectangularCollision({
        rectangle1: enemy,
        rectangle2: player,
      }) &&
      enemy.isAttacking &&
      enemy.framesCurrent === 2 &&
      player.isSubstituting != true
    ) {
      player.takeHit();
      enemy.isAttacking = false;

      gsap.to("#playerHealth", {
        width: player.health + "%",
      });
    }

    // if player misses
    if (enemy.isAttacking && enemy.framesCurrent === 2) {
      enemy.isAttacking = false;
    }

    // end game based on health
    if (enemy.health <= 0 || player.health <= 0) {
      determineWinner({ player, enemy, timerId });
    }

    //detect for collision between attack and substitution
    if (
      circularCollision({
        rectangle: player,
        circle: enemy,
      }) &&
      player.isAttacking &&
      enemy.isSubstituting
    ) {
      player.isAttacking = false;
      enemy.position.y -= 100;
      enemy.switchSprite("fall");
      console.log("Goblin uses Substitution Jutsu");
    }
    if (
      circularCollision({
        rectangle: enemy,
        circle: player,
      }) &&
      enemy.isAttacking &&
      player.isSubstituting
    ) {
      player.isAttacking = false;
      player.position.y -= 100;
      player.switchSprite("fall");
      console.log("Huntres uses Substitution Jutsu");
    }

    // end game based on health
    if (enemy.health <= 0 || player.health <= 0) {
      determineWinner({ player, enemy, timerId });
    }
  }
  animate();
  //Listens for when key is pressed
  window.addEventListener("keydown", (event) => {
    console.log(event.key);

    switch (event.key) {
      //Player 1 movement a, w, d for left, up, right
      case "d":
        keys.d.pressed = true;
        player.lastKey = "d";
        player.switchSprite("run");
        break;
      case "a":
        keys.a.pressed = true;
        player.lastKey = "a";
        player.switchSprite("runLeft");
        break;
      case "w":
        if (player.isJumping != true) {
          player.isJumping = true;
          player.velocity.y = -11;
          player.switchSprite("jump");
        }
        break;
      //Player 2 movement uses arrow keys
      case "ArrowRight":
        keys.ArrowRight.pressed = true;
        enemy.lastKey = "ArrowRight";
        break;
      case "ArrowLeft":
        keys.ArrowLeft.pressed = true;
        enemy.lastKey = "ArrowLeft";
        break;
      case "ArrowUp":
        if (enemy.isJumping != true) {
          enemy.isJumping = true;
          enemy.velocity.y = -11;
          enemy.switchSprite("jump");
        }
        break;
      //player 1 attack
      case "Shift":
        //player 1 attack
        player.isAttacking = true;
        if (enemy.position.x >= player.position.x) {
          player.attackBox.offset.x = 20;
          player.attack();
        } else {
          player.attackBox.offset.x = -50;
          player.attackLeft();
        }
        break;
      //player 2 attack
      case "Control":
        //player 2 attack
        enemy.isAttacking = true;
        if (enemy.position.x >= player.position.x) {
          enemy.attackBox.offset.x = -50;
          enemy.attackLeft();
        } else {
          enemy.attackBox.offset.x = 20;
          enemy.attack();
        }
        break;
      //player 2 substitution jutsu
      case "Meta":
        enemy.isSubstituting = true;
        break;
      //player 1 substitution jutsu
      case "Alt":
        //player 1 substitution jutsu
        player.isSubstituting = true;
        break;
      //player 2 throws bomb
      case "m":
        //player 2 throw attack
        enemy.islongRange = true;
        if (enemy.position.x >= player.position.x) {
          enemy.longRangeLeft();
          setTimeout(() => {
            spears.push(
              new Spear({
                position: {
                  x: enemy.position.x - 50,
                  y: enemy.position.y,
                },
                velocity: {
                  x: -9,
                  y: -3,
                },
              })
            );
          }, 500);

          console.log(spears);
        } else {
          enemy.longRange();
          setTimeout(() => {
            spears.push(
              new Spear({
                position: {
                  x: enemy.position.x + 50,
                  y: enemy.position.y,
                },
                velocity: {
                  x: 9,
                  y: -3,
                },
              })
            );
          }, 500);
          console.log(spears);
        }
        break;
      //player 1 throws spear
      case "z":
        //player 2 throw attack
        player.islongRange = true;
        if (enemy.position.x >= player.position.x) {
          player.longRange();
          setTimeout(() => {
            jutsus.push(
              new Jutsu({
                position: {
                  x: player.position.x + 20,
                  y: player.position.y + 25,
                },
                velocity: {
                  x: 11,
                  y: -1,
                },
              })
            );
          }, 500);
          console.log(jutsus);
        } else {
          player.longRangeLeft();
          setTimeout(() => {
            jutsus.push(
              new Jutsu({
                position: {
                  x: player.position.x - 20,
                  y: player.position.y + 25,
                },
                velocity: {
                  x: -11,
                  y: -1,
                },
              })
            );
          }, 500);
          console.log(jutsus);
        }
        break;
    }
  });

  //listens for when key is lifted up
  window.addEventListener("keyup", (event) => {
    switch (event.key) {
      case "d":
        keys.d.pressed = false;
        break;
      case "a":
        keys.a.pressed = false;
        break;
      case "w":
        keys.w.pressed = false;
        setTimeout(jumpCheck1, 680);
      case "ArrowRight":
        keys.ArrowRight.pressed = false;
        break;
      case "ArrowLeft":
        keys.ArrowLeft.pressed = false;
        break;
      case "ArrowUp":
        keys.ArrowUp.pressed = false;
        setTimeout(jumpCheck2, 680);
        break;
      case "Shift":
        keys.Shift.pressed = false;
        break;
      case "Control":
        keys.Control.pressed = false;
        break;
      case "Meta":
        keys.Meta.pressed = false;
        enemy.isSubstituting = false;
        break;
      case "Alt":
        keys.Alt.pressed = false;
        player.isSubstituting = false;
        break;
      case "m":
        keys.m.pressed = false;
        setTimeout(() => {
          spears.splice(0, 1);
        }, 5000);
        break;
      case "z":
        keys.z.pressed = false;
        setTimeout(() => {
          jutsus.splice(0, 1);
        }, 250);
        break;
    }
  });
  function jumpCheck1() {
    return (player.isJumping = false);
  }
  function jumpCheck2() {
    return (enemy.isJumping = false);
  }
}

// Chose Cat $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
function choseCat() {
  console.log("you chose cat");
  lastGame = 5;
  let count = 0;
  let lcount = 0;
  let player = cat;
  let enemy = huntress;
  background.image.src = "./img/jungle_background.png";
  platform9.position.y = 174;
  platform9.position.x = 1;
  platform9.width = 220;
  platform9.color = "tan";
  platform1.position.y = 294;
  platform1.position.x = 300;
  platform1.width = 336;
  platform1.color = "tan";
  platform2.position.y = 210;
  platform2.position.x = 786;
  platform2.color = "tan";
  platform3.position.y = 222;
  platform3.position.x = 5;
  platform3.color = "tan";
  platform4.position.y = 336;
  platform4.position.x = 870;
  platform4.color = "tan";
  platform5.position.y = 278;
  platform5.position.x = 40;
  platform5.color = "grey";
  platform6.position.y = 406;
  platform6.color = "tan";
  platform7.position.y = 275;
  platform7.position.x = 791;
  platform7.width = 80;
  platform7.color = "tan";
  platform8.position.y = 340;
  platform8.position.x = 140;
  platform8.color = "tan";
  platform8.width = 90;
  class CatSpear {
    constructor({ position, velocity }) {
      this.position = position;
      this.velocity = velocity;
      //this.image = imageSrc
      this.framesElapsed = 0;
      this.width = 60;
      this.height = 3;
    }
    draw() {
      ctx.fillStyle = "brown";
      ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
      // ctx.drawImage(this.image, 0, 0, 60, 20, this.position.x, this.position.y, this.width, this.height)
    }

    update() {
      this.draw();
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;

      // gravity function
      if (
        this.position.y + this.height >= 470 ||
        //platform 1 from x=320 to x= 720 y=380
        (this.position.x + this.width >= 320 &&
          this.position.x + this.width <= 720 &&
          this.position.y + this.height >= 380 &&
          this.position.y + this.height <= 385) ||
        //platform 2 from x=701 to x= 900 y=320
        (this.position.x + this.width >= 701 &&
          this.position.x + this.width <= 900 &&
          this.position.y + this.height >= 320 &&
          this.position.y + this.height <= 325) ||
        //platform 3 from x=125 to x= 324 y=320
        (this.position.x + this.width >= 125 &&
          this.position.x + this.width <= 324 &&
          this.position.y + this.height >= 320 &&
          this.position.y + this.height <= 325) ||
        //platform 4 from x=179 to x= 276 y=406
        (this.position.x + this.width >= 179 &&
          this.position.x + this.width <= 276 &&
          this.position.y + this.height >= 406 &&
          this.position.y + this.height <= 411) ||
        //platform 5 from x= 750 to x= 847 y=406
        (this.position.x >= 750 &&
          this.position.x <= 847 &&
          this.position.y + this.height >= 406 &&
          this.position.y + this.height <= 411) ||
        //platform 7 from x= 777 to x= 820 y=270
        (this.position.x + this.width >= 777 &&
          this.position.x + this.width <= 820 &&
          this.position.y + this.height >= 270 &&
          this.position.y + this.height <= 275) ||
        //platform 8 from x= 205 to x= 248 y=270
        (this.position.x + this.width >= 205 &&
          this.position.x + this.width <= 248 &&
          this.position.y + this.height >= 270 &&
          this.position.y + this.height <= 275) ||
        //platform 9 from x= 360 to x= 670 y=160
        (this.position.x + this.width >= 360 &&
          this.position.x + this.width <= 670 &&
          this.position.y + this.height >= 160 &&
          this.position.y + this.height <= 165) ||
        //platform 10 from x= 130 to x= 320
        (this.position.x + this.width >= 130 &&
          this.position.x + this.width <= 320 &&
          this.position.y + this.height >= 240 &&
          this.position.y + this.height <= 245) ||
        //platform 11 from x= 706 to x= 895 y=240
        (this.position.x + this.width >= 706 &&
          this.position.x + this.width <= 895 &&
          this.position.y + this.height >= 240 &&
          this.position.y + this.height <= 245)
      ) {
        this.velocity.y = 0;
        this.velocity.x = 0;
      } else this.velocity.y += spearGravity;

      if (
        this.position.x + this.width >= huntress.position.x &&
        this.position.x <= goblin.position.x + huntress.width &&
        this.position.y + this.height >= huntress.position.y &&
        this.position.y <= huntress.position.y + huntress.height &&
        cat.islongRange == true &&
        huntress.isSubstituting != true
      ) {
        console.log("spear hit");
        huntress.takeHit();
        huntress.islongRange = false;
        gsap.to("#enemyHealth", {
          width: enemy.health + "%",
        });
      }
    }
  }

  class Spear {
    constructor({ position, velocity }) {
      this.position = position;
      this.velocity = velocity;
      //this.image = imageSrc
      this.framesElapsed = 0;
      this.width = 60;
      this.height = 3;
    }
    draw() {
      ctx.fillStyle = "brown";
      ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
      // ctx.drawImage(this.image, 0, 0, 60, 20, this.position.x, this.position.y, this.width, this.height)
    }

    update() {
      this.draw();
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;

      // gravity function
      if (
        this.position.y + this.height >= 470 ||
        //platform 1 from x=320 to x= 720 y=380
        (this.position.x + this.width >= 320 &&
          this.position.x + this.width <= 720 &&
          this.position.y + this.height >= 380 &&
          this.position.y + this.height <= 385) ||
        //platform 2 from x=701 to x= 900 y=320
        (this.position.x + this.width >= 701 &&
          this.position.x + this.width <= 900 &&
          this.position.y + this.height >= 320 &&
          this.position.y + this.height <= 325) ||
        //platform 3 from x=125 to x= 324 y=320
        (this.position.x + this.width >= 125 &&
          this.position.x + this.width <= 324 &&
          this.position.y + this.height >= 320 &&
          this.position.y + this.height <= 325) ||
        //platform 4 from x=179 to x= 276 y=406
        (this.position.x + this.width >= 179 &&
          this.position.x + this.width <= 276 &&
          this.position.y + this.height >= 406 &&
          this.position.y + this.height <= 411) ||
        //platform 5 from x= 750 to x= 847 y=406
        (this.position.x >= 750 &&
          this.position.x <= 847 &&
          this.position.y + this.height >= 406 &&
          this.position.y + this.height <= 411) ||
        //platform 7 from x= 777 to x= 820 y=270
        (this.position.x + this.width >= 777 &&
          this.position.x + this.width <= 820 &&
          this.position.y + this.height >= 270 &&
          this.position.y + this.height <= 275) ||
        //platform 8 from x= 205 to x= 248 y=270
        (this.position.x + this.width >= 205 &&
          this.position.x + this.width <= 248 &&
          this.position.y + this.height >= 270 &&
          this.position.y + this.height <= 275) ||
        //platform 9 from x= 360 to x= 670 y=160
        (this.position.x + this.width >= 360 &&
          this.position.x + this.width <= 670 &&
          this.position.y + this.height >= 160 &&
          this.position.y + this.height <= 165) ||
        //platform 10 from x= 130 to x= 320
        (this.position.x + this.width >= 130 &&
          this.position.x + this.width <= 320 &&
          this.position.y + this.height >= 240 &&
          this.position.y + this.height <= 245) ||
        //platform 11 from x= 706 to x= 895 y=240
        (this.position.x + this.width >= 706 &&
          this.position.x + this.width <= 895 &&
          this.position.y + this.height >= 240 &&
          this.position.y + this.height <= 245)
      ) {
        this.velocity.y = 0;
        this.velocity.x = 0;
        setTimeout(() => {
          this.position.x = 1024;
          this.position.y = 576;
        }, 2000);
      } else this.velocity.y += spearGravity;

      if (
        this.position.x + this.width >= cat.position.x + 21 &&
        this.position.x + this.width <= cat.position.x + 29 &&
        this.position.y >= cat.position.y &&
        this.position.y <= cat.position.y + cat.height &&
        huntress.islongRange == true &&
        cat.isSubstituting != true
      ) {
        console.log("spear hit");
        cat.takeHitLongRange();
        gsap.to("#playerHealth", {
          width: player.health + "%",
        });
        this.position.x = 1024;
        this.position.y = 576;
      }
    }
  }
  let catSpears = [];
  let spears = [];

  //game timer
  function decreaseTimer() {
    if (timer > 0) {
      timerId = setTimeout(decreaseTimer, 1000);
      timer--;
      document.querySelector("#timer").innerHTML = timer;
    }
    if (timer === 0) {
      determineWinner({ player, enemy, timerId });
    }
  }
  document.getElementById("myForm").style.display = "none";
  document.getElementById("playAgain").style.display = "none";
  background.image.src = "./img/jungle_background.png";

  decreaseTimer();

  function animate() {
    window.requestAnimationFrame(animate);
    ctx.fillStyle = "rgba(67, 200, 220, .3)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    background.draw();
    player.update();
    enemy.update();
    platform1.draw();
    platform2.draw();
    platform3.draw();
    platform4.draw();
    platform5.draw();
    platform6.draw();
    platform7.draw();
    platform8.draw();
    platform9.draw();
    catSpears.forEach((catSpear, index) => {
      if (catSpear.position.x <= -20 || catSpear.position.x >= 1044) {
        setTimeout(() => {
          catSpears.splice(index, 1);
        }, 0);
      } else {
        catSpear.update();
      }
    });

    spears.forEach((spear, index) => {
      if (spear.position.x <= -20 || spear.position.x >= 1044) {
        setTimeout(() => {
          spears.splice(index, 1);
        }, 0);
      } else {
        spear.update();
      }
    });

    player.velocity.x = 0;
    enemy.velocity.x = 0;

    // player movement

    if (keys.d.pressed && player.lastKey === "d") {
      player.velocity.x = 5;
      player.switchSprite("run");
    } else if (keys.a.pressed && player.lastKey === "a") {
      player.velocity.x = -5;
      player.switchSprite("runLeft");
    } else {
      if (player.position.x <= enemy.position.x) {
        player.switchSprite("idle");
      } else if (player.position.x >= enemy.position.x) {
        player.switchSprite("idleLeft");
        player.attackBox.offset.x = -70;
        player.substitutionZone.offset.x = -70;
      }
    }

    // jumping
    if (player.velocity.y < 0) {
      player.switchSprite("jump");
    } else if (player.velocity.y > 0) {
      player.switchSprite("fall");
    }

    // Enemy movement
    if (player.position.x <= enemy.position.x - 220) {
      setTimeout(() => {
        enemy.switchSprite("runLeft");
        enemy.velocity.x = -5;
      }, 500);
    } else if (player.position.x >= enemy.position.x + 110) {
      setTimeout(() => {
        enemy.switchSprite("run");
        enemy.velocity.x = 5;
      }, 500);
    } else {
      enemy.velocity.x = 0;
      enemy.switchSprite("idleLeft");
      if (
        player.position.x <= enemy.position.x &&
        enemy.position.y >= enemy.position.y - 25 &&
        enemy.position.y <= enemy.position.y + 75 &&
        count <= 0
      ) {
        enemy.attackBox.offset.x = -70;
        enemy.substitutionZone.offset.x = -70;
        enemy.isAttacking = true;
        player.switchSprite("attackLeft");
        count += 1;
        setTimeout(() => {
          count = 0;
        }, 800);
      } else if (
        player.position.x >= enemy.position.x &&
        enemy.position.y >= player.position.y - 25 &&
        enemy.position.y <= player.position.y + 75 &&
        count <= 0
      ) {
        enemy.attackBox.offset.x = 20;
        enemy.isAttacking = true;
        enemy.switchSprite("attack1");
        count += 1;
        setTimeout(() => {
          count = 0;
        }, 800);
      } else {
        if (player.position.x <= enemy.position.x) {
          enemy.switchSprite("idleLeft");
          setTimeout(() => {
            if (player.position.y <= enemy.position.y - 75) {
              if (enemy.isJumping != true) {
                enemy.isJumping = true;
                enemy.velocity.y = -11;
                enemy.switchSprite("jump");
                setTimeout(jumpCheck2, 680);
              }
            }
          }, 700);
        } else {
          enemy.switchSprite("idle");
          setTimeout(() => {
            if (player.position.y <= enemy.position.y - 75) {
              if (enemy.isJumping != true) {
                enemy.isJumping = true;
                enemy.velocity.y = -11;
                enemy.switchSprite("jump");
                setTimeout(jumpCheck2, 680);
              }
            }
          }, 700);
        }
      }
    }

    if (
      player.position.y <= enemy.position.y + 125 &&
      player.position.y >= enemy.position.y - 40 &&
      Math.abs(player.position.x - enemy.position.x) >= 300
    ) {
      //player 2 throw attack
      enemy.islongRange = true;
      if (enemy.position.x >= player.position.x && lcount <= 0) {
        enemy.longRangeLeft();
        setTimeout(() => {
          spears.push(
            new Spear({
              position: {
                x: enemy.position.x - 50,
                y: enemy.position.y,
              },
              velocity: {
                x: -9,
                y: -1,
              },
            })
          );
        }, 500);
        console.log(spears);
        lcount += 1;
        setTimeout(() => {
          lcount = 0;
        }, 500);
      } else if (enemy.position.x <= player.position.x && lcount <= 0) {
        enemy.longRange();
        setTimeout(() => {
          spears.push(
            new Spear({
              position: {
                x: enemy.position.x + 50,
                y: enemy.position.y,
              },
              velocity: {
                x: 9,
                y: -1,
              },
            })
          );
        }, 500);
        console.log(spears);
        lcount += 1;
        setTimeout(() => {
          lcount = 0;
        }, 500);
      }
    }

    // jumping
    if (enemy.velocity.y < 0) {
      enemy.switchSprite("jump");
    } else if (enemy.velocity.y > 0) {
      enemy.switchSprite("fall");
    }

    // detect for collision if Huntres hits Goblin
    if (
      rectangularCollision({
        rectangle1: player,
        rectangle2: enemy,
      }) &&
      player.isAttacking &&
      player.framesCurrent === 2 &&
      enemy.isSubstituting != true
    ) {
      enemy.takeHit();
      player.isAttacking = false;

      gsap.to("#enemyHealth", {
        width: enemy.health + "%",
      });
    }

    // if player misses
    if (player.isAttacking && player.framesCurrent === 4) {
      player.isAttacking = false;
    }

    // If Goblin hits Huntres
    if (
      rectangularCollision({
        rectangle1: enemy,
        rectangle2: player,
      }) &&
      enemy.isAttacking &&
      enemy.framesCurrent === 2 &&
      player.isSubstituting != true
    ) {
      player.takeHit();
      enemy.isAttacking = false;

      gsap.to("#playerHealth", {
        width: player.health + "%",
      });
    }

    // if player misses
    if (enemy.isAttacking && enemy.framesCurrent === 2) {
      enemy.isAttacking = false;
    }

    // end game based on health
    if (enemy.health <= 0 || player.health <= 0) {
      determineWinner({ player, enemy, timerId });
    }

    //detect for collision between attack and substitution
    if (
      circularCollision({
        rectangle: player,
        circle: enemy,
      }) &&
      player.isAttacking &&
      enemy.isSubstituting
    ) {
      player.isAttacking = false;
      enemy.position.y -= 100;
      enemy.switchSprite("fall");
      console.log("cat uses Substitution Jutsu");
    }
    if (
      circularCollision({
        rectangle: enemy,
        circle: player,
      }) &&
      enemy.isAttacking &&
      player.isSubstituting
    ) {
      player.isAttacking = false;
      player.position.y -= 100;
      player.switchSprite("fall");
      console.log("Huntres uses Substitution Jutsu");
    }

    // end game based on health
    if (enemy.health <= 0 || player.health <= 0) {
      determineWinner({ player, enemy, timerId });
    }
  }
  animate();
  //Listens for when key is pressed
  window.addEventListener("keydown", (event) => {
    console.log(event.key);

    switch (event.key) {
      //Player 1 movement a, w, d for left, up, right
      case "d":
        keys.d.pressed = true;
        player.lastKey = "d";
        player.switchSprite("run");
        break;
      case "a":
        keys.a.pressed = true;
        player.lastKey = "a";
        player.switchSprite("runLeft");
        break;
      case "w":
        if (player.isJumping != true) {
          player.isJumping = true;
          player.velocity.y = -11;
          player.switchSprite("jump");
        }
        break;
      //Player 2 movement uses arrow keys
      case "ArrowRight":
        keys.ArrowRight.pressed = true;
        enemy.lastKey = "ArrowRight";
        break;
      case "ArrowLeft":
        keys.ArrowLeft.pressed = true;
        enemy.lastKey = "ArrowLeft";
        break;
      case "ArrowUp":
        if (enemy.isJumping != true) {
          enemy.isJumping = true;
          enemy.velocity.y = -10;
          enemy.switchSprite("jump");
        }
        break;
      //player 1 attack
      case "Shift":
        //player 1 attack
        player.isAttacking = true;
        if (enemy.position.x >= player.position.x) {
          player.attackBox.offset.x = 50;
          player.attack();
        } else {
          player.attackBox.offset.x = -70;
          player.attackLeft();
        }
        break;
      //player 2 attack
      case "Control":
        break;
      //player 2 substitution jutsu
      case "Meta":
        enemy.isSubstituting = true;
        break;
      //player 1 substitution jutsu
      case "Alt":
        //player 1 substitution jutsu
        player.isSubstituting = true;
        break;
      //player 2 throws bomb
      case "m":
        break;
      //player 1 throws spear
      case "z":
        //player 2 throw attack
        player.islongRange = true;
        if (enemy.position.x >= player.position.x) {
          player.longRange();
          setTimeout(() => {
            catSpears.push(
              new CatSpear({
                position: {
                  x: player.position.x + 20,
                  y: player.position.y - 25,
                },
                velocity: {
                  x: 11,
                  y: -1,
                },
              })
            );
          }, 500);
          console.log(catSpears);
        } else {
          player.longRangeLeft();
          setTimeout(() => {
            catSpears.push(
              new CatSpear({
                position: {
                  x: player.position.x - 20,
                  y: player.position.y - 25,
                },
                velocity: {
                  x: -11,
                  y: -1,
                }, //,
                // imageSrc: 'huntres/SpearLeft.png'
              })
            );
          }, 500);
          console.log(catSpears);
        }
        break;
    }
  });

  //listens for when key is lifted up
  window.addEventListener("keyup", (event) => {
    switch (event.key) {
      case "d":
        keys.d.pressed = false;
        break;
      case "a":
        keys.a.pressed = false;
        break;
      case "w":
        keys.w.pressed = false;
        setTimeout(jumpCheck1, 680);
      case "ArrowRight":
        keys.ArrowRight.pressed = false;
        break;
      case "ArrowLeft":
        keys.ArrowLeft.pressed = false;
        break;
      case "ArrowUp":
        keys.ArrowUp.pressed = false;
        setTimeout(jumpCheck2, 680);
        break;
      case "Shift":
        enemy.isAttacking = false;
        keys.Shift.pressed = false;
        break;
      case "Control":
        break;
      case "Meta":
        keys.Meta.pressed = false;
        enemy.isSubstituting = false;
        break;
      case "Alt":
        keys.Alt.pressed = false;
        player.isSubstituting = false;
        break;
      case "m":
        keys.m.pressed = false;

        break;
      case "z":
        keys.z.pressed = false;
        setTimeout(() => {
          catSpears.splice(0, 1);
        }, 5000);
        break;
    }
  });
  function jumpCheck1() {
    return (player.isJumping = false);
  }
  function jumpCheck2() {
    return (enemy.isJumping = false);
  }
}

// Chose Cat $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
function choseStarFire() {
  console.log("you chose StarFire");
  lastGame = 5;
  let count = 0;
  let lcount = 0;
  let player = starFire;
  let enemy = goblin;
  background.image.src = "./img/teenTitans_background.png";
  platform9.position.y = 174;
  platform9.position.x = 1;
  platform9.width = 220;
  platform9.color = "tan";
  platform1.position.y = 294;
  platform1.position.x = 300;
  platform1.width = 336;
  platform1.color = "tan";
  platform2.position.y = 210;
  platform2.position.x = 786;
  platform2.color = "tan";
  platform3.position.y = 222;
  platform3.position.x = 5;
  platform3.color = "tan";
  platform4.position.y = 336;
  platform4.position.x = 870;
  platform4.color = "tan";
  platform5.position.y = 278;
  platform5.position.x = 40;
  platform5.color = "grey";
  platform6.position.y = 406;
  platform6.color = "tan";
  platform7.position.y = 275;
  platform7.position.x = 791;
  platform7.width = 80;
  platform7.color = "tan";
  platform8.position.y = 340;
  platform8.position.x = 140;
  platform8.color = "tan";
  platform8.width = 90;
  class StarBlast {
    constructor({ position, velocity }) {
      this.position = position;
      this.velocity = velocity;
      //this.image = imageSrc
      this.framesElapsed = 0;
      this.width = 40;
      this.height = 12;
    }
    draw() {
      ctx.fillStyle = "pink";
      ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
      // ctx.drawImage(this.image, 0, 0, 60, 20, this.position.x, this.position.y, this.width, this.height)
    }

    update() {
      this.draw();
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;

      // gravity function
      if (
        this.position.y + this.height >= 470 ||
        //platform 1 from x=320 to x= 720 y=380
        (this.position.x + this.width >= 320 &&
          this.position.x + this.width <= 720 &&
          this.position.y + this.height >= 380 &&
          this.position.y + this.height <= 385) ||
        //platform 2 from x=701 to x= 900 y=320
        (this.position.x + this.width >= 701 &&
          this.position.x + this.width <= 900 &&
          this.position.y + this.height >= 320 &&
          this.position.y + this.height <= 325) ||
        //platform 3 from x=125 to x= 324 y=320
        (this.position.x + this.width >= 125 &&
          this.position.x + this.width <= 324 &&
          this.position.y + this.height >= 320 &&
          this.position.y + this.height <= 325) ||
        //platform 4 from x=179 to x= 276 y=406
        (this.position.x + this.width >= 179 &&
          this.position.x + this.width <= 276 &&
          this.position.y + this.height >= 406 &&
          this.position.y + this.height <= 411) ||
        //platform 5 from x= 750 to x= 847 y=406
        (this.position.x >= 750 &&
          this.position.x <= 847 &&
          this.position.y + this.height >= 406 &&
          this.position.y + this.height <= 411) ||
        //platform 7 from x= 777 to x= 820 y=270
        (this.position.x + this.width >= 777 &&
          this.position.x + this.width <= 820 &&
          this.position.y + this.height >= 270 &&
          this.position.y + this.height <= 275) ||
        //platform 8 from x= 205 to x= 248 y=270
        (this.position.x + this.width >= 205 &&
          this.position.x + this.width <= 248 &&
          this.position.y + this.height >= 270 &&
          this.position.y + this.height <= 275) ||
        //platform 9 from x= 360 to x= 670 y=160
        (this.position.x + this.width >= 360 &&
          this.position.x + this.width <= 670 &&
          this.position.y + this.height >= 160 &&
          this.position.y + this.height <= 165) ||
        //platform 10 from x= 130 to x= 320
        (this.position.x + this.width >= 130 &&
          this.position.x + this.width <= 320 &&
          this.position.y + this.height >= 240 &&
          this.position.y + this.height <= 245) ||
        //platform 11 from x= 706 to x= 895 y=240
        (this.position.x + this.width >= 706 &&
          this.position.x + this.width <= 895 &&
          this.position.y + this.height >= 240 &&
          this.position.y + this.height <= 245)
      ) {
        this.velocity.y = 0;
        this.velocity.x = 0;
      } else this.velocity.y += spearGravity;

      if (
        this.position.x + this.width >= enemy.position.x &&
        this.position.x <= goblin.position.x + enemy.width &&
        this.position.y + this.height >= enemy.position.y &&
        this.position.y <= enemy.position.y + enemy.height &&
        player.islongRange == true &&
        enemy.isSubstituting != true
      ) {
        console.log("spear hit");
        enemy.takeHit();
        enemy.islongRange = false;
        gsap.to("#enemyHealth", {
          width: enemy.health + "%",
        });
      }
    }
  }

  class Bomb {
    constructor({ position, velocity }) {
      this.position = position;
      this.velocity = velocity;

      this.radius = 7;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = "black";
      ctx.fill();
      ctx.closePath();
    }

    update() {
      this.draw();
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;

      // gravity function
      if (
        this.position.y + this.radius + this.velocity.y >= 470 ||
        //platform 1 from x=320 to x= 720 y=380
        (this.position.x >= 320 &&
          this.position.x <= 720 &&
          this.position.y + this.radius + this.velocity.y >= 380 &&
          this.position.y + this.radius <= 383) ||
        //platform 2 from x=701 to x= 900 y=320
        (this.position.x >= 701 &&
          this.position.x <= 900 &&
          this.position.y + this.radius + this.velocity.y >= 320 &&
          this.position.y + this.radius <= 323) ||
        //platform 3 from x=125 to x= 324 y=320
        (this.position.x >= 125 &&
          this.position.x <= 324 &&
          this.position.y + this.radius + this.velocity.y >= 320 &&
          this.position.y + this.radius <= 323) ||
        //platform 4 from x=179 to x= 276 y=406
        (this.position.x >= 179 &&
          this.position.x <= 276 &&
          this.position.y + this.radius + this.velocity.y >= 406 &&
          this.position.y + this.radius <= 409) ||
        //platform 5 from x= 750 to x= 847 y=406
        (this.position.x >= 750 &&
          this.position.x <= 847 &&
          this.position.y + this.radius + this.velocity.y >= 406 &&
          this.position.y + this.radius <= 409) ||
        //platform 7 from x= 777 to x= 820 y=270
        (this.position.x >= 777 &&
          this.position.x <= 820 &&
          this.position.y + this.radius + this.velocity.y >= 270 &&
          this.position.y + this.radius <= 273) ||
        //platform 8 from x= 205 to x= 248 y=270
        (this.position.x >= 205 &&
          this.position.x <= 248 &&
          this.position.y + this.radius + this.velocity.y >= 270 &&
          this.position.y + this.radius <= 273) ||
        //platform 9 from x= 360 to x= 670 y=160
        (this.position.x >= 360 &&
          this.position.x <= 670 &&
          this.position.y + this.radius + this.velocity.y >= 160 &&
          this.position.y + this.radius <= 163) ||
        //platform 10 from x= 130 to x= 320
        (this.position.x >= 130 &&
          this.position.x <= 320 &&
          this.position.y + this.radius + this.velocity.y >= 240 &&
          this.position.y + this.radius <= 243) ||
        //platform 11 from x= 706 to x= 895 y=240
        (this.position.x >= 706 &&
          this.position.x <= 895 &&
          this.position.y + this.radius + this.velocity.y >= 240 &&
          this.position.y + this.radius <= 243)
      ) {
        this.velocity.y = 0;
        if (this.velocity.x <= -1) {
          this.velocity.x += 0.25;
        } else if (this.velocity.x >= 1) {
          this.velocity.x -= 0.25;
        } else {
          this.velocity.x = 0;
        }
      } else this.velocity.y += gravity;

      if (
        this.position.x + this.radius >= player.position.x &&
        this.position.x <= player.position.x + player.width &&
        this.position.y + this.radius >= player.position.y &&
        this.position.y <= player.position.y + player.height &&
        enemy.islongRange == true &&
        player.isSubstituting != true
      ) {
        console.log("bomb hit");
        player.takeHitLongRange();
        hitTakenLongRange = true;
        enemy.islongRange = false;
        this.velocity.x = 0;
        this.velocity.y = 0;
        this.radius = 15;
        bombs.splice(0, 1);
        gsap.to("#playerHealth", {
          width: player.health + "%",
        });
      }
    }
  }
  let starBlasts = [];
  let bombs = [];

  //game timer
  function decreaseTimer() {
    if (timer > 0) {
      timerId = setTimeout(decreaseTimer, 1000);
      timer--;
      document.querySelector("#timer").innerHTML = timer;
    }
    if (timer === 0) {
      determineWinner({ player, enemy, timerId });
    }
  }
  document.getElementById("myForm").style.display = "none";
  document.getElementById("playAgain").style.display = "none";

  decreaseTimer();

  function animate() {
    window.requestAnimationFrame(animate);
    ctx.fillStyle = "rgba(67, 200, 220, .3)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    background.draw();
    player.update();
    enemy.update();
    platform1.draw();
    platform2.draw();
    platform3.draw();
    platform4.draw();
    platform5.draw();
    platform6.draw();
    platform7.draw();
    platform8.draw();
    platform9.draw();

    if (hitTakenLongRange == true) {
      const explode = new Explode({
        position: {
          x: player.position.x,
          y: player.position.y,
        },
        imageSrc: "./img/explosion.png",
        scale: 1,
        framesMax: 1,
      });
      explode.draw();
    }

    starBlasts.forEach((starBlast, index) => {
      if (starBlast.position.x <= -20 || starBlast.position.x >= 1044) {
        setTimeout(() => {
          starBlasts.splice(index, 1);
        }, 0);
      } else {
        starBlast.update();
      }
    });

    bombs.forEach((bomb, index) => {
      if (bomb.position.x <= -20 || bomb.position.x >= 1044) {
        setTimeout(() => {
          bombs.splice(index, 1);
        }, 0);
      } else {
        bomb.update();
      }
    });

    player.velocity.x = 0;
    enemy.velocity.x = 0;

    // player movement

    if (keys.d.pressed && player.lastKey === "d") {
      player.velocity.x = 5;
      player.switchSprite("run");
    } else if (keys.a.pressed && player.lastKey === "a") {
      player.velocity.x = -5;
      player.switchSprite("runLeft");
    } else {
      if (player.position.x <= enemy.position.x) {
        player.switchSprite("idle");
      } else if (player.position.x >= enemy.position.x) {
        player.switchSprite("idleLeft");
        player.attackBox.offset.x = -70;
        player.substitutionZone.offset.x = -70;
      }
    }

    // jumping
    if (player.velocity.y < 0) {
      player.switchSprite("jump");
    } else if (player.velocity.y > 0) {
      player.switchSprite("fall");
    }

    // Enemy movement
    if (player.position.x <= enemy.position.x - 220) {
      setTimeout(() => {
        enemy.switchSprite("runLeft");
        enemy.velocity.x = -4;
      }, 500);
    } else if (player.position.x >= enemy.position.x + 110) {
      setTimeout(() => {
        enemy.switchSprite("run");
        enemy.velocity.x = 4;
      }, 500);
    } else {
      enemy.velocity.x = 0;
      enemy.switchSprite("idleLeft");
      if (
        player.position.x <= enemy.position.x &&
        enemy.position.y >= player.position.y - 25 &&
        enemy.position.y <= player.position.y + 75 &&
        count <= 0
      ) {
        enemy.attackBox.offset.x = -70;
        enemy.substitutionZone.offset.x = -70;
        enemy.isAttacking = true;
        enemy.switchSprite("attackLeft");
        count += 1;
        setTimeout(() => {
          count = 0;
        }, 800);
      } else if (
        player.position.x >= enemy.position.x &&
        enemy.position.y >= player.position.y - 25 &&
        enemy.position.y <= player.position.y + 75 &&
        count <= 0
      ) {
        enemy.attackBox.offset.x = 20;
        enemy.isAttacking = true;
        enemy.switchSprite("attack1");
        count += 1;
        setTimeout(() => {
          count = 0;
        }, 800);
      } else {
        if (player.position.x <= enemy.position.x) {
          enemy.switchSprite("idleLeft");
          setTimeout(() => {
            if (player.position.y <= enemy.position.y - 75) {
              if (enemy.isJumping != true) {
                enemy.isJumping = true;
                enemy.velocity.y = -11;
                enemy.switchSprite("jump");
                setTimeout(jumpCheck2, 680);
              }
            }
          }, 700);
        } else {
          enemy.switchSprite("idle");
          setTimeout(() => {
            if (player.position.y <= enemy.position.y - 75) {
              if (enemy.isJumping != true) {
                enemy.isJumping = true;
                enemy.velocity.y = -11;
                enemy.switchSprite("jump");
                setTimeout(jumpCheck2, 680);
              }
            }
          }, 700);
        }
      }
    }

    if (
      player.position.y <= enemy.position.y + 125 &&
      player.position.y >= enemy.position.y - 40 &&
      Math.abs(player.position.x - enemy.position.x) >= 300
    ) {
      //player 2 throw attack
      enemy.islongRange = true;
      if (enemy.position.x >= player.position.x && lcount <= 0) {
        enemy.longRangeLeft();
        setTimeout(() => {
          bombs.push(
            new Bomb({
              position: {
                x: enemy.position.x - 50,
                y: enemy.position.y + 25,
              },
              velocity: {
                x: -9,
                y: -1,
              },
            })
          );
        }, 500);
        console.log(bombs);
        lcount += 1;
        setTimeout(() => {
          lcount = 0;
        }, 500);
      } else if (enemy.position.x <= player.position.x && lcount <= 0) {
        enemy.longRange();
        setTimeout(() => {
          bombs.push(
            new Bomb({
              position: {
                x: enemy.position.x + 50,
                y: enemy.position.y + 25,
              },
              velocity: {
                x: 9,
                y: -1,
              },
            })
          );
        }, 500);
        console.log(bombs);
        lcount += 1;
        setTimeout(() => {
          lcount = 0;
        }, 500);
      }
    }

    // jumping
    if (enemy.velocity.y < 0) {
      enemy.switchSprite("jump");
    } else if (enemy.velocity.y > 0) {
      enemy.switchSprite("fall");
    }

    // detect for collision if Huntres hits Goblin
    if (
      rectangularCollision({
        rectangle1: player,
        rectangle2: enemy,
      }) &&
      player.isAttacking &&
      player.framesCurrent === 2 &&
      enemy.isSubstituting != true
    ) {
      enemy.takeHit();
      player.isAttacking = false;

      gsap.to("#enemyHealth", {
        width: enemy.health + "%",
      });
    }

    // if player misses
    if (player.isAttacking && player.framesCurrent === 4) {
      player.isAttacking = false;
    }

    // If Goblin hits Starfire
    if (
      rectangularCollision({
        rectangle1: enemy,
        rectangle2: player,
      }) &&
      enemy.isAttacking &&
      enemy.framesCurrent === 2 &&
      player.isSubstituting != true
    ) {
      player.takeHit();
      enemy.isAttacking = false;

      gsap.to("#playerHealth", {
        width: player.health + "%",
      });
    }

    // if player misses
    if (enemy.isAttacking && enemy.framesCurrent === 2) {
      enemy.isAttacking = false;
    }

    // end game based on health
    if (enemy.health <= 0 || player.health <= 0) {
      determineWinner({ player, enemy, timerId });
    }

    //detect for collision between attack and substitution
    if (
      circularCollision({
        rectangle: player,
        circle: enemy,
      }) &&
      player.isAttacking &&
      enemy.isSubstituting
    ) {
      player.isAttacking = false;
      enemy.position.y -= 100;
      enemy.switchSprite("fall");
      console.log("cat uses Substitution Jutsu");
    }
    if (
      circularCollision({
        rectangle: enemy,
        circle: player,
      }) &&
      enemy.isAttacking &&
      player.isSubstituting
    ) {
      player.isAttacking = false;
      player.position.y -= 100;
      player.switchSprite("fall");
      console.log("Huntres uses Substitution Jutsu");
    }

    // end game based on health
    if (enemy.health <= 0 || player.health <= 0) {
      determineWinner({ player, enemy, timerId });
    }
  }
  animate();
  //Listens for when key is pressed
  window.addEventListener("keydown", (event) => {
    console.log(event.key);

    switch (event.key) {
      //Player 1 movement a, w, d for left, up, right
      case "d":
        keys.d.pressed = true;
        player.lastKey = "d";
        player.switchSprite("run");
        break;
      case "a":
        keys.a.pressed = true;
        player.lastKey = "a";
        player.switchSprite("runLeft");
        break;
      case "w":
        if (player.isJumping != true) {
          player.isJumping = true;
          player.velocity.y = -11;
          player.switchSprite("jump");
        }
        break;
      //Player 2 movement uses arrow keys
      case "ArrowRight":
        keys.ArrowRight.pressed = true;
        enemy.lastKey = "ArrowRight";
        break;
      case "ArrowLeft":
        keys.ArrowLeft.pressed = true;
        enemy.lastKey = "ArrowLeft";
        break;
      case "ArrowUp":
        if (enemy.isJumping != true) {
          enemy.isJumping = true;
          enemy.velocity.y = -10;
          enemy.switchSprite("jump");
        }
        break;
      //player 1 attack
      case "Shift":
        //player 1 attack
        player.isAttacking = true;
        if (enemy.position.x >= player.position.x) {
          player.attackBox.offset.x = 50;
          player.attack();
        } else {
          player.attackBox.offset.x = -70;
          player.attackLeft();
        }
        break;
      //player 2 attack
      case "Control":
        break;
      //player 2 substitution jutsu
      case "Meta":
        enemy.isSubstituting = true;
        break;
      //player 1 substitution jutsu
      case "Alt":
        //player 1 substitution jutsu
        player.isSubstituting = true;
        break;
      //player 2 throws bomb
      case "m":
        break;
      //player 1 throws spear
      case "z":
        //player 2 throw attack
        player.islongRange = true;
        if (enemy.position.x >= player.position.x) {
          player.longRange();
          setTimeout(() => {
            starBlasts.push(
              new StarBlast({
                position: {
                  x: player.position.x + 20,
                  y: player.position.y - 25,
                },
                velocity: {
                  x: 11,
                  y: -1,
                },
              })
            );
          }, 500);
          console.log(starBlasts);
        } else {
          player.longRangeLeft();
          setTimeout(() => {
            starBlasts.push(
              new StarBlast({
                position: {
                  x: player.position.x - 20,
                  y: player.position.y - 25,
                },
                velocity: {
                  x: -11,
                  y: -1,
                }, //,
                // imageSrc: 'huntres/SpearLeft.png'
              })
            );
          }, 500);
          console.log(starBlasts);
        }
        break;
    }
  });

  //listens for when key is lifted up
  window.addEventListener("keyup", (event) => {
    switch (event.key) {
      case "d":
        keys.d.pressed = false;
        break;
      case "a":
        keys.a.pressed = false;
        break;
      case "w":
        keys.w.pressed = false;
        setTimeout(jumpCheck1, 680);
      case "ArrowRight":
        keys.ArrowRight.pressed = false;
        break;
      case "ArrowLeft":
        keys.ArrowLeft.pressed = false;
        break;
      case "ArrowUp":
        keys.ArrowUp.pressed = false;
        setTimeout(jumpCheck2, 680);
        break;
      case "Shift":
        enemy.isAttacking = false;
        keys.Shift.pressed = false;
        break;
      case "Control":
        break;
      case "Meta":
        keys.Meta.pressed = false;
        enemy.isSubstituting = false;
        break;
      case "Alt":
        keys.Alt.pressed = false;
        player.isSubstituting = false;
        break;
      case "m":
        keys.m.pressed = false;

        break;
      case "z":
        keys.z.pressed = false;
        setTimeout(() => {
          starBlasts.splice(0, 1);
        }, 5000);
        break;
    }
  });
  function jumpCheck1() {
    return (player.isJumping = false);
  }
  function jumpCheck2() {
    return (enemy.isJumping = false);
  }
}
