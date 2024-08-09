interface ExperienceDetail {
  name: string;
  startDate: string;
  endDate: string;
  description: string;
  designation: string;
}

interface TimelineProps {
  experienceDetails: ExperienceDetail[];
}

export default function Timeline({ experienceDetails }: TimelineProps) {
  const detailAlignment = ["timeline-start", "timeline-end"];
  return (
    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
      {experienceDetails.map((experience, index) => (
        <li key={index}>
          {index === 0 ? "" : <hr />}
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5 text-primary-icon"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div
            className={`${
              detailAlignment[index % 2]
            } mb-10 text-secondary-white ${
              index % 2 === 0 ? "md:text-end" : ""
            }`}
          >
            <time className="font-mono text-primary-white">
              {experience?.name} ({experience.startDate} - {experience.endDate})
            </time>
            <div className="text-lg font-semibold text-primary-icon">
              {experience?.designation}
            </div>
            <p className="text-gray-200 font-light">{experience.description}</p>
          </div>
          {index === experienceDetails.length - 1 ? "" : <hr />}
        </li>
      ))}
    </ul>
  );
}
