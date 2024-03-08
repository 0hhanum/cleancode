// BAD 더러운 코드 😣
// Hint❕ : 불필요하게 반복하지 마세요.

const _Car = {
  carMake: "Honda",
  carModel: "Accord",
  carColor: "Blue",
};

function paintCar(car, color) {
  car.carColor = color;
}

// GOOD 😎
// 위 코드를 깨끗하게 다시 작성해 주세요.
const Car = {
  madeBy: "Honda",
  modelName: "Accord",
  color: "Blue",
};

function paintCar(car, color) {
  car.color = color;
}

// 어떻게 고쳤는지, 사례에서 무엇을 배워야 하는지 설명해주세요.

// Car의 속성값인데 car~ 식으로 반복할 필요 없다.
// 해당 속성들은 car.~ 형태로 사용하게 되므로 `madeBy`, `modelName`, `color`로만 두는 게 좋다.
