"use client";
import { motion } from "framer-motion";
import {
  CodeBracketIcon,
  EyeIcon,
  ArrowLeftIcon,
  EyeSlashIcon,
} from "@heroicons/react/24/outline";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};
const ProjectSection = ({ project, images }) => {
  return (
    <section className="flex min-h-screen flex-col bg-[#121212] overflow-x-hidden lg:overflow-auto justify-center items-center">
      <div className="container mt-0 mx-auto px-12 py-4  flex flex-col items-center justify-center ">
        <a
          href="/#projects"
          className="text-white  flex justify-start w-full mb-0 hover:text-gray-400 hover:border-gray-400"
        >
          <ArrowLeftIcon className="h-8 w-8 lg:h-12 lg:w-12 border-white border rounded-full p-1 " />
        </a>{" "}
        <h2 className="text-white text-4xl text-center">{project.title}</h2>
        <div className="md:grid  md:grid-cols-2 gap-6 py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 mt-2 lg:mt-2">
          <motion.div
            className="h-96"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <ImageGallery items={images} additionalClass="" />
          </motion.div>
          <div className="text-white mt-20 lg:mt-0 text-center lg:text-start">
            <motion.div
              initial={{ opacity: 0.5, y: -300 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex space-x-2 justify-center lg:justify-end my-4"
            >
              <a href={project.gitUrl} target="_blank">
                <CodeBracketIcon className="h-8 w-8 hover:text-gray-400 " />
              </a>
              {project.previewUrl ? (
                <a href={project.previewUrl} target="_blank">
                  {" "}
                  <EyeIcon className="h-8 w-8 hover:text-gray-400" />
                </a>
              ) : (
                <EyeSlashIcon className="h-8 w-8 hover:text-red-500 cursor-pointer" />
              )}
            </motion.div>
            <div>
              <p className="text-sm">{project.completeDescription}</p>

              <h2 className="mt-1 font-semibold text-center text-xl">
                Tecnologias utilizadas:
              </h2>
              <motion.ul
                className="mt-4 flex flex-row flex-wrap gap-2 md:gap-4 lg:gap-2"
                variants={container}
                initial="hidden"
                animate="visible"
              >
                {project.skills.map((skill, index) => (
                  <motion.li
                    variants={item}
                    key={index}
                    className={`px-3 py-2 mx-1 font-semibold rounded-full text-sm border-white border text-white mb-2 md:mb-0`}
                  >
                    {skill.name}
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
