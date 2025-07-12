export interface Module {
  slug: string;
  title: string;
  description: string;
}

export const modules: Module[] = [
  {
    slug: 'setup-for-success',
    title: 'Setup for Success',
    description: 'Get your environment ready for productive Android development.'
  },
  {
    slug: 'core-android-with-confidence',
    title: 'Core Android With Confidence',
    description: 'Learn the essential components of Android and how to use them.'
  },
  {
    slug: 'code-you-can-be-proud-of',
    title: 'Code You Can Be Proud Of',
    description: 'Write clean, maintainable Android code with best practices.'
  },
  {
    slug: 'apps-that-work-for-everyone',
    title: 'Apps That Work for Everyone',
    description: 'Ensure your apps are accessible and responsive on any device.'
  },
  {
    slug: 'real-networking',
    title: 'Real Networking',
    description: 'Handle API communication and connectivity the right way.'
  },
  {
    slug: 'persistent-data-for-users',
    title: 'Persistent Data For Users',
    description: 'Store and manage data locally for a seamless user experience.'
  },
  {
    slug: 'from-dev-to-deployed',
    title: 'From Dev to Deployed',
    description: 'Prepare your app for release and publish it with confidence.'
  },
  {
    slug: 'build-your-app-capstone',
    title: 'Build Your App (Capstone)',
    description: 'Apply everything you\'ve learned in a final project.'
  }
];

export function getModule(slug: string): Module | undefined {
  return modules.find((m) => m.slug === slug);
}
