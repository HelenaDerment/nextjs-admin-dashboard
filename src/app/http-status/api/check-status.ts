// /pages/api/http-status.ts
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { url } = req.query;

  if (!url || typeof url !== 'string') {
    return res.status(400).json({ error: 'Missing or invalid URL' });
  }

  try {
    const response = await axios.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; RMITBot/1.0; +https://rmit.edu.au)',
        'Accept': '*/*',
      },
    });

    const now = new Date();
    return res.status(200).json({
      url,
      status: response.status,
      date: now.toLocaleDateString(),
      time: now.toLocaleTimeString(),
    });
  } catch (error: any) {
    return res.status(500).json({
      error: 'Failed to fetch the URL',
      details: error.message,
    });
  }
}

