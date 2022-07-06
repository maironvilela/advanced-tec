import styles from './header.module.scss';

import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../public/images/logo.svg';

export function Header() {
  return (
    <header className={styles.container}>
      <Image src={logo} alt="Logo Advanced Tec" />

      <nav>
        <ul>
          <li>
            <Link href="#">HOME</Link>
          </li>
          <li>
            <Link href="#">AUTOMAÇÃO</Link>
          </li>
          <li>
            <Link href="#">AUDIO E VIDEO</Link>
          </li>
          <li>
            <Link href="#">SEGURANÇA ELETRÔNICA</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
