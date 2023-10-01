import { NextApiRequest, NextApiResponse } from 'next';

export default (_: NextApiRequest, response: NextApiResponse) => {
  response.status(200).json({ text: 'Hello' });
};
