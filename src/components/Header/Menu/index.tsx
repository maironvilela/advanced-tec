import { HtmlHTMLAttributes } from 'react';
import { Link } from '../../Link';
import styles from './menu.module.scss';

type NavProps = HtmlHTMLAttributes<HTMLDivElement> & {
  page?: string;
  isShowMenu: boolean;
};

export function Menu({ page, isShowMenu }: NavProps) {
  return (
    <nav className={`${styles.nav} ${isShowMenu ? styles.showMenu : ''}`}>
      <ul>
        <Link description="HOME" isActive={page === 'HOME'} href="/" />
        <Link
          description="AUTOMAÇÃO"
          isActive={page === 'automacao'}
          href="/servicos/automacao"
        />

        <Link
          description="AUDIO E VIDEO"
          isActive={page === 'AUDIO E VIDEO'}
          href="/servicos/audio-video"
        />

        <Link
          description="SEGURANÇA ELETRÔNICA"
          isActive={page === 'SEGURANCA ELETRONICA'}
          href="/servicos/seguranca-eletronica"
        />
      </ul>
    </nav>
  );
}
