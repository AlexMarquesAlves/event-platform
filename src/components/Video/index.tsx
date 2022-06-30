import "@vime/core/themes/default.css"; // installed new dependency
import { DefaultUi, Player, Youtube } from "@vime/react"; // installed new dependency
import {
   CaretRight,
   DiscordLogo,
   FileArrowDown,
   Lightning,
} from "phosphor-react";
import { ReactNode } from "react";

interface VideoProps {
   children: ReactNode;
}

export function Video({ children }: VideoProps) {
   return (
      <>
         <div className="flex-1">
            <div className="flex justify-center bg-black">
               <div className="h-full w-full max-w[1100px] max-h-[60vh] aspect-video">
                  <Player>
                     <Youtube videoId="SO4-izct7Mc" />
                     <DefaultUi />
                  </Player>
               </div>
            </div>

            <div className="p-8 max-w-[1100px] mx-auto">
               <div className="flex items-start gap-16">
                  <div className="flex-1">
                     <h1 className="text-2xl font-bold ">
                        Aula 01 - Abertura do Ignite Lab
                     </h1>
                     <p className="mt-4 leading-relaxed text-gray-200">
                        Nessa aula vamos dar início ao projeto criando a
                        estrutura base da aplicação utilizando ReactJS, Vite e
                        TailwindCSS. Vamos também realizar o setup do nosso
                        projeto no GraphCMS criando as entidades da aplicação e
                        integrando a API GraphQL gerada pela plataforma no nosso
                        front-end utilizando Apollo Client.
                     </p>

                     <div className="flex items-center gap-4 mt-6">
                        <img
                           className="w-16 h-16 border-2 border-blue-500 rounded-full"
                           src="https://github.com/diego3g.png"
                           alt=""
                        />
                        <div className="leading-relaxed">
                           <strong className="block text-2xl font-bold">
                              Diego Fernandes
                           </strong>
                           <span className="block text-sm text-gray-200">
                              CTO @Rocketseat
                           </span>
                        </div>
                     </div>
                  </div>
                  <div className="flex flex-col gap-4">
                     <a
                        href="#"
                        className="flex items-center justify-center gap-2 p-4 text-sm font-bold uppercase transition-colors bg-green-500 rounded hover:bg-green-700"
                     >
                        <DiscordLogo size={24} />
                        Comunidade do Discord
                     </a>
                     <a
                        href="#"
                        className="flex items-center justify-center gap-2 p-4 text-sm font-bold uppercase transition-colors border border-blue-500 rounded hover:bg-blue-500 hover:text-gray-900 "
                     >
                        <Lightning size={24} />
                        Acesse o Desafio
                     </a>
                  </div>
               </div>

               <div className="grid grid-cols-2 gap-8 mt-20">
                  <a
                     href=""
                     className="flex items-stretch gap-6 overflow-hidden transition-colors bg-gray-700 rounded hover:bg-gray-600"
                  >
                     <div className="flex items-center h-full p-6 bg-green-700">
                        <FileArrowDown size={40} />
                     </div>
                     <div className="py-6 leading-relaxed">
                        <strong className="text-2xl ">
                           Material Complementar
                        </strong>
                        <p className="mt-2 text-sm text-gray-200 ">
                           Acesse o material complementar para acelerar o seu
                           desenvolvimento
                        </p>
                     </div>
                     <div className="flex items-center h-full p-6 ">
                        <CaretRight size={24} />
                     </div>
                  </a>

                  <a
                     href=""
                     className="flex items-stretch gap-6 overflow-hidden transition-colors bg-gray-700 rounded hover:bg-gray-600"
                  >
                     <div className="flex items-center h-full p-6 bg-green-700">
                        <FileArrowDown size={40} />
                     </div>
                     <div className="py-6 leading-relaxed">
                        <strong className="text-2xl ">
                           Wallpapers Exclusivos
                        </strong>
                        <p className="mt-2 text-sm text-gray-200 ">
                           Baixe wallpapers exclusivos do Ignite Lab e
                           personalize a sua máquina
                        </p>
                     </div>
                     <div className="flex items-center h-full p-6 ">
                        <CaretRight size={24} />
                     </div>
                  </a>
               </div>
            </div>
         </div>
         {children}
      </>
   );
}
