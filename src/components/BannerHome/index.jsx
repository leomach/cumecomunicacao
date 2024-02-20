import Image from 'next/image';
import Link from 'next/link';

export function BannerHome() {
  return (
    <section className="max-md:h-100 md:h-lvh w-full relative">
      <div className="absolute flex flex-col items-center justify-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 z-20">
        <h1 className="text-cumeazul-100 text-center font-['Righteous'] font-extrabold text-8xl md:text-9xl transition-all duration-500">
          cume
        </h1>
        <h2 className="text-cumeazul-100 text-center font-['Dosis'] uppercase text-md md:text-2xl transition-all duration-500">
          O ápice da comunicação
        </h2>
        <Link href="https://wa.me/5587981484518?text=Ol%C3%A1%2C+Leandro%21+Vim+pelo+site+da+Cume." legacyBehavior>
          <a
            className="bg-cumemarrom-100 text-cumeazul-700 py-1 px-2 mt-1 md:mt-6 rounded text-xs md:text-sm hover:bg-cumemarrom-500 hover:text-cumeazul-100 transition-all duration-300"
            target="_blank"
          >
            Entre em contato
          </a>
        </Link>
      </div>
      <div className="bg-cumemarrom-500 opacity-80 max-md:h-100 md:h-lvh w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 z-10" />

      <video
        src="/BackVideo.mp4"
        controls={false}
        type="video/mp4"
        playsInline
        autoPlay
        loop
        muted
        className="max-md:h-100 md:h-lvh w-full object-cover overflow-hidden"
      ></video>
    </section>
  );
}
