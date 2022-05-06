- 캘린더는 dayjs 쓰네요
- button의 경우 tailwindcss와 충돌있음 :

  - https://github.com/mantinedev/mantine/issues/823
  - https://github.com/tailwindlabs/tailwindcss/issues/6602#issuecomment-1050099984
  - ```
    button, [type='button'], [type='reset'], [type='submit'] {
    /* -webkit-appearance: button; */
    /* background-color: transparent; */
    /* background-image: none; */
    ```

- 컬러 팔레트 커스터마이징 하기 쉬움
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
