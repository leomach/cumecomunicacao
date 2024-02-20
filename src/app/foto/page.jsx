import { Portfolio } from '@/components/Portfolio';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Fotografia',
  description: 'Marque uma reunião sem compromisso para fazermos seu orçamento personalizado',
};

export default function Foto() {
  return (
    <main className="bg-cumeazul-700 w-full flex flex-col justify-center items-center py-10">
      <h1 className="w-3/4 text-4xl mt-20 md:text-6xl mb-20 font-bold uppercase text-cumemarrom-100 text-left xl:w-2/4 transition-all duration-300">
        Fotografia de eventos
      </h1>
      <Image
        className="w-full h-96 md:h-100 object-cover"
        width={1000}
        height={1000}
        alt="Três meninas se abraçando em cerimonia de encerramento de Ensino Médio"
        src="/estudantil1.jpg"
      />
      <section className="flex max-md:flex-col w-3/4 py-10 gap-5 xl:w-2/4 transition-all duration-300">
        <div>
          <h1 className="text-2xl md:min-w-36 font-bold uppercase text-cumeazul-100 max-md:text-left text-right">
            Antes do evento:
          </h1>
        </div>
        <div>
          <p className="text-sm text-cumecinza-100">
            Durante o atendimento e reuniões realizadas antes do evento, iremos fazer o Briefing (Conjunto de
            informações ou uma coleta de dados passados em uma reunião para o desenvolvimento de um trabalho.) e se
            preparar para o evento tão esperado. Vou reunir suas ideias e montar um plano perfeito para ser realizado.
            Além disso, discutiremos orçamentos e quantidade de horas que irão ser usadas.{' '}
          </p>
        </div>
      </section>
      <Image
        className="w-full h-96 md:h-100 object-cover"
        width={1000}
        height={1000}
        alt="Turma de terceiranistas do Ensino Médio com uniformes esportivos dos Jogos Internos"
        src="/estudantil2.jpg"
      />
      <section className="flex max-md:flex-col w-3/4 py-10 gap-5 xl:w-2/4 transition-all duration-300">
        <div>
          <h1 className="text-2xl md:min-w-36 font-bold uppercase text-cumeazul-100 max-md:text-left text-right">
            Durante o evento:
          </h1>
        </div>
        <div>
          <p className="text-sm text-cumecinza-100">
            Durante o evento, estarei de prontidão, dando o melhor para qualquer situação que venha acontecer.
            Caminharei junto com os convidados/participantes para ter um bom aproveitamento das horas contratadas.
          </p>
        </div>
      </section>
      <Image
        className="w-full h-96 md:h-100 object-cover"
        width={1000}
        height={1000}
        alt="Turma de terceiranistas do Ensino Médio com uniformes esportivos dos Jogos Internos usando batuques de torcida"
        src="/estudantil3.jpg"
      />
      <section className="flex max-md:flex-col w-3/4 py-10 gap-5 xl:w-2/4 transition-all duration-300">
        <div>
          <h1 className="text-2xl md:min-w-36 font-bold uppercase text-cumeazul-100 max-md:text-left text-right">
            Após o evento:
          </h1>
        </div>
        <div>
          <p className="text-sm text-cumecinza-100">
            Após o evento, continuarei tirando dúvidas, dando suporte e trabalhando com você para chegarmos no resultado
            desejado. As fotos serão editadas, trabalhado com cor, iluminação, enquadramento e muito mais. <br />
            Logo após a pós-produção, as fotos são disponibilizadas por meio de um link para baixar.
          </p>
        </div>
      </section>
      <Image
        className="w-full h-96 md:h-100 object-cover"
        width={1000}
        height={1000}
        alt="Três meninas se abraçando cerimonia de encerramento de Ensino Médio"
        src="/estudantil4.jpg"
      />
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
