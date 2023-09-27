import axios from 'axios';

export const CreateStt = async () => {
  const response = await axios.post('api/naver-stt');

  return response.data;
};
