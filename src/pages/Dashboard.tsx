import { useState } from 'react';
import { User, Brain, Apple, Clock, Calendar, History, TrendingUp, Sparkles } from 'lucide-react';

export default function Dashboard() {
  const [userName] = useState('Guest');
  const [prakritiType] = useState('Vata'); // This would come from database

  const sections = [
    { 
      title: 'Your Profile', 
      desc: 'Manage personal info and health history', 
      icon: User, 
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      link: '/profile'
    },
    { 
      title: 'Prakriti Analysis', 
      desc: 'Discover your Ayurvedic constitution', 
      icon: Brain, 
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
      link: '/prakriti-analysis'
    },
    { 
      title: 'Diet Chart', 
      desc: 'Personalized nutrition for your dosha', 
      icon: Apple, 
      color: 'from-emerald-500 to-green-500',
      bgColor: 'bg-emerald-50',
      link: '/diet-chart'
    },
    { 
      title: 'Daily Schedule', 
      desc: 'Optimal routine for balance', 
      icon: Clock, 
      color: 'from-amber-500 to-orange-500',
      bgColor: 'bg-amber-50',
      link: '/daily-schedule'
    },
    { 
      title: 'Follow-ups', 
      desc: 'Track progress and set reminders', 
      icon: Calendar, 
      color: 'from-rose-500 to-red-500',
      bgColor: 'bg-rose-50',
      link: '/follow-ups'
    },
    { 
      title: 'History', 
      desc: 'View your wellness journey', 
      icon: History, 
      color: 'from-indigo-500 to-blue-500',
      bgColor: 'bg-indigo-50',
      link: '/history'
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-amber-50">
      <div className="container mx-auto px-6 py-12">
        {/* Welcome Section */}
        <div className="mb-12 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-amber-400/20 rounded-3xl blur-3xl" />
          <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-gray-200 shadow-xl">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-16 w-16 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-400 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                    {userName[0]?.toUpperCase() || 'G'}
                  </div>
                  <div>
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                      Welcome back, {userName}! 🙏
                    </h1>
                    <p className="text-gray-600 mt-1">Your wellness journey continues</p>
                  </div>
                </div>
              </div>
              
              {prakritiType && (
                <div className="bg-gradient-to-br from-emerald-500 to-emerald-400 text-white px-6 py-4 rounded-2xl shadow-lg">
                  <div className="text-sm font-medium opacity-90">Your Prakriti</div>
                  <div className="text-2xl font-bold">{prakritiType}</div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-emerald-100 rounded-xl">
                <TrendingUp className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">12</div>
                <div className="text-sm text-gray-600">Days Active</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-amber-100 rounded-xl">
                <Calendar className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">5</div>
                <div className="text-sm text-gray-600">Follow-ups</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-purple-100 rounded-xl">
                <Sparkles className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">85%</div>
                <div className="text-sm text-gray-600">Balance Score</div>
              </div>
            </div>
          </div>
        </div>

        {/* Section Title */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Your Wellness Hub</h2>
          <p className="text-gray-600">Explore personalized Ayurveda features below</p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((section, i) => (
            <button
              key={i}
              onClick={() => window.location.href = section.link}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-left"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${section.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
              
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${section.color} mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <section.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {section.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-4">
                {section.desc}
              </p>
              
              <div className="flex items-center gap-2 text-emerald-600 font-semibold group-hover:gap-3 transition-all">
                Explore
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </button>
          ))}
        </div>

        {/* Quick Tips */}
        <div className="mt-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">💡 Today's Wellness Tip</h3>
            <p className="text-lg text-amber-50 leading-relaxed">
              For Vata balance: Start your day with warm water and ginger tea. Practice gentle yoga and maintain regular meal times to ground your energy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}