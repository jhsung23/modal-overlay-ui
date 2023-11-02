import tw from 'tailwind-styled-components';

type Props = {
  closeDialog: () => void;
  closeAllOverlay: () => void;
};

const DialogBox = ({ closeDialog, closeAllOverlay }: Props) => {
  const submit = () => {
    closeDialog();
    setTimeout(() => {
      closeAllOverlay();
      alert('저장되었습니다.');
    }, 1000);
  };

  return (
    <Dialog>
      <H2>저장하시겠습니까?</H2>
      <Buttons>
        <SubmitButton type="button" onClick={submit}>
          확인
        </SubmitButton>
        <CancelButton type="button" onClick={closeDialog}>
          취소
        </CancelButton>
      </Buttons>
    </Dialog>
  );
};

const Dialog = tw.div`
w-80 h-40 flex flex-col items-center justify-center gap-6 rounded-lg bg-white
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
