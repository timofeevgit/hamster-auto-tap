const button = document.querySelector(".user-tap-button");
let reachedZeroEnergy = false;
function tick() {
  try {
    const energy = document.querySelector(".user-tap-energy > p");
    if (energy) {
      const energyStr = energy.innerText;
      const currEnergy = Number(energyStr.split("/")[0]);
      const maxEnergy = Number(energyStr.split("/")[1]);

      if (!reachedZeroEnergy) {
        button.dispatchEvent(new PointerEvent("pointerup"));
        button.dispatchEvent(new PointerEvent("pointerup"));
        button.dispatchEvent(new PointerEvent("pointerup"));
        button.dispatchEvent(new PointerEvent("pointerup"));
      }
      if (currEnergy <= 10) {
        reachedZeroEnergy = true;
      }
      if (currEnergy >= maxEnergy - 10) {
        reachedZeroEnergy = false;
      }
    }
  } catch (e) {
    console.log(e);
  }
  setTimeout(tick, 100 * Math.random() + 50);
}
tick();

function click() {
  button.dispatchEvent(new PointerEvent("pointerup"));
  console.log("Клик каждые 5 секунд");
}

setInterval(click, 5000);

// * Клик каждую секунду
// const button = document.querySelector(".user-tap-button");
// function click() {
//   button.dispatchEvent(new PointerEvent('pointerup'))
// }

// setInterval(click, 1000);

// * 30 кликов каждые 30 секунд
// const button = document.querySelector(".user-tap-button");
// // очистка консоли
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
// setInterval(clearConsole, 35000);
