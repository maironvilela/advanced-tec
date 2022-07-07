import type { NextPage } from 'next';
import { About } from '../components/About';
import { Carousel } from '../components/Carousel';
import { Header } from '../components/Header';
import { WhyChoose } from '../components/why-choose';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Carousel />
      <About />
      <WhyChoose />
    </>
  );
};

export default Home;
