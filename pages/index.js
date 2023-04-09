import LoginForm from '@/Components/LoginForm';
import Head from 'next/head';
export default function Home() {

  return <>
    <Head>
      <title>Charge On Site</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="https://static.wixstatic.com/media/182a81_c4e4ee2bac6d4389a866239475519bdf~mv2.png/v1/fill/w_32%2Ch_32%2Clg_1%2Cusm_0.66_1.00_0.01/182a81_c4e4ee2bac6d4389a866239475519bdf~mv2.png" />
    </Head>
    <div className="container">
      <LoginForm />
    </div>
  </>;
}
