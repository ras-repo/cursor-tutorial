kaboom({
  background: [18, 18, 28],
});

setGravity(1600);

const SPEED = 280;
const JUMP = 680;

const player = add([
  rect(32, 32),
  pos(80, 40),
  area(),
  body(),
  color(80, 200, 255),
  "player",
]);

const platforms = [
  { x: 0, y: height() - 40, w: width(), h: 40 },
  { x: 40, y: height() - 150, w: 280, h: 24 },
  { x: 360, y: height() - 230, w: 280, h: 24 },
  { x: 680, y: height() - 150, w: 280, h: 24 },
];

for (const p of platforms) {
  add([
    rect(p.w, p.h),
    pos(p.x, p.y),
    area(),
    body({ isStatic: true }),
    color(90, 220, 120),
    "platform",
  ]);
}

onKeyDown("left", () => player.move(-SPEED, 0));
onKeyDown("right", () => player.move(SPEED, 0));
onKeyDown("a", () => player.move(-SPEED, 0));
onKeyDown("d", () => player.move(SPEED, 0));

function jump() {
  if (player.isGrounded()) player.jump(JUMP);
}

onKeyPress("space", jump);
onKeyPress("up", jump);
onKeyPress("w", jump);

player.onUpdate(() => {
  if (player.pos.y > height() + 80) {
    player.pos = vec2(80, 40);
  }
});

add([
  text("Arrows or A/D to move, Space to jump", { size: 18 }),
  pos(16, 16),
  color(230, 230, 240),
  fixed(),
]);
