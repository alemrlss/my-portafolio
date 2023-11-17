"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Aplicacion de Comercio Electronico",
    description:
      "Desarrolle una red de compra inspirada en Marketplace Facebook. La plataforma permite a los usuarios conectarse y poder comercializar entre ellos cumpliendo los requisitos",
    image: "/images/projects/1.png",
    tag: ["Todos", "Frontend", "Backend"],
    gitUrl: "/",
    previewUrl: "/",
    skills: [
      {
        name: "ReactJS",
      },
      {
        name: "NextJS",
      },
      {
        name: "Tailwind",
      },
      {
        name: "NodeJS",
      },
      {
        name: "Express",
      },
      {
        name: "MongoDB",
      },
    ],
  },
  {
    id: 2,
    title: "Dashboard Administrativo",
    description:
      "Desarrolle un Panel Administrativo para llevar a cabo las operaciones CRUD en el negocio principal de VenSalud S.A",
    image: "/images/projects/2.jpg",
    tag: ["Todos", "Frontend"],
    gitUrl: "https://github.com/alemrlss/client_app",
    previewUrl: "/",
    skills: [
      {
        name: "ReactJS",
      },
      {
        name: "NextJS",
      },
      {
        name: "Tailwind",
      },
    ],
  },
  {
    id: 3,
    title: "Rest Countries App",
    description:
      "Plataforma que proporciona informacion detallada sobre diversos paises del mundo. Haciendo uso de Filtros y consumiendo un API externa",
    image: "/images/projects/3.jpg",
    tag: ["Todos", "Frontend"],
    gitUrl: "https://github.com/alemrlss/restcountries",
    previewUrl: "https://restcountriesalejandro.netlify.app/",
    skills: [
      {
        name: "ReactJS",
      },
      {
        name: "NextJS",
      },
      {
        name: "Tailwind",
      },
    ],
  },
  {
    id: 4,
    title: "To-do List",
    description:
      "Aplicacion de Lista de Tareas desarrollada en Javascript Vanilla y construida con WebPack. Pertmite a los usuarios organizar tareas por proyectos, marcar tareas como favoritas, completarlas, editarlas y eliminarlas",
    image: "/images/projects/4.png",
    tag: ["Todos", "Frontend"],
    gitUrl: "https://github.com/alemrlss/todo-list",
    previewUrl: "https://todolistalejandro.netlify.app/",
    skills: [
      {
        name: "Javascript",
      },
      {
        name: "Webpack",
      },
    ],
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("Todos");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Mis Proyectos
      </h2>
      <div className="text-white flex flex-col sm:flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="Todos"
          isSelected={tag === "Todos"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Frontend"
          isSelected={tag === "Frontend"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Backend"
          isSelected={tag === "Backend"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.5 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              skills={project.skills}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
