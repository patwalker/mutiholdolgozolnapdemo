const mobs = [
  {
    name: "Kacsa",
    image: "mobs/duck.png"
  },
  {
    name: "Zombi",
    image: "mobs/zombie.png"
  },
  {
    name: "Pók",
    image: "mobs/spider.png"
  },
  {
    name: "Csontváz",
    image: "mobs/skeleton.png"
  },
    {
    name: "Farkas",
    image: "mobs/wolf.png"
  }
];

function summonMob() {
  const mob = mobs[Math.floor(Math.random() * mobs.length)];
  document.getElementById('mob-image').src = mob.image;
  document.getElementById('mob-name').textContent = mob.name;
}
