import Head from 'next/head'
import Database from '../components/Database';
import Header from '../components/Header'

export default function createdb() {
  return (
    <div className="bg-slate-400 h-screen">
      <Head>
        <title>Quark PS</title>        
      </Head>

      <main>
        {/*  <Sidebar /> */}
        <Header />
        <Database />
      </main>

      <footer className="flex">
       
      </footer>
    </div>
  )
}

