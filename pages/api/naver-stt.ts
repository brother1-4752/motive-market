// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { image } = req.body;
  const NAVER_STT_API_URL = process.env.NAVER_STT_API_URL;
  const NAVER_STT_CLIENT_ID = process.env.NAVER_STT_CLIENT_ID;
  const NAVER_STT_CLIENT_SECRET = process.env.PAPAGO_CLIENT_SECRET;

  const headers = {
    'Content-Type': 'application/octet-stream',
    'X-NCP-APIGW-API-KEY-ID': NAVER_STT_CLIENT_ID,
    'X-NCP-APIGW-API-KEY': NAVER_STT_CLIENT_SECRET,
  };

  try {
    const response = await axios.post(NAVER_STT_API_URL as string, {
      headers,
      image,
    });
    console.log(response);
    return res.status(200).json({ ...response.data });
  } catch (error: any) {
    return res.send({ ...error });
  }
}
