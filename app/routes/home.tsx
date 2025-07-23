import type { Route } from "./+types/home";
import Navbar from "~/components/navbar";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Only GREATS Allowed" },
    { name: "description", content: "Genuine feedback that companies cannot provide!" },
  ];
}

export default function Home() {
  return <main>
    <Navbar />

    <section className="bg-gray-950 main_section">
      <div className="page_heading">
        <h1 className="text_gradient">Track your personal accomplishments through Resume/CV</h1>
        <h2>There's always more to improve on and it never ends</h2>
      </div>
    </section>
  </main>
}
