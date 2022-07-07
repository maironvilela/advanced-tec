import type { NextPage } from 'next';
import { Carousel } from '../components/Carousel';
import { Header } from '../components/Header';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Carousel />
    </>
  );
};

export default Home;
