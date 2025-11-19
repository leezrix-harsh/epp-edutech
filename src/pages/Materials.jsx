import { useState } from 'react';
import { subjects } from '../data/subjects';
import SubjectCard from '../components/SubjectCard';

const Materials = () => {
  const [selectedSubject, setSelectedSubject] = useState(null);

  const handleStartLearning = (subject) => {
    setSelectedSubject(subject);
    // In a real app, you would navigate to the subject's learning page
    console.log(`Starting to learn ${subject.name}`);
  };

  return (
    <div className="space-y-12">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Learning Materials</h2>
        <p className="text-xl text-gray-600">
          Comprehensive study materials designed for high school students
        </p>
      </div>

      {/* Subject Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {subjects.map((subject, index) => (
          <SubjectCard 
            key={index} 
            subject={subject} 
            delay={index * 80}
            onStartLearning={() => handleStartLearning(subject)} 
          />
        ))}
      </div>

      {/* Selected Subject Materials */}
      <div className="bg-white rounded-2xl p-8 shadow-lg">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-2xl font-bold text-gray-900">
              {selectedSubject ? `${selectedSubject.name} Materials` : 'Choose a subject to view materials'}
            </h3>
            <p className="text-gray-600 mt-1">
              {selectedSubject
                ? 'Deep-dive into curated lessons, videos, and practice tailored for this subject.'
                : 'Click “Start Learning” on any subject card to load detailed materials here.'}
            </p>
          </div>
          {selectedSubject && (
            <button
              className="self-start md:self-auto px-4 py-2 text-sm font-semibold text-indigo-600 border border-indigo-100 rounded-xl hover:bg-indigo-50 transition"
              onClick={() => setSelectedSubject(null)}
            >
              Clear selection
            </button>
          )}
        </div>

        {selectedSubject ? (
          <div className="mt-6 space-y-10">
            <div className="grid md:grid-cols-2 gap-6">
              {selectedSubject.materials?.map((material, index) => (
                <div
                  key={`${selectedSubject.name}-${material.title}-${index}`}
                  className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow opacity-0 animate-fade-in-up"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold text-lg text-gray-900">{material.title}</h4>
                    <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-2 py-1 rounded-full">{material.type}</span>
                  </div>
                  <p className="text-gray-600 mb-3">{material.description}</p>
                  {material.duration && (
                    <p className="text-sm text-gray-400">Duration: {material.duration}</p>
                  )}
                  <button className="mt-4 text-indigo-600 font-semibold hover:underline">Start {material.type} →</button>
                </div>
              ))}
            </div>

            {selectedSubject.extendedMaterials?.length > 0 && (
              <div className="border border-indigo-50 rounded-2xl p-6 bg-indigo-50/40">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                  <div>
                    <p className="text-sm font-semibold text-indigo-600 tracking-wide uppercase">Keep the momentum</p>
                    <h4 className="text-2xl font-bold text-gray-900">Additional {selectedSubject.name} materials</h4>
                    <p className="text-gray-600">Unlocked after hitting “Start Learning” so you can go deeper with curated follow-ups.</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {selectedSubject.extendedMaterials.map((material, index) => (
                    <div
                      key={`${selectedSubject.name}-extended-${material.title}-${index}`}
                      className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:border-indigo-200 transition-opacity opacity-0 animate-fade-in-up"
                      style={{ animationDelay: `${index * 90}ms` }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <p className="text-base font-semibold text-gray-900">{material.title}</p>
                          <p className="text-sm text-gray-500">{material.description}</p>
                        </div>
                        <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-2 py-1 rounded-full">{material.type}</span>
                      </div>
                      {material.duration && (
                        <p className="text-xs text-gray-400">Duration: {material.duration}</p>
                      )}
                      <button className="mt-3 text-sm font-semibold text-indigo-600 hover:underline">Start {material.type} →</button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="mt-6 border border-dashed border-gray-200 rounded-xl p-8 text-center">
            <p className="text-gray-500">Select a subject from the grid above to preview its learning materials.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Materials;
