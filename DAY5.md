20240307

## 클린코드 4장 | 주석

## 기억하고 싶은 내용은?

- 변수나 함수의 <b>이름 자체가 무언가를 표현</b>하고 있음을 깨닫기

  ```
  // 직원의 복지 혜택 검사
   if ((employee.flags & HOURLY_FLAG) && (employee.age > 65))

   ->

   if (employee.isEligibleForFullBenefits)
  ```
