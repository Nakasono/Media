function animate(elem) {
    let angle = 0;
    const elemWidth = elem.offsetWidth;
    const elemHeight = elem.offsetHeight;
    const centerX = window.innerWidth / 2 - elemWidth / 2;
    const centerY = window.innerHeight / 2 - elemHeight / 2;
    const loop = () => {
        angle += 0.1;
        const x = 200 * Math.sin(angle * (Math.PI / 180)) + centerX;
        const y = 100 * Math.sin(2 * angle * (Math.PI / 180)) + centerY;

        elem.style.left = `${x}px`;
        elem.style.top = `${y}px`;
        angle = (angle + 1) % 360; // 角度を進める（360でリセット）
        requestAnimationFrame(loop);
    };
    loop();
}
const emblem = document.getElementById("emblem");
emblem.style.visibility = "visible";
animate(emblem);