import { useState } from 'react';
import { ArrowLeft, User, Save, Shield, Mail, Calendar, UserCircle } from 'lucide-react';

export default function Profile() {
  const [profile, setProfile] = useState({
    name: 'Guest User',
    email: 'guest@ayurwell.com',
    age: 28,
    gender: 'prefer-not-to-say',
    health_history: 'No major health issues. Occasional stress and irregular sleep patterns.'
  });

  const handleSave = () => {
    console.log('Saving profile:', profile);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-amber-50">
      <div className="container mx-auto px-6 py-12">
        <button
          onClick={() => window.location.href = '/dashboard'}
          className="flex items-center gap-2 text-gray-600 hover:text-emerald-600 mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Dashboard
        </button>

        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Your Profile
          </h1>
          <p className="text-xl text-gray-600">
            Manage your personal information and health history
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-blue-100 rounded-xl">
                  <User className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Personal Information</h2>
              </div>

              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={profile.name}
                      onChange={(e) => setProfile({...profile, name: e.target.value})}
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        value={profile.email}
                        disabled
                        className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl bg-gray-50 text-gray-500"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Age
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="number"
                        value={profile.age}
                        onChange={(e) => setProfile({...profile, age: parseInt(e.target.value)})}
                        placeholder="Enter your age"
                        className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Gender
                    </label>
                    <div className="relative">
                      <UserCircle className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <select
                        value={profile.gender}
                        onChange={(e) => setProfile({...profile, gender: e.target.value})}
                        className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors appearance-none bg-white"
                      >
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                        <option value="prefer-not-to-say">Prefer not to say</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-purple-100 rounded-xl">
                  <Shield className="w-6 h-6 text-purple-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Health History</h2>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Medical History & Current Conditions
                </label>
                <textarea
                  value={profile.health_history}
                  onChange={(e) => setProfile({...profile, health_history: e.target.value})}
                  placeholder="Describe any medical conditions, allergies, medications, or health concerns..."
                  rows={8}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors resize-none"
                />
                <p className="text-sm text-gray-500 mt-3">
                  This information helps provide more accurate Ayurveda recommendations
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 sticky top-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h3>
              
              <button
                onClick={handleSave}
                className="w-full px-6 py-4 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white rounded-xl font-semibold hover:shadow-xl transition-all flex items-center justify-center gap-2 mb-4"
              >
                <Save className="w-5 h-5" />
                Save Changes
              </button>

              <div className="pt-6 border-t border-gray-200">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="h-16 w-16 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-400 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                    {profile.name[0]?.toUpperCase() || 'G'}
                  </div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-gray-900 text-lg">{profile.name}</div>
                  <div className="text-sm text-gray-500">{profile.email}</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 border-2 border-blue-100">
              <div className="flex items-center gap-2 mb-4">
                <Shield className="w-6 h-6 text-blue-600" />
                <h4 className="font-bold text-gray-900">Privacy Note</h4>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                Your personal information is securely stored and only used to provide personalized Ayurveda recommendations. We never share your data with third parties.
              </p>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 border-2 border-amber-100">
              <div className="text-2xl mb-3">💡</div>
              <h4 className="font-bold text-gray-900 mb-2">Complete Your Profile</h4>
              <p className="text-sm text-gray-700 leading-relaxed">
                The more information you provide, the better we can tailor recommendations to your unique needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}