import { format, isPast } from "date-fns"; // installed new dependency
import ptBR from "date-fns/locale/pt-BR"; // installed new dependency
import { CheckCircle, Lock } from "phosphor-react"; // installed new dependency

interface LessonProps {
   title: string;
   slug: string;
   availableAt: Date;
   type: "live" | "class";
}

export function Lesson({ title, slug, availableAt, type }: LessonProps) {
   const isLessonAvailable = isPast(availableAt);
   const availableDateFormatted = format(
      availableAt,
      "EEEE' • 'd' de 'MMMM' • 'k'h'mm",
      {
         locale: ptBR,
      }
   );

   return (
      <a href="#">
         <span className="text-gray-300">{availableDateFormatted}</span>

         <div className="p-4 mt-2 border border-gray-500 rounded">
            <header className="flex items-center justify-between">
               {isLessonAvailable ? (
                  <span className="flex items-center gap-2 text-sm font-medium text-blue-500">
                     <CheckCircle size={20} />
                     Conteúdo Liberado
                  </span>
               ) : (
                  <span className="flex items-center gap-2 text-sm font-medium text-orange-500">
                     <Lock size={20} />
                     Em breve
                  </span>
               )}
               <span className="text-xs rounded px-2 py-[0.125rem] text-white border border-green-300 font-bold ">
                  {type === "live" ? "AO VIVO" : "AULA PRATICA"}
               </span>
            </header>
            <strong className="block mt-5 text-gray-200">{title}</strong>
         </div>
      </a>
   );
}
