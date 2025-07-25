import type { Route } from "./+types/home";
import Navbar from "~/components/navbar";
import { resumes } from "../../constants";
import ResumeCard from "~/components/ResumeCard";

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
        <h2 className="animate-bounce">There's always more to improve on and it never ends</h2>
      </div>
    </section>

    {resumes.length> 0 && (
      <div className="resumes_section">

      </div>
    )}

    {resumes.map((resume) => (
      <ResumeCard key={resume.id} resume={resume} />
    ))}
  </main>
}
