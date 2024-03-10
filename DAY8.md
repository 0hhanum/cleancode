20240310

## 클린코드 6장 | 객체와 자료 구조

## 기억하고 싶은 내용은?

- 변수를 private로 선언하더라도 각 값마다 조회/설정 함수를 제공한다면 **구현을 외부로 노출하는 셈이다.**
- 구현을 감추려면 추상화가 필요하다. 그저 조회 함수와 설정 함수로 변수를 다룬다고 클래스가 되지는 않는다. 그보다는 **추상 인터페이스를 제공해 사용자가 구현을 모른 채 자료의 핵심을 조작할 수 있어야 진정한 의미의 클래스다.**

- 자료를 세세하게 공개하기보다는 추상적인 개념으로 표현하는 편이 좋다.

  - 개발자는 객체가 포함하는 자료를 표현할 가장 좋은 방법을 심각하게 고민해야 한다.

- 절차적인 코드는 새로운 자료 구조를 추가하기 어렵다. 그러려면 모든 함수를 고쳐야 한다. 객체 지향 코드는 새로운 함수를 추가하기 어렵다. 그러려면 모든 클래스를 고쳐야 한다.

  - 복잡한 시스템을 짜다 보면 새로운 함수가 아니라 새로운 자료 타입이 필요한 경우가 생긴다. 이때는 클래스와 객체 지향 기법이 가장 적합하다. 반면, 새로운 자료 타입이 아니라 새로운 함수가 필요한 경우도 생긴다. 이때는 절차적인 코드와 자료 구조가 좀 더 적합하다.
  - 분별 있는 프로그래머는 모든 것이 객체라는 생각이 미신임을 잘 안다. 때로는 단순한 자료 구조와 절차적인 코드가 가장 적합한 상황도 있다.
    - 일관성이 중요하다며... 이런 미묘한 문제에 올바른 결정을 내리는 건 참 어렵다.

- 시스템을 구현할 때 새로운 자료 타입을 추가하는 유연성이 필요하면 객체가 더 적합하다. 다른 경우로 새로운 동작을 추가하는 유연성이 필요하면 자료 구조와 절차적인 코드가 더 적합하다. 우수한 개발자는 편견 없이 이 사실을 이해해 직면한 문제에 최적인 해결책을 선택한다.
  - 이런식으로는 한 번도 생각해보지 못했다. 앞으로의 개발 방향성까지 고려하여 코드 스타일 선정...