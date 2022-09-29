import Image from 'next/image';
import iconWhatsAppWhite from '../../../public/images/icon-whatsapp-white.svg';
import styles from './footer.module.scss';

export function Footer() {
  return (
    <div className={styles.container}>
      <h2>Faça seu orçamento</h2>
      <span>sem compromisso</span>
      <div>
        {/* Alterar tamanho do icone do whatsapp */}
        <Image src={iconWhatsAppWhite} alt="Icone Whats App" />
        <h2>(31) 98720-5436</h2>
      </div>
      <p>Atendimento de segunda a sábado </p>
      <strong>08:00 as 18:00</strong>
    </div>
  );
}
