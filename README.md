- 캘린더는 dayjs 쓰네요

## 이슈

- button의 경우 tailwindcss와 충돌있음 :

  - https://github.com/mantinedev/mantine/issues/823
  - https://github.com/tailwindlabs/tailwindcss/issues/6602#issuecomment-1050099984
  - ```
    button, [type='button'], [type='reset'], [type='submit'] {
    /* -webkit-appearance: button; */
    /* background-color: transparent; */
    /* background-image: none; */
    ```

## 커스텀 가능한 범위

### Theme Provider

전역적인 커스터마이징이 가능함

- 색상 : 사용자 지정 컬러 추가도 가능하고, 기존의 컬러 팔레트의 색상값들을 덮어씌우기도 가능함. 컬러 팔레트 커스터마이징 하기 쉬움. 0~9 shade. shade에서 light/dark 기준 번호 설정 가능. 테마 프로바이더에서 추가된 컬러 팔레트는 별도 수정없이 모든 컴포넌트에서 이용가능
  ```tsx
  <MantineProvider
    withGlobalStyles
    withNormalizeCSS
    theme={{
      colors: {
        green: [
          '#EBFFF7',
          '#D5F5EB',
          '#B7EFD7',
          '#8BE4BE',
          '#00C471',
          '#00a65f',
          '#028c52',
          '#006a3d',
          '#07362A',
        ],
      },
    }}
  >
    <App />
  </MantineProvider>
  ```
- 커스텀 가능한 기본적인 설정 : radius 값, fontFamily, lineHeight, transitionTimingFunction(애니메이션), fontSizes, fontSpacing, boxShadow, heading, loader, dateFormat, breakpoints
- 그 외 : 직접 추가
- 컴포넌트별 커스텀 스타일링을 테마 프로바이더에서 전역으로 설정 가능, 컴포넌트의 각 구성요소에 class name추가도 전역으로 가능 -> 클래스 네임으로 선택해 스타일링하기 편할듯
- 테마 프로바이더는 여러 개 사용, 중첩 사용 가능

### 컴포넌트별 styles API

동적인 영역에 대한 스타일 커스터마이징 가능

## DX

- 툴팁 사용법이 랠릿이랑 비슷하고 간편
  ```tsx
  <Tooltip label="쿠폰에 대한 설명" withArrow className="ml-2">
    ℹ️
  </Tooltip>
  ```
