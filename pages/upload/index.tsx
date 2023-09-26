import { CreateStt } from '@/utils/\bcreateStt';
import axios from 'axios';
import { SubmitHandler, useForm } from 'react-hook-form';

export type UploadInputProps = {
  selectedOption: string;
  video: string;
  audio: string;
  text: string;
  isAlramed: boolean;
  isRepresentative: boolean;
};

const Upload = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<UploadInputProps>();

  const onSubmitHandler: SubmitHandler<UploadInputProps> = async (data) => {
    // const testData = await CreateStt(data.audio[0]);
    // console.log(testData);
    console.log(data.audio[0]);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <select {...register('selectedOption')}>
          <option value="Video">Video</option>
          <option value="Audio">Audio</option>
          <option value="Text">Text</option>
        </select>

        {/* 선택한 옵션에 따라 input를 상황에 맞게 보여준다. */}
        {/* TODO: 겹치지 않도록, 재사용성 높이기 */}

        {watch('selectedOption') === 'Video' && (
          <input {...register('video')} type="file" accept="video/*"></input>
        )}
        {watch('selectedOption') === 'Audio' && (
          <input {...register('audio')} type="file" accept="audio/*"></input>
        )}
        {watch('selectedOption') === 'Text' && <input {...register('text')} />}

        {/* naver STT 세팅되면, 텍스트화하고 감정분석 유틸함수로 프로퍼티 넘겨주기 */}
        <button>제출</button>
      </form>
    </div>
  );
};

export default Upload;
