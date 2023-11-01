import tw from 'tailwind-styled-components';

const DialogBox = () => {
  return (
    <Dialog>
      <H2>저장하시겠습니까?</H2>
      <Buttons>
        <SubmitButton type="button">확인</SubmitButton>
        <CancelButton type="button">취소</CancelButton>
      </Buttons>
    </Dialog>
  );
};

const Dialog = tw.dialog`
w-80 h-40 flex flex-col items-center justify-center gap-6 rounded-lg
`;

const H2 = tw.h2`
text-xl font-semibold
`;

const Buttons = tw.div`
flex gap-4
`;

const Button = tw.button`
w-16 h-10 text-sm
font-slate-200 rounded-md
`;

const SubmitButton = tw(Button)`
bg-blue-600 hover:bg-blue-700 text-white font-semibold
`;

const CancelButton = tw(Button)`
bg-zinc-100 hover:bg-zinc-200 text-slate-400 font-semibold
`;

export default DialogBox;
