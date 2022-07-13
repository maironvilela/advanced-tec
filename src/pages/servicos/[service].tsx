import { GetStaticProps } from 'next';
import { Header } from '../../components/Header';
import styles from './services.module.scss';

type ServicesProps = {
  service: string;
};

export default function Services({ service }: ServicesProps) {
  return (
    <>
      <header>
        <Header page="{service}" />
      </header>

      <section className={styles.section}>
        <h1>{service}</h1>
      </section>
    </>
  );
}

export const getStaticPaths = () => {
  return {
    paths: [],
    fallback: 'blocking'
  };
};
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { service } = params;
  return {
    props: { service }
  };
};
