import type { NextPage } from 'next'
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Home: NextPage = () => {
  const router = useRouter();
  
  useEffect(() => {
    router.push('/products/1');
  }, [router])

  return (
    <main/>
  )
}

export default Home
