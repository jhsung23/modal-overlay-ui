import tw from 'tailwind-styled-components';
import useOverlay from '../hooks/useOverlay/useOverlay';
import DialogBox from './DialogBox';

type Props = {
  closeForm: () => void;
};

const Form = ({ closeForm }: Props) => {
  const overlay = useOverlay();

  const openDialogBox = () => {
    overlay(({ close, closeAll }) => <DialogBox closeDialog={close} closeAllOverlay={closeAll} />);
  };

  return (
    <FormContainer>
      <H2>내용을 입력해 주세요.</H2>
      <Input placeholder="입력하세요." />
      <Input placeholder="입력하세요." />
      <Input placeholder="입력하세요." />
      <SaveButton type="button" onClick={openDialogBox}>
        저장
      </SaveButton>
      <CancelButton type="button" onClick={() => closeForm()}>
        닫기
      </CancelButton>
    </FormContainer>
  );
};

const FormContainer = tw.form`
w-96 flex flex-col items-center p-6 gap-4 bg-white rounded-lg
`;

const H2 = tw.h2`
text-xl font-semibold
`;

const Input = tw.input`
w-full p-4 bg-slate-100 rounded-lg
`;

const Button = tw.button`
w-full p-4 rounded-md font-semibold
`;

const SaveButton = tw(Button)`
bg-blue-600 hover:bg-blue-700 text-white
`;

const CancelButton = tw(Button)`
bg-zinc-100 hover:bg-zinc-200 text-slate-400
`;

export default Form;
