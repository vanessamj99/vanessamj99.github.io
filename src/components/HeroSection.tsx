'use client';

import { ArrowRight, Github, Mail, MessageSquare, Star, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function HeroSection() {
  const [currentTime, setCurrentTime] = useState('');
  // Newsletter dynamic state
  const [newsletter, setNewsletter] = useState({
    description: "Loading newsletter data...",
    articles: [
      { title: "Loading..." },
      { title: "Loading..." },
      { title: "Loading..." }
    ],
    loading: true
  });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      setCurrentTime(`${hours}:${minutes}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    fetch('/api/newsletter-data')
      .then(res => res.json())
      .then(data => {
        setNewsletter({
          description: data.description || "Vanessa On Mobile: Your weekly source for actionable insights, expert tips, and career strategies for Android engineers. Also, I'm building a side project that's in iOS for gut health. Come along for the ride!",
          articles: data.articles && data.articles.length > 0 ? data.articles.slice(0, 3) : [
            { title: "Loading recent publications..." },
            { title: "Loading recent publications..." },
            { title: "Loading recent publications..." }
          ],
          loading: false
        });
      })
      .catch(() => setNewsletter(n => ({ 
        ...n, 
        description: "Vanessa On Mobile: Your weekly source for actionable insights, expert tips, and career strategies for Android engineers. Also, I'm building a side project that's in iOS for gut health. Come along for the ride!",
        loading: false 
      })));
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-pink-500 animate-pulse"></div>
      </div>
      
      <div className="container mx-auto px-2 sm:px-4 py-10 sm:py-20 relative z-10">
        <div className="flex justify-center">
          {/* Android Device Frame */}
          <div className="relative">
            {/* Phone Frame */}
            <div className="relative w-full max-w-[400px] h-[80vh] max-h-[700px] bg-gradient-to-br from-gray-900 to-gray-800 rounded-[3rem] p-2 shadow-2xl border-4 border-purple-500/30">
              {/* Screen */}
              <div className="w-full h-full bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-[2.5rem] overflow-hidden relative">
                {/* Status Bar */}
                <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-r from-purple-600 to-pink-600 text-white flex items-center justify-between px-6 text-xs font-medium z-20">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                  </div>
                  <div className="font-mono">{currentTime}</div>
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-1.5 bg-white rounded-sm"></div>
                    <div className="w-1 h-1.5 bg-white rounded-sm"></div>
                  </div>
                </div>

                {/* App Content */}
                <div className="pt-8 h-full bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
                  {/* Navigation Bar */}
                  <div className="flex items-center justify-between px-6 py-4 bg-white/90 backdrop-blur-sm border-b border-purple-100">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">V</span>
                    </div>
                    <h1 className="text-lg font-bold text-gray-900">Portfolio</h1>
                    <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-pink-400 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">•••</span>
                    </div>
                  </div>

                  {/* Scrollable Content */}
                  <div className="h-full overflow-y-auto pb-24">
                    <div className="px-6 py-8 space-y-6">
                      {/* Profile Card */}
                      <div className="bg-gradient-to-br from-white to-purple-50 rounded-2xl p-6 shadow-lg border border-purple-100">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-full flex items-center justify-center">
                            <span className="text-white font-bold text-xl">VJ</span>
                          </div>
                          <div>
                            <h2 className="text-xl font-bold text-gray-900">Vanessa Johnson</h2>
                            <p className="text-purple-600 font-medium">Android Engineer</p>
                          </div>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Building mobile experiences at The New York Times. 
                          Passionate about clean code, user experience, and the Android ecosystem.
                        </p>
                      </div>

                      {/* Quick Actions */}
                      <div className="grid grid-cols-2 gap-4">
                        <a
                          href="#contact"
                          className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-xl flex items-center justify-center gap-2 font-medium hover:from-purple-600 hover:to-pink-600 transition-all cursor-pointer shadow-lg"
                        >
                          <Mail className="w-4 h-4" />
                          Contact
                        </a>
                        <a
                          href="https://github.com/vanessamj99"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-gradient-to-r from-orange-400 to-pink-400 text-white p-4 rounded-xl flex items-center justify-center gap-2 font-medium hover:from-orange-500 hover:to-pink-500 transition-all cursor-pointer shadow-lg"
                        >
                          <Github className="w-4 h-4" />
                          GitHub
                        </a>
                      </div>

                      {/* Stats Cards */}
                      <div className="grid grid-cols-3 gap-3">
                        <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl p-3 text-center shadow-sm border border-purple-200">
                          <div className="text-lg font-bold text-purple-800">1+</div>
                          <div className="text-xs text-gray-700">Years Exp</div>
                        </div>
                        <div className="bg-gradient-to-br from-pink-100 to-orange-100 rounded-xl p-3 text-center shadow-sm border border-pink-200">
                          <div className="text-lg font-bold text-pink-800">4</div>
                          <div className="text-xs text-gray-700">Talks</div>
                        </div>
                        <div className="bg-gradient-to-br from-orange-100 to-yellow-100 rounded-xl p-3 text-center shadow-sm border border-orange-200">
                          <div className="text-lg font-bold text-orange-800">3</div>
                          <div className="text-xs text-gray-700">Projects</div>
                        </div>
                      </div>

                      {/* Featured Project */}
                      <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-6 text-white shadow-lg">
                        <div className="flex items-center gap-3 mb-4">
                          <Star className="w-5 h-5 text-yellow-300" />
                          <span className="text-yellow-300 font-medium">Featured Project</span>
                        </div>
                        <h3 className="text-xl font-bold mb-4">
                          Kotlin Code Quality with Problems API
                        </h3>
                        <p className="text-white/90 mb-6 leading-relaxed text-sm">
                          Google Summer of Code 2025 project integrating the new Problems API in detekt and ktlint plugins to improve code quality tooling and provide better developer experience.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-6">
                          <span className="px-3 py-1 bg-white/20 text-white rounded-full text-xs font-medium">Kotlin</span>
                          <span className="px-3 py-1 bg-white/20 text-white rounded-full text-xs font-medium">Gradle</span>
                          <span className="px-3 py-1 bg-white/20 text-white rounded-full text-xs font-medium">Problems API</span>
                          <span className="px-3 py-1 bg-white/20 text-white rounded-full text-xs font-medium">detekt</span>
                          <span className="px-3 py-1 bg-white/20 text-white rounded-full text-xs font-medium">ktlint</span>
                        </div>
                        <a
                          href="https://community.gradle.org/events/gsoc/2025/kotlin-code-quality-with-problems-api/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-white text-purple-600 px-4 py-2 rounded-xl font-medium transition-colors"
                        >
                          View Project
                        </a>
                      </div>

                      {/* Recent Activity */}
                      <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl p-4 shadow-sm border border-blue-100">
                        <h3 className="font-semibold text-gray-900 mb-3">Recent Activity</h3>
                        <div className="space-y-2">
                          <div className="flex items-center gap-3 text-sm">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-gray-600">Spoke at KotlinConf 2025</span>
                          </div>
                          <div className="flex items-center gap-3 text-sm">
                            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                            <span className="text-gray-600">Google Summer of Code 2025</span>
                          </div>
                          <div className="flex items-center gap-3 text-sm">
                            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                            <span className="text-gray-600">Joined The New York Times</span>
                          </div>
                        </div>
                      </div>

                      {/* Current Focus */}
                      <div className="bg-gradient-to-br from-white to-pink-50 rounded-2xl p-4 shadow-sm border border-pink-100">
                        <h3 className="font-semibold text-gray-900 mb-3">Current Focus</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Utilized Jetpack Compose in Kotlin, deeplinking, graphql, retrofit, practiced MVVM, used repositories & use cases throughout my work at the NYT thus far. I contributed to the big release of the friends tab, tech led adding the ConnectionsBot to the app, owned a new subscribe message in the app, and am currently tech leading a new upcoming feature.
                        </p>
                      </div>

                      {/* Skills Section */}
                      <div className="bg-gradient-to-br from-white to-orange-50 rounded-2xl p-4 shadow-sm border border-orange-100">
                        <h3 className="font-semibold text-gray-900 mb-3">Skills</h3>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-xs border border-purple-200">Kotlin</span>
                          <span className="px-3 py-1 bg-gradient-to-r from-pink-100 to-orange-100 text-pink-700 rounded-full text-xs border border-pink-200">Android SDK</span>
                          <span className="px-3 py-1 bg-gradient-to-r from-orange-100 to-yellow-100 text-orange-700 rounded-full text-xs border border-orange-200">Jetpack Compose</span>
                          <span className="px-3 py-1 bg-gradient-to-r from-yellow-100 to-green-100 text-yellow-700 rounded-full text-xs border border-yellow-200">MVVM</span>
                          <span className="px-3 py-1 bg-gradient-to-r from-green-100 to-blue-100 text-green-700 rounded-full text-xs border border-green-200">Firebase</span>
                          <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-xs border border-blue-200">Git</span>
                          <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-green-100 text-blue-700 rounded-full text-xs border border-blue-200">GraphQL</span>
                          <span className="px-3 py-1 bg-gradient-to-r from-green-100 to-blue-100 text-green-700 rounded-full text-xs border border-green-200">Room</span>
                          <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-xs border border-blue-200">Retrofit</span>
                          <span className="px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-xs border border-purple-200">SwiftUI</span>
                        </div>
                      </div>

                      {/* Newsletter Section */}
                      <div className="bg-gradient-to-br from-white to-purple-50 rounded-2xl p-4 shadow-sm border border-purple-100">
                        <div className="flex items-center gap-3 mb-3">
                          <MessageSquare className="w-5 h-5 text-purple-600" />
                          <h3 className="font-semibold text-gray-900">Vanessa On Mobile</h3>
                        </div>
                        <p className="text-gray-600 text-sm mb-4">
                          {newsletter.loading ? 'Loading...' : newsletter.description}
                        </p>
                        <div className="space-y-2 mb-4">
                          <div className="text-xs text-gray-500">Recent Publications:</div>
                          <div className="space-y-1">
                            {newsletter.loading ? (
                              <div className="text-sm text-gray-400">Loading...</div>
                            ) : (
                              newsletter.articles.map((article, idx) => (
                                <div key={idx} className="text-sm text-gray-700">• {article.title}</div>
                              ))
                            )}
                          </div>
                        </div>
                        <a
                          href="https://vanessaonmobile.substack.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium text-sm transition-colors"
                        >
                          Subscribe to Newsletter
                        </a>
                      </div>

                      {/* Interests */}
                      <div className="bg-gradient-to-br from-white to-green-50 rounded-2xl p-4 shadow-sm border border-green-100">
                        <h3 className="font-semibold text-gray-900 mb-3">Interests</h3>
                        <div className="space-y-2 text-sm text-gray-600">
                          <div>• Mobile Development & UX</div>
                          <div>• Open Source Contributions</div>
                          <div>• Conference Speaking</div>
                          <div>• Accessibility in Tech</div>
                          <div>• Newsletter Publishing</div>
                          <div>• Podcast Creation</div>
                        </div>
                      </div>

                      {/* Additional Content for Full Scrolling */}
                      <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl p-4 shadow-sm border border-blue-100">
                        <h3 className="font-semibold text-gray-900 mb-3">More Projects</h3>
                        <div className="space-y-3">
                          <div className="p-3 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-200">
                            <div className="font-medium text-sm text-gray-900">From Scratch Labs</div>
                            <div className="text-xs text-gray-600">An upcoming educational platform</div>
                          </div>
                          <div className="p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-200">
                            <div className="font-medium text-sm text-gray-900">GutFeeling</div>
                            <div className="text-xs text-gray-600">Health tracking app with AI insights</div>
                          </div>
                          <div className="p-3 bg-gradient-to-r from-pink-50 to-orange-50 rounded-lg border border-pink-200">
                            <div className="font-medium text-sm text-gray-900">Gemini Collaboration IDE</div>
                            <div className="text-xs text-gray-600">Real-time collaborative coding platform</div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gradient-to-br from-white to-purple-50 rounded-2xl p-4 shadow-sm border border-purple-100">
                        <h3 className="font-semibold text-gray-900 mb-3">Speaking Highlights</h3>
                        <div className="space-y-2 text-sm text-gray-600">
                          <div>• GraphQLConf 2025 - What if GraphQL Knew Accessibility</div>
                          <div>• TechBash 2025 - Building Inclusive Jetpack Compose Apps</div>
                          <div>• TechBash 2025 - Jetpack Compose Performance</div>
                          <div>• KotlinConf 2025 - Building Inclusive Jetpack Compose Apps ✓</div>
                        </div>
                      </div>

                      <div className="bg-gradient-to-br from-white to-orange-50 rounded-2xl p-4 shadow-sm border border-orange-100">
                        <h3 className="font-semibold text-gray-900 mb-3">Open Source</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Contributing to detekt and ktlint plugins, improving code quality tooling 
                          for the Kotlin ecosystem through Google Summer of Code 2025.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Scroll Indicator */}
                  <div className="absolute bottom-20 right-6 flex flex-col items-center gap-2 animate-bounce z-50">
                    <div className="w-6 h-10 border-2 border-gray-800 rounded-full flex justify-center bg-white shadow-lg">
                      <div className="w-1 h-3 bg-gray-800 rounded-full mt-2 animate-pulse"></div>
                    </div>
                    <div className="text-xs text-gray-800 font-bold bg-white px-2 py-1 rounded-full shadow-lg border border-gray-200">Scroll</div>
                  </div>

                  {/* Bottom Navigation */}
                  <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-purple-200">
                    <div className="flex justify-around py-3">
                      <a href="#home" className="flex flex-col items-center">
                        <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mb-1"></div>
                        <span className="text-xs text-purple-600 font-medium">Home</span>
                      </a>
                      <a href="#experience" className="flex flex-col items-center">
                        <div className="w-6 h-6 bg-gray-300 rounded-full mb-1"></div>
                        <span className="text-xs text-gray-400">Experience</span>
                      </a>
                      <a href="#projects" className="flex flex-col items-center">
                        <div className="w-6 h-6 bg-gray-300 rounded-full mb-1"></div>
                        <span className="text-xs text-gray-400">Projects</span>
                      </a>
                      <a href="#contact" className="flex flex-col items-center">
                        <div className="w-6 h-6 bg-gray-300 rounded-full mb-1"></div>
                        <span className="text-xs text-gray-400">Contact</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Home Button */}
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
              </div>
            </div>

            {/* Floating Action Button */}
            <a
              href="#experience"
              className="absolute -bottom-4 -right-4 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg hover:from-purple-600 hover:to-pink-600 transition-all cursor-pointer"
            >
              <ArrowRight className="w-6 h-6 text-white" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
