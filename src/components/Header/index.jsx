'use client';

import styles from './styles.module.scss';
import Link from 'next/link';
import { BsInstagram } from 'react-icons/bs';
import { HiMenuAlt3 } from 'react-icons/hi';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import logo from '../../../public/logoheader.png';
import { useRef } from 'react';

export function Header() {
  const headerContainerRef = useRef(null);
  const [ativo, setAtivo] = useState(false);
  const styleAtivo = ativo ? styles.boxMenuTrue : styles.boxMenuFalse;

  function handleAtivo() {
    ativo ? setAtivo(false) : setAtivo(true);
  }

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 1) {
        headerContainerRef.current.className = `${styles.headerContainerRef}`;
      } else {
        headerContainerRef.current.className = `${styles.headerContainer}`;
      }
    };
    window.addEventListener('scroll', onScroll);

    return function unMount() {
      window.removeEventListener('scroll', onScroll);
    };
  });

  return (
    <header ref={headerContainerRef} className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <div className={styleAtivo}>
          <Link legacyBehavior href="/">
            <Image onClick={handleAtivo} className={styles.headerLogo} src={logo} alt="logomarca" width={100} />
          </Link>
          <nav className={styles.navContent}>
            <Link legacyBehavior href="/">
              <a onClick={handleAtivo}>Home</a>
            </Link>

            <Link legacyBehavior href="/sobre">
              <a onClick={handleAtivo}>Sobre</a>
            </Link>

            <Link legacyBehavior href="/foto">
              <a onClick={handleAtivo}>Fotografia</a>
            </Link>

            <Link legacyBehavior href="/web">
              <a onClick={handleAtivo}>Web</a>
            </Link>

            <Link legacyBehavior href="/precos">
              <a onClick={handleAtivo}>Preços</a>
            </Link>
          </nav>
          <div className={styles.socialContainer}>
            <Link target="_blank" href="https://www.instagram.com/cumecomunicacao/" className={styles.socialItem}>
              <BsInstagram size={24} />
            </Link>
          </div>
        </div>
        <div onClick={handleAtivo} className={styles.toggle}>
          <HiMenuAlt3 size={30} color={'var(--green-2)'} />
        </div>
      </div>
    </header>
  );
}
