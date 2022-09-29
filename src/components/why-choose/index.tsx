import Image from 'next/image';
import iconWhy from '../../../public/images/icon-why.svg';
import { HomeWhyChooseSection } from '../../services/prismic/view-models/home-why-choose-section';
import styles from './why-choose.module.scss';

type WhyChooseProps = HomeWhyChooseSection;

export function WhyChoose({ title, content }: WhyChooseProps) {
  return (
    <div className={styles.container}>
      <h1>{title}</h1>

      <div className={styles.content}>
        <div dangerouslySetInnerHTML={{ __html: content }}></div>
        <Image src={iconWhy} alt="icon" />
      </div>
    </div>
  );
}
