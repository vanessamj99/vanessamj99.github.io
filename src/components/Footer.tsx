'use client';

import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-green-500 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">VJ</span>
            </div>
            <div>
              <h3 className="font-bold text-lg">Vanessa Johnson</h3>
              <p className="text-gray-400 text-sm">Android Engineer</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="mailto:vanessa.johnson@example.com"
              className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-primary transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/vanessamj99"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-blue-600 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/vanessamj99"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-gray-700 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <div>
            <h4 className="font-semibold mb-3">Navigation</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#experience" className="hover:text-white transition-colors">Experience</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Projects</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3">Experience</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>The New York Times</li>
              <li>Google Summer of Code</li>
              <li>Zocdoc</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3">Speaking</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>KotlinConf 2025</li>
              <li>GraphQLConf 2025</li>
              <li>TechBash 2025</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3">Projects</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>From Scratch Labs</li>
              <li>GutFeeling</li>
              <li>Gemini Collaboration IDE</li>
              <li>Problems API Integration</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 Vanessa Johnson. All rights reserved.
            </p>
            
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>for Android development</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
