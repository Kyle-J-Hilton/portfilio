import * as fighter from "../fighters/allFighters.js";
import * as platforms from "../platforms/platforms.js";
import * as Background from "../assets/background.js";
import * as Functions from "../gameManagementFunctions/gameManagement.js";
import * as Explode from "../assets/explode.js";
 
 export function chooseNaruto() {
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
    let lastGame = 4;

    let platform1 = new platforms.Platform1(canvas, ctx);
    let platform2 = new platforms.Platform2(canvas, ctx);
    let platform3 = new platforms.Platform3(canvas, ctx);
    let platform4 = new platforms.Platform4(canvas, ctx);
    let platform5 = new platforms.Platform5(canvas, ctx);
    let platform6 = new platforms.Platform6(canvas, ctx);
    let platform7 = new platforms.Platform7(canvas, ctx);
    let platform8 = new platforms.Platform8(canvas, ctx);
    let platform9 = new platforms.Platform9(canvas, ctx);
    let background = new Background.Background(CANVAS_WIDTH, CANVAS_HEIGHT);
    console.log("you chose naruto");
    lastGame = 4;
    let player = fighter.naruto;
    let enemy = fighter.cat;
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
            this.position.x + this.radius >= enemy.position.x &&
            this.position.x <= enemy.position.x + 50 &&
            this.position.y + this.radius >= enemy.position.y &&
            this.position.y <= enemy.position.y + 150 &&
            player.islongRange == true
        ) {
            console.log("justsu hit");
            hitTakenLongRange = true;
            enemy.takeHitLongRange();
            player.islongRange = false;
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
    background.image.src = "/arcadeGame1/modules/img/library_background.png";
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
        const explode = new Explode.Explode({
            position: {
            x: enemy.position.x,
            y: enemy.position.y,
            },
            imageSrc: "/arcadeGame1/modules/img/rasenshuriken.png",
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

        if (Functions.keys.d.pressed && player.lastKey === "d") {
        player.velocity.x = 5;
        player.switchSprite("run");
        } else if (Functions.keys.a.pressed && player.lastKey === "a") {
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
            Functions.rectangularCollision({
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
            Functions.rectangularCollision({
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
            Functions.determineWinner({ player, enemy, timerId });
        }

        //detect for collision between attack and substitution
        if (
            Functions.circularCollision({
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
            Functions.circularCollision({
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
            Functions.determineWinner({ player, enemy, timerId });
        }
    }
    animate();
    //Listens for when key is pressed
    window.addEventListener("keydown", (event) => {
        console.log(event.key);

        switch (event.key) {
        //Player 1 movement a, w, d for left, up, right
        case "d":
            Functions.keys.d.pressed = true;
            player.lastKey = "d";
            player.switchSprite("run");
            break;
        case "a":
            Functions.keys.a.pressed = true;
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
            Functions.keys.ArrowRight.pressed = true;
            enemy.lastKey = "ArrowRight";
            break;
        case "ArrowLeft":
            Functions.keys.ArrowLeft.pressed = true;
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
            Functions.keys.d.pressed = false;
            break;
        case "a":
            Functions.keys.a.pressed = false;
            break;
        case "w":
            Functions.keys.w.pressed = false;
            setTimeout(jumpCheck1, 680);
        case "ArrowRight":
            Functions.keys.ArrowRight.pressed = false;
            break;
        case "ArrowLeft":
            Functions.keys.ArrowLeft.pressed = false;
            break;
        case "ArrowUp":
            Functions.keys.ArrowUp.pressed = false;
            setTimeout(jumpCheck2, 680);
            break;
        case "Shift":
            Functions.keys.Shift.pressed = false;
            break;
        case "Control":
            Functions.keys.Control.pressed = false;
            break;
        case "Meta":
            Functions.keys.Meta.pressed = false;
            enemy.isSubstituting = false;
            break;
        case "Alt":
            Functions.keys.Alt.pressed = false;
            player.isSubstituting = false;
            break;
        case "m":
            Functions.keys.m.pressed = false;
            setTimeout(() => {
            spears.splice(0, 1);
            }, 5000);
            break;
        case "z":
            Functions.keys.z.pressed = false;
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
