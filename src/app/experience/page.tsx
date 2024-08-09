import Timeline from "@/components/Timeline";
import experiences from "./experience.json";

export default function Experience() {
  return (
    <div className="pt-3">
      <Timeline experienceDetails={experiences.experienceDetails} />
    </div>
  );
}
