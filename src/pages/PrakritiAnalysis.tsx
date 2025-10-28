import { useState } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle, Wind, Flame, Mountain } from 'lucide-react';

const questions = [
  {
    id: 1,
    question: "What is your body build?",
    options: [
      { value: "vata", label: "Thin, light frame", type: "Vata", icon: Wind },
      { value: "pitta", label: "Medium, muscular build", type: "Pitta", icon: Flame },
      { value: "kapha", label: "Heavy, broad frame", type: "Kapha", icon: Mountain }
    ]
  },
  {
    id: 2,
    question: "How is your skin texture?",
    options: [
      { value: "vata", label: "Dry, rough, cool", type: "Vata", icon: Wind },
      { value: "pitta", label: "Warm, oily, soft", type: "Pitta", icon: Flame },
      { value: "kapha", label: "Thick, moist, cool", type: "Kapha", icon: Mountain }
    ]
  },
  {
    id: 3,
    question: "How is your appetite?",
    options: [
      { value: "vata", label: "Variable, irregular", type: "Vata", icon: Wind },
      { value: "pitta", label: "Strong, regular", type: "Pitta", icon: Flame },
      { value: "kapha", label: "Slow, steady", type: "Kapha", icon: Mountain }
    ]
  },
  {
    id: 4,
    question: "How do you handle stress?",
    options: [
      { value: "vata", label: "Get anxious easily", type: "Vata", icon: Wind },
      { value: "pitta", label: "Get irritated quickly", type: "Pitta", icon: Flame },
      { value: "kapha", label: "Stay calm and composed", type: "Kapha", icon: Mountain }
    ]
  },
  {
    id: 5,
    question: "What is your sleep pattern?",
    options: [
      { value: "vata", label: "Light, restless sleep", type: "Vata", icon: Wind },
      { value: "pitta", label: "Moderate, sound sleep", type: "Pitta", icon: Flame },
      { value: "kapha", label: "Deep, heavy sleep", type: "Kapha", icon: Mountain }
    ]
  }
];

export default function PrakritiAnalysis() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [result, setResult] = useState<string | null>(null);

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const handleAnswer = (value: string) => {
    setAnswers(prev => ({ ...prev, [currentQuestion]: value }));
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      calculateResult();
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const calculateResult = () => {
    const counts = { vata: 0, pitta: 0, kapha: 0 };
    Object.values(answers).forEach(answer => {
      counts[answer as keyof typeof counts]++;
    });
    const dominant = Object.entries(counts).reduce((a, b) => 
      counts[a[0] as keyof typeof counts] > counts[b[0] as keyof typeof counts] ? a : b
    )[0];
    setResult(dominant.charAt(0).toUpperCase() + dominant.slice(1));
  };

  const restartAnalysis = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setResult(null);
  };

  if (result) {
    const doshaColors = {
      Vata: 'from-blue-500 to-cyan-500',
      Pitta: 'from-orange-500 to-red-500',
      Kapha: 'from-emerald-500 to-green-500'
    };

    const doshaInfo = {
      Vata: {
        elements: 'Air & Space',
        traits: ['Creative and energetic', 'Quick-thinking and flexible', 'Light sleeper', 'Variable appetite'],
        tips: ['Maintain regular routines', 'Eat warm, grounding foods', 'Practice calming activities', 'Get adequate rest']
      },
      Pitta: {
        elements: 'Fire & Water',
        traits: ['Sharp intellect', 'Strong digestion', 'Natural leadership', 'Goal-oriented'],
        tips: ['Avoid excessive heat', 'Eat cooling foods', 'Practice patience', 'Stay hydrated']
      },
      Kapha: {
        elements: 'Earth & Water',
        traits: ['Calm and stable', 'Strong immunity', 'Patient and nurturing', 'Deep sleep'],
        tips: ['Stay physically active', 'Eat light, warming foods', 'Embrace variety', 'Wake up early']
      }
    };

    const info = doshaInfo[result as keyof typeof doshaInfo];

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

          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="animate-fade-in">
              <CheckCircle className="w-20 h-20 text-emerald-500 mx-auto mb-6" />
              <h1 className="text-5xl font-bold text-gray-900 mb-4">
                Your Prakriti Type
              </h1>
              <div className={`inline-block text-6xl font-bold bg-gradient-to-r ${doshaColors[result as keyof typeof doshaColors]} bg-clip-text text-transparent mb-6`}>
                {result}
              </div>
              <p className="text-xl text-gray-600">
                {info.elements}
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100 text-left">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Characteristics</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {info.traits.map((trait, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className={`mt-1 p-2 rounded-lg bg-gradient-to-br ${doshaColors[result as keyof typeof doshaColors]}`}>
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-700">{trait}</span>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Balance Tips</h3>
              <ul className="space-y-3">
                {info.tips.map((tip, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span className="text-gray-700">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={restartAnalysis}
                className="px-8 py-4 bg-white border-2 border-gray-200 text-gray-700 rounded-xl font-semibold hover:border-emerald-500 transition-all"
              >
                Take Again
              </button>
              <button
                onClick={() => window.location.href = '/dashboard'}
                className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white rounded-xl font-semibold hover:shadow-xl transition-all"
              >
                Back to Dashboard
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const currentQ = questions[currentQuestion];

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

        <div className="max-w-3xl mx-auto">
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Prakriti Analysis
            </h1>
            <p className="text-xl text-gray-600">
              Discover your unique Ayurvedic constitution
            </p>
          </div>

          <div className="mb-12">
            <div className="flex justify-between text-sm text-gray-600 mb-3">
              <span>Question {currentQuestion + 1} of {questions.length}</span>
              <span>{Math.round(progress)}% Complete</span>
            </div>
            <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              {currentQ.question}
            </h2>

            <div className="space-y-4">
              {currentQ.options.map((option) => {
                const Icon = option.icon;
                const isSelected = answers[currentQuestion] === option.value;
                
                return (
                  <button
                    key={option.value}
                    onClick={() => handleAnswer(option.value)}
                    className={`w-full p-6 rounded-2xl border-2 transition-all duration-300 text-left ${
                      isSelected 
                        ? 'border-emerald-500 bg-emerald-50' 
                        : 'border-gray-200 hover:border-emerald-300 hover:bg-emerald-50/50'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-xl ${isSelected ? 'bg-emerald-500' : 'bg-gray-100'}`}>
                        <Icon className={`w-6 h-6 ${isSelected ? 'text-white' : 'text-gray-600'}`} />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900 text-lg mb-1">
                          {option.label}
                        </div>
                        <div className="text-sm text-gray-600">
                          {option.type} characteristic
                        </div>
                      </div>
                      {isSelected && (
                        <CheckCircle className="w-6 h-6 text-emerald-500" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex justify-between">
            <button
              onClick={prevQuestion}
              disabled={currentQuestion === 0}
              className="px-8 py-4 bg-white border-2 border-gray-200 text-gray-700 rounded-xl font-semibold hover:border-emerald-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              <ArrowLeft className="w-5 h-5" />
              Previous
            </button>
            
            <button
              onClick={nextQuestion}
              disabled={!answers[currentQuestion]}
              className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white rounded-xl font-semibold hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {currentQuestion === questions.length - 1 ? 'Get Results' : 'Next'}
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}