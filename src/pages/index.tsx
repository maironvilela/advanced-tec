import type { NextPage } from 'next';
import { About } from '../components/About';
import { Carousel } from '../components/Carousel';
import { FloatingButton } from '../components/floating-button';
import { Header } from '../components/Header';
import { WhyChoose } from '../components/why-choose';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Carousel />
      <About />
      <WhyChoose />
      <FloatingButton />
    </>
  );
};

export default Home;
