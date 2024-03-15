20240316

## 클린코드 8장 | 경계

## 기억하고 싶은 내용은?

- 패키지 제공자나 프레임워크 제공자는 **적용성을** 최대한 넓히려 애쓴다. 더 많은 환경에서 돌아가야 더 많은 고객이 구매하니까.
- 반면, 사용자는 자신의 요구에 집중하는 인터페이스를 바란다.
- 이런 긴장으로 인해 시스템 경계에서 문제가 생길 소지가 많다.

- 경계 인터페이스를 사용할 때는 이를 이용하는 클래스나 클래스 계열 밖으로 노출되지 않도록 주의한다.

  외부 패키지는 범용성을 염두해 만들어짐. 개발 비용, 공수를 고려해 외부 패키지를 사용하는 건데 해당 패키지가 제공하는 것을 모두 익힐 필요가 없음.
  요구사항에 필요한 부분만 사용할 수 있도록 래핑해 사용.
  코드 가독성 / 일관성이 높아짐
  사용하는 기능에 대한 테스트를 작성해 외부 패키지가 변경되었을 때 올바르게 동작하는지 감지할 수 있음. 버전 업도 쉬워짐.

## 클린코드 9장 | 단위 테스트

## 기억하고 싶은 내용은?

- 테스트 작성 원칙

  1. 실패하는 단위 테스트를 작성할 때까지 실제 코드를 작성하지 않는다.
  2. 컴파일은 실패하지 않으면서 실행이 실패하는 정도로만 단위 테스트를 작성한다.
  3. 현재 실패하는 테스트를 통과할 정도로만 실제 코드를 작성한다.

- 이중 표준
  - 테스트 API 코드에 적용하는 표준은 실제 코드에 적용하는 표준과 확실히 다르다. 단순하고, 간결하고, 표현력이 풍부해야 하지만, 실제 코드만큼 효율적일 필요는 없다.
  - 실제 환경이 아니라 테스트 환경에서 돌아가는 코드이기 때문이다.
  - 실제 환경과 테스트 환경은 \*\*요구사항이 판이하게 다르다.

### 테스트 당 개념 하나

    - 테스트 당 `assert`문 하나 보다는, "개념 당 `assert`문 수를 최소로 줄여라", "테스트 함수 하나는 하나의 개념만 테스트하라"

### 테스트는 독립적으로

    - 각 테스트는 서로 의존하면 안 된다.
    - 한 테스트가 다음 테스트가 실행될 환경을 준비해서는 안 된다.
    - 각 테스트는 독립적으로 그리고 어떤 순서로 실행해도 괜찮아야 한다.
    - ** 테스트가 서로에게 의존하면 하나가 실패할 때 나머지도 잇달아 실패하므로 원인을 진단하기 어려워지며 후반 테스트가 찾아내야 할 결함이 숨겨진다.