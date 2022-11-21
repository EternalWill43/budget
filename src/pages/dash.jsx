import { withIronSessionSsr } from 'iron-session/next';
import { plaidClient, sessionOptions } from '../lib/plaid';

export default function Dashboard({ balance }) {
  const Txns = () => (
    balance.map(txn => <div className='border p-2 mx-auto'>
      <div>Amount: {txn.amount}</div>
      <div>Name: {txn.name}</div>
      <div>Category: {txn.category}</div>
      <div>Merchant Name: {txn.merchant_name}</div>
    </div>)
  )
  return <div className="bg-slate-900 text-white p-2">Txn Dashboard
    <div>
    <Txns/>
    </div>
  </div>
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
