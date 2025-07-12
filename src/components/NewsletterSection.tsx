'use client';

import { MessageSquare, Mail, ExternalLink } from 'lucide-react';
import { useState, useEffect } from 'react';

interface NewsletterData {
  subscribers: number;
  totalArticles: number;
  articles: Array<{
    title: string;
    description: string;
    date: string;
  }>;
  description: string;
}

export default function NewsletterSection() {
  const [newsletterData, setNewsletterData] = useState<NewsletterData>({
    subscribers: 0,
    totalArticles: 0,
    articles: [],
    description: ''
  });
  const [loading, setLoading] = useState(true);
  const [subscriptionData, setSubscriptionData] = useState({
    email: '',
    name: ''
  });
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [subscriptionStatus, setSubscriptionStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  useEffect(() => {
    const fetchNewsletterData = async () => {
      try {
        // Fetch RSS feed from Substack
        const response = await fetch('/api/newsletter-data');
        if (response.ok) {
          const data = await response.json();
          setNewsletterData(data);
        } else {
          // Fallback data if API fails
          setNewsletterData({
            subscribers: 150,
            totalArticles: 0,
            articles: [
              {
                title: "Getting Started with Jetpack Compose",
                description: "A beginner's guide to modern Android UI development",
                date: "2024-12-15"
              },
              {
                title: "Android Interview Preparation",
                description: "Essential topics and strategies for mobile engineering interviews",
                date: "2024-12-08"
              },
              {
                title: "MVVM Architecture in Android",
                description: "Building maintainable apps with clean architecture",
                date: "2024-12-01"
              }
            ],
            description: "Your weekly source for actionable insights, expert tips, and career strategies for Android engineers."
          });
        }
      } catch (error) {
        console.error('Error fetching newsletter data:', error);
        // Fallback data
        setNewsletterData({
          subscribers: 25,
          totalArticles: 0,
          articles: [
            {
              title: "KotlinConf 2025: Recap - Speaker Edition",
              description: "My first speaking engagement at the biggest Kotlin conference in the world",
              date: "2025-05-29"
            },
            {
              title: "The First Dev on the Rise Was Kind of a Mess. I'm Still Glad I Did It.",
              description: "Hosting my first-ever podcast session on Google Developer Community Discord",
              date: "2025-05-17"
            },
            {
              title: "The Importance of Accessibility: KotlinConf Edition",
              description: "Building inclusive Jetpack Compose apps and leveraging accessibility tools",
              date: "2025-05-12"
            },
            {
              title: "Instance Wars: When Activities Multiply and Tasks Collide",
              description: "Understanding instances, tasks, activities, and the back stack in Android",
              date: "2025-05-05"
            },
            {
              title: "LaunchModes like your Mode of Transportation",
              description: "Working with launch modes, the android manifest, and instances of activities",
              date: "2025-04-22"
            }
          ],
          description: "Your weekly source for actionable insights, expert tips, and career strategies for Android engineers. Real experiences, real lessons, real growth."
        });
      } finally {
        setLoading(false);
      }
    };

    fetchNewsletterData();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSubscriptionData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribing(true);
    setSubscriptionStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/newsletter-subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: subscriptionData.email }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubscriptionStatus({
          type: 'success',
          message: 'Redirecting to Substack...'
        });
        
        // Redirect to Substack subscription page
        setTimeout(() => {
          window.open(data.redirectUrl, '_blank');
        }, 1000);
        
        setSubscriptionData({ email: '', name: '' });
      } else {
        setSubscriptionStatus({
          type: 'error',
          message: data.error || 'Failed to process subscription. Please try again.'
        });
      }
    } catch (error) {
      setSubscriptionStatus({
        type: 'error',
        message: 'Network error. Please check your connection and try again.'
      });
    } finally {
      setIsSubscribing(false);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-white to-purple-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Vanessa On Mobile</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {loading ? "Loading..." : newsletterData.description}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Newsletter Info */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-purple-100">
                <h4 className="font-semibold text-gray-900 mb-4">Recent Publications</h4>
                <div className="space-y-3">
                  {loading ? (
                    <div className="space-y-3">
                      <div className="p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg animate-pulse">
                        <div className="h-4 bg-gray-200 rounded mb-2"></div>
                        <div className="h-3 bg-gray-200 rounded"></div>
                      </div>
                      <div className="p-3 bg-gradient-to-r from-pink-50 to-orange-50 rounded-lg animate-pulse">
                        <div className="h-4 bg-gray-200 rounded mb-2"></div>
                        <div className="h-3 bg-gray-200 rounded"></div>
                      </div>
                      <div className="p-3 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg animate-pulse">
                        <div className="h-4 bg-gray-200 rounded mb-2"></div>
                        <div className="h-3 bg-gray-200 rounded"></div>
                      </div>
                    </div>
                  ) : (
                    newsletterData.articles.slice(0, 3).map((article, index) => (
                      <div 
                        key={index}
                        className={`p-3 rounded-lg ${
                          index === 0 ? 'bg-gradient-to-r from-purple-50 to-pink-50' :
                          index === 1 ? 'bg-gradient-to-r from-pink-50 to-orange-50' :
                          'bg-gradient-to-r from-orange-50 to-yellow-50'
                        }`}
                      >
                        <div className="font-medium text-sm text-gray-900">{article.title}</div>
                        <div className="text-xs text-gray-600">{article.description}</div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>

            {/* Newsletter Embed */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-purple-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Subscribe to Newsletter</h3>
                <p className="text-gray-600 mb-6">
                  Stay updated with the latest insights, tips, and strategies for Android development and mobile engineering careers.
                </p>
                
                {/* Newsletter Embed Form */}
                <form onSubmit={handleSubscribe} className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={subscriptionData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name (Optional)
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={subscriptionData.name}
                      onChange={handleInputChange}
                      placeholder="Your Name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Status Message */}
                  {subscriptionStatus.type && (
                    <div className={`p-3 rounded-xl text-sm ${
                      subscriptionStatus.type === 'success' 
                        ? 'bg-green-50 text-green-700 border border-green-200' 
                        : 'bg-red-50 text-red-700 border border-red-200'
                    }`}>
                      {subscriptionStatus.message}
                    </div>
                  )}

                  <button 
                    type="submit"
                    disabled={isSubscribing}
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 disabled:from-gray-400 disabled:to-gray-500 text-white py-3 px-6 rounded-xl font-medium hover:from-purple-600 hover:to-pink-600 transition-all flex items-center justify-center gap-2"
                  >
                    {isSubscribing ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Redirecting...
                      </>
                    ) : (
                      <>
                        <Mail className="w-5 h-5" />
                        Subscribe to Newsletter
                      </>
                    )}
                  </button>
                </form>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-xs text-gray-500 text-center">
                    By subscribing, you agree to receive email updates. You can unsubscribe at any time.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Centered Stats and Link */}
          <div className="mt-12 flex flex-col items-center space-y-6">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100 max-w-md">
              <h4 className="font-semibold text-gray-900 mb-3 text-center">Newsletter Stats</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">
                    {loading ? "..." : newsletterData.subscribers}
                  </div>
                  <div className="text-xs text-gray-600">Subscribers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-pink-600">
                    {loading ? "..." : newsletterData.totalArticles}
                  </div>
                  <div className="text-xs text-gray-600">Newsletters Published</div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a
                href="https://vanessaonmobile.substack.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                View All Articles on Substack
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 