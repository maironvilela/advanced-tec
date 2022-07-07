import Image from 'next/image';
import iconWhatsAppWhite from '../../../public/images/icon-whatsapp-white.svg';
import styles from './footer.module.scss';

export function Footer() {
  return (
    <div className={styles.container}>
      <h2>Faça seu orçamento</h2>
      <span>sem compromisso</span>
      <div>
        <Image src={iconWhatsAppWhite} alt="Icone Whats App" />
        <span>(31) 99453-1287</span>
      </div>
      <p>Atendimento de segunda a sábado </p>
      <strong>08:00 as 15:00</strong>
    </div>
  );
}
