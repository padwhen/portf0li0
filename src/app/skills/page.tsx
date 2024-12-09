import Heading from "@/components/Heading";
import SkillsFooter from "@/components/SkillsFotter";
import { Badge } from "@/components/ui/badge";
import { Lightbulb } from "lucide-react";
import html from "../../../public/html.png";
import css from "../../../public/css.png";
import js from "../../../public/js.png";
import ts from "../../../public/ts.png";
import react from "../../../public/react.png";
import nextjs from "../../../public/nextjs.jpeg";
import nodejs from "../../../public/nodejs.png"; 
import tailwind from "../../../public/tailwindcss.png";
import aws from "../../../public/aws.png"; 
import docker from "../../../public/docker.png"; 
import github from "../../../public/github.png";
import vscode from "../../../public/vscode.png";
import FramerWrapper from "@/components/animation/FramerWrapper";

const skillPage = () => {
  const languages = [
    { alt: "HTML", img: html },
    { alt: "CSS", img: css },
    { alt: "JavaScript", img: js },
    { alt: "TypeScript", img: ts },
  ];
  const frameworks = [
    { alt: "React", img: react },
    { alt: "Next.js", img: nextjs },
    { alt: "Node.js", img: nodejs },
    { alt: "TailwindCSS", img: tailwind },
  ];
  const cloudTools = [
    { alt: "AWS", img: aws },
    { alt: "Docker", img: docker },
    { alt: "GitHub", img: github },
    { alt: "VS Code", img: vscode },
  ];

  return (
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge className="gap-2">
        <Lightbulb className="h-5 w-5" />
        My Skills
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>Technical Skills</Heading>
        <FramerWrapper y={0} x={200}>
          <p className="font-poppins text-xl w-full text-primary max-sm:text-lg">
            As a Full Stack Web Developer, I have hands-on experience in
            crafting scalable and maintainable web applications. My expertise
            includes modern tools like React, Node.js, and Next.js for
            front-end and back-end development, as well as cloud services like
            AWS and containerization technologies like Docker.
          </p>
        </FramerWrapper>
        <FramerWrapper y={100} delay={0.3} className="block">
          <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl">
            Programming Languages
          </h1>
          <div className="w-full h-fit flex-row flex justify-between items-center">
            <SkillsFooter items={languages} />
          </div>
        </FramerWrapper>
        <FramerWrapper className="block" y={100} delay={0.32}>
          <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl">
            Frameworks & Libraries
          </h1>
          <div className="w-full h-fit flex-row flex justify-between items-center">
            <SkillsFooter items={frameworks} />
          </div>
        </FramerWrapper>
        <FramerWrapper className="block" y={100} delay={0.34}>
          <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl">
            Cloud & DevOps Tools
          </h1>
          <div className="w-full h-fit flex-row flex justify-between items-center">
            <SkillsFooter items={cloudTools} />
          </div>
        </FramerWrapper>
      </div>
    </div>
  );
};

export default skillPage;
