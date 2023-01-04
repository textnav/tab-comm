import gsap from "gsap";

const getRandom = (start = 0, end = 10) =>
  Math.floor(start + Math.random() * end);

const config = {
  lines: getRandom(4, 10), // number of polylines
  length: getRandom(5, 100), // number of points in pts array (real short and real long are both fun!)
  wobble: 0.1, //add some random imprecision!
  colorBase: getRandom(200, 300), // starting hue 0-360, increments on mousemove
  thickness: getRandom(50, 80), // how big is this thing?
  lightness: 50,
  mousePos: { x: window.innerWidth / 2, y: window.innerHeight / 2 },
  pos: { x: window.innerWidth / 2, y: window.innerHeight / 2 },
  randPt: (p1: number, p2: number, amt: number) =>
    gsap.utils.random(p1 - amt, p1 + amt) +
    "," +
    gsap.utils.random(p2 - amt, p2 + amt),
  pts: [] as string[]
};

export function handleMouseMove(x: number, y: number) {
  config.pos.x = x;
  config.pos.y = y;
  config.colorBase++;
  for (let i = 0; i < config.lines; i++) {
    const hue = config.colorBase + (i / config.lines) * 65;
    const lightness = getRandom(config.lightness - 5, config.lightness + 5);
    const stroke = `hsl(${hue}, 100%, ${lightness}%`;
    // const thickness = getRandom(config.thickness - 10, config.thickness + 10)
    const thickness = config.thickness;
    const strokeWidth = thickness - (i / config.lines) * thickness;
    gsap.to("#s" + i, { attr: { stroke, "stroke-width": strokeWidth } });
  }
}

export function setup() {
  for (let p = 0; p <= config.length; p++)
    config.pts.push(config.mousePos.x + "," + config.mousePos.y + " ");

  for (let i = 0; i < config.lines; i++) {
    let p = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
    document.getElementById("container")?.appendChild(p);
    gsap.set(p, {
      attr: {
        id: "s" + i,
        class: "s",
        opacity: i / config.lines + 0.1,
        stroke:
          "hsl(" + (config.colorBase + (i / config.lines) * 65) + ",100%, 50%)",
        "stroke-width":
          config.thickness - (i / config.lines) * config.thickness,
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        points: config.pts,
        fill: "none"
      }
    });
  }

  gsap.ticker.add(() => {
    config.mousePos.x += (config.pos.x - config.mousePos.x) * 0.1;
    config.mousePos.y += (config.pos.y - config.mousePos.y) * 0.1;
    config.pts.push(
      config.randPt(config.mousePos.x, config.mousePos.y, config.wobble) + " "
    );
    for (let i = 0; i < config.lines; i++)
      gsap.to("#s" + i, {
        duration: i / config.lines,
        attr: { points: config.pts },
        ease: "expo"
      });
    config.pts.shift();
  });
}
