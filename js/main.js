let i = 0;
const card = document.getElementById("card"),
      photo = document.getElementById("photo"),
      text = document.getElementById("text"),
      count = document.getElementById("count"),
      stage = document.getElementById("stage");
const total = REASONS.length;

function show() {
  loadPhoto(photo, i + 1);
  text.textContent = "…" + REASONS[i];
  count.textContent = (i + 1) + " / " + total;
}

function go(dir) {
  const swap = () => {
    card.classList.remove("flipped");
    i = (i + dir + total) % total;
    show();
  };
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return swap();
  stage.animate([{transform: "translateX(0)", opacity: 1},
                 {transform: `translateX(${-dir * 60}px) rotate(${-dir * 6}deg)`, opacity: 0}],
                {duration: 180, easing: "ease-in"}).onfinish = () => {
    swap();
    stage.animate([{transform: `translateX(${dir * 60}px)`, opacity: 0},
                   {transform: "translateX(0)", opacity: 1}],
                  {duration: 220, easing: "ease-out"});
  };
}

card.addEventListener("click", () => card.classList.toggle("flipped"));
document.getElementById("next").onclick = () => go(1);
document.getElementById("prev").onclick = () => go(-1);
document.addEventListener("keydown", e => {
  if (e.key === "ArrowRight") go(1);
  if (e.key === "ArrowLeft") go(-1);
});

let x0 = null;
stage.addEventListener("touchstart", e => x0 = e.touches[0].clientX, {passive: true});
stage.addEventListener("touchend", e => {
  if (x0 === null) return;
  const dx = e.changedTouches[0].clientX - x0;
  if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
  x0 = null;
});

show();
