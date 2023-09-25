import axios from 'axios';

export const CreateStt = async (image: any) => {
  const response = await axios.post('api/naver-stt', { image });

  return response.data;
};
