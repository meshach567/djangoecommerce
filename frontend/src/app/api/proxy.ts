import axios from 'axios';

export default async (req:any, res:any) => {
  try {
    const response = await axios.request({
      method: req.method,
      url: `http://localhost:8000${req.url}`,
      data: req.body,
      headers: {
        ...req.headers,
        'Content-Type': 'application/json',
      },
    });
    res.status(response.status).json(response.data);
  } catch (error:any) {
    res.status(error.response.status).json(error.response.data);
  }
};