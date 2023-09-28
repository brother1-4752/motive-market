import { Dispatch, MouseEvent, SetStateAction } from 'react';
import annotations from '../../annotations.json';
import { useRouter } from 'next/router';

type StepProps = {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
};

const Annotations = ({ step }: { step: number }) => {
  return annotations.map(
    (a, i) =>
      i === step && (
        <div key={i}>
          <h1>{a.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: a.description }}></div>
          {/* image url 추후 추가 */}
          {/* image url 추후 추가 */}
        </div>
      )
  );
};

const OnboardingSteps = ({ step, setStep }: StepProps) => {
  const router = useRouter();

  const onClickHandler = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (step < 2) {
      setStep((prev) => prev + 1);
      return <></>;
    }
    router.push('main');
  };

  return (
    <div>
      <Annotations step={step} />
      <button onClick={onClickHandler}>
        {step === 2 ? '메인으로 가기' : '다음'}
      </button>
    </div>
  );
};

export default OnboardingSteps;
