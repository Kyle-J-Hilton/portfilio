import { 
  Platform1, 
  Platform2, 
  Platform3, 
  Platform4, 
  Platform5, 
  Platform6, 
  Platform7, 
  Platform8, 
  Platform9 
} from "../platforms/platforms.js";

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
      this.canvas = document.getElementById("canvas");
      this.ctx = this.canvas.getContext("2d");
    }

    draw() {
      this.ctx.drawImage(
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

class Fighter extends Sprite {
    constructor({
      position,
      velocity,
      color = "red",
      imageSrc,
      scale = 1,
      framesMax = 1,
      offset = { x: 25, y: 50 },
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
        offset: { x: 25, y: 60 },
        width: 75,
        height: 20,
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
      this.canvas = document.getElementById("canvas");
      this.ctx = canvas.getContext("2d");
      this.platform1 = new Platform1();
      this.platform2 = new Platform2();
      this.platform3 = new Platform3();
      this.platform4 = new Platform4();
      this.platform5 = new Platform5();
      this.platform6 = new Platform6();
      this.platform7 = new Platform7();
      this.platform8 = new Platform8();
      this.platform9 = new Platform9();

      this.gravity = 0.7;
      this.spearGravity = 0.05;
      this.timer = 60;
      this.timerId;
      this.hitTakenLongRange = false;
      this.lastGame = 0;
  
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
        (this.position.x >= this.platform1.position.x &&
          this.position.x <= this.platform1.position.x + this.platform1.width &&
          this.position.y + this.height + this.velocity.y >=
          this.platform1.position.y + 50 &&
          this.position.y + this.height <= this.platform1.position.y + 53) ||
        //platform 2 from x=701 to x= 900 y=320
        (this.position.x >= this.platform2.position.x &&
          this.position.x <= this.platform2.position.x + this.platform2.width &&
          this.position.y + this.height + this.velocity.y >=
          this.platform2.position.y + 50 &&
          this.position.y + this.height <= this.platform2.position.y + 53) ||
        //platform 3 from x=125 to x= 324 y=320
        (this.position.x >= this.platform3.position.x &&
          this.position.x <= this.platform3.position.x + this.platform3.width &&
          this.position.y + this.height + this.velocity.y >=
          this.platform3.position.y + 50 &&
          this.position.y + this.height <= this.platform3.position.y + 53) ||
        //platform 4 from x=179 to x= 276 y=406
        (this.position.x >= this.platform4.position.x &&
          this.position.x <= this.platform4.position.x + this.platform4.width &&
          this.position.y + this.height + this.velocity.y >=
          this.platform4.position.y + 50 &&
          this.position.y + this.height <= this.platform4.position.y + 53) ||
        //platform 5 from x= 750 to x= 847 y=406
        (this.position.x >= this.platform5.position.x &&
          this.position.x <= this.platform5.position.x + this.platform5.width &&
          this.position.y + this.height + this.velocity.y >=
          this.platform5.position.y + 50 &&
          this.position.y + this.height <= this.platform5.position.y + 53) ||
        //platform 6
        (this.position.x >= this.platform6.position.x &&
          this.position.x <= this.platform6.position.x + this.platform6.width &&
          this.position.y + this.height + this.velocity.y >=
          this.platform6.position.y + 50 &&
          this.position.y + this.height <= this.platform6.position.y + 53) ||
        //platform 7 from x= 777 to x= 820 y=270
        (this.position.x >= this.platform7.position.x &&
          this.position.x <= this.platform7.position.x + this.platform7.width &&
          this.position.y + this.height + this.velocity.y >=
          this.platform7.position.y + 50 &&
          this.position.y + this.height <= this.platform7.position.y + 53) ||
        //platform 8 from x= 205 to x= 248 y=270
        (this.position.x >= this.platform8.position.x &&
          this.position.x <= this.platform8.position.x + this.platform8.width &&
          this.position.y + this.height + this.velocity.y >=
          this.platform8.position.y + 50 &&
          this.position.y + this.height <= this.platform8.position.y + 53) ||
        //platform 9 from x= 360 to x= 670 y=160
        (this.position.x >= this.platform9.position.x &&
          this.position.x <= this.platform9.position.x + this.platform9.width &&
          this.position.y + this.height + this.velocity.y >=
          this.platform9.position.y + 50 &&
          this.position.y + this.height <= this.platform9.position.y + 53) ||
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
      } else this.velocity.y += this.gravity;
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
        this.hitTakenLongRange = false;
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
export const huntress = new Fighter({
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
  
    imageSrc: "/arcadeGame1/modules/img/huntres/Idle.png",
    framesMax: 8,
    scale: 2,
    offset: {
      x: 150,
      y: 150,
    },
    sprites: {
      idle: {
        imageSrc: "/arcadeGame1/modules/img/huntres/Idle.png",
        framesMax: 8,
      },
      idleLeft: {
        imageSrc: "/arcadeGame1/modules/img/huntres/IdleLeft.png",
        framesMax: 8,
      },
      run: {
        imageSrc: "/arcadeGame1/modules/img/huntres/Run.png",
        framesMax: 8,
      },
      runLeft: {
        imageSrc: "/arcadeGame1/modules/img/huntres/RunLeft.png",
        framesMax: 8,
      },
      jump: {
        imageSrc: "/arcadeGame1/modules/img/huntres/Jump.png",
        framesMax: 2,
      },
      fall: {
        imageSrc: "/arcadeGame1/modules/img/huntres/Fall.png",
        framesMax: 2,
      },
      attack1: {
        imageSrc: "/arcadeGame1/modules/img/huntres/Attack1.png",
        framesMax: 5,
      },
      attackLeft: {
        imageSrc: "/arcadeGame1/modules/img/huntres/AttackLeft.png",
        framesMax: 5,
      },
      longRangeAttack: {
        imageSrc: "/arcadeGame1/modules/img/huntres/Attack3.png",
        framesMax: 7,
      },
      longRangeAttackLeft: {
        imageSrc: "/arcadeGame1/modules/img/huntres/Attack3left.png",
        framesMax: 7,
      },
      takeHit: {
        imageSrc: "/arcadeGame1/modules/img/huntres/Take hit.png",
        framesMax: 3,
      },
      death: {
        imageSrc: "/arcadeGame1/modules/img/huntres/Death.png",
        framesMax: 8,
      },
    },
    attackBox: {
      offset: { x: 25, y: 60 },
      width: 75,
      height: 20,
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
export const goblin = new Fighter({
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
  
    imageSrc: "/arcadeGame1/modules/img/Goblin/IdleLeft.png",
    framesMax: 4,
    scale: 2,
    offset: {
      x: 150,
      y: 150,
    },
    sprites: {
      idleLeft: {
        imageSrc: "/arcadeGame1/modules/img/Goblin/IdleLeft.png",
        framesMax: 4,
      },
      idle: {
        imageSrc: "/arcadeGame1/modules/img/Goblin/Idle.png",
        framesMax: 4,
      },
      run: {
        imageSrc: "/arcadeGame1/modules/img/Goblin/Run.png",
        framesMax: 8,
      },
      runLeft: {
        imageSrc: "/arcadeGame1/modules/img/Goblin/RunLeft.png",
        framesMax: 8,
      },
      jump: {
        imageSrc: "/arcadeGame1/modules/img/Goblin/Idle.png",
        framesMax: 4,
      },
      fall: {
        imageSrc: "/arcadeGame1/modules/img/Goblin/Idle.png",
        framesMax: 4,
      },
      attack1: {
        imageSrc: "/arcadeGame1/modules/img/Goblin/Attack.png",
        framesMax: 8,
      },
      attackLeft: {
        imageSrc: "/arcadeGame1/modules/img/Goblin/AttackLeft.png",
        framesMax: 8,
      },
      longRangeAttack: {
        imageSrc: "/arcadeGame1/modules/img/Goblin/Attack3.png",
        framesMax: 12,
      },
      longRangeAttackLeft: {
        imageSrc: "/arcadeGame1/modules/img/Goblin/Attack3left.png",
        framesMax: 12,
      },
      takeHit: {
        imageSrc: "/arcadeGame1/modules/img/Goblin/Take hit.png",
        framesMax: 4,
      },
      death: {
        imageSrc: "/arcadeGame1/modules/img/Goblin/Death.png",
        framesMax: 4,
      },
    },
    attackBox: {
      offset: { x: 25, y: 60 },
      width: 75,
      height: 20,
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
export const luffy = new Fighter({
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
  
    imageSrc: "/arcadeGame1/modules/img/Luffy/idleRight.png",
    framesMax: 10,
    scale: 1,
    offset: {
      x: 15,
      y: 15,
    },
    sprites: {
      idle: {
        imageSrc: "/arcadeGame1/modules/img/Luffy/idleRight.png",
        framesMax: 10,
      },
      idleLeft: {
        imageSrc: "/arcadeGame1/modules/img/Luffy/idle.png",
        framesMax: 10,
      },
      run: {
        imageSrc: "/arcadeGame1/modules/img/Luffy/runRight.png",
        framesMax: 8,
      },
      runLeft: {
        imageSrc: "/arcadeGame1/modules/img/Luffy/runLeft.png",
        framesMax: 8,
      },
      jump: {
        imageSrc: "/arcadeGame1/modules/img/Luffy/jumpRight.png",
        framesMax: 4,
      },
      fall: {
        imageSrc: "/arcadeGame1/modules/img/Luffy/jumpRight.png",
        framesMax: 4,
      },
      attack1: {
        imageSrc: "/arcadeGame1/modules/img/Luffy/kickRight.png",
        framesMax: 9,
      },
      attackLeft: {
        imageSrc: "/arcadeGame1/modules/img/Luffy/kickLeft.png",
        framesMax: 9,
      },
      longRangeAttack: {
        imageSrc: "/arcadeGame1/modules/img/Luffy/headbuttRight.png",
        framesMax: 12,
      },
      longRangeAttackLeft: {
        imageSrc: "/arcadeGame1/modules/img/Luffy/headbuttLeft.png",
        framesMax: 12,
      },
      takeHit: {
        imageSrc: "/arcadeGame1/modules/img/Luffy/fallRight.png",
        framesMax: 4,
      },
      death: {
        imageSrc: "/arcadeGame1/modules/img/Luffy/headbuttright.png",
        framesMax: 12,
      },
    },
    attackBox: {
      offset: { x: 25, y: 60 },
      width: 75,
      height: 20,
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
export const naruto = new Fighter({
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
  
    imageSrc: "/arcadeGame1/modules/img/naruto/idleRight.png",
    framesMax: 4,
    scale: 1,
    offset: {
      x: 20,
      y: 5,
    },
    sprites: {
      idle: {
        imageSrc: "/arcadeGame1/modules/img/naruto/idleRight.png",
        framesMax: 4,
      },
      idleLeft: {
        imageSrc: "/arcadeGame1/modules/img/naruto/idleLeft.png",
        framesMax: 4,
      },
      run: {
        imageSrc: "/arcadeGame1/modules/img/naruto/runRight.png",
        framesMax: 6,
      },
      runLeft: {
        imageSrc: "/arcadeGame1/modules/img/naruto/runLeft.png",
        framesMax: 6,
      },
      jump: {
        imageSrc: "/arcadeGame1/modules/img/naruto/jumpRight.png",
        framesMax: 2,
      },
      fall: {
        imageSrc: "/arcadeGame1/modules/img/naruto/fallRight.png",
        framesMax: 2,
      },
      attack1: {
        imageSrc: "/arcadeGame1/modules/img/naruto/punchRight.png",
        framesMax: 12,
      },
      attackLeft: {
        imageSrc: "/arcadeGame1/modules/img/naruto/punchLeft.png",
        framesMax: 12,
      },
      longRangeAttack: {
        imageSrc: "/arcadeGame1/modules/img/naruto/longrangeRight.png",
        framesMax: 6,
      },
      longRangeAttackLeft: {
        imageSrc: "/arcadeGame1/modules/img/naruto/longrangeLeft.png",
        framesMax: 6,
      },
      takeHit: {
        imageSrc: "/arcadeGame1/modules/img/naruto/takeHit.png",
        framesMax: 12,
      },
      death: {
        imageSrc: "/arcadeGame1/modules/img/naruto/takeHit.png",
        framesMax: 12,
      },
    },
    attackBox: {
      offset: { x: 25, y: 60 },
      width: 75,
      height: 20,
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
export const cat = new Fighter({
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
  
    imageSrc: "/arcadeGame1/modules/img/cat/idleRight.png",
    framesMax: 5,
    scale: 1,
    offset: {
      x: 50,
      y: 30,
    },
    sprites: {
      idle: {
        imageSrc: "/arcadeGame1/modules/img/cat/idleRight.png",
        framesMax: 5,
      },
      idleLeft: {
        imageSrc: "/arcadeGame1/modules/img/cat/idleLeft.png",
        framesMax: 5,
      },
      run: {
        imageSrc: "/arcadeGame1/modules/img/cat/runRight.png",
        framesMax: 6,
      },
      runLeft: {
        imageSrc: "/arcadeGame1/modules/img/cat/runLeft.png",
        framesMax: 5,
      },
      jump: {
        imageSrc: "/arcadeGame1/modules/img/cat/jumpRight.png",
        framesMax: 3,
      },
      fall: {
        imageSrc: "/arcadeGame1/modules/img/cat/fallRight.png",
        framesMax: 2,
      },
      attack1: {
        imageSrc: "/arcadeGame1/modules/img/cat/attackRight.png",
        framesMax: 3,
      },
      attackLeft: {
        imageSrc: "/arcadeGame1/modules/img/cat/attackLeft.png",
        framesMax: 3,
      },
      longRangeAttack: {
        imageSrc: "/arcadeGame1/modules/img/cat/longrangeRight.png",
        framesMax: 3,
      },
      longRangeAttackLeft: {
        imageSrc: "/arcadeGame1/modules/img/cat/longrangeLeft.png",
        framesMax: 3,
      },
      takeHit: {
        imageSrc: "/arcadeGame1/modules/img/cat/takeHit.png",
        framesMax: 3,
      },
      death: {
        imageSrc: "/arcadeGame1/modules/img/cat/takeHit.png",
        framesMax: 3,
      },
    },
    attackBox: {
      offset: { x: 25, y: 60 },
      width: 75,
      height: 20,
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
export const starFire = new Fighter({
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
  
    imageSrc: "/arcadeGame1/modules/img/starfire/idleRight.png",
    framesMax: 6,
    scale: 1,
    offset: {
      x: 50,
      y: 30,
    },
    sprites: {
      idle: {
        imageSrc: "/arcadeGame1/modules/img/starfire/idleRight.png",
        framesMax: 6,
      },
      idleLeft: {
        imageSrc: "/arcadeGame1/modules/img/starfire/idleLeft.png",
        framesMax: 6,
      },
      run: {
        imageSrc: "/arcadeGame1/modules/img/starfire/runRight.png",
        framesMax: 2,
      },
      runLeft: {
        imageSrc: "/arcadeGame1/modules/img/starfire/runLeft.png",
        framesMax: 2,
      },
      jump: {
        imageSrc: "/arcadeGame1/modules/img/starfire/jumpRight.png",
        framesMax: 2,
      },
      fall: {
        imageSrc: "/arcadeGame1/modules/img/starfire/jumpRight.png",
        framesMax: 2,
      },
      attack1: {
        imageSrc: "/arcadeGame1/modules/img/starfire/attackRight.png",
        framesMax: 6,
      },
      attackLeft: {
        imageSrc: "/arcadeGame1/modules/img/starfire/attackLeft.png",
        framesMax: 6,
      },
      longRangeAttack: {
        imageSrc: "/arcadeGame1/modules/img/starfire/longRangeRight.png",
        framesMax: 5,
      },
      longRangeAttackLeft: {
        imageSrc: "/arcadeGame1/modules/img/starfire/longRangeLeft.png",
        framesMax: 5,
      },
      takeHit: {
        imageSrc: "/arcadeGame1/modules/img/starfire/takeHit.png",
        framesMax: 2,
      },
      death: {
        imageSrc: "/arcadeGame1/modules/img/starfire/takeHitLeft.png",
        framesMax: 2,
      },
    },
    attackBox: {
      offset: { x: 25, y: 60 },
      width: 75,
      height: 20,
    },
    substitutionZone: {
      offset: {
        x: 0,
        y: 0,
      },
      radius: 75,
    },
  });
  
  