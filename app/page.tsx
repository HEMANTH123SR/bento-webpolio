"use client";
import { Home } from "lucide-react";
import { linkedinData } from "@/linkedin-data";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";

export default function ZA() {
  const user = linkedinData[0].data;
  const [showAllSkills, setShowAllSkills] = useState<boolean>(false);
  return (
    <main className="w-full h-screen p-6  flex justify-center items-center bg-[#171717] text-white ">
      {/* container */}
      <div className="w-full h-full  flex space-x-3">
        <div className="w-[360px] flex flex-col space-y-3  h-full border border-neutral-800 rounded-xl bg-[#1C1C1C] p-5">
          <div className="flex justify-between">
            <img
              className="w-28 h-28 rounded-full grayscale border"
              src={user.profilePic}
            />

            <div className="w-full h-full flex justify-end items-start">
              <div className="bg-[#2B2B2B] p-2 rounded-full flex justify-center items-center">
                <Home className="h-5 w-5 cursor-pointer" strokeWidth={1} />
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-0.5">
            <h1 className="text-xl font-semibold capitalize">
              {user.firstName + " " + user.lastName}
            </h1>
            <div className="flex space-x-2.5 text-sm ">
              <h3 className="capitalize cursor-pointer">Linkedin</h3>
              {user.creatorWebsite && (
                <h3 className=" cursor-pointer">Creator Website 🌍</h3>
              )}
            </div>
          </div>
          {user.skills && (
            <div className="flex flex-wrap  gap-2.5">
              {user.skills
                .slice(0, showAllSkills ? user.skills.length : 2)
                .map((skill) => (
                  <Badge key={skill.name} variant={"secondary"}>
                    {skill.name}
                  </Badge>
                ))}
              {user.skills.length > 2 ? (
                <Badge
                  className=" cursor-pointer"
                  onClick={() => setShowAllSkills((prev) => !prev)}
                  variant={"secondary"}
                >
                  {showAllSkills
                    ? "show less"
                    : `+ ${user.skills.length - 2} `}
                </Badge>
              ) : (
                ""
              )}
            </div>
          )}

        </div>
        <div className="w-full h-full border border-neutral-800  rounded-xl bg-[#1C1C1C]"></div>
      </div>
    </main>
  );
}
