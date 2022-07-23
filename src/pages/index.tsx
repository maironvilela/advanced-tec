import type { GetStaticProps, NextPage } from 'next';
import { About } from '../components/About';
import { Carousel } from '../components/Carousel';
import { FloatingButton } from '../components/floating-button';
import { Footer } from '../components/footer';
import { Header } from '../components/Header';
import { Services } from '../components/services';
import { WhyChoose } from '../components/why-choose';
import { createClient } from '../services/prismic';

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

export const getStaticProps: GetStaticProps = async ({ previewData }) => {
  const client = createClient({ previewData });

  const page = await client.getByUID('page', 'home-page');

  console.log(JSON.stringify(page, null, 2));
  return {
    props: {},
    revalidate: 60 * 60 * 24 //24 horas
  };
};

export default Home;
