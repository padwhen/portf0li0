import FramerWrapper from "@/components/animation/FramerWrapper";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

const educationPage = () => {
  return (
    // ABOUT PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge className=" gap-2">
        <Briefcase className="h-5 w-5" />
        Education
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>My Education</Heading>
      </div>
      <div className="w-full h-fit flex flex-col gap-8">
        <div className="w-full h-fit flex">
          <FramerWrapper y={0} x={-100} delay={0.35} className="w-1/4 font-rubik flex items-center justify-evenly text-lg max-sm:text-base ">
            January 2023 - May 2025
          </FramerWrapper>
          <FramerWrapper y={0} x={100} delay={0.35} className="relative w-3/4 border-l-4 border-l-[#3c3c3c] p-4 gap-3 education_point ">
            <div className="text-2xl font-rubik max-sm:text-xl">
              Bachelor of Business Administration - Business Information Technology <br /> Haaga-Helia University
              of Applied Sciences
            </div>
            <p className=" font-poppins text-base w-full text-primary  max-sm:text-xs">
                Major: Software Development <br />
                Relevant Coursework: Front End Programming, Back End Programming, Data Management and Databases, Mobile Programming, Software Development Project 1, ...
            </p>
          </FramerWrapper>
        </div>
        <div className="w-full h-fit flex">
          <FramerWrapper y={0} x={-100} delay={0.35} className="w-1/4 font-rubik flex items-center justify-evenly text-lg max-sm:text-base ">
            Febuary 2023 - June 2024
          </FramerWrapper>
          <FramerWrapper y={0} x={100} delay={0.35} className="relative w-3/4 border-l-4 border-l-[#3c3c3c] p-4 gap-3 education_point ">
            <div className="text-2xl font-rubik max-sm:text-xl">
              Full Stack Open - Deep Dive To Modern Web Development <br /> University of Helsinki
            </div>
            <p className=" font-poppins text-base w-full text-primary  max-sm:text-xs">
                Relevant Coursework: React.JS, Node.JS, MongoDB, GraphQL, PostgreSQL, TypeScript, React Native, CI/CD, Containers
            </p>
          </FramerWrapper>
        </div>
        <div className="w-full h-fit flex">
          <FramerWrapper y={0} x={-100} delay={0.35} className="w-1/4 font-rubik flex items-center justify-evenly text-lg max-sm:text-base ">
            2024 (Open University)
          </FramerWrapper>
          <FramerWrapper y={0} x={100} delay={0.35} className="relative w-3/4 border-l-4 border-l-[#3c3c3c] p-4 gap-3 education_point ">
            <div className="text-2xl font-rubik max-sm:text-xl">
              External Courses <br /> Metropolia University of Applied Sciences
            </div>
            <p className=" font-poppins text-base w-full text-primary  max-sm:text-xs">
                Relevant Coursework: Data Structures and Algorithm with Python, Microprosessors, Power BI, Window PowerShell
            </p>
          </FramerWrapper>
        </div>
        <div className="w-full h-fit flex">
          <FramerWrapper y={0} x={-100} delay={0.35} className="w-1/4 font-rubik flex items-center justify-evenly text-lg max-sm:text-base ">
            2024 (Online Courses)
          </FramerWrapper>
          <FramerWrapper y={0} x={100} delay={0.35} className="relative w-3/4 border-l-4 border-l-[#3c3c3c] p-4 gap-3 education_point ">
            <div className="text-2xl font-rubik max-sm:text-xl">
              External Courses <br /> Udemy
            </div>
            <p className=" font-poppins text-base w-full text-primary  max-sm:text-xs">
                Relevant Coursework: AWS - Cloud Practicioner, DevOps
            </p>
          </FramerWrapper>
        </div>
      </div>
    </div>
  );
};

export default educationPage;
