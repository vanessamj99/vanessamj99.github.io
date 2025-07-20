'use client';

import { Calendar, MapPin, ExternalLink, Mic, ChevronRight } from 'lucide-react';

interface Talk {
  title: string;
  conference: string;
  location: string;
  date: string;
  status: 'completed' | 'upcoming';
  link?: string;
  description: string;
}

const talks: Talk[] = [
  {
    title: 'What if GraphQL Knew Accessibility',
    conference: 'GraphQLConf 2025',
    location: 'Amsterdam, The Netherlands',
    date: 'September 8-10, 2025',
    status: 'upcoming',
    description: 'Exploring how GraphQL can be leveraged to build more accessible applications and improve user experience.'
  },
  {
    title: 'Building Inclusive Jetpack Compose Apps: Leveraging Kotlin and the Accessibility Scanner',
    conference: 'TechBash 2025',
    location: 'Poconos, Pennsylvania',
    date: 'November 5-7, 2025',
    status: 'upcoming',
    description: 'Sharing insights on building accessible Android applications using Jetpack Compose and the Accessibility Scanner.'
  },
  {
    title: 'Jetpack Compose Performance: Debugging and Fixing Common Pitfalls',
    conference: 'TechBash 2025',
    location: 'Poconos, Pennsylvania',
    date: 'November 5-7, 2025',
    status: 'upcoming',
    description: 'Deep dive into performance optimization techniques for Jetpack Compose applications and common debugging strategies.'
  },
  {
    title: 'Building Inclusive Jetpack Compose Apps: Leveraging Kotlin and the Accessibility Scanner',
    conference: 'Droidcon Italy 2025',
    location: 'Turin, Italy',
    date: 'November 19-20, 2025',
    status: 'upcoming',
    description: 'Sharing insights on building accessible Android applications using Jetpack Compose and leveraging the Accessibility Scanner for better user experience.'
  },
  {
    title: 'Building Inclusive Jetpack Compose Apps: Leveraging Kotlin and the Accessibility Scanner',
    conference: 'KotlinConf 2025',
    location: 'Copenhagen, Denmark',
    date: 'May 21-23, 2025',
    status: 'completed',
    link: 'https://kotlinconf.com/talks/795897/',
    description: 'Presented on building accessible Android applications using Jetpack Compose and leveraging the Accessibility Scanner for better user experience.'
  }
];

export default function SpeakingSection() {
  return (
    <section id="speaking" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        {/* App Header */}
        <div className="bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl p-6 mb-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-1">
                Speaking
              </h2>
              <p className="text-white/80 text-sm">
                Sharing knowledge at conferences
              </p>
            </div>
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <Mic className="w-6 h-6" />
            </div>
          </div>
        </div>

        {/* Talks List */}
        <div className="space-y-4">
          {talks.map((talk, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                      <Mic className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 line-clamp-2">
                        {talk.title}
                      </h3>
                      <p className="text-primary font-medium">{talk.conference}</p>
                    </div>
                  </div>
                  
                  {/* Meta Info */}
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{talk.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{talk.date}</span>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      talk.status === 'completed' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-orange-100 text-orange-800'
                    }`}>
                      {talk.status === 'completed' ? 'Completed' : 'Upcoming'}
                    </span>
                  </div>
                </div>

              </div>

              {/* Description */}
              <p className="text-gray-700 mb-4 leading-relaxed text-sm">
                {talk.description}
              </p>

              {/* Action Button */}
              {talk.link && (
                <div className="flex justify-end">
                  <a
                    href={talk.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors"
                  >
                    View Details
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-8 bg-gray-50 rounded-2xl p-6 text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Interested in having me speak?
          </h3>
          <p className="text-gray-600 text-sm mb-4">
            I'm always open to new speaking opportunities
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
} 