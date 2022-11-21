import { withIronSessionSsr } from 'iron-session/next';
import { plaidClient, sessionOptions } from '../lib/plaid';

export default function Dashboard({ balance }) {
  console.log(balance);
  return <div>DASH</div>
}

export const getServerSideProps = withIronSessionSsr(
  async function getServerSideProps({ req }) {
    const access_token = req.session.access_token;

    if (!access_token) {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      };
    }

    const response = await plaidClient.transactionsGet({ access_token, start_date: '2018-01-01', end_date: '2021-02-01' });
    console.log(response.data);
    console.log("RES---------------------------------")
    return {
      props: {
        balance: response.data.transactions,
      },
    };
  },
  sessionOptions
);
