import Image from 'next/image';
import { Carousel as ReactCarousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import banner01 from '../../../public/images/banner-1.svg';
import banner02 from '../../../public/images/banner-audio-video.svg';
import banner03 from '../../../public/images/banner-seguranca-eletronica.svg';
import styles from './banner.module.scss';

export function Carousel() {
  return (
    <ReactCarousel
      className={styles.container}
      autoPlay={true}
      infiniteLoop={true}
      emulateTouch={true}
      interval={8000}
    >
      <div className={styles.banner}>
        <Image src={banner01} alt="Banner" />
        <div>
          <h3>Controle toda sua casa pelo seu celular de onde estiver</h3>
          <button>Saiba Mais</button>
        </div>
      </div>
      <div className={styles.banner}>
        <Image src={banner02} alt="Banner" />
        <div>
          <h3>Experiência de estar no cinema sem sair da sala de sua casa</h3>
          <button>Saiba Mais</button>
        </div>
      </div>
      <div className={styles.banner}>
        <Image src={banner03} alt="Banner" />
        <div>
          <h3>
            Mantenha sua casa segura com nossas soluções em Segurança Eletrônica
          </h3>
          <button>Saiba Mais</button>
        </div>
      </div>
    </ReactCarousel>
  );
}
