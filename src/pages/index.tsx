import type { NextPage } from 'next';
import { About } from '../components/About';
import { Carousel } from '../components/Carousel';
import { FloatingButton } from '../components/floating-button';
import { Footer } from '../components/footer';
import { Header } from '../components/Header';
import { Services } from '../components/services';
import { WhyChoose } from '../components/why-choose';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Carousel />
      <About />
      <WhyChoose />
      <FloatingButton />
      <Services />
      <Footer />
    </>
  );
};

export default Home;
