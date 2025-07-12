'use client';

import { Calendar, MapPin, Building, ChevronRight } from 'lucide-react';

interface Experience {
  company: string;
  role: string;
  location: string;
  duration: string;
  description: string;
  technologies: string[];
}

const experiences: Experience[] = [
  {
    company: 'The New York Times',
    role: 'Android Engineer',
    location: 'New York, NY',
    duration: 'August 2024 - Present',
    description: 'Utilized Jetpack Compose in Kotlin, deeplinking, graphql, retrofit, practiced MVVM, used repositories & use cases throughout my work at the NYT thus far. I contributed to the big release of the friends tab, tech led adding the ConnectionsBot to the app, owned a new subscribe message in the app, and am currently tech leading a new upcoming feature.',
    technologies: ['Kotlin', 'Jetpack Compose', 'GraphQL', 'Retrofit', 'MVVM', 'Deeplinking', 'Repositories', 'Use Cases']
  },
  {
    company: 'The New York Times',
    role: 'Android Engineering Intern',
    location: 'New York, NY',
    duration: 'Summer 2023',
    description: 'Utilized Jetpack Compose in Kotlin and developed a new UI that would encourage more subscription sign ups in the consumer facing games app based on Figma designs. Implemented a post login/ post registration offer that pulled data from firebase to populate the information on the card to increase the subscription sign ups which is at 100% roll out that improved conversion in the app by 31%.',
    technologies: ['Kotlin', 'Jetpack Compose', 'Firebase', 'Figma', 'UI/UX', 'REST APIs']
  },
  {
    company: 'Zocdoc',
    role: 'Software Engineering Intern',
    location: 'New York, NY',
    duration: 'Summer 2022',
    description: 'Developed and integrated new product features in the existing android mobile application using Kotlin that are were released into production that affected over 200,000 users. Enhanced the Zocdoc application by implementing an act fast banner with XML, fragments, and activities that used a lottie animation to alert the user that the appointments were limited for that current day or the following day.',
    technologies: ['Kotlin', 'Android SDK', 'XML', 'Fragments', 'Activities', 'Lottie', 'Git']
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* App Header */}
        <div className="bg-white rounded-2xl p-6 mb-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-1">
                Experience
              </h2>
              <p className="text-gray-600 text-sm">
                My journey in software engineering
              </p>
            </div>
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center">
              <Building className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        {/* Experience Cards */}
        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-green-500 rounded-xl flex items-center justify-center">
                      <Building className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">
                        {exp.role}
                      </h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                  </div>
                  
                  {/* Meta Info */}
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.duration}</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Description */}
              <p className="text-gray-700 mb-4 leading-relaxed text-sm">
                {exp.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
} 