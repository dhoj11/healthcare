## 🏥 헬스케어

환자의 병원 내원과 진료를 위해 의료진이 사용하는 서비스입니다. 

서비스에서 제공하는 기능은 다음과 같습니다. 

1. 원무
    1. 환자등록
    2. 진료예약, 진료접수
    3. 검사예약, 검사요청
2. 진료
    1. 진료작성, 진단, 이전진료기록 열람
    2. 약, 주사처방
    3. 검사처방
3. 검사
    1. 검사기록입력, 검사조회
4. 병원설정
    1. 병원운영시간 변경
    2. 직원추가, 직원정보수정
5. 채팅

그리고 각각 페이지에서 실시간 동기화, 알림 기능을 제공합니다.

---

## 📱 미리보기

![Untitled](https://user-images.githubusercontent.com/31316861/168848071-9dea1255-3004-4758-b3f3-9c49599e9d54.png)
![Untitled (1)](https://user-images.githubusercontent.com/31316861/168848110-c8659ee5-9428-4d56-9009-2f91d659a3d1.png)
![Untitled (2)](https://user-images.githubusercontent.com/31316861/168848119-6f587337-cd9f-4c92-ab6d-e2467bdba08d.png)
![Untitled (3)](https://user-images.githubusercontent.com/31316861/168848139-ed75e983-b4ff-460f-b0fd-14bee057b1c8.png)
![Untitled (4)](https://user-images.githubusercontent.com/31316861/168848148-d1b0169a-0133-44b5-9aa2-61a01e2a7b85.png)
![Untitled (5)](https://user-images.githubusercontent.com/31316861/168848166-ed205ba0-0095-4bdf-9561-ab3b2c5bfb57.png)
![Untitled (6)](https://user-images.githubusercontent.com/31316861/168848179-24b6412f-eef4-408d-8f76-fbe59409cbeb.png)

---

## 🛠️ 스택

- react, redux
- spring-framework, spring-security, jwt, mySQL, mybatis
- mqtt

---

## 🙋 담당한 기능

- 진료
- 검사
- 직원관리
- 실시간 동기화

---

## 🔧 기획 및 설계

- 요구사항 분석 → 기능정의 → UI설계 → DB설계 → 개발 순으로 프로젝트를 진행했습니다.

![Untitled (7)](https://user-images.githubusercontent.com/31316861/168848497-b390854f-2f54-467b-9c74-7abbb4736b17.png)

![제목 없음-3](https://user-images.githubusercontent.com/31316861/168848526-c6c72396-767c-41cb-b2fe-bcaf71b45d19.png)



---

## 🔧 개발

### 프로세스 흐름도

![Untitled (8)](https://user-images.githubusercontent.com/31316861/168848569-13880dba-89f9-4f90-bc9e-77f436d6ce32.png)


- UI는 react를 사용했습니다.
    - react의 전역상태관리 컨테이너로 redux를 사용했습니다.
    - useCallback Hook을 사용하여 함수의 불필요한 재선언을 줄였습니다.
    - useMemo Hook을 사용하여 컴포넌트의 불필요한 리렌더링을 줄였습니다.

- API 서버는 spring framework를 사용했습니다.
    - 스프링 시큐리티를 사용하여 인증과 인가를 구현하였습니다.

### 실시간동기화

![Untitled (9)](https://user-images.githubusercontent.com/31316861/168848599-766372b9-f7cc-4b59-9940-9365515d0174.png)


- mqtt로 실시간동기화, 알림기능을 구현했습니다.
    
    간호사, 의사, 임상병리사별 보고있는 화면이 다릅니다. 데이터가 업데이트되면 새로고침 없이 실시간으로 정보를 업데이트 해야할 필요가 있었습니다. 
    
- 계정 로그인시 클라이언트는 3개의 토픽을 구독합니다.
    1. 병원코드
    2. 병원코드/권한
    3. 병원코드/권한/계정ID 
- mqtt 메세지는 topic, content를 http request body에 포함시켜 Mqtt 서버에 요청합니다.
    
    content의 value는 ‘/’ 로 역할과 대상, 내용을 구분합니다. 
    
    ```json
    param = {
    	topic : "/병원코드/직책/직원ID",
    	conteont : "/리렌더링/컴포넌트/메세지"
    }
    ```
    
- 토픽을 구독중인 observer가 메세지 수신 후 json 데이터를 파싱하여 파싱한 결과에 따라 컴포넌트를 리렌더링하거나 알림메세지를 표시합니다.

---

## 💡성장경험

### 프론트엔드 렌더링 최적화

한 페이지에 많은 컴포넌트를 포함하고 있습니다. 다이얼로그의 사용이 많았고 컴포넌트간 상호작용이 많았습니다. 상태가 업데이트 되거나 props가 변경될 때마다 원하지 않는 리렌더링이 발생했습니다. 리렌더링을 최소화 할 수 있는 컴포넌트 구성과 useMemo Hook을 사용하여 렌더링 최적화를 고민했습니다.

### 협업

의견은 충돌할 수 있습니다. 협의는 택일, 양보가 아니며 개선점을 찾는 과정입니다. 또한 기능은 단독으로 동작하지 않으며 서로의 기능, 서비스에 영향을 받습니다.

서비스 개발자에게 가장 중요한 역량은 커뮤니케이션이며 개발은 기능구현이 아닌 문제해결과정임을 배웠습니다.
