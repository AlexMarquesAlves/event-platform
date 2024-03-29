import classNames from "classnames";
import { format, isPast } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { CheckCircle, Lock } from "phosphor-react";
import { Link, useParams } from "react-router-dom";

interface LessonProps {
   title: string;
   slug: string;
   availableAt: Date;
   type: "live" | "class";
}

export function Lesson(props: LessonProps) {
   const { slug } = useParams<{ slug: string }>();

   const isLessonAvailable = isPast(props.availableAt);
   const availableDateFormatted = format(
      props.availableAt,
      "EEEE' • 'd' de 'MMMM' • 'k'h'mm",
      {
         locale: ptBR,
      }
   );

   const isActiveLesson = slug === props.slug;

   return (
      <Link to={`/event/lesson/${props.slug}`} className="group">
         <span className="text-gray-200 dark:text-gray-300">
            {availableDateFormatted}
         </span>

         <div
            className={classNames(
               "p-4 mt-2 border border-gray-300 rounded dark:border-gray-500 group-hover:border-green-600 dark:group-hover:border-green-500",
               {
                  "bg-green-500": isActiveLesson,
               }
            )}
         >
            <header className="flex items-center justify-between">
               {isLessonAvailable ? (
                  <span
                     className={classNames(
                        "flex items-center gap-2 text-sm font-medium text-cyan-400 ",
                        {
                           "text-white": isActiveLesson,
                           "text-blue-500": !isActiveLesson,
                        }
                     )}
                  >
                     <CheckCircle size={20} />
                     Conteúdo liberado
                  </span>
               ) : (
                  <span
                     className={classNames(
                        "flex items-center gap-2 text-sm font-medium text-cyan-400 dark:text-orange-500",
                        {
                           "border-white": isActiveLesson,
                           "border-green-300": !isActiveLesson,
                        }
                     )}
                  >
                     <Lock size={20} />
                     Em breve
                  </span>
               )}
               <span className="text-xs rounded py-[0.125rem] px-2 text-white border border-green-300 font-bold">
                  {props.type === "live" ? "AO VIVO" : "AULA PRÁTICA"}
               </span>
            </header>

            <strong
               className={classNames("block mt-5 ", {
                  "text-white": isActiveLesson,
                  "text-gray-200": !isActiveLesson,
               })}
            >
               {props.title}
            </strong>
         </div>
      </Link>
   );
}
