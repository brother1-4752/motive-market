import { useRouter } from 'next/router';
import { SubmitHandler, useForm } from 'react-hook-form';
import { InputTypes } from '../signin';
import { validateInput } from '@/utils/validateInput';

const SignUp = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<InputTypes>();

  const onSubmit: SubmitHandler<InputTypes> = (data) => {
    const isValidatedByEmail = validateInput('email', watch('email'));
    const isValidatedByPassword = validateInput('password', watch('password'));

    const isValidated = isValidatedByEmail && isValidatedByPassword;

    if (isValidated) {
      router.push('signin');
      return <></>;
    }
  };

  const onSignupHandler = () => {
    // email, password formData로 묶어서 백엔드 서버에 전송한다.
    // 이메일 형식이나 비밀번호 검증 상태를 마친 상태에서 보내자.
    // 중복 아이디가 아니라면 회원가입 성공
    // 중복 아이디가 있다면, 1)http status code와 2)errorMsg를 백엔드 서버로부터 받고 화면에 그려준다.
    console.log('추후 회원가입 성공/실패 처리');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register('email', { required: true })}
        placeholder="Email..."
      />
      <input
        {...register('password', { required: true })}
        placeholder="Password..."
      />
      <div>
        <button onClick={onSignupHandler}>회원가입</button>
      </div>

      {/* TODO: 초기 렌더링시 에러메시지 출력오류 해결하기 */}
      {!watch('email')?.includes('@') && (
        <div>이메일 형식을 올바르게 지켜주세요.</div>
      )}
      {watch('password')?.length < 8 && (
        <div>비밀번호를 8자 이상 입력하세요.</div>
      )}
    </form>
  );
};

export default SignUp;
