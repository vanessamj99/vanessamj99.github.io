# Real Android, Real World

A professional educational platform for learning modern Android development. Built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Dark theme with professional UI/UX
- **Course Management**: Structured learning paths with modules and lessons
- **User Authentication**: Sign up, login, and user profiles
- **Progress Tracking**: Monitor your learning journey
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Real-world Curriculum**: Practical Android development skills

## Course Curriculum

### Real Android, Real World
- **Module 0**: Setup for Success
- **Module 1**: Core Android With Confidence
- **Module 2**: Code You Can Be Proud Of
- **Module 3**: Apps That Work for Everyone
- **Module 4**: Real Networking
- **Module 5**: Persistent Data For Users
- **Module 6**: From Dev to Deployed
- **Module 7**: Build Your App (Capstone)

## Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Database**: Prisma with SQLite
- **Authentication**: NextAuth.js
- **Icons**: Lucide React
- **Animations**: Framer Motion

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd RealAndroidRealWorld
```

2. Install dependencies:
```bash
npm install --legacy-peer-deps
```

3. Set up environment variables:
Create a `.env.local` file in the root directory:
```env
DATABASE_URL="file:./dev.db"
NEXTAUTH_SECRET="your-secret-key-here"
NEXTAUTH_URL="http://localhost:3000"
```

4. Set up the database:
```bash
npx prisma generate
npx prisma db push
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── components/          # Reusable UI components
├── pages/              # Next.js pages and API routes
│   ├── api/           # API endpoints
│   └── courses/       # Course pages
├── styles/            # Global styles and Tailwind config
└── hooks/             # Custom React hooks
```

## Key Components

- **Header**: Navigation and authentication
- **HeroSection**: Landing page hero with code preview
- **TrustBar**: Social proof with company logos
- **CourseShowcase**: Course cards with hover effects
- **Footer**: Links and social media

## Authentication

The platform includes user authentication with:
- User registration and login
- Password hashing with bcryptjs
- Session management
- Protected routes

## Database Schema

The application uses Prisma with the following models:
- **User**: User accounts and profiles
- **Course**: Course information and metadata
- **Module**: Course modules and structure
- **Lesson**: Individual lessons within modules
- **Enrollment**: User course enrollments
- **Progress**: Learning progress tracking

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Code Style

- TypeScript for type safety
- Tailwind CSS for styling
- ESLint for code quality
- Prettier for formatting

## Deployment

The application can be deployed to:
- Vercel (recommended)
- Netlify
- Any Node.js hosting platform

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support and questions:
- Create an issue on GitHub
- Contact the development team
- Check the documentation

---

Built with ❤️ for the Android development community
