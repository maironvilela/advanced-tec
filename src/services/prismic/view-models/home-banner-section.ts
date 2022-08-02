export type Banner = {
  urlImage: string;
  description: string;
  urlService: string;
  slug: string;
};
export type HomeBannerSection = {
  banners: Banner[];
};

export const mapPrismicHomeBannerSection = (data: any): HomeBannerSection => {
  const bannerSectionContent = data.body[0];

  const banners = bannerSectionContent.items.map((item: any) => {
    return {
      urlImage: item.img.url,
      description: item.description[0].text,
      slug: item.slug[0].text
    };
  });

  return banners;
};
