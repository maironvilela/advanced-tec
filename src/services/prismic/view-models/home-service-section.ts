export type Service = {
  slug: string;
  serviceTitle: string;
  urlImage: string;
  description: {
    type: string;
    text: string;
    spans: [];
  };
};
export type HomeServiceSection = {
  sectionTitle: string;
  services: Service[];
};

export const mapPrismicHomeServiceSection = (data: any): HomeServiceSection => {
  const serviceSectionContent = data.body[1];

  const sectionTitle =
    serviceSectionContent.primary['section-service-title'][0].text;
  const services = serviceSectionContent.items.map((service: any) => ({
    slug: service.slug[0].text,
    serviceTitle: service['service-title'][0].text,
    urlImage: service['service-image'].url,
    description: {
      text: service['service-description'][0].text,
      type: service['service-description'][0].type,
      spans: service['service-description'][0].spans
    }
  }));
  return {
    sectionTitle,
    services
  };
};
