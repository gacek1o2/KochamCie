const REASONS = [
  "przy Tobie mogę być prawdziwym sobą",
  "wspierasz mnie, nawet gdy sam w siebie nie wierze",
  "potrafisz mnie rozśmieszyć w każdej sytuacji",
  "jesteś moją najlepszą przyjaciółką",
  "twoje ręce (i uda :P) to najlepsze miejsce na świecie",
  "jesteś mądra, silna i zajebista",
  "zawsze mnie słuchasz i moge na tobie polegać",
  "z Tobą nawet opierdalanie sie jest ciekawe i zajebiste",
  "jesteś najpiękniejsza, kiedy wcale nie próbujesz",
  "sprawiasz, że chcę być lepszą wersją siebie",
  "jesteś moim domem",
  "jesteś moim najlepszym wyborem i największym zwycięstwem",
  "zawsze o mnie dbasz i jesteś przy mnie",
  "z Tobą wszystko jest poprostu lepsze",
  "jesteś najcudowniejszą osobą jaką znam",
  "jesteś mega inteligentna i ambitna",
  "jesteś prześliczna i bardzo smash",
  "po prostu jesteś, a to dla mnie wszystko"  
];

const EXTS = ["jpg", "jpeg", "png", "webp", "JPG", "JPEG", "PNG", "WEBP"];

function loadPhoto(img, n) {
  let i = 0;
  img.onerror = () => {
    i++;
    if (i < EXTS.length) img.src = `img/${n}.${EXTS[i]}`;
    else { img.onerror = null; img.classList.add("missing"); img.removeAttribute("src"); }
  };
  img.classList.remove("missing");
  img.src = `img/${n}.${EXTS[0]}`;
}
