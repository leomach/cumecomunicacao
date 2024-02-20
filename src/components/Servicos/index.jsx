import Link from 'next/link';
import { AiOutlineGlobal } from 'react-icons/ai';
import { MdOutlinePhotoCamera } from 'react-icons/md';

export function Servicos() {
  return (
    <section className="py-10 min-h-96 gap-9 w-full flex flex-col justify-center items-center bg-cumecinza-100">
      <h1 className="uppercase max-md:w-3/4 w-96 text-cumemarrom-500 text-center font-sans font-bold text-2xl md:text-4xl transition-all duration-500">
        Nossos Serviços
      </h1>
      <div className="w-3/4 gap-3 flex justify-around items-center">
        <div className="group w-1/3 flex flex-col justify-center items-center">
          <Link className="flex flex-col justify-center items-center" href="/web">
            <AiOutlineGlobal className="group-hover:text-cumemarrom-500 cursor-pointer text-cumeazul-700" size={100} />
            <h1 className="text-center group-hover:text-cumemarrom-500 cursor-pointer max-md:text-sm md:text-lg uppercase text-cumeazul-700 font-semibold max-md:font-bold">
              Criação de sites
            </h1>
          </Link>
        </div>
        <div className="group flex flex-col justify-center items-center">
          <Link className="flex flex-col justify-center items-center" href="/foto">
            <MdOutlinePhotoCamera
              className="cursor-pointer group-hover:text-cumemarrom-500 text-cumeazul-700"
              size={100}
            />
            <h1 className="text-center max-md:text-sm md:text-lg uppercase cursor-pointer group-hover:text-cumemarrom-500 text-cumeazul-700 font-semibold max-md:font-bold">
              Fotografia <br /> de eventos
            </h1>
          </Link>
        </div>
      </div>
    </section>
  );
}
