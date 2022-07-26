import Image from 'next/image';
import iconWhy from '../../../public/images/icon-why.svg';
import styles from './why-choose.module.scss';

type WhyChooseProps = {
  title: string;
  content: string;
 }

export function WhyChoose({title, content}:WhyChooseProps) {
  return (
    <div className={styles.container}>
       <div dangerouslySetInnerHTML={{ __html: title }}></div>

      <div className={styles.content}>

      <div dangerouslySetInnerHTML={{ __html: content }}></div>
      <Image src={iconWhy} alt="icon" />



      </div>
    </div>
  );
}

{/**
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
          <li>
            <Image src={iconCheck} alt="icon" />
            Melhor pós venda
          </li>
          <li>
            <Image src={iconCheck} alt="icon" />
            Melhor pós venda
          </li>
      
*/}
