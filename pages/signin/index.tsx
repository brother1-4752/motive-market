import CustomSuspense from '@/components/Common/CustomSuspense/CustomSuspense';
import { validateInput } from '@/utils/validateInput';
import { useRouter } from 'next/router';
import { SubmitHandler, useForm } from 'react-hook-form';

export type InputTypes = {
  email: string;
  password: string;
};

const Signin = () => {
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

    //TODO: 추후 RESTful API 백엔드 서버 만들고, formData로 묶어 전송하기.
    //TODO: response로 access_token과 member_id를 반환받기.
    //TODO: fail시, http status code를 각 케이스마다 반환 받고, errorBoundary 처리하기
    if (isValidated) {
      router.push('onboarding');
      return <></>;
    } else {
      const confirmed = confirm(
        '로그인에 실패했습니다.\n회원가입 화면으로 전환할까요?'
      );
      return confirmed ? router.push('signup') : <> </>;
    }
  };

  // 5초 로딩 스피너 보여주고, 로그인 화면으로 리다이렉트
  return (
    //TODO: Oauth2 google, facebook 버튼 구현(autoload적용)
    <CustomSuspense fallback={<div>Loading...</div>} maxDuration={3000}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* TODO: email, password 정규식 검증 config형식으로 변경하기 */}
        <input
          {...register('email', { required: true })}
          placeholder="Email..."
        />
        <input
          {...register('password', { required: true })}
          placeholder="Password..."
        />
        <div>
          <button>로그인</button>
          <button>비밀번호 찾기</button>
        </div>

        <div>
          <span>계정이 없으신가요?</span>
          <button onClick={() => router.push('signup')}>회원가입</button>
        </div>

        {errors.email && <span>Email is required</span>}
        {errors.password && <span>Password is required</span>}
      </form>
    </CustomSuspense>
  );
};

export default Signin;
