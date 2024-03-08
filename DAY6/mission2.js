// BAD 더러운 코드 😣
// Hint❕ : 의미있는 이름을 사용해주세요.

const yyyymmdstr = moment().format("YYYY/MM/DD");

// GOOD 😎
// 위 코드를 깨끗하게 다시 작성해 주세요.

const currentDateFormattedAsYYYYMMDD = moment().format("YYYY/MM/DD");

// 어떻게 고쳤는지, 사례에서 무엇을 배워야 하는지 설명해주세요.

// momentJS 기준으로 `moment()`가 현재 날짜를 반환한다 할 때, 해당 날짜의 의미를 알 수 없다.
// 따라서 어떤 형식으로 무슨 날짜를 나타내는지 정확한 의미를 가진 이름인 `currentDateFormattedAsYYYYMMDD`를 사용하면
// 해당 날짜가 무슨 날짜인지 확인하려 코드를 거슬러 올라가 확인하는 수고를 덜어준다.
