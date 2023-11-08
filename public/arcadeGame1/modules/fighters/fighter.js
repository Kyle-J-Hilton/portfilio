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
  