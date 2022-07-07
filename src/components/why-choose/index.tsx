import Image from 'next/image';
import iconCheck from '../../../public/images/icon-check.svg';
import iconWhy from '../../../public/images/icon-why.svg';
import styles from './why-choose.module.scss';

export function WhyChoose() {
  return (
    <div className={styles.container}>
      <h1>Por quê Escolher a Advanced Tec?</h1>

      <div>
        <ul>
          <li>
            <Image src={iconCheck} alt="icon" />
            Mao de obra qualificada
          </li>
          <li>
            <Image src={iconCheck} alt="icon" />
            Satisfação dos clientes garantida
          </li>
          <li>
            <Image src={iconCheck} alt="icon" />
            Equipamentos com tecnologias de ponta
          </li>
          <li>
            <Image src={iconCheck} alt="icon" />
            Melhores equipamentos do mercado
          </li>
          <li>
            <Image src={iconCheck} alt="icon" />
            Melhor pós venda
          </li>
        </ul>

        <Image src={iconWhy} alt="icon" />
      </div>
    </div>
  );
}
