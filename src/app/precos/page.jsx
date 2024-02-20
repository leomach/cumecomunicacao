import { Portfolio } from '@/components/Portfolio';

export const metadata = {
  title: 'Orçamentos',
  description: 'Marque uma reunião sem compromisso para fazermos seu orçamento personalizado',
};

export default function Precos() {
  return (
    <main className="bg-cumeazul-700 w-full flex flex-col justify-center items-center py-10">
      <h1 className="w-3/4 text-3xl mt-20 md:text-6xl mb-20 font-bold uppercase text-cumemarrom-100 text-left xl:w-2/4 transition-all duration-300">
        peça um orçamento sem compromisso!
      </h1>
      <section className="flex max-md:flex-col w-3/4 py-10 gap-5 xl:w-2/4 transition-all duration-300">
        <div>
          <h1 className="text-2xl font-bold uppercase text-cumeazul-100 max-md:text-left text-right">
            Site Institucional
          </h1>
        </div>
        <div>
          <p className="text-sm text-cumecinza-100">
            Na Cume Comunicação, oferecemos mais do que desenvolvimento web. Criamos experiências digitais únicas e
            impactantes que refletem a essência de sua marca. Com uma equipe especializada e o uso de tecnologias
            avançadas como o Next.JS, garantimos sites institucionais e landing pages inovadores. Se você busca uma
            presença online que vá além do comum, entre em contato conosco. Comprometemo-nos a superar suas expectativas
            e levar sua marca para novos patamares digitais. Vamos criar algo extraordinário juntos!
          </p>
        </div>
      </section>
      <section className="flex max-md:flex-col w-3/4 py-10 gap-5 xl:w-2/4 transition-all duration-300">
        <div>
          <h1 className="text-2xl font-bold uppercase text-cumeazul-100 max-md:text-left text-right">
            Fotografia de Eventos
          </h1>
        </div>
        <div>
          <p className="text-sm text-cumecinza-100">
            Na Cume Comunicação, acreditamos que cada evento tem sua própria história e emoção única. Nossa fotografia
            de eventos vai além de simples registros, capturamos momentos que contam sua narrativa de maneira especial.
            Seja um evento estudantil vibrante, aniversário animado ou um casamento romântico, estamos aqui para
            registrar cada momento significativo. Nosso orçamento é personalizado, levando em consideração pessoas,
            horas e oferecendo um toque especial de desconto. Queremos ser parte do seu evento e eternizar seus
            momentos. Entre em contato e vamos criar memórias inesquecíveis juntos!
          </p>
        </div>
      </section>
      <section className="flex flex-col justify-center md:items-center w-3/4 py-10 gap-5 xl:w-2/4 transition-all duration-300">
        <h1 className="text-3xl max-md:text-2xl font-bold uppercase text-cumemarrom-100 max-md:text-left text-center">
          Entre em contato agora
        </h1>
        <p className="text-sm text-cumecinza-100">
          <b>Email:</b>{' '}
          <a target="_blank" href="mailto:leandrovictoram@gmail.com">
            leandrovictoram@gmail.com
          </a>
          <br />
          <b>Telefone:</b>{' '}
          <a target="_blank" href="tel:5587981484518">
            (87) 9 8148-4518
          </a>
          <br />
          <b>Whatsapp: </b>
          <a target="_blank" href="https://wa.me/5587981484518?text=Ol%C3%A1%2C+Leandro%21+Vim+pelo+site+da+Cume.">
            Clique aqui!
          </a>
        </p>
      </section>
    </main>
  );
}
