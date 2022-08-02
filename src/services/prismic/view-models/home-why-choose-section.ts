import * as prismicH from '@prismicio/helpers';

export type HomeWhyChooseSection = {
  title: string;
  content: string;
};

export const mapPrismicWhyChooseSection = (data: any): HomeWhyChooseSection => {
  console.log(data);
  return {
    title: prismicH.asText(data['why-choose-title']) ?? '',
    content: prismicH.asHTML(data['why-choose-content']) ?? ''
  };
};
