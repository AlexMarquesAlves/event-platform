import { Logo } from "../../components";

export function Subscribe() {
   return (
      <div className="flex flex-col items-center min-h-screen bg-no-repeat bg-cover bg-blur ">
         <div className="max-w-[1100px] flex items-center  justify-between mt-20 mx-auto">
            <div className=" max-w-[640px]">
               <Logo />
               <h1 className="mt-8 text-[2.2rem] md:text-[2.5rem] leading-tight text-black dark:text-gray-100">
                  Construa uma{" "}
                  <strong className="text-cyan-400 dark:text-blue-500">
                     aplicação completa,
                  </strong>{" "}
                  do zero, com{" "}
                  <strong className="text-cyan-400 dark:text-blue-500">
                     React
                  </strong>
               </h1>
               <p className="m-5 leading-relaxed text-black md:m-0 md:mt-4 dark:text-gray-200">
                  Em apenas uma semana você vai dominar na prática uma das
                  tecnologias mais utilizadas e com alta demanda para acessar as
                  melhores oportunidades do mercado.
               </p>
            </div>
            <div></div>
         </div>
         <img
            src="/src/assets/codeMockup.png"
            className="mt-10 "
            alt="mockup"
         />
      </div>
   );
}
