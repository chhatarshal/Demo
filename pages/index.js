import Head from 'next/head'
import Center from '../components/Center';
import Header from '../components/Header'

export default function Home() {
  return (
    <div className="bg-slate-400 h-screen">
      <Head>
        <title>Quark PS</title>        
      </Head>

      <main>
        {/*  <Sidebar /> */}
        <Header />
        <Center />
      </main>

      <footer className="flex">
       
      </footer>
    </div>
  )
}
