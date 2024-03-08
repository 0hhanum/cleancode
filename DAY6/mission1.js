// BAD 더러운 코드 😣
// Hint❕ : 검색하기 쉬운 이름을 사용하세요.
// blastOFF는 로켓 발사를 의미. 86400000은 하루의 밀리초 (milliseconds) 의미.

// What the heck is 86400000 for?
setTimeout(blastOff, 86400000);

// GOOD 😎
// 위 코드를 깨끗하게 다시 작성해 주세요.

const DAY_IN_MILLISECONDS = 86400000;
setTimeout(blastOff, DAY_IN_MILLISECONDS);

// 어떻게 고쳤는지, 사례에서 무엇을 배워야 하는지 설명해주세요.
// 상수에 의미를 가진 이름을 부여하여 해당 값이 뜻하는 바를 읽는 사람이 이해하기 쉽게 함.
