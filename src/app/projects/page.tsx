"use client"

import FramerWrapper from "@/components/animation/FramerWrapper";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink, Github, Layers } from "lucide-react";
import React, { useState } from "react";

import Projects from './projects.json'

// Feature Interface
interface ProjectFeature {
  title: string;
  description: string;
  videoUrl?: string;
}

interface Technologies {
  category: string;
  items: string[]
}

// Enhanced Project Interface
interface Project {
  title: string;
  description: string;
  overview: string;
  tags: string[];
  link: string;
  githubLink?: string;
  inspiration: string;
  overallDemoVideoUrl?: string;
  features: ProjectFeature[];
  technologies: Technologies[];
  learnings: string[];
}

const projectsPage = () => {
  // State to manage dialog
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  // Video Embed Component
  const VideoEmbed: React.FC<{ src: string, title: string }> = ({ src, title }) => (
    <div className="w-full aspect-video rounded-lg overflow-hidden">
      <video src={src} controls className="w-full h-full object-cover" title="title" />
    </div>
  )

  return (
    // PROJECT PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden p-6">
      <Badge className="gap-2">
        <Layers className="h-5 w-5" />
        Projects
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>My Projects</Heading>
        <FramerWrapper y={0} x={200}>
          <p className=" font-poppins text-lg w-full text-primary max-sm:text-base">
            I love to Build Cool Projects. Here, you&#x27;ll find a curated
            collection of my creative endeavors and technical projects. Each
            piece represents a journey of innovation, problem-solving, and
            continuous learning. Feel free to explore this showcase of my
            passion and expertise in action.
          </p>
        </FramerWrapper>
      </div>

      {/* Project Cards Grid */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Projects.map((project, index) => (
          <Card 
            key={index} 
            className="hover:shadow-lg transition-shadow duration-300 cursor-pointer"
            onClick={() => {
              window.scrollTo({
                top: document.documentElement.scrollHeight / 2, // Scroll to the middle
                behavior: "smooth", // Smooth scroll effect
              });          
              setSelectedProject(project)
            }}
          >
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tags.map((tag, tagIndex) => (
                  <Badge key={tagIndex} variant="secondary">{tag}</Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm" className="w-full">
                View Project Details
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-5xl h-[100vh]">
          {selectedProject && (
            <div className="flex flex-col h-full">
              <DialogHeader>
                <DialogTitle>{selectedProject.title}</DialogTitle>
                <DialogDescription>
                  {selectedProject.description}
                </DialogDescription>
              </DialogHeader>

              <Separator className="my-4" />

              <Tabs defaultValue="overview" className="flex-grow overflow-hidden">
                <TabsList className="grid w-full grid-cols-6">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="inspiration">Inspiration</TabsTrigger>
                  <TabsTrigger value="demo">Demo</TabsTrigger>
                  <TabsTrigger value="features">Features</TabsTrigger>
                  <TabsTrigger value="technologies">Technologies</TabsTrigger>
                  <TabsTrigger value="learnings">Learnings</TabsTrigger>
                </TabsList>

                <ScrollArea className="h-[calc(90vh-200px)] pr-4 mt-4">
                  {/* Overview Tab */}
                  <TabsContent value="overview">
                    <div className="prose max-w-none">
                      <h2 className="text-xl font-semibold">Project Overview</h2>
                      <p dangerouslySetInnerHTML={{ __html: selectedProject.overview }} className="mt-4"/>
                    </div>
                  </TabsContent>

                  {/* Inspiration Tab */}
                  <TabsContent value="inspiration">
                    <div className="prose max-w-none">
                      <h2 className="text-xl font-semibold">Project Inspiration</h2>
                      <p>{selectedProject.inspiration}</p>
                    </div>
                  </TabsContent>

                  {/* Demo Tab */}
                  <TabsContent value="demo">
                    <div className="space-y-4">
                      <h2 className="text-xl font-semibold">Overall Project Demo</h2>
                      {selectedProject.overallDemoVideoUrl ? (
                        <VideoEmbed src={selectedProject.overallDemoVideoUrl}
                        title={`${selectedProject.title} Demo`} />
                      ) : (
                        <p>Demo video not available yet</p>
                      )}
                    </div>
                  </TabsContent>

                  {/* Features Tab */}
                  <TabsContent value="features">
                    <div className="space-y-6">
                      <h2 className="text-xl font-semibold">Project Features</h2>
                      {selectedProject.features.map((feature, index) => (
                        <div key={index} className="border rounded-lg p-4">
                          <h3 className="text-lg font-medium mb-2">{feature.title}</h3>
                          <div className="flex items-center gap-6">
                            {feature.videoUrl && (
                              <div className="w-[50%]">
                                <VideoEmbed src={feature.videoUrl} title={feature.title} />
                              </div>                            
                            )}
                            <div className="w-[50%] flex">                            
                              <p className="text-muted-foreground mb-4">{feature.description}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>

                  {/* Technologies Tab */}
                  <TabsContent value="technologies">
  <div className="space-y-4">
    <h2 className="text-xl font-semibold">Technologies Used</h2>
    {selectedProject.technologies.map((techCategory, index) => (
      <div key={index}>
        <h3 className="text-lg font-medium">{techCategory.category}</h3>
        <div className="flex flex-wrap gap-4 mt-2">
          {techCategory.items.map((tech, idx) => (
            <div
              key={idx}
              className="px-4 py-2 rounded-lg bg-gray-100 text-gray-800 font-semibold shadow-sm hover:bg-gray-200 transition"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
</TabsContent>


                  {/* Learnings Tab */}
                  <TabsContent value="learnings">
                    <div className="prose max-w-none space-y-4">
                      <h2 className="text-xl font-semibold">Things I've Learned</h2>
                      <div className="flex flex-wrap gap-4">
                        {selectedProject.learnings.map((learning, index) => (
                          <div
                            key={index}
                            className="px-4 py-2 rounded-lg bg-gray-100 text-gray-800 font-semibold shadow-sm hover:bg-gray-200 transition"
                          >
                            {learning}
                          </div>
                        ))}
                      </div>
                    </div>
                  </TabsContent>
                </ScrollArea>
              </Tabs>

              <Separator className="my-4" />
              <div className="flex justify-end gap-3">
                {selectedProject.githubLink && (
                  <Button 
                    variant="outline" 
                    onClick={() => window.open(selectedProject.githubLink, '_blank')}
                  >
                    <Github className="mr-2 h-4 w-4" /> Github
                  </Button>
                )}
                <Button
                  onClick={() => window.open(selectedProject.link, '_blank')}
                >
                  <ExternalLink className="mr-2 h-4 w-4" /> Visit Project
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default projectsPage;
