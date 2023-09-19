import OnboardingSteps from '@/components/OnboardingSteps/OnboardingSteps';
import { useState } from 'react';

const Onboarding = () => {
  const [step, setStep] = useState<number>(0);

  return (
    //TODO: Step컴포넌트에 필요한 요소는 1)background image 2)온보딩 타이틀 3)기술
    <div>
      <OnboardingSteps step={step} setStep={setStep} />
    </div>
  );
};

export default Onboarding;
