import { Header, Lesson, Sidebar, Video } from "./components";

export default function App() {
   return (
      <div>
         <Header children />
         <Sidebar children />
         <Video children />
         <Lesson children />
      </div>
   );
}
