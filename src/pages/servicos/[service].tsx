import { GetStaticProps } from 'next';
import Image from 'next/image';
import airConditioning from '../../../public/images/automacao-ar-condicionado.svg';
import audioAndVideo from '../../../public/images/automacao-audio-video.svg';
import doubt from '../../../public/images/automacao-duvida.svg';
import lighting from '../../../public/images/automacao-iluminacao.svg';
import garden from '../../../public/images/automacao-jardim.svg';
import persians from '../../../public/images/automacao-persianas.svg';
import voiceControl from '../../../public/images/echo-dot.svg';
import { Footer } from '../../components/footer';
import { Header } from '../../components/Header';
import styles from '../../styles/services.module.scss';

type ServicesProps = {
  service: string;
};

export default function Services({ service }: ServicesProps) {
  return (
    <div className={styles.container}>
      <Header page={service} />

      <div className={styles.content}>
        <header
          className={`${styles.parallax} ${styles['parallax-automacao']}`}
        ></header>

        <section>
          <Image src={voiceControl} alt="" />
          <div>
            <h2>Controle Por Voz ou pelo Celular</h2>
            <p>
              Soluções que permite voce controlar toda sua residencia através de
              comando de voz com a utilização de equipamentos conceituados como
              o echo dot da Amazon. Também lhe permite o controle de sua
              residencia de qualquer lugar do mundo utilizando seu celular
            </p>
          </div>
        </section>

        <section className={styles.next}>
          <div>
            <h2>Automação Iluminação</h2>
            <p>
              Sistema de controle de iluminação proporcionando melhor
              aproveitamento do luminotécnico e redução no consumo de energia.
              Ajuste a intensidade adequada da iluminação para cada ocasião
              específica. Ou, com um simples comando de voz ou através de um
              click na tela do celular, desligue toda as luzes de sua residência
            </p>
          </div>
          <Image src={lighting} alt="" />
        </section>

        <section>
          <Image src={persians} alt="" />
          <div>
            <h2>Automação Cortinas e Persianas</h2>
            <p>
              Controle a abertura e fechamento das cortinas ou persianas de
              forma individual ou todas as mesmo tempo. Também é possível
              definir uma posição para cada cena de iluminação
            </p>
          </div>
        </section>

        <section className={styles.next}>
          <div>
            <h2>Automação Ar Condicionado</h2>
            <p>
              Liga/desliga e controla a temperatura do ar condicionado através
              do Keypad instalado na parede de sua residência, pelo celular ou
              por controle por voz
            </p>
          </div>
          <Image src={airConditioning} alt="" />
        </section>

        <section>
          <Image src={garden} alt="" />
          <div>
            <h2> Automação irrigação Jardins</h2>
            <p>
              Com os sensores de umidade do solo e temporizadores é possível
              criar a automação residencial no jardim, mantendo as plantas
              sempre nas condições ideais.
            </p>
          </div>
        </section>

        <section className={`${styles.next} `}>
          <div>
            <h2>Automação Audio e Vídeo</h2>
            <p>
              Controle seus equipamentos de áudio e vídeo distribuindo músicas e
              vídeos para todos os cômodos da casa, simplificando o controle de
              seu home theaters
            </p>
          </div>
          <Image src={audioAndVideo} alt="" />
        </section>

        <section>
          <Image src={doubt} alt="" />
          <div>
            <h2>O que mais pode ser feito em uma casa Automatizada?</h2>
            <p>
              São inúmeros cenários que a automação residencial pode te
              auxiliar, desde a alimentação do seu amiguinho de 4 patas ao
              preparo daquele cafezinho ao acordar.
            </p>

            <span>Basta usar a imaginação!!</span>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}

export const getStaticPaths = () => {
  return {
    paths: [],
    fallback: 'blocking'
  };
};
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const service = params?.service || '';
  return {
    props: { service }
  };
};
