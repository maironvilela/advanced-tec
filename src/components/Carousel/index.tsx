 import { Carousel as ReactCarousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Banner } from '../../pages';
import styles from './banner.module.scss';

type CarouselProps = {
  banners: Banner[];
};

export function Carousel({ banners }: CarouselProps) {
  return (
    <ReactCarousel
      className={styles.container}
      autoPlay={true}
      infiniteLoop={true}
      emulateTouch={true}
      interval={8000}
    >
      {banners?.map((banner: Banner) => (
        <div className={styles.banner} key={banner.urlService}>
          <img src={banner.urlImage} alt="Banner" />
          <div>
            <h3>{banner.description}</h3>
            <button>Saiba Mais</button>
          </div>
        </div>
      ))}
    </ReactCarousel>
  );
}
