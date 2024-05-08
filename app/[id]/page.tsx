"use client";
import {
    GraduationCap,
    Home,
    FileBadge2,
    BriefcaseBusiness,
} from "lucide-react";
import { linkedinData } from "@/lower-linkedin-data";
import { useState, useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";

export default function ZA({ params }: { params: { id: string } }) {
    const user = linkedinData[Number(params.id)];
    const postionRef = useRef(null);
    const educationRef = useRef(null);
    const certificationRef = useRef(null);
    const coursesRef = useRef(null);
    const skillsRef = useRef(null);
    const socialeRef = useRef(null);
    const [showMoreObject, setShowMoreObject] = useState({
        bio: false,
        postion: false,
        education: false,
        certificate: false,
        courses: false,
        skilss: false,
    });
    const handleSectionClick = (sectionRef: any) => {
        // Scroll to the corresponding section
        sectionRef.current.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <main className="w-full min-h-screen h-full p-3  lg:p-6 flex justify-center items-center bg-[#1C1C1C]  md:bg-[#171717] text-white ">
            {/* container */}
            <div className=" w-full h-full flex flex-col md:flex-row justify-center items-center md:items-start md:space-x-2  lg:space-x-3">
                <div className=" w-full md:w-[330px] lg:w-[420px] xl:w-[500px] flex flex-col space-y-3   h-full md:border border-neutral-800 md:rounded-xl bg-[#1C1C1C] p-5  sm:pb-0 ">
                    <div className="flex justify-between">
                        <img
                            className="w-28 h-28 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full  border "
                            src={
                                user.profilePicture
                                    ? user.profilePicture
                                    : "/default-profile.jpg"
                            }
                        />

                        <div className="w-full h-full flex justify-end items-start">
                            <div className="bg-[#2B2B2B] p-2 rounded-full flex justify-center items-center">
                                <Home
                                    className="h-6 w-6 min-h-6 min-w-6 cursor-pointer"
                                    strokeWidth={1}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-0.5">
                        <h1 className=" lg:text-xl font-semibold capitalize">
                            {user.firstName + " " + user.lastName}
                        </h1>
                        <div className="flex space-x-2.5 text-sm ">
                            <Badge
                                variant={"secondary"}
                                className="capitalize cursor-pointer"
                            >
                                Download CV{" "}
                            </Badge>
                        </div>
                    </div>
                    <h2 className="text-sm font-medium lg:font-semibold">
                        {user.headline}
                    </h2>
                    {user.summary && (
                        <div className="flex flex-col space-y-0.5">
                            <h2 className="text-sm lg:text-base font-semibold">Bio</h2>
                            <p className="text-xs ">
                                {user.summary.slice(
                                    0,
                                    showMoreObject.bio ? user.summary.length : 400
                                )}
                            </p>
                            {user.summary.length > 400 && (
                                <span
                                    className="text-xs cursor-pointer"
                                    onClick={() =>
                                        setShowMoreObject((prev) => {
                                            return { ...prev, bio: !prev.bio };
                                        })
                                    }
                                >
                                    {showMoreObject.bio ? "show less" : "...show more"}
                                </span>
                            )}
                        </div>
                    )}
                    {user.languages && (
                        <div className="flex flex-col space-y-0.5">
                            <h2 className="text-sm lg:text-base font-semibold">Lanquage</h2>
                            <div className="flex space-x-1.5 flex-wrap">
                                {user.languages.map((lanq) => (
                                    <span className="text-xs" key={lanq.name}>
                                        {lanq.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                    <h5 className="text-xs hidden sm:block">{user.geo.full}</h5>
                    <div className="hidden w-full md:flex p-4  mt-6 justify-center   border-t border-neutral-800 cursor-pointer">
                        <span className="text-sm capitalize font-semibold">WEBPOLIO</span>
                    </div>
                </div>

                <div className="w-full h-full  flex flex-col space-y-2 lg:space-y-3 max-w-[1200px] ">
                    <div className="hidden  h-16   px-8 lg:px-12 md:flex flex-wrap items-center justify-start space-x-5 lg:space-x-12 border border-neutral-800  rounded-xl bg-[#1C1C1C]">
                        {user.position && (
                            <span
                                className="text-sm font-semibold cursor-pointer"
                                onClick={() => handleSectionClick(postionRef)}
                            >
                                Postions
                            </span>
                        )}
                        {user.educations && (
                            <span
                                className="text-sm font-semibold cursor-pointer "
                                onClick={() => handleSectionClick(educationRef)}
                            >
                                Education
                            </span>
                        )}
                        {user.certifications && (
                            <span
                                className="text-sm font-semibold cursor-pointer"
                                onClick={() => handleSectionClick(certificationRef)}
                            >
                                Certificates
                            </span>
                        )}
                        {user.courses && (
                            <span
                                className="text-sm font-semibold cursor-pointer"
                                onClick={() => handleSectionClick(coursesRef)}
                            >
                                Courses
                            </span>
                        )}
                        {user.skills && (
                            <span
                                className="text-sm font-semibold cursor-pointer"
                                onClick={() => handleSectionClick(skillsRef)}
                            >
                                Skills & more
                            </span>
                        )}
                        <span
                            className={`text-sm font-semibold cursor-pointer  ${user.courses && user.certifications && user.skills
                                ? "hidden xl:block"
                                : ""
                                }`}
                            onClick={() => handleSectionClick(socialeRef)}
                        >
                            Social
                        </span>
                    </div>
                    <div className="flex justify-evenly items-center p-4 border-y-2 border-white rounded-sm md:hidden ">
                        {user.position && (
                            <span
                                className=" font-semibold cursor-pointer"
                                onClick={() => handleSectionClick(postionRef)}
                            >
                                Postions
                            </span>
                        )}
                        {user.educations && (
                            <span
                                className="font-semibold cursor-pointer "
                                onClick={() => handleSectionClick(educationRef)}
                            >
                                Education
                            </span>
                        )}
                        {user.certifications && (
                            <span
                                className=" font-semibold cursor-pointer"
                                onClick={() => handleSectionClick(certificationRef)}
                            >
                                Certificates
                            </span>
                        )}
                    </div>
                    <ScrollArea className=" md:h-[100vh] lg:h-[80vh] w-full md:border border-neutral-800  md:rounded-xl bg-[#1C1C1C]">
                        <div className="flex flex-col space-y-8 md:space-y-14 px-4 md:px-12  ">
                            {/* postions */}
                            {user.position && (
                                <div
                                    className="flex flex-col w-full h-auto px-4"
                                    ref={postionRef}
                                >
                                    <div className="flex justify-start my-6">
                                        <h1 className="text-xl font-semibold">Postions</h1>
                                    </div>

                                    {user.position
                                        .slice(0, showMoreObject.postion ? user.position.length : 2)
                                        .map((postion, i) => (
                                            <div key={i} className="flex space-x-6 ">
                                                <div className="flex flex-col">
                                                    {postion.companyLogo ? (
                                                        <img
                                                            src={`${postion.companyLogo}`}
                                                            className="w-20 h-20 min-w-20 min-h-20 rounded-full border-2 border-white"
                                                        />
                                                    ) : (
                                                        <BriefcaseBusiness
                                                            strokeWidth={1.2}
                                                            className="w-20 py-4 h-20 min-w-20 min-h-20  rounded-full bg-white text-black border-[#2B2B2B] border-4"
                                                        />
                                                    )}

                                                    {i !== user.position.length - 1 && (
                                                        <div
                                                            className={`flex w-full justify-center items-center h-full min-h-16`}
                                                        >
                                                            <div className="h-full border"></div>
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="flex flex-col space-y-1 justify-start items-start ">
                                                    <span className="text-xs">{postion.start.year}</span>
                                                    <h3 className=" font-semibold">{postion.title}</h3>
                                                    <h4 className="text-sm capitalize">
                                                        {postion.companyName}
                                                        {" · " + postion.employmentType}
                                                    </h4>
                                                    <h5
                                                        className={`${postion.companyIndustry
                                                            ? "block text-xs "
                                                            : "hidden"
                                                            }`}
                                                    >{`Industry : ${postion.companyIndustry}`}</h5>
                                                    <h5 className="text-xs">{postion.location}</h5>
                                                    <p className="text-xs font-light">
                                                        {postion.description.slice(0, 300)}
                                                        {postion.description.length > 300 && "...."}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}

                                    {user.position.length > 2 && (
                                        <span
                                            className={`text-sm capitalize cursor-pointer ${showMoreObject.postion && "mt-5"
                                                }`}
                                            onClick={() =>
                                                setShowMoreObject((prev) => {
                                                    return { ...prev, postion: !prev.postion };
                                                })
                                            }
                                        >
                                            {showMoreObject.postion
                                                ? `show less`
                                                : `show ${user.position.length - 2} more experience`}
                                        </span>
                                    )}
                                </div>
                            )}

                            {/* Education */}
                            {user.educations && (
                                <div
                                    className="flex flex-col w-full h-auto px-4"
                                    ref={educationRef}
                                >
                                    <div className="flex justify-start my-6">
                                        <h1 className="text-xl font-semibold">Education</h1>
                                    </div>
                                    {user.educations
                                        .slice(
                                            0,
                                            showMoreObject.education ? user.educations.length : 2
                                        )
                                        .map((education, i) => (
                                            <div key={i} className="flex space-x-6 ">
                                                <div className="flex flex-col">
                                                    <GraduationCap
                                                        strokeWidth={1.2}
                                                        className="w-20 py-4 h-20 min-w-20 min-h-20  rounded-full bg-white text-black border-[#2B2B2B] border-4"
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
                                                    <span className="text-xs">
                                                        {education.start.year}
                                                    </span>
                                                    <h3 className="font-semibold">{education.degree}</h3>
                                                    <Link
                                                        className="text-sm capitalize cursor-pointer "
                                                        href={education.url}
                                                    >
                                                        {education.schoolName}
                                                        {`${education.fieldOfStudy &&
                                                            ` ·  ${education.fieldOfStudy}`
                                                            }`}
                                                    </Link>
                                                    <h5 className="text-sm">{education.description}</h5>
                                                </div>
                                            </div>
                                        ))}
                                    {user.educations.length > 2 && (
                                        <span
                                            className={`text-sm capitalize cursor-pointer ${showMoreObject.education && "mt-5"
                                                }`}
                                            onClick={() =>
                                                setShowMoreObject((prev) => {
                                                    return { ...prev, education: !prev.education };
                                                })
                                            }
                                        >
                                            {showMoreObject.education
                                                ? `show less`
                                                : `show ${user.educations.length - 2} more Education`}
                                        </span>
                                    )}
                                </div>
                            )}

                            {/* certifications */}
                            {user.certifications && (
                                <div
                                    className="flex flex-col w-full h-auto px-4"
                                    ref={certificationRef}
                                >
                                    <div className="flex justify-start my-6">
                                        <h1 className="text-xl font-semibold">Certificate</h1>
                                    </div>
                                    {user.certifications
                                        .slice(
                                            0,
                                            showMoreObject.certificate
                                                ? user.certifications.length
                                                : 2
                                        )
                                        .map((cert, i) => (
                                            <div key={i} className="flex space-x-6">
                                                <div className="flex flex-col ">
                                                    {cert.company.logo ? (
                                                        <img
                                                            src={cert.company.logo}
                                                            className="w-20 h-20 min-w-20 min-h-20 rounded-full border-2 border-white"
                                                        />
                                                    ) : (
                                                        <FileBadge2
                                                            strokeWidth={1.2}
                                                            className="w-20 py-4 h-20 min-w-20 min-h-20  rounded-full bg-white text-black border-[#2B2B2B] border-4"
                                                        />
                                                    )}

                                                    {i !== user.certifications.length - 1 && (
                                                        <div
                                                            className={`flex w-full justify-center items-center h-full min-h-16`}
                                                        >
                                                            <div className="h-full border"></div>
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="flex flex-col justify-start items-start mb-7">
                                                    <h3 className="font-semibold">{cert.name}</h3>
                                                    <h4 className="text-sm">{cert.company.name}</h4>
                                                    <span className="text-xs">{cert.start.year}</span>
                                                </div>
                                            </div>
                                        ))}
                                    {user.certifications.length > 2 && (
                                        <span
                                            className={`text-sm capitalize cursor-pointer ${showMoreObject.certificate && "mt-5"
                                                }`}
                                            onClick={() =>
                                                setShowMoreObject((prev) => {
                                                    return { ...prev, certificate: !prev.certificate };
                                                })
                                            }
                                        >
                                            {showMoreObject.certificate
                                                ? `show less`
                                                : `show ${user.certifications.length - 2
                                                } more certifications`}
                                        </span>
                                    )}
                                </div>
                            )}

                            {/* courses */}
                            {user.courses && (
                                <div
                                    className="flex flex-col w-full h-auto px-4"
                                    ref={coursesRef}
                                >
                                    <div className="flex justify-start my-6">
                                        <h1 className="text-xl font-semibold">Courses</h1>
                                    </div>
                                    <div className="flex flex-col space-y-4">
                                        {user.courses
                                            .slice(
                                                0,
                                                showMoreObject.courses ? user.courses.length : 5
                                            )
                                            .map((course, i) => (
                                                <div key={i} className="flex space-x-6 items-center ">
                                                    <div className="bg-white h-3 w-3 min-w-3 min-h-3 lg:h-4 lg:w-4 lg:min-h-4 lg:min-w-4 rounded-xl"></div>
                                                    <span className="text-sm lg:text-base">
                                                        {course.name}
                                                    </span>
                                                </div>
                                            ))}
                                        {user.courses.length > 5 && (
                                            <span
                                                className={`text-sm capitalize cursor-pointer ${showMoreObject.courses && "mt-5"
                                                    }`}
                                                onClick={() =>
                                                    setShowMoreObject((prev) => {
                                                        return { ...prev, courses: !prev.courses };
                                                    })
                                                }
                                            >
                                                {showMoreObject.courses
                                                    ? `show less`
                                                    : `show ${user.courses.length - 5} more courses`}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            )}

                            {/* skills */}
                            {user.skills && (
                                <div
                                    className="flex flex-col w-full h-auto px-4"
                                    ref={skillsRef}
                                >
                                    <div className="flex justify-start my-6">
                                        <h1 className="text-xl font-semibold">Skills</h1>
                                    </div>
                                    <div className="flex flex-col space-y-4">
                                        {user.skills
                                            .slice(0, showMoreObject.skilss ? user.skills.length : 5)
                                            .map((skill, i) => (
                                                <div key={i} className="flex space-x-6 items-center ">
                                                    <div className="bg-white h-3 w-3 min-w-3 min-h-3 lg:h-4 lg:w-4 lg:min-h-4 lg:min-w-4 rounded-xl"></div>
                                                    <span className="text-sm lg:text-base">
                                                        {skill.name}
                                                    </span>
                                                </div>
                                            ))}
                                        {user.skills.length > 5 && (
                                            <span
                                                className={`text-sm capitalize cursor-pointer ${showMoreObject.skilss && "mt-5"
                                                    }`}
                                                onClick={() =>
                                                    setShowMoreObject((prev) => {
                                                        return { ...prev, skilss: !prev.skilss };
                                                    })
                                                }
                                            >
                                                {showMoreObject.skilss
                                                    ? `show less`
                                                    : `show ${user.skills.length - 5} more skills`}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            )}

                            <div className="flex w-full h-full ">
                                <div
                                    className="w-full mt-8 border-t-2 rounded-full flex flex-col justify-center items-center space-y-4 py-6"
                                    ref={socialeRef}
                                >
                                    <h3 className="capitalize">
                                        connect with me on{" "}
                                        <span className="underline cursor-pointer">Linkedin</span>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </ScrollArea>
                </div>
            </div>
        </main>
    );
}
