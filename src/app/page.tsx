import HeaderSection from "@/app/components/HeaderSection";
import Navbar from './components/Navbar'
import AboutMe from "./components/AboutMe";
import ProjectSection from "./components/ProjectSection";
import EmailSection from "./components/EmailSection";


export const revalidate  = 5;
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] ">
      <Navbar />
      <div className="container mt-12 px-12 py-4 mx-auto">
        <HeaderSection/>
        <AboutMe />
        <ProjectSection />
        <EmailSection /> 


      </div>
    </main>
  );
}
