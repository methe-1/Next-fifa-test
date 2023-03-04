import Head from 'next/head'
import { Inter } from 'next/font/google'
import SearchInput from '@/frontend/components/ui/Input/SearchInput'
import Players from '@/frontend/components/Players'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [filter, setFilter] = useState('');
  const handleFilter = (e: any) => setFilter(e.target.value);
  return (
    <>
      <Head>
        <title>Fifa</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
        <div className='container mx-auto flex flex-col gap-4 justify-center items-center px-4 mt-6'>
          <SearchInput className='w-[60%] border-b-2' onChange={handleFilter} />
          <Players filter={filter} />
        </div>
      </main>
    </>
  )
}
