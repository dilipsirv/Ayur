import { ArrowLeft, Coffee, Sun, Moon, Apple, CheckCircle, XCircle } from 'lucide-react';

export default function DietChart() {
  const prakritiType = 'Vata'; // This would come from database

  const dietRecommendations = {
    Vata: {
      breakfast: 'Warm oatmeal with nuts and honey, herbal tea with ginger',
      lunch: 'Rice with cooked vegetables, dal, and ghee',
      dinner: 'Soup with root vegetables, whole grain bread',
      snacks: 'Dates, almonds, warm milk with spices',
      characteristics: ['Warm foods', 'Cooked meals', 'Regular timing', 'Ghee and oils'],
      avoid: ['Cold foods', 'Raw vegetables', 'Irregular meals', 'Caffeine excess'],
      color: 'from-blue-500 to-cyan-500'
    },
    Pitta: {
      breakfast: 'Fresh fruits, coconut water, cooling cereals',
      lunch: 'Quinoa salad with cucumber, leafy greens, coconut oil',
      dinner: 'Steamed vegetables with rice, cooling herbs',
      snacks: 'Sweet fruits, coconut, rose water drinks',
      characteristics: ['Cool foods', 'Sweet tastes', 'Fresh ingredients', 'Coconut oil'],
      avoid: ['Spicy foods', 'Sour fruits', 'Hot spices', 'Fried foods'],
      color: 'from-orange-500 to-red-500'
    },
    Kapha: {
      breakfast: 'Light fruits, herbal teas, honey (small amount)',
      lunch: 'Spiced vegetables, legumes, small portion grains',
      dinner: 'Light soup, steamed vegetables with warming spices',
      snacks: 'Spiced tea, small portion of nuts',
      characteristics: ['Light foods', 'Warming spices', 'Less oil', 'Smaller portions'],
      avoid: ['Heavy foods', 'Dairy excess', 'Sweet foods', 'Cold drinks'],
      color: 'from-emerald-500 to-green-500'
    }
  };

  const diet = dietRecommendations[prakritiType as keyof typeof dietRecommendations];

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
            Your Personalized Diet Chart
          </h1>
          <p className="text-xl text-gray-600">
            Nutrition recommendations for {prakritiType} constitution
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          <div className={`relative bg-gradient-to-br ${diet.color} rounded-3xl p-8 md:p-12 text-white overflow-hidden`}>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <Apple className="w-8 h-8" />
                <h2 className="text-3xl font-bold">Your Constitution: {prakritiType}</h2>
              </div>
              <p className="text-lg opacity-90">
                Follow these dietary guidelines to maintain balance and optimal health
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-amber-100 rounded-xl">
                    <Coffee className="w-6 h-6 text-amber-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Breakfast</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {diet.breakfast}
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-orange-100 rounded-xl">
                    <Sun className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Lunch</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {diet.lunch}
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-indigo-100 rounded-xl">
                    <Moon className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Dinner</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {diet.dinner}
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-pink-100 rounded-xl">
                    <Apple className="w-6 h-6 text-pink-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Snacks</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {diet.snacks}
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <CheckCircle className="w-7 h-7 text-emerald-500" />
                  <h3 className="text-2xl font-bold text-gray-900">Recommended</h3>
                </div>
                <div className="space-y-3">
                  {diet.characteristics.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-emerald-50 rounded-xl">
                      <div className="w-2 h-2 rounded-full bg-emerald-500" />
                      <span className="text-gray-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <XCircle className="w-7 h-7 text-red-500" />
                  <h3 className="text-2xl font-bold text-gray-900">Avoid</h3>
                </div>
                <div className="space-y-3">
                  {diet.avoid.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-red-50 rounded-xl">
                      <div className="w-2 h-2 rounded-full bg-red-500" />
                      <span className="text-gray-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-amber-50 rounded-2xl p-8 border-2 border-amber-200">
                <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="text-2xl">⚠️</span>
                  Important Note
                </h4>
                <p className="text-sm text-gray-700 leading-relaxed">
                  These are general guidelines based on Ayurvedic principles. Always consult with a qualified healthcare provider for personalized advice, especially if you have specific health conditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}