import styles from './header.module.scss';

import Image from 'next/image';
import logo from '../../../public/images/logo.svg';
import { Link } from '../Link';

type HeaderProps = {
  page?: string;
};

export function Header({ page = 'HOME' }: HeaderProps) {
  return (
    <header className={styles.container}>
      <Image src={logo} alt="Logo Advanced Tec" />

      <nav>
        <ul>
          <Link description="HOME" isActive={page === 'HOME'} href="/" />
          <Link
            description="AUTOMAÇÃO"
            isActive={page === 'AUTOMACAO'}
            href="servicos/automacao"
          />
          <Link
            description="AUDIO E VIDEO"
            isActive={page === 'AUDIO E VIDEO'}
            href="servicos/audio-video"
          />
          <Link
            description="SEGURANÇA ELETRÔNICA"
            isActive={page === 'SEGURANCA ELETRONICA'}
            href="servicos/seguranca-eletronica"
          />
        </ul>
      </nav>
    </header>
  );
}
