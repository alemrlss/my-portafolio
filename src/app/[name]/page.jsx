/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { useEffect, useState } from "react";
import { projectsData } from "@/data/ProjectsData";

function Page({ params }) {
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      const foundProject = projectsData.find(
        (project) => project.param == params.name
      );
      setProject(foundProject);
      setLoading(false);
    };

    fetchProject();
  }, [params.name]);

  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      {loading ? (
        <div className="flex items-center justify-center min-h-screen bg-[#121212]">
          <div className="border-t-4 border-blue-500 border-solid animate-spin rounded-full h-16 w-16"></div>
        </div>
      ) : project ? (
        <div className="container mx-auto px-12 py-4 text-white " >
          {project.title}
          <nav>
            <a href="#test3">Test 3</a>
          </nav>
          <div
            className="bg-yellow-500 h-96 w-full flex min-h-screen"
            id="test1"
          >
            fdsfd
          </div>
          <div className="bg-blue-500 h-96 w-full flex min-h-screen" id="test2">
            fdsfd
          </div>
          <div className="bg-red-500 h-96 w-full flex min-h-screen" id="test3">
            fdsfd
          </div>
          <div
            className="bg-green-500 h-96 w-full flex min-h-screen"
            id="test4"
          >
            fdsfd
          </div>
        </div>
      ) : (
        <div className="container mx-auto px-12 py-4 text-white">
          No se encontró el proyecto
        </div>
      )}
    </main>
  );
}

export default Page;
