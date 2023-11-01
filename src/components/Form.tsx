import tw from 'tailwind-styled-components';

const Form = () => {
  return (
    <FormContainer>
      <H2>내용을 입력해 주세요.</H2>
      <Input placeholder="입력하세요." />
      <Input placeholder="입력하세요." />
      <Input placeholder="입력하세요." />
      <Button>저장</Button>
    </FormContainer>
  );
};

const FormContainer = tw.form`
w-1/2 flex flex-col items-center p-6 gap-4 bg-white rounded-lg
`;

const H2 = tw.h2`
text-xl font-semibold
`;

const Input = tw.input`
w-full p-4 bg-slate-100 rounded-lg
`;

const Button = tw.button`
w-full p-4
font-slate-200 rounded-md
bg-blue-600 hover:bg-blue-700 text-white font-semibold
`;

export default Form;
