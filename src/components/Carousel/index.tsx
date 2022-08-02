import { Carousel as ReactCarousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { HomeBannerSection } from '../../services/prismic/view-models/home-banner-section';
import styles from './banner.module.scss';

type CarouselProps = HomeBannerSection;

export function Carousel({ banners }: CarouselProps) {
  return (
    <ReactCarousel
      className={styles.container}
      autoPlay={true}
      infiniteLoop={true}
      emulateTouch={true}
      interval={8000}
    >
      {banners?.map((banner) => (
        <div className={styles.banner} key={banner.urlImage}>
          <img src={banner.urlImage} alt="Banner" />
          <div>
            <h3>{banner.description}</h3>
            <a href={`./servicos/${banner.slug}`}>
              <button>Saiba Mais</button>
            </a>
          </div>
        </div>
      ))}
    </ReactCarousel>
  );
}
