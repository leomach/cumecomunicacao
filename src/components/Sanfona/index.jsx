import Image from 'next/image';
import Link from 'next/link';
import { TbBrandNextjs } from 'react-icons/tb';
import { GiBrain } from 'react-icons/gi';
import { FaUsers } from 'react-icons/fa';
import { RiSeoLine } from 'react-icons/ri';

export function Sanfona() {
  return (
    <section className="md:h-100 min-h-max w-full flex md:flex-row flex-col items-center justify-center">
      <div
        className="bg-cumeazul-700 md:bg-cumecinza-100 md:hover:bg-cumeazul-700 min-h-96 md:h-full max-md:w-full md:grow md:hover:grow-2 transition-all duration-500 group
          flex flex-col justify-center items-center text-white md:gap-2 max-md:py-16"
      >
        <TbBrandNextjs className="text-cumemarrom-500 md:group-hover:text-white w-40 h-40 max-md:py-4 md:opacity-50 md:group-hover:opacity-100 transition-all duration-500" />
        <h1 className="w-56 text-center text-lg font-bold md:opacity-0 md:group-hover:opacity-100 transition-all duration-500">
          Alta tecnologia com Next.JS
        </h1>
        <p className="w-56 text-center md:opacity-0 md:group-hover:opacity-100 transition-all duration-500">
          Nossa especialização em Next.JS garante que seus projetos se destaquem. Utilizamos tecnologia avançada para
          criar sites institucionais e landing pages de alto desempenho.
        </p>
      </div>

      <div
        className="bg-cumeazul-700 md:bg-cumecinza-100 md:hover:bg-cumeazul-700 min-h-96 md:h-full max-md:w-full md:grow md:hover:grow-2 transition-all duration-500 group
          flex flex-col justify-center items-center text-white md:gap-2 max-md:py-16"
      >
        <GiBrain className="text-cumemarrom-500 md:group-hover:text-white w-40 h-40 max-md:py-4 md:opacity-50 md:group-hover:opacity-100 transition-all duration-500" />
        <h1 className="w-56 text-center text-lg font-bold md:opacity-0 md:group-hover:opacity-100 transition-all duration-500">
          Inovação e Criatividade Integradas
        </h1>
        <p className="w-56 text-center md:opacity-0 md:group-hover:opacity-100 transition-all duration-500">
          Buscamos a excelência em tudo o que fazemos. Sua presença online será sólida e alinhada com as necessidades
          específicas do seu negócio.
        </p>
      </div>

      <div
        className="bg-cumeazul-700 md:bg-cumecinza-100 md:hover:bg-cumeazul-700 min-h-96 md:h-full max-md:w-full md:grow md:hover:grow-2 transition-all duration-500 group
          flex flex-col justify-center items-center text-white md:gap-2 max-md:py-16"
      >
        <FaUsers className="text-cumemarrom-500 md:group-hover:text-white w-40 h-40 max-md:py-4 md:opacity-50 md:group-hover:opacity-100 transition-all duration-500" />
        <h1 className="w-56 text-center text-lg font-bold md:opacity-0 md:group-hover:opacity-100 transition-all duration-500">
          Presença Local Forte em Garanhuns
        </h1>
        <p className="w-56 text-center md:opacity-0 md:group-hover:opacity-100 transition-all duration-500">
          Como parte integrante da comunidade local, entendemos as demandas únicas da região. Contribuímos para o
          crescimento do cenário digital local.
        </p>
      </div>

      <div
        className="bg-cumeazul-700 md:bg-cumecinza-100 md:hover:bg-cumeazul-700 min-h-96 md:h-full max-md:w-full md:grow md:hover:grow-2 transition-all duration-500 group
          flex flex-col justify-center items-center text-white md:gap-2 max-md:py-16"
      >
        <RiSeoLine className="text-cumemarrom-500 md:group-hover:text-white w-40 h-40 max-md:py-4 md:opacity-50 md:group-hover:opacity-100 transition-all duration-500" />
        <h1 className="w-56 text-center text-lg font-bold md:opacity-0 md:group-hover:opacity-100 transition-all duration-500">
          Otimização para Motores de Busca (SEO)
        </h1>
        <p className="w-56 text-center md:opacity-0 md:group-hover:opacity-100 transition-all duration-500">
          Destaque-se nos resultados de pesquisa e aumente sua visibilidade online. Apareça em motores de busca como o
          Google e ganhe autoridade no seu setor.
        </p>
      </div>
    </section>
  );
}
