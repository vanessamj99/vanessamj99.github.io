'use client';

import { Github, ExternalLink, Code, Star, ChevronRight } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
  featured?: boolean;
  status: 'active' | 'completed' | 'upcoming';
}

const projects: Project[] = [
  {
    title: 'Kotlin Code Quality with Problems API',
    description: 'Google Summer of Code 2025 project integrating the new Problems API in detekt and ktlint plugins to improve code quality tooling and provide better developer experience.',
    technologies: ['Kotlin', 'Gradle', 'Problems API', 'detekt', 'ktlint'],
    link: 'https://community.gradle.org/events/gsoc/2025/kotlin-code-quality-with-problems-api/',
    featured: true,
    status: 'active'
  },
  {
    title: 'From Scratch Labs',
    description: 'An upcoming educational platform',
    technologies: ['Educational Platform', 'Web Development', 'Learning Management'],
    status: 'upcoming'
  },
  {
    title: 'GutFeeling',
    description: 'A gut health app that helps you track your meals, drinks, supplements, and snacks. This app will help you also track your mood, bowel movements, water intake, and more that would be useful for your doctor during your appointments. All in all, this app will help you on your gut health journey which will also include suggestions for de-stressers, supplements that you can try before going to medications, and it will utilize the power of AI to identify changes that can be made in your diet.',
    technologies: ['Kotlin', 'Android SDK', 'AI/ML', 'Health Tracking', 'Firebase'],
    status: 'active'
  },
  {
    title: 'Gemini Collaboration IDE',
    description: 'This is an iOS application that acts as an IDE that supports Python code. Developers are able to collaborate on the same code and see each other\'s real time updates. They can also utilize the Gemini feature of the app to get code that they may need and ask questions about the code they wrote. Firebase is used for the real time updates, saving on the code that was written, and keeping track of all the projects that a user has after they have logged in through authentication.',
    technologies: ['Swift', 'iOS', 'Python', 'Firebase', 'Gemini AI', 'Real-time Collaboration'],
    status: 'completed'
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* App Header */}
        <div className="bg-white rounded-2xl p-6 mb-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-1">
                Projects
              </h2>
              <p className="text-gray-600 text-sm">
                A showcase of my work
              </p>
            </div>
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center">
              <Code className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        {/* Featured Project */}
        {projects.filter(p => p.featured).map((project, index) => (
          <div key={index} className="mb-6">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-6 text-white">
              <div className="flex items-center gap-3 mb-4">
                <Star className="w-5 h-5 text-yellow-300" />
                <span className="text-yellow-300 font-medium">Featured Project</span>
              </div>
              
              <h3 className="text-xl font-bold mb-4">
                {project.title}
              </h3>
              
              <p className="text-white/90 mb-6 leading-relaxed text-sm">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-white/20 text-white rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white text-purple-600 px-4 py-2 rounded-xl font-medium transition-colors"
                  >
                    View Project
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl font-medium transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    View Code
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}

        {/* Other Projects */}
        <div className="space-y-4">
          {projects.filter(p => !p.featured).map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl flex items-center justify-center">
                      <Code className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">
                        {project.title}
                      </h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        project.status === 'active' 
                          ? 'bg-green-100 text-green-800' 
                          : project.status === 'completed'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-orange-100 text-orange-800'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Description */}
              <p className="text-gray-700 mb-4 leading-relaxed text-sm">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary-hover font-medium text-sm transition-colors"
                  >
                    View Details
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors"
                  >
                    <Github className="w-3 h-3" />
                    Code
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Navigation Hint */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 text-gray-500 text-sm">
            <span>More projects coming soon</span>
            <div className="w-8 h-1 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
} 