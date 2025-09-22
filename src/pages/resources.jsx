import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import Navbar from "../components/navbar";
import Footer from "./../components/footer";
import { Badge } from "../components/ui/badge";
import { Book, Video, Download, ExternalLink, FileText, Code } from "lucide-react";

const Resources = () => {
  const resourceCategories = [
    {
      title: "Documentation",
      icon: Book,
      color: "text-blue-500",
      resources: [
        { name: "Security Best Practices", type: "PDF", size: "2.4 MB" },
        { name: "Incident Response Guide", type: "PDF", size: "1.8 MB" },
        { name: "Network Security Manual", type: "PDF", size: "3.2 MB" },
      ]
    },
    {
      title: "Video Tutorials",
      icon: Video,
      color: "text-cyan-400",
      resources: [
        { name: "Penetration Testing Basics", type: "Video", duration: "45 min" },
        { name: "Social Engineering Defense", type: "Video", duration: "32 min" },
        { name: "Malware Analysis Workshop", type: "Video", duration: "1h 20min" },
      ]
    },
    {
      title: "Tools & Scripts",
      icon: Code,
      color: "text-green-400",
      resources: [
        { name: "Security Audit Script", type: "Python", size: "15 KB" },
        { name: "Log Analyzer Tool", type: "Shell", size: "8 KB" },
        { name: "Vulnerability Scanner", type: "Python", size: "45 KB" },
      ]
    },
  ];

  const featuredResources = [
    {
      title: "Cybersecurity Framework 2024",
      description: "Comprehensive guide covering the latest cybersecurity frameworks and standards",
      type: "eBook",
      featured: true,
    },
    {
      title: "Threat Intelligence Report",
      description: "Latest threat intelligence and analysis from our research team",
      type: "Report",
      featured: true,
    },
    {
      title: "Secure Coding Practices",
      description: "Essential secure coding practices for developers",
      type: "Guide",
      featured: false,
    },
  ];

  return (
    <>
    <Navbar />
    <div className="min-h-screen pt-24 pb-12 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-blue-400 to-cyan-400 bg-clip-text text-transparent">Resources</span> Hub
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Access our comprehensive collection of cybersecurity resources, tools, and documentation
          </p>
        </div>

        {/* Featured Resources */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-white via-blue-400 to-cyan-400 bg-clip-text text-transparent">Featured</span> Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredResources.map((resource, index) => (
              <Card 
                key={index} 
                className={`bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-4 cursor-pointer hover:shadow-lg`}
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl text-white">{resource.title}</CardTitle>
                    {resource.featured && (
                      <Badge className="bg-blue-500 text-black px-2 py-1 rounded-full">
                        Featured
                      </Badge>
                    )}
                  </div>
                  <CardDescription className="text-gray-400">
                    {resource.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-sm text-cyan-400 font-medium">{resource.type}</span>
                    <Button className="flex items-center gap-2 bg-transparent border border-white/40 px-3 py-1 rounded hover:bg-white/10">
                      <Download className="w-4 h-4" /> Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Resource Categories */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">
            Browse by <span className="bg-gradient-to-r from-white via-blue-400 to-cyan-400 bg-clip-text text-transparent">Category</span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {resourceCategories.map((category, categoryIndex) => {
              const Icon = category.icon;
              return (
                <Card key={categoryIndex} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-4 hover:shadow-lg">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${category.color}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <CardTitle className="text-2xl">{category.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {category.resources.map((resource, resourceIndex) => (
                        <div 
                          key={resourceIndex}
                          className="flex items-center justify-between p-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors cursor-pointer"
                        >
                          <div>
                            <p className="font-medium text-white">{resource.name}</p>
                            <p className="text-sm text-gray-400">
                              {resource.type} • {resource.size || resource.duration}
                            </p>
                          </div>
                          <div className="flex space-x-2">
                            <Button className="flex items-center justify-center px-2 py-1 rounded hover:bg-white/10">
                              <ExternalLink className="w-4 h-4" />
                            </Button>
                            <Button className="flex items-center justify-center px-2 py-1 rounded hover:bg-white/10">
                              <Download className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                    <Button className="w-full mt-6 border border-white/40 px-3 py-2 rounded hover:bg-white/10">
                      View All {category.title}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-20 text-center">
          <Card className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg max-w-2xl mx-auto p-12">
            <CardContent>
              <FileText className="w-16 h-16 text-cyan-400 mx-auto mb-6 animate-pulse" />
              <h3 className="text-2xl font-bold mb-4 text-white">
                Can't find what you're looking for?
              </h3>
              <p className="text-gray-400 mb-6">
                Request specific resources or contribute your own to help the community grow
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="px-4 py-2 rounded bg-blue-500 hover:bg-blue-600 text-black">Request Resource</Button>
                <Button className="px-4 py-2 rounded border border-white/40 hover:bg-white/10">Contribute</Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Resources;
