import tw from 'tailwind-styled-components';

const App = () => {
  return (
    <Main>
      <Button type="button">모달 열기</Button>
    </Main>
  );
};

const Main = tw.main`
w-screen h-screen flex justify-center items-center bg-gray-200
`;

const Button = tw.button`
p-4 rounded-lg bg-indigo-300 hover:bg-indigo-400 font-bold text-white
`;

export default App;
