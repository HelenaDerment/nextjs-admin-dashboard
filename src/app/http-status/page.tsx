'use client';

import { useState } from 'react';

export default function HttpStatusPage() {
  const [url, setUrl] = useState('');
  const [log, setLog] = useState<{
    url: string;
    status: number;
    date: string;
    time: string;
  } | null>(null);
  const [error, setError] = useState('');

  const checkStatus = async () => {
    try {
      const res = await fetch(`/api/http-status?url=${encodeURIComponent(url)}`);
      const data = await res.json();

      if (data.status) {
        setLog(data);
        setError('');
      } else {
        setLog(null);
        setError(data.error || 'Unknown error');
      }
    } catch (err) {
      setError('Failed to reach the API');
    }
  };

  const isActive = log?.status && log.status >= 200 && log.status < 300;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">HTTP Status Checker</h1>

      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="https://example.com"
        className="w-full border p-2 rounded mb-3"
      />

      <button
        onClick={checkStatus}
        className="bg-rmit-red text-white px-4 py-2 rounded"
      >
        Check Status
      </button>

      {log && (
        <div className="mt-6">
          <p className="text-lg">
            <strong>Status Code:</strong> {log.status}
          </p>
          <p className="text-sm text-gray-500">
            {log.date} at {log.time}
          </p>
          <p
            className={`mt-2 font-semibold ${
              isActive ? 'text-green-600' : 'text-red-600'
            }`}
          >
            {isActive ? '✅ URL is Active' : '❌ URL is Inactive'}
          </p>
        </div>
      )}

      {error && <p className="mt-4 text-red-600">{error}</p>}
    </div>
  );
}



