import * as prismicH from '@prismicio/helpers';
import type { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { About } from '../components/About';
import { Carousel } from '../components/Carousel';
import { Footer } from '../components/footer';
import { Header } from '../components/Header';
import { Services } from '../components/services';
import { WhyChoose } from '../components/why-choose';
import { createClient } from '../services/prismic';
import {
  mapPrismicHomeServiceSection,
  Service
} from '../services/prismic/view-models/home-service-section';

export type Banner = {
  urlImage: string;
  description: string;
  urlService: string;
};

type PageProps = {
  page: {
    aboutTitle: any;
    banners: Banner[];
    about: {
      title: string;
      content: string;
    };
    whyChoose: {
      title: string;
      content: string;
    };
    serviceSection: {
      sectionTitle: string;
      services: Service[];
    };
  };
};

export default function Home({ page }: PageProps) {
  const { banners, about, whyChoose, serviceSection, aboutTitle } = page;
  const { query } = useRouter();

  console.log(query);

  return (
    <>
      <Header />
      <Carousel banners={banners} />
      <About title={about.title} content={about.content} />
      <WhyChoose title={whyChoose.title} content={whyChoose.content} />
      <Services
        sectionTitle={serviceSection.sectionTitle}
        services={serviceSection.services}
      />

      <Footer />
      <div dangerouslySetInnerHTML={{ __html: aboutTitle.text }}></div>

      {/*  
     

    <Header />
      <About />
      <WhyChoose />

      <div dangerouslySetInnerHTML={{ __html: about.content }}></div>
            
      */}
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ previewData }) => {
  const client = createClient({ previewData });

  const response = await client.getByUID('page', 'home-page');

  const aboutTitle = response.data['about-title'][0];

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
  };

  const whyChoose = {
    title: prismicH.asHTML(response.data['why-choose-title']),
    content: prismicH.asHTML(response.data['why-choose-content'])
  };

  const serviceSection = mapPrismicHomeServiceSection(response.data.body);

  const page = {
    banners,
    about,
    whyChoose,
    serviceSection,
    aboutTitle
  };

  return {
    props: { page },
    revalidate: 60 * 60 * 24 //24 horas
  };
};
