import { withIronSessionApiRoute } from 'iron-session/next';
import { plaidClient, sessionOptions } from '../../lib/plaid';
import { counter } from "../../lib/logstuff";

export default withIronSessionApiRoute(exchangePublicToken, sessionOptions);

async function exchangePublicToken(req, res) {
  console.log("Hits on exchangePublicToken: ");
  counter.increase('exchangePublicToken');
  console.log(counter.exchangePublicToken);
  const exchangeResponse = await plaidClient.itemPublicTokenExchange({
    public_token: req.body.public_token,
  });
  console.log(exchangeResponse.data.access_token + " is the access token");
  req.session.access_token = exchangeResponse.data.access_token;
  await req.session.save();
  res.send({ ok: true });
}
