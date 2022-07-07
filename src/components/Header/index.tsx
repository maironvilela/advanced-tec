import styles from './header.module.scss';

import Image from 'next/image';
import logo from '../../../public/images/logo.svg';
import { Link } from '../Link';

export function Header() {
  return (
    <header className={styles.container}>
      <Image src={logo} alt="Logo Advanced Tec" />

      <nav>
        <ul>
          <Link description="HOME" isActive={true} />
          <Link description="AUTOMAÇÃO" />
          <Link description="AUDIO E VIDEO" />
          <Link description="SEGURANÇA ELETRÔNICA" />
        </ul>
      </nav>
    </header>
  );
}
