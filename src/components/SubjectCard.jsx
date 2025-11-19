import { CheckCircle, Play, BookOpenCheck } from 'lucide-react';
import { useState } from 'react';

const SubjectCard = ({ subject, onStartLearning, delay = 0 }) => {
  const [showMaterials, setShowMaterials] = useState(false);

  const toggleMaterials = () => {
    if (!subject.materials?.length) return;
    setShowMaterials((prev) => !prev);
  };

  return (
    <div
      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1 opacity-0 animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-center mb-4">
        <div className={`w-12 h-12 ${subject.color} rounded-full flex items-center justify-center text-white text-xl mr-4`}>
          {subject.icon}
        </div>
        <h3 className="text-xl font-bold text-gray-900">{subject.name}</h3>
      </div>
      <div className="space-y-2">
        {subject.topics.map((topic, topicIndex) => (
          <div key={topicIndex} className="flex items-center space-x-2">
            <CheckCircle className="h-4 w-4 text-green-500" />
            <span className="text-gray-700">{topic}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 space-y-2">
        <button 
          onClick={onStartLearning}
          className="w-full bg-gray-100 text-gray-700 py-2 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center space-x-2"
        >
          <Play className="h-4 w-4" />
          <span>Start Learning</span>
        </button>
        {subject.materials?.length > 0 && (
          <button
            onClick={toggleMaterials}
            className="w-full border border-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2"
          >
            <BookOpenCheck className="h-4 w-4" />
            <span>{showMaterials ? 'Hide Materials' : `Explore ${subject.name}`}</span>
          </button>
        )}
      </div>

      {showMaterials && subject.materials?.length > 0 && (
        <div className="mt-4 space-y-3 border-t border-gray-100 pt-4">
          <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Available Materials</h4>
          <div className="space-y-3 max-h-64 overflow-y-auto pr-1">
            {subject.materials.map((material, index) => (
              <div
                key={index}
                className="p-3 rounded-xl bg-gray-50 border border-gray-100 shadow-sm animate-fade-in-up"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="flex items-center justify-between">
                  <p className="text-base font-semibold text-gray-900">{material.title}</p>
                  <span className="text-xs font-medium text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full">{material.type}</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">{material.description}</p>
                {material.duration && (
                  <p className="text-xs text-gray-400 mt-2">Duration: {material.duration}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SubjectCard;
