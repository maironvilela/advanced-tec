import { HomeServiceSection } from '../../services/prismic/view-models/home-service-section';
import styles from './service.module.scss';

type ServicesProps = HomeServiceSection;

export function Services({ sectionTitle, services }: ServicesProps) {
  return (
    <section className={styles.container}>
      <header>
        <h1>{sectionTitle}</h1>
      </header>

      {services.map((service) => (
        <>
          <div className={styles['item-service']} key={service.serviceTitle}>
            <img src={service.urlImage} alt="Imagem casa com automação" />
            <div>
              <h2>{service.serviceTitle}</h2>
              <p
                dangerouslySetInnerHTML={{ __html: service.description.text }}
              ></p>
              <a href={`./servicos/${service.slug}`}>+ Detalhes</a>
            </div>
          </div>
        </>
      ))}
    </section>
  );
}
