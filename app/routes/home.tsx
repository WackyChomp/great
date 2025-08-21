import { useEffect, useState } from "react";
import { Link } from "react-router";
import { useNavigate } from 'react-router'
import { usePuterStore } from '~/lib/puter'

import type { Route } from "./+types/home";

import Navbar from "~/components/navbar";
import ResumeCard from "~/components/ResumeCard";
// import { resumes } from "../../constants";       // no longer need , only use resumes coming through useEffect

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Only GREATS Allowed" },
    { name: "description", content: "Genuine feedback that companies cannot provide!" },
  ];
}

export default function Home() {
  const { auth, kv } = usePuterStore();
  const navigate = useNavigate();
  const [resumes, setResumes] = useState<Resume[]>([])
  const [loadingResumes, setLoadingResumes] = useState(false)


  // commenting this out disables auth/login
  useEffect(() => {
    if(!auth.isAuthenticated) navigate('/auth?next=/');
  }, [auth.isAuthenticated])

  useEffect(() => {
    const loadResumes = async () => {
      setLoadingResumes(true);
      const resumes = (await kv.list('resume:*', true)) as KVItem[];

      const parsedResumes = resumes?.map((resume) => (
        JSON.parse(resume.value) as Resume
      ))

      console.log('parsedResumes', parsedResumes);
      setResumes(parsedResumes || []);
      setLoadingResumes(false);
    }
  
    loadResumes();
  }, [])
  
  
  return <main>
    <Navbar />

    <section className="bg-gray-950 main_section">
      <div className="page_heading">
        <h1 className="text_gradient">Track your personal accomplishments through Resume/CV</h1>
        {!loadingResumes && resumes ?.length === 0 ? ( 
          <h2>No resumes found. Upload your 1st resume to get feedback!</h2>
        ):(
          <h2 className="animate-bounce">There's always more to improve on and it never ends</h2>
        )}
      </div>

      {loadingResumes && (
        <div className="flex flex-col items-center justify-center">
          <img 
            src="https://cdn.dribbble.com/userupload/20154152/file/original-e184f9eb498a89992b471f1ed31f06be.gif" 
            alt="loading" 
            className="w-[200px]" 
          />
        </div>
      )}

      {!loadingResumes && resumes.length> 0 && (
        <div className="resumes_section py-12">
          {resumes.map((resume) => (
            <ResumeCard key={resume.id} resume={resume} />
          ))}
        </div>
      )}

      {!loadingResumes && resumes ?.length === 0 && (
        <div className="flex flex-col items-center justify-center mt-10 gap-4">
          <Link to='/upload' className='primary_button w-fit text-xl font-semibold'>
            Upload Resume
          </Link>
        </div>
      )}

    </section>
  </main>
}
