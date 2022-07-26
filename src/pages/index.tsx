import * as prismicH from '@prismicio/helpers';
import type { GetStaticProps } from 'next';
import { About } from '../components/About';
import { Carousel } from '../components/Carousel';
import { Header } from '../components/Header';
import { createClient } from '../services/prismic';

export type Banner = {
  urlImage: string;
  description: string;
  urlService: string;
};

type PageProps = {
  page: {
    banners: Banner[],
    about:{
      title: string,
      content: string
    }
  };
};

export default function Home({ page }: PageProps) {
  const { banners, about } = page;

   return (
    <>

      <Header />
      <Carousel banners={banners} /> 
      <About title ={about.title} content={about.content} />

      
      {/*  
             

    <Header />
      <About />
      <WhyChoose />
      <FloatingButton />
      <Services />
      <Footer /> 

      <div dangerouslySetInnerHTML={{ __html: about.title }}></div>
      <div dangerouslySetInnerHTML={{ __html: about.content }}></div>
      
      
      
      */}
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

  const about = {
    title: prismicH.asText(response.data['about-title']),
    content: prismicH.asHTML(response.data['about-content'])
  }


  const page = {
    banners,
    about
  };

  console.log(about);

  return {
    props: { page },
    revalidate: 60 * 60 * 24 //24 horas
  };
};
