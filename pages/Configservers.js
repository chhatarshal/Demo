import Head from 'next/head';
import Header from '../components/Header';
import QppServers from '../components/QppServers';


export default function Configservers() {
  return (
    <div className="bg-slate-400 h-screen">
      <Head>
        <title>Quark PS</title>        
      </Head>

      <main>
        {/*  <Sidebar /> */}
        <Header />
        <QppServers />
      </main>

      <footer className="flex">
       
      </footer>
    </div>
  )
}
