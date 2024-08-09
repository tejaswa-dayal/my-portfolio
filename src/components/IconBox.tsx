/* eslint-disable react/no-unescaped-entities */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import "./IconBox.css";

export default function IconBox({
  icon,
  text = "",
  isDisabled = false,
}: {
  icon: IconDefinition;
  text?: string;
  isDisabled?: boolean;
}) {
  return (
    <div
      className={`icon-box min-w-14 min-h-12 flex gap-4 bg-custom-gradient ${
        text
          ? " before:hover:border-t-primary-icon before:hover:border-t-[1px] before:hover:border-l-[0.5px] before:hover:border-r-0 before:hover:border-b-0 before:hover:border-bl-primary-icon before:hover:border-b-secondary before:hover:border-l-primary-icon before:hover:bg-hover-gradient transition-colors duration-300 max-md:px-3 ease-in-out"
          : ""
      }`}
    >
      <FontAwesomeIcon icon={icon} className="text-primary-icon text-xl" />
      {text && <p>{text}</p>}
    </div>
  );
}
