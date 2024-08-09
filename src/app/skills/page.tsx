import Image from "next/image";
import skillJson from "./skillIcons.json";
type SkillJsonType = {
    [key: string]: string;
  };
export default function Skills() {
    const skills : SkillJsonType = skillJson; 
    return (
            <div className="grid max-sm:grid-cols-2 grid-cols-3 xl:grid-cols-5 gap-y-8 gap-x-3">
            {Object.keys(skills).map((key, index) => (
                <div key={index} className="flex flex-col items-center gap-2">
                    <Image  src={skills[key]} width={80} height={80} alt={`${key} Image`}/>
                    <p className="uppercase text-center text-gray-200 font-light tracking-wider justify-end">{key}</p>
                </div>
    ))}
            </div>
                );
}