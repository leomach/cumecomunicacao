import { BannerHome } from '@/components/BannerHome';
import { Portfolio } from '@/components/Portfolio';
import { Sanfona } from '@/components/Sanfona';
import { Servicos } from '@/components/Servicos';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="bg-cumecinza-100 flex min-h-screen flex-col items-center justify-between">
      <BannerHome />
      <Servicos />
      <div className="flex justify-center items-center bg-cumecinza-100 w-full py-7">
        <h1 className="uppercase max-md:w-3/4 w-96 text-cumemarrom-500 text-center font-['Righteous'] font-extrabold text-2xl md:text-4xl transition-all duration-500">
          Por Que Escolher a Cume Comunicação?
        </h1>
      </div>
      <Sanfona />
    </main>
  );
}
