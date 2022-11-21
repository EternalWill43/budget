# Budget Plaid/NextJS

### Overview

This is a minimial budgeting application that uses [Next.js](https://nextjs.org/) for a React frontend and a Node.js backend.

After linking a sample bank account, the app retrieves balance information associated with the account and renders it on the `/dash` page.

#### Install dependencies

Ensure you're in the **nextjs/** folder, then install the necessary dependencies:

```bash
pnpm install
```

#### Equip the app with credentials

Copy the included **.env.example** to a file called **.env**.

```bash
cp .env.example .env
```

Fill out the contents of the **.env** file with the [client ID and Sandbox secret in your Plaid dashboard](https://dashboard.plaid.com/team/keys). Don't place quotes (`"`) around the credentials (i.e., `PLAID_CLIENT_ID=adn08a280hqdaj0ad`). Use the "Sandbox" secret when setting the `PLAID_SECRET` variable.

#### Start the server

```bash
pnpm dev
```

The app will run on port 3000 and will hot-reload if you make edits.
