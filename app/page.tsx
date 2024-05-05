"use client";
import { Home } from "lucide-react";
import { linkedinData } from "@/linkedin-data";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function ZA() {
  const user = linkedinData[0].data;
  const [showAllSkills, setShowAllSkills] = useState<boolean>(false);
  const [showAllBio, setShowAllBio] = useState<boolean>(false);
  return (
    <main className="w-full min-h-screen h-full p-6 flex justify-center items-center bg-[#171717] text-white ">
      {/* container */}
      <div className="w-full h-full  flex space-x-3">
        <div className="w-[440px] flex flex-col space-y-3   h-full border border-neutral-800 rounded-xl bg-[#1C1C1C] p-5 pb-0 ">
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
                  {showAllSkills ? "show less" : `+ ${user.skills.length - 2} `}
                </Badge>
              ) : (
                ""
              )}
            </div>
          )}
          <h2 className="text-sm">{user.headline}</h2>
          {user.about && (
            <div className="flex flex-col space-y-0.5">
              <h2 className=" font-semibold">Bio</h2>
              <p className="text-xs">
                {user.about.slice(0, showAllBio ? user.about.length : 200)}
              </p>
              {user.about.length > 200 && (
                <span
                  className="text-xs cursor-pointer"
                  onClick={() => setShowAllBio((prev) => !prev)}
                >
                  {showAllBio ? "show less" : "...show more"}
                </span>
              )}
            </div>
          )}
          {user.languages.length > 0 && (
            <div className="flex flex-col space-y-0.5">
              <h2 className="font-semibold">Lanquage</h2>
              <div className="flex space-x-1.5 flex-wrap">
                {user.languages.map((lanq) => (
                  <span className="text-xs" key={lanq.title}>
                    {lanq.title}
                  </span>
                ))}
              </div>
            </div>
          )}
          <h5 className="text-xs">{user.addressWithCountry}</h5>
          <div className=" w-full flex p-4  mt-6 justify-center   border-t border-neutral-800 cursor-pointer">
            <span className="text-sm font-semibold">Bento</span>
          </div>
        </div>

        <div className="w-full h-full  flex flex-col space-y-3  ">
          <div className="h-16 px-12 flex flex-wrap items-center justify-start space-x-8 border border-neutral-800  rounded-xl bg-[#1C1C1C]">
            {user.experiences.length > 0 && (
              <span className="text-sm font-semibold cursor-pointer">
                Experience
              </span>
            )}
            {user.educations.length > 0 && (
              <span className="text-sm font-semibold cursor-pointer ">
                Education
              </span>
            )}
            {user.projects.length > 0 && (
              <span className="text-sm font-semibold cursor-pointer">
                Projects
              </span>
            )}
            {user.licenseAndCertificates.length > 0 && (
              <span className="text-sm font-semibold cursor-pointer">
                Certificates
              </span>
            )}
            {user.courses.length > 0 && (
              <span className="text-sm font-semibold cursor-pointer">
                Courses
              </span>
            )}

            {(user.volunteerAndAwards.length > 0 ||
              user.patents.length > 0) && (
                <span className="text-sm font-semibold cursor-pointer">
                  Other
                </span>
              )}
          </div>
          <ScrollArea className="h-[80vh] w-full border border-neutral-800  rounded-xl bg-[#1C1C1C]">
            <div className="flex flex-col space-y-6 px-12 ">
              {/* experience */}
              {user.experiences.length && (
                <div className="flex flex-col w-full h-auto px-4">
                  <div className="flex justify-start my-6">
                    <Badge variant={"secondary"}>Experience</Badge>
                  </div>
                  {user.experiences.map((experience, i) => (
                    <div
                      key={i}
                      className="flex space-x-6 "
                    >
                      <div className="flex flex-col">
                        <img
                          src={`${experience.logo}`}
                          className="w-20 h-20 min-w-20 min-h-20 rounded-full border-2 border-white"
                        />
                        {i !== user.experiences.length - 1 && (
                          <div
                            className={`flex w-full justify-center items-center h-auto min-h-16`}
                          >
                            <div className="h-full border"></div>
                          </div>
                        )}
                      </div>
                      <div className="flex flex-col justify-start items-start ">
                        <span className="text-xs">{experience.caption}</span>
                        <h3 className=" font-semibold">{experience.title}</h3>
                        <h4 className="text-sm">{experience.subtitle}</h4>
                        <h5 className="text-xs">{experience.metadata}</h5>
                        <p className="text-xs font-light">
                          {experience?.subComponents[0]?.description[0]?.text.slice(
                            0,
                            300
                          )}
                          {experience?.subComponents[0]?.description[0]?.text
                            .length > 300 && "...."}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {user.educations.length && (
                <div className="flex flex-col w-full h-auto px-4">
                  <div className="flex justify-start my-6">
                    <Badge variant={"secondary"}>Education</Badge>
                  </div>
                  {user.educations.map((education, i) => (
                    <div
                      key={i}
                      className="flex space-x-6 "
                    >
                      <div className="flex flex-col">
                        <img
                          src={`${education.logo}`}
                          className="w-20 h-20 min-w-20 min-h-20 rounded-full border-2 border-white"
                        />
                        {i !== user.educations.length - 1 && (
                          <div
                            className={`flex w-full justify-center items-center h-auto min-h-16`}
                          >
                            <div className="h-full border"></div>
                          </div>
                        )}
                      </div>
                      <div className="flex flex-col justify-start items-start ">
                        <span className="text-xs">{education.caption}</span>
                        <h3 className="font-semibold">{education.title}</h3>
                        <h4 className="text-sm">{education.subtitle}</h4>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {user.profilePic.length && (
                <div className="flex flex-col w-full h-auto px-4">
                  <div className="flex justify-start my-6">
                    <Badge variant={"secondary"}>Projects</Badge>
                  </div>
                  {user.projects.map((project, i) => (
                    <div key={i} className="flex flex-col space-y-3  my-6">
                      <div className="flex space-x-3 justify-start items-center">
                        <div className="h-3 w-3 min-h-3 min-w-3 bg-white rounded-full"></div>
                        <h3 className="text-lg font-semibold">{project.title}</h3>
                      </div>
                      <p className="text-sm">{project?.subComponents[0]?.description[0]?.text}</p>
                      {project?.subComponents[0]?.description[1]?.type ===
                        "mediaComponent" && (
                          <img
                            src={
                              project.subComponents[0].description[1].thumbnail
                            }
                            alt={project.subComponents[0].description[1].text}
                          />
                        )}
                    </div>
                  ))}
                </div>
              )}
              {
                user.licenseAndCertificates.length && (<div className="flex flex-col w-full h-auto px-4">
                  <div className="flex justify-start my-6">
                    <Badge variant={"secondary"}>Certificates</Badge>
                  </div>
                  {
                    user.licenseAndCertificates.map((cert, i) => <div key={i} className="flex space-x-6">
                      <div className="flex flex-col ">
                        <img
                          src={cert?.logo ? cert?.logo : ""}
                          className="w-24 h-24 min-w-24 min-h-24 rounded-xl border-2 border-white"
                        />
                        {i !== user.licenseAndCertificates.length - 1 && (
                          <div
                            className={`flex w-full justify-center items-center h-auto min-h-16`}
                          >
                            <div className="h-full border"></div>
                          </div>
                        )}

                      </div>
                      <div className="flex flex-col justify-start items-start ">
                        <span className="text-xs">{cert.caption}</span>
                        <h3 className="font-semibold">{cert.title}</h3>
                        <h4 className="text-sm">{cert.subtitle}</h4>
                        <h5 className="text-xs">{cert?.metadata}</h5>
                        {
                          cert.subComponents[0].description.filter((data) => data.type === "mediaComponent").map((data, i) => <div key={i}></div>)
                        }
                      </div>
                    </div>)
                  }
                </div>)
              }
            </div>
          </ScrollArea>
        </div>
      </div>
    </main>
  );
}
