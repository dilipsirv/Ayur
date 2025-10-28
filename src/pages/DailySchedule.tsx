import { ArrowLeft, Clock, Sunrise, Sun, Sunset, Moon, Sparkles } from 'lucide-react';

export default function DailySchedule() {
  const prakritiType = 'Vata';

  const schedules = {
    Vata: {
      color: 'from-blue-500 to-cyan-500',
      schedule: [
        { time: '6:00 AM', activity: 'Wake Up', icon: Sunrise, type: 'morning' },
        { time: '6:15 AM', activity: 'Meditation & Breathing', icon: Sparkles, type: 'morning' },
        { time: '7:00 AM', activity: 'Gentle Yoga or Walking', icon: Clock, type: 'morning' },
        { time: '8:00 AM', activity: 'Warm Breakfast', icon: Sun, type: 'morning' },
        { time: '9:00 AM', activity: 'Work/Study Time', icon: Clock, type: 'day' },
        { time: '1:00 PM', activity: 'Nourishing Lunch', icon: Sun, type: 'day' },
        { time: '1:30 PM', activity: 'Short Rest', icon: Clock, type: 'day' },
        { time: '7:00 PM', activity: 'Light Dinner', icon: Sunset, type: 'evening' },
        { time: '8:00 PM', activity: 'Relaxing Activities', icon: Moon, type: 'evening' },
        { time: '10:00 PM', activity: 'Bedtime', icon: Moon, type: 'evening' }
      ],
      tips: ['Maintain regular timing', 'Avoid overexertion', 'Include warming activities', 'Create calming environment']
    },
    Pitta: {
      color: 'from-orange-500 to-red-500',
      schedule: [
        { time: '5:30 AM', activity: 'Wake Up', icon: Sunrise, type: 'morning' },
        { time: '5:45 AM', activity: 'Cooling Meditation', icon: Sparkles, type: 'morning' },
        { time: '6:30 AM', activity: 'Swimming or Moderate Exercise', icon: Clock, type: 'morning' },
        { time: '8:00 AM', activity: 'Fresh Breakfast', icon: Sun, type: 'morning' },
        { time: '9:00 AM', activity: 'Productive Work Time', icon: Clock, type: 'day' },
        { time: '12:30 PM', activity: 'Main Meal (Lunch)', icon: Sun, type: 'day' },
        { time: '1:00 PM', activity: 'Brief Rest', icon: Clock, type: 'day' },
        { time: '7:30 PM', activity: 'Light Dinner', icon: Sunset, type: 'evening' },
        { time: '8:30 PM', activity: 'Cool Down Activities', icon: Moon, type: 'evening' },
        { time: '10:30 PM', activity: 'Sleep Time', icon: Moon, type: 'evening' }
      ],
      tips: ['Avoid midday heat', 'Include cooling activities', 'Never skip meals', 'Moderate intensity workouts']
    },
    Kapha: {
      color: 'from-emerald-500 to-green-500',
      schedule: [
        { time: '5:00 AM', activity: 'Early Wake Up', icon: Sunrise, type: 'morning' },
        { time: '5:15 AM', activity: 'Energizing Meditation', icon: Sparkles, type: 'morning' },
        { time: '6:00 AM', activity: 'Vigorous Exercise', icon: Clock, type: 'morning' },
        { time: '8:30 AM', activity: 'Light Breakfast', icon: Sun, type: 'morning' },
        { time: '9:00 AM', activity: 'Active Work Period', icon: Clock, type: 'day' },
        { time: '1:00 PM', activity: 'Main Meal (Lunch)', icon: Sun, type: 'day' },
        { time: '2:00 PM', activity: 'Continued Activity', icon: Clock, type: 'day' },
        { time: '6:30 PM', activity: 'Very Light Dinner', icon: Sunset, type: 'evening' },
        { time: '8:00 PM', activity: 'Stimulating Activities', icon: Moon, type: 'evening' },
        { time: '10:00 PM', activity: 'Bedtime', icon: Moon, type: 'evening' }
      ],
      tips: ['Early rising essential', 'Vigorous morning exercise', 'Light dinner', 'Stay active throughout day']
    }
  };

  const data = schedules[prakritiType as keyof typeof schedules];

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
            Your Daily Schedule
          </h1>
          <p className="text-xl text-gray-600">
            Optimal routine for {prakritiType} constitution
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          <div className={`relative bg-gradient-to-br ${data.color} rounded-3xl p-8 md:p-12 text-white overflow-hidden`}>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-8 h-8" />
                <h2 className="text-3xl font-bold">{prakritiType} Daily Routine</h2>
              </div>
              <p className="text-lg opacity-90">
                Follow this schedule to maintain optimal balance and energy throughout your day
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              {data.schedule.map((item, i) => {
                const Icon = item.icon;
                const bgColors = {
                  morning: 'bg-amber-50 border-amber-200',
                  day: 'bg-orange-50 border-orange-200',
                  evening: 'bg-indigo-50 border-indigo-200'
                };
                const iconColors = {
                  morning: 'bg-amber-500',
                  day: 'bg-orange-500',
                  evening: 'bg-indigo-500'
                };

                return (
                  <div
                    key={i}
                    className={`flex items-center gap-4 p-6 rounded-2xl border-2 ${bgColors[item.type as keyof typeof bgColors]} hover:shadow-lg transition-all`}
                  >
                    <div className={`p-3 ${iconColors[item.type as keyof typeof iconColors]} rounded-xl`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-gray-900 text-lg">
                        {item.activity}
                      </div>
                      <div className="text-sm text-gray-600">
                        {item.time}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 sticky top-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Sparkles className="w-6 h-6 text-emerald-500" />
                  Tips for {prakritiType}
                </h3>
                <ul className="space-y-4">
                  {data.tips.map((tip, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2 flex-shrink-0" />
                      <span className="text-gray-700 leading-relaxed">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-amber-50 rounded-2xl p-6 border-2 border-amber-200">
                <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="text-xl">💡</span>
                  Customization
                </h4>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Adjust timing based on your lifestyle and commitments. The key is maintaining consistency and balance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}