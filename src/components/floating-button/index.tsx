import Image from 'next/image';
import iconWhatsApp from '../../../public/images/icon-whatsapp.png';
import style from './floating-button.module.scss';

export function FloatingButton() {
  return (
    <div className={style.container}>
      <a
        href="https://wa.me/553194531287?text=Olá cliente! Tudo bem?"
        target="_blank"
        rel="noreferrer"
      >
        <Image src={iconWhatsApp} alt="Fale Conosco pelo WhatsApp" />
      </a>
    </div>
  );
}
