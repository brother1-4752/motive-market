//TODO: inputValue 제네릭 타입으로 만들기
export const validateInput = (inputType: string, inputValue: string) => {
  //TODO: switch로 로직 바꿔야할지 고민하기
  if (inputType === 'email') {
    return inputValue.includes('@');
  }

  if (inputType === 'password') {
    return inputValue.length >= 8;
  }
};
