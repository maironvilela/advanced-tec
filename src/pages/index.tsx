import type { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { Header } from '../components/Header';
import { createClient } from '../services/prismic';
import { mapPrismicHomeAboutSection } from '../services/prismic/view-models/home-about-section';
import { mapPrismicHomeBannerSection } from '../services/prismic/view-models/home-banner-section';
import {
  mapPrismicHomeServiceSection,
  Service
} from '../services/prismic/view-models/home-service-section';
import { mapPrismicWhyChooseSection } from '../services/prismic/view-models/home-why-choose-section';

export type Banner = {
  urlImage: string;
  description: string;
  urlService: string;
  slug: string;
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
      {/**
      <Carousel banners={banners} />
      <About title={about.title} content={about.content} />
      <WhyChoose title={whyChoose.title} content={whyChoose.content} />
      <Services
        sectionTitle={serviceSection.sectionTitle}
        services={serviceSection.services}
      />

      <Footer /> */}
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ previewData }) => {
  const client = createClient({ previewData });

  const { data } = await client.getByUID('page', 'home-page');

  const banners = mapPrismicHomeBannerSection(data);

  const about = mapPrismicHomeAboutSection(data);

  const whyChoose = mapPrismicWhyChooseSection(data);

  const serviceSection = mapPrismicHomeServiceSection(data);

  const page = {
    banners,
    about,
    whyChoose,
    serviceSection
  };

  return {
    props: { page },
    revalidate: 60 * 60 * 24 //24 horas
  };
};
