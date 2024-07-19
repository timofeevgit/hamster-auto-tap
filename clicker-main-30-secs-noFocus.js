// * 30 кликов каждые 30 секунд. Фокус на странице не нужен, можно оставить и уйти. Дополнительно: очистка консоли каждые 35 секунд. Энергия не дойдет до 0.
const button = document.querySelector(".user-tap-button");

function clearConsole() {
    console.clear();
}

function click() {
  for (let i = 0; i < 30; i++) {
    button.dispatchEvent(new PointerEvent("pointerup"));
  }
  let currentDate = new Date();
  console.log("30 кликов каждые 30 секунд: ", currentDate);
}

setInterval(click, 30000);
// Чистит консоль в браузере каждые 90 секунд, чтобы не засорять.
setInterval(clearConsole, 90000);

// oldfashion code
// const button = document.querySelector(".user-tap-button");

// function clearConsole() {
//     console.clear();
// }

// function click() {
//   button.dispatchEvent(new PointerEvent("pointerup"));
//   button.dispatchEvent(new PointerEvent("pointerup"));
//   button.dispatchEvent(new PointerEvent("pointerup"));
//   button.dispatchEvent(new PointerEvent("pointerup"));
//   button.dispatchEvent(new PointerEvent("pointerup"));
//   button.dispatchEvent(new PointerEvent("pointerup"));
//   button.dispatchEvent(new PointerEvent("pointerup"));
//   button.dispatchEvent(new PointerEvent("pointerup"));
//   button.dispatchEvent(new PointerEvent("pointerup"));
//   button.dispatchEvent(new PointerEvent("pointerup"));
//   button.dispatchEvent(new PointerEvent("pointerup"));
//   button.dispatchEvent(new PointerEvent("pointerup"));
//   button.dispatchEvent(new PointerEvent("pointerup"));
//   button.dispatchEvent(new PointerEvent("pointerup"));
//   button.dispatchEvent(new PointerEvent("pointerup"));
//   button.dispatchEvent(new PointerEvent("pointerup"));
//   button.dispatchEvent(new PointerEvent("pointerup"));
//   button.dispatchEvent(new PointerEvent("pointerup"));
//   button.dispatchEvent(new PointerEvent("pointerup"));
//   button.dispatchEvent(new PointerEvent("pointerup"));
//   button.dispatchEvent(new PointerEvent("pointerup"));
//   button.dispatchEvent(new PointerEvent("pointerup"));
//   button.dispatchEvent(new PointerEvent("pointerup"));
//   button.dispatchEvent(new PointerEvent("pointerup"));
//   button.dispatchEvent(new PointerEvent("pointerup"));
//   button.dispatchEvent(new PointerEvent("pointerup"));
//   button.dispatchEvent(new PointerEvent("pointerup"));
//   button.dispatchEvent(new PointerEvent("pointerup"));
//   button.dispatchEvent(new PointerEvent("pointerup"));
//   button.dispatchEvent(new PointerEvent("pointerup"));
//   let currentDate = new Date();
//   console.log("30 кликов каждые 30 секунд: ", currentDate);
// }

// setInterval(click, 30000);
// // Чистит консоль в браузере каждые 35 секунд, чтобы не засорять.
// setInterval(clearConsole, 35000);

