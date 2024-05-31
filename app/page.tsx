import Intro from '@/components/intro'
import SectionDivider from '@/components/section-divider';
import About from '@/components/about';
import Projets from '@/components/projets';
import Contact from '@/components/contact';

export default function Home() {
  return (
    <main className="flex flex-col px-4 py-4 items-center justify-center">
      <Intro />
      <SectionDivider />
      <About />
      <Projets />
      <Contact />
    </main>
  );
}
