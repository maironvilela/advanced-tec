import type { GetStaticProps } from 'next';
import { Carousel } from '../components/Carousel';
import { createClient } from '../services/prismic';

export type Banner = {
  urlImage: string;
  description: string;
  urlService: string;
};

type PageProps = {
  page: {
    banners: Banner[];
  };
};

export default function Home({ page }: PageProps) {
  const { banners } = page;

  console.log(banners);
  return (
    <>
      <Carousel banners={banners} />
      {/*   <Header />
    <Header />
      <About />
      <WhyChoose />
      <FloatingButton />
      <Services />
      <Footer /> */}
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ previewData }) => {
  const client = createClient({ previewData });

  const response = await client.getByUID('page', 'home-page');

  const banners = response.data.body[0].items.map((item: any) => {
    return {
      urlImage: item.img.url,
      description: item.description[0].text,
      urlService: item.link.url
    };
  });

  const page = {
    banners: banners
  };

  console.log(page);

  return {
    props: { page },
    revalidate: 60 * 60 * 24 //24 horas
  };
};
