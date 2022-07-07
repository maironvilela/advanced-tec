import type { NextPage } from 'next';
import { About } from '../components/About';
import { Carousel } from '../components/Carousel';
import { Header } from '../components/Header';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Carousel />
      <About />
    </>
  );
};

export default Home;
