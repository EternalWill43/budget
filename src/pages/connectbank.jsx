import Link from 'next/link';
import Router from 'next/router';
import { useState, useEffect, useCallback } from 'react';
import { usePlaidLink } from 'react-plaid-link';

export default function Home() {
  const [token, setToken] = useState(null);
  const [succeeded, setSucceeded] = useState(false);

  useEffect(() => {
    const createLinkToken = async () => {
      const response = await fetch('/api/create-link-token', {
        method: 'POST',
      });
      const { link_token } = await response.json();
      setToken(link_token);
    };
    createLinkToken();
  }, []);

  const onSuccess = useCallback(async (publicToken) => {
    await fetch('/api/exchange-public-token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ public_token: publicToken }),
    });
    setSucceeded(true);
  }, []);

  const { open, ready } = usePlaidLink({
    token,
    onSuccess,
  });

  return (
    <button onClick={() => open()} disabled={!ready}>
      <strong>Link account</strong>
      {succeeded ? <Link href="/dash">Go to dashboard</Link> : null}
    </button>
  );
}
