# 모달을 선언적으로 다루기

원하는 컴포넌트를 useOverlay 커스텀 훅을 사용해 모달처럼 쉽게 띄울 수 있는 방법을 고민하고 구현했습니다.

## 실행 예시

![Nov-02-2023 16-36-00](https://github.com/jhsung23/modal-overlay-ui/assets/69228045/d7c14321-fd1f-45fd-b29d-a86f62ad0d03)

## 사용 방법

index.html에 다음 element를 추가합니다.

```html
<body>
  <div id="root"></div>
  <!-- overlay를 위한 div 추가 -->
  <div id="overlay"></div>
  <script type="module" src="/src/main.tsx"></script>
</body>
```

App을 OverlayProvider로 감쌉니다.

```typescript
ReactDOM.createRoot(document.getElementById('root')!).render(
  <OverlayProvider>
    <App />
  </OverlayProvider>
);
```

모달을 띄워야 하는 상황에서 `useOverlay`를 호출하여 사용합니다.

띄우려는 컴포넌트를 `({close, closeAll}) => ReactNode` 형태로 만들어 다음처럼 호출합니다.

```typescript
const App = () => {
  const overlay = useOverlay();

  const openOverlay = () => {
    overlay(({ close }) => <Form closeForm={close} />);
  };

  return (
    <Main>
      <Button type="button" onClick={openOverlay}>
        모달 열기
      </Button>
    </Main>
  );
};
```
