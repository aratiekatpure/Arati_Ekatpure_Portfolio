import React from 'react';
import { Code2 } from 'lucide-react';

interface SkillBadgeProps {
  name: string;
  level: string;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ name, level }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center space-x-3">
        <Code2 className="text-blue-600" size={24} />
        <div>
          <h3 className="font-semibold">{name}</h3>
          <p className="text-sm text-gray-500">{level}</p>
        </div>
      </div>
    </div>
  );
};

export default SkillBadge;