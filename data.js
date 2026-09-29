// Powody – edytuj śmiało. Numer fiszki = numer zdjęcia (img/1.jpg, img/2.jpg ...)
const REASONS = [
  "sprawiasz, że nawet zwykły wtorek jest wyjątkowy.",
  "Twój śmiech to mój ulubiony dźwięk na świecie.",
  "przy Tobie mogę być w pełni sobą.",
  "wspierasz mnie, nawet gdy sam w siebie nie wierzę.",
  "Twój uśmiech rozjaśnia mi najgorszy dzień.",
  "potrafisz mnie rozśmieszyć w każdej sytuacji.",
  "jesteś moją najlepszą przyjaciółką.",
  "przytulać Cię to najlepsze miejsce na ziemi.",
  "jesteś mądra, silna i niesamowicie odważna.",
  "słuchasz mnie naprawdę, a nie tylko z grzeczności.",
  "z Tobą nawet nicnierobienie jest przygodą.",
  "dbasz o mnie w tych małych, codziennych sprawach.",
  "jesteś najpiękniejsza, kiedy wcale nie próbujesz.",
  "sprawiasz, że chcę być lepszą wersją siebie.",
  "wszystkie nasze wspólne wspomnienia są dla mnie skarbem.",
  "z Tobą czuję się jak w domu.",
  "masz największe serce, jakie znam.",
  "po prostu jesteś, a to dla mnie wszystko."
];

const EXTS = ["jpg", "jpeg", "png", "webp", "JPG", "PNG"];

// Ładuje img/N.<rozszerzenie> – próbuje kolejnych rozszerzeń, a gdy brak zdjęcia pokazuje serduszko.
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
