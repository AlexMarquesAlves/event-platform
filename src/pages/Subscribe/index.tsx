import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import codeMockup from "../../assets/code-mockup.png";
import { Logo } from "../../components";
import { useCreateSubscriberMutation } from "../../graphql/generated";

export function Subscribe() {
   const navigate = useNavigate();

   const [name, setName] = useState("");
   const [email, setEmail] = useState("");

   const [createSubscriber, { loading }] = useCreateSubscriberMutation();

   async function handleSubscribe(event: FormEvent) {
      event.preventDefault();

      await createSubscriber({
         variables: {
            name,
            email,
         },
      });

      navigate("/event");
   }

   return (
      <div className="flex flex-col items-center min-h-screen bg-no-repeat bg-cover bg-blur ">
         <div className="w-full max-w-[1100px] flex items-center  justify-between mt-20 mx-auto">
            {/* Left side */}
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
            {/* Right Side */}
            <div className="p-8 bg-gray-200 border border-gray-700 rounded dark:bg-gray-700 dark:border-gray-500">
               <strong className="block mb-6 text-xl md:text-2xl">
                  Inscreva-se gratuitamente
               </strong>
               {/* Form */}
               <form
                  onSubmit={handleSubscribe}
                  className="flex flex-col w-full gap-2"
               >
                  <input
                     className="px-5 rounded dark:bg-gray-900 h-14 placeholder:text-gray-700 dark:placeholder:text-gray-400"
                     type="text"
                     placeholder="Seu nome completo"
                     onChange={(event) => setName(event.target.value)}
                  />
                  <input
                     className="px-5 rounded dark:bg-gray-900 h-14 placeholder:text-gray-700 dark:placeholder:text-gray-400"
                     type="email"
                     placeholder="Digite o seu e-mail"
                     onChange={(event) => setEmail(event.target.value)}
                  />
                  <button
                     disabled={loading}
                     className="py-4 mt-4 text-sm font-bold uppercase transition-colors bg-green-600 rounded dark:bg-green-500 hover:bg-green-800 dark:hover:bg-green-700 disabled:opacity-50"
                     type="submit"
                  >
                     Garantir minha vaga
                  </button>
               </form>
            </div>
         </div>
         <img src={codeMockup} className="mt-10 " alt="image mockup" />
      </div>
   );
}
