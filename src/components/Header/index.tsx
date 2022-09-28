import { FiMenu, FiX } from 'react-icons/fi';
import styles from './header.module.scss';

import Image from 'next/image';
import { useState } from 'react';
import logo from '../../../public/images/logo.svg';
import { Menu } from './Menu';

type HeaderProps = {
  page?: string;
};

export function Header({ page = 'HOME' }: HeaderProps) {
  const [isShowMenu, setIsShowMenu] = useState(false);

  const toggleMenu = () => {
    setIsShowMenu(!isShowMenu);
  };

  return (
    <header className={styles.container}>
      <Image src={logo} alt="Logo Advanced Tec" className={styles.logo} />
      <>
        <Menu isShowMenu={isShowMenu} />

        {isShowMenu ? (
          <FiX color="#FFFF" onClick={() => toggleMenu()} />
        ) : (
          <FiMenu color="#FFFF" onClick={() => toggleMenu()} />
        )}
      </>
    </header>
  );
}
