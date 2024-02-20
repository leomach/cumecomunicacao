'use client';
import { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineLeftCircle, AiOutlineRightCircle } from 'react-icons/ai';

export function Portfolio() {
  const carrossel = useRef(null);
  const itemCarrossel = useRef(null);

  const [data, setData] = useState([
    {
      imagem: '/qj.png',
    },
    {
      imagem: '/4ipg.png',
    },
    {
      imagem: '/sinodal.png',
    },
  ]);

  const handleLeftClick = (e) => {
    e.preventDefault();
    carrossel.current.scrollLeft -= itemCarrossel.current.offsetWidth;
  };

  const handleRightClick = (e) => {
    e.preventDefault();
    carrossel.current.scrollLeft += itemCarrossel.current.offsetWidth;
  };

  if (!data || !setData.length) return null;

  return (
    <section className="flex justify-center flex-col w-full bg-cumemarrom-100 pt-20 pb-12">
      <a name="portfolio" />
      <div className="flex max-md:flex-col max-md:gap-9 justify-center pl-6">
        <h1 className="md:ml-28 text-center md:text-left w-80 text-2xl font-sans font-bold self-center max-md:w-3/4 md:text-5xl uppercase text-cumemarrom-500 mr-7">
          nossos projetos web
        </h1>
        <div
          className="flex items-center gap-2 overflow-x-auto overflow-y-hidden scroll-smooth scrollbar-none h-max"
          ref={carrossel}
        >
          {data.map((item) => {
            const { nome, imagem, descricao } = item;
            return (
              <div className="flex flex-col flex-none h-max" ref={itemCarrossel} key={imagem}>
                <Image className="w-80 object-cover" width={1000} height={1000} src={imagem} alt="Pastor1" />
              </div>
            );
          })}
          {/* <div className="flex flex-col items-center justify-center flex-none w-80" ref={itemCarrossel}>
            <Link href="/portfolio" legacyBehavior>
              <a className="bg-cumemarrom-500 text-cumeazul-100 py-1 px-2 rounded text-xs md:text-sm hover:bg-cumeazul-700 hover:text-cumeazul-100 transition-all duration-300">
                Ver mais
              </a>
            </Link>
          </div> */}
        </div>
      </div>
      <div className="pt-4 w-full text-center">
        <button className="bg-transparent border-none cursor-pointer" onClick={handleLeftClick}>
          <AiOutlineLeftCircle size={30} />
        </button>
        <button className="bg-transparent border-none cursor-pointer" onClick={handleRightClick}>
          <AiOutlineRightCircle size={30} />
        </button>
      </div>
    </section>
  );
}
