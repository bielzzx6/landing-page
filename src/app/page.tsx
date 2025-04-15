import Contacts from '@/app/components/Contacts';
import Hero from '@/app/components/Hero';
import Projects from '@/app/components/Projects';
import Skills from '@/app/components/Skills';
import About from './components/About';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contacts />
    </main>
  );
}