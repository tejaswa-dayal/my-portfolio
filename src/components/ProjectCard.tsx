import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

export default function ProjectCard({
  name,
  description,
  techStack,
  image,
  link,
}: {
  name: string;
  description: string;
  techStack: string[];
  image: string;
  link: string;
}) {
  return (
    <div className="card bg-dark-grey w-full shadow-xl">
      <div className="relative cursor-pointer rounded-t-xl">
        <a href={link} target="_blank">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={image} alt={name} className="w-full h-auto rounded-t-xl" />
          <div className="absolute w-full h-full opacity-0 hover:opacity-80 bg-secondary top-0 bottom-0 right-0 left-0 z-10 flex justify-center items-center transition-opacity duration-300 ease-in-out">
            <FontAwesomeIcon
              icon={faEye}
              className="text-primary-icon text-3xl"
            />
          </div>
        </a>
      </div>
      <div className="card-body -mt-7 -ml-3">
        <h2 className="card-title text-primary-icon capitalize">{name}</h2>

        <div className="card-actions justify-self-start">
          <p className="text-gray-200 font-light w-full">{description}</p>
          {techStack?.map((tech: string, index: number) => (
            <div
              key={index}
              className="badge badge-outline badge-lg badge-accent"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
