import { Portfolio } from '@/components/Portfolio';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Sobre',
  description: 'Saiba mais sobre a história e o que é a Cume Comunicação.',
};

export default function Sobre() {
  return (
    <main className="bg-cumeazul-700 w-full flex flex-col justify-center items-center py-10">
      <h1 className="w-3/4 text-6xl mt-20 md:text-6xl mb-10 font-bold uppercase text-cumemarrom-100 text-left xl:w-2/4 transition-all duration-300">
        sobre
      </h1>
      <Image
        className="md:hidden max-md:w-full max-md:h-96 object-cover"
        src="/leandromachado.webp"
        width={1000}
        height={1000}
        alt="Leandro Machado, fundador da Cume Comunicação"
      />
      <section className="flex max-md:flex-col w-3/4 py-10 gap-5 xl:w-2/4 transition-all duration-300">
        <Image
          className="w-48 max-md:hidden object-cover"
          src="/leandromachado.webp"
          width={1000}
          height={1000}
          alt="Leandro Machado, fundador da Cume Comunicação"
        />
        <div>
          <p className="text-sm text-cumecinza-100">
            <br />
            Olá, sou Leandro Machado, fundador e CEO da CUME Comunicação. Meu percurso profissional é marcado pela
            paixão pelo aprendizado contínuo e pelo aprimoramento constante de minhas habilidades. Com formação em MBA
            em Desenvolvimento Fullstack pela IGTI - XP Educação, atuo como Desenvolvedor Web e já realizei diversos
            projetos que podem ser conferidos no meu GitHub e LinkedIn.
            <br />
            <br />
            Na CUME, não apenas desenvolvemos sites e landing pages, mas criamos experiências digitais de alta
            eficiência para profissionais e empresas de diversos setores. Somos uma agência comprometida em entregar
            projetos de alto padrão, sempre focada em superar as expectativas dos nossos clientes.
            <br />
            <br />
            Além da minha trajetória no desenvolvimento web, trago para a CUME minha expertise na área audiovisual. Com
            7 anos de experiência, já trabalhei em diversos cenários, desde captação e edição de vídeo até fotografia em
            eventos, ensaios fotográficos, ações sociais e religiosas, e muito mais. Meu compromisso é tornar seu evento
            especial, capturando momentos únicos que contam a história de maneira autêntica.
            <br />
            <br />
            Formado em Marketing Digital, com MBA em Desenvolvimento Fullstack e diversos cursos na área, minha jornada
            profissional vai além de qualificações. É sobre adquirir competências ao longo dos anos e trabalhar com uma
            diversidade de clientes. Convido você a explorar meu portfólio para conhecer mais sobre meu trabalho e
            entender como podemos tornar seu projeto web ou evento ainda mais memorável. Estamos aqui para transformar
            ideias em realidade e criar experiências que perduram no tempo. Vamos juntos criar algo extraordinário!
          </p>
        </div>
      </section>
      <section className="flex flex-col justify-center md:items-center w-3/4 py-10 gap-3 xl:w-2/4 transition-all duration-300">
        <h1 className="text-3xl max-md:text-2xl font-bold uppercase text-cumemarrom-100 max-md:text-left text-center">
          Entre em contato agora
        </h1>
        <Link href="/precos" legacyBehavior>
          <a className="w-max bg-cumemarrom-100 text-cumeazul-700 py-1 px-2 rounded text-xs md:text-sm hover:bg-cumemarrom-500 hover:text-cumeazul-100 transition-all duration-300">
            Clique aqui
          </a>
        </Link>
      </section>
    </main>
  );
}
