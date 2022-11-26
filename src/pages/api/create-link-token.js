import { plaidClient } from '../../lib/plaid';
import { counter } from "../../lib/logstuff";

export default async function handler(req, res) {
  console.log("Hits on createLinkToken: ");
  counter.increase('createLinkToken');
  console.log(counter.createLinkToken);

  const tokenResponse = await plaidClient.linkTokenCreate({
    user: { client_user_id: process.env.PLAID_CLIENT_ID },
    client_name: "Plaid's Tiny Quickstart",
    language: 'en',
    products: ['auth'],
    country_codes: ['US'],
    redirect_uri: process.env.PLAID_SANDBOX_REDIRECT_URI,
  });

  return res.json(tokenResponse.data);
}
