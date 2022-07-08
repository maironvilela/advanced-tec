import Image from 'next/image';
import imgAudioAndVideo from '../../../public/images/service-audio-video.svg';
import imgEletronicSecurity from '../../../public/images/service-eletronic-security.svg';
import imgHomeAutomation from '../../../public/images/service-home-automation.svg';
import styles from './service.module.scss';

export function Services() {
  return (
    <section className={styles.container}>
      <header>
        <h1>Serviços</h1>
      </header>
      <div className={styles['item-service']}>
        <Image src={imgHomeAutomation} alt="Imagem casa com automação" />
        <div>
          <h3>Automação residencial</h3>
          <p>
            Controle todos os dispositivos de sua residencial através do
            smartphone, tablet, computadores e assistente de voz em qualquer
            lugar do mundo
          </p>
          <a href="#">+ Detalhes</a>
        </div>
      </div>

      <div className={styles['item-service-link-right']}>
        <div>
          <h3>Audio e vídeo</h3>
          <p>
            Tenha a experiencia de estar em uma sala de cinema sem sair de cada
            com as telas de projeção em alta definição e soluções em audio de
            alta fidelidade
          </p>
          <a href="#">+ Detalhes</a>
        </div>
        <Image src={imgAudioAndVideo} alt="Imagem casa com automação" />
      </div>

      <div className={styles['item-service']}>
        <Image src={imgEletronicSecurity} alt="Imagem casa com automação" />
        <div>
          <h3>Segurança Eletrônica</h3>
          <p>
            Tudo em segurança eletrônica para proteger voce e sua familia.
            Monitore seu sistema de alarme e CFTV pelo celular de onde estiver,
            mantenha o perimetro da sua residencia seguro com as cercas eletrica
            e concertinas.
          </p>
          <a href="#">+ Detalhes</a>
        </div>
      </div>
    </section>
  );
}
