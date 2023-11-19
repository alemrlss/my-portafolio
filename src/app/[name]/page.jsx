/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { useEffect, useState } from "react";
import { projectsData } from "@/data/ProjectsData";
import ProjectSection from "../components/ProjectSection";

function Page({ params }) {
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchProject = async () => {
      const foundProject = projectsData.find(
        (project) => project.param == params.name
      );
      setProject(foundProject);

      if (foundProject) {
        setImages(
          foundProject.images.map((image) => ({
            original: image,
            thumbnail: image,
          }))
        );
      }
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
        <ProjectSection project={project} images={images} />
      ) : (
        <section className="flex min-h-screen flex-col bg-[#121212] overflow-x-hidden lg:overflow-auto">
          <h1 className="text-white"> H</h1>
        </section>
      )}
    </main>
  );
}

export default Page;
