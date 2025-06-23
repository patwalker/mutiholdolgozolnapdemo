const mobs = [
  {
    name: "Creeper",
    image: "mobs/creeper.png"
  },
  {
    name: "Zombie",
    image: "mobs/zombie.png"
  },
  {
    name: "Enderman",
    image: "mobs/enderman.png"
  },
  {
    name: "Skeleton",
    image: "mobs/skeleton.png"
  }
];

function summonMob() {
  const mob = mobs[Math.floor(Math.random() * mobs.length)];
  document.getElementById('mob-image').src = mob.image;
  document.getElementById('mob-name').textContent = mob.name;
}