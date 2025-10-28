import { useState } from 'react';
import { ArrowLeft, Plus, Calendar, FileText, Trash2, X } from 'lucide-react';

export default function FollowUps() {
  const [showForm, setShowForm] = useState(false);
  const [followUps] = useState([
    {
      id: '1',
      reminder_date: '2025-11-15',
      feedback: 'Feeling more energetic after following the Vata diet plan. Sleep quality has improved significantly.',
      progress_notes: 'Following morning yoga routine consistently. Reduced anxiety levels.',
      created_at: '2025-10-28'
    },
    {
      id: '2',
      reminder_date: '2025-11-01',
      feedback: 'Digestion has improved with warm foods. Still working on maintaining regular meal times.',
      progress_notes: 'Added more warming spices to diet. Practicing meditation daily.',
      created_at: '2025-10-20'
    }
  ]);
  const [formData, setFormData] = useState({
    reminder_date: '',
    feedback: '',
    progress_notes: ''
  });

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
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

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
              Follow-ups & Progress
            </h1>
            <p className="text-xl text-gray-600">
              Track your wellness journey and set reminders
            </p>
          </div>
          <button
            onClick={() => setShowForm(true)}
            className="px-6 py-3 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white rounded-xl font-semibold hover:shadow-xl transition-all flex items-center gap-2"
          >
            <Plus className="w-5 h-5" />
            Add Follow-up
          </button>
        </div>

        {showForm && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold text-gray-900">Add New Follow-up</h2>
                <button
                  onClick={() => setShowForm(false)}
                  className="p-2 hover:bg-gray-100 rounded-xl transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Reminder Date
                  </label>
                  <input
                    type="date"
                    value={formData.reminder_date}
                    onChange={(e) => setFormData({...formData, reminder_date: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Feedback & Observations
                  </label>
                  <textarea
                    value={formData.feedback}
                    onChange={(e) => setFormData({...formData, feedback: e.target.value})}
                    placeholder="How are you feeling? Any changes in energy, sleep, digestion, etc.?"
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors resize-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Progress Notes
                  </label>
                  <textarea
                    value={formData.progress_notes}
                    onChange={(e) => setFormData({...formData, progress_notes: e.target.value})}
                    placeholder="What practices are you following? Any challenges or successes?"
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors resize-none"
                  />
                </div>

                <div className="flex gap-3">
                  <button
                    type="submit"
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white rounded-xl font-semibold hover:shadow-xl transition-all"
                  >
                    Save Follow-up
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        <div className="max-w-4xl mx-auto space-y-6">
          {followUps.length === 0 ? (
            <div className="bg-white rounded-3xl p-12 text-center shadow-xl border border-gray-100">
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-10 h-10 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                No Follow-ups Yet
              </h3>
              <p className="text-gray-600 mb-8 max-w-md mx-auto">
                Start tracking your wellness journey by adding your first follow-up. Record observations, progress, and set reminders.
              </p>
              <button
                onClick={() => setShowForm(true)}
                className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white rounded-xl font-semibold hover:shadow-xl transition-all inline-flex items-center gap-2"
              >
                <Plus className="w-5 h-5" />
                Add Your First Follow-up
              </button>
            </div>
          ) : (
            followUps.map((followUp) => (
              <div key={followUp.id} className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-emerald-100 rounded-lg">
                        <Calendar className="w-5 h-5 text-emerald-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {formatDate(followUp.reminder_date)}
                      </h3>
                    </div>
                    <p className="text-sm text-gray-500">
                      Added on {formatDate(followUp.created_at)}
                    </p>
                  </div>
                  <button className="p-2 hover:bg-red-50 rounded-xl transition-colors text-red-500">
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-6">
                  {followUp.feedback && (
                    <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
                      <div className="flex items-center gap-2 mb-3">
                        <FileText className="w-5 h-5 text-blue-600" />
                        <h4 className="font-bold text-gray-900">Feedback & Observations</h4>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        {followUp.feedback}
                      </p>
                    </div>
                  )}

                  {followUp.progress_notes && (
                    <div className="bg-purple-50 rounded-2xl p-6 border border-purple-100">
                      <div className="flex items-center gap-2 mb-3">
                        <FileText className="w-5 h-5 text-purple-600" />
                        <h4 className="font-bold text-gray-900">Progress Notes</h4>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        {followUp.progress_notes}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}