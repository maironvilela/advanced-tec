import * as prismicH from '@prismicio/helpers';

export type HomeAboutSection = {
  title: string;
  content: string;
};

export const mapPrismicHomeAboutSection = (data: any): HomeAboutSection => {
  return {
    title: prismicH.asText(data['about-title']) ?? '',
    content: prismicH.asHTML(data['about-content']) ?? ''
  };
};
