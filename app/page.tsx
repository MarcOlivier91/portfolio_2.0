import Intro from '@/components/intro'

export default function Home() {
  return (
    <main className="flex flex-col px-4 py-4 items-center justify-center">
      <Intro />
      <h1 className="my-8">Cet espace va afficher mes projets avec liens github et photos d'illustration</h1>
      <h1 className="my-8">Cette dernière partie va afficher les moyens de me contacter</h1>
      <footer></footer>
    </main>
  );
}
