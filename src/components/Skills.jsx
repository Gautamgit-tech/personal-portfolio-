import React from 'react';
import { Code2, Terminal, BookText } from 'lucide-react';

const skillsData = [
  {
    title: 'Frontend',
    description: 'I value simple content structure, clean design and thoughtful interactions.',
    icon: <Code2 size={44} />,
    skills: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React.js', 'React Native', 'Electron.js', 'Bootstrap 5'],
  },
  {
    title: 'Backend',
    description: 'I like to code things from scratch and implement efficiently.',
    icon: <Terminal size={44} />,
    skills: ['Node.js', 'Express.js', 'REST API', 'MySQL', 'MongoDB'],
  },
  {
    title: 'Miscellaneous',
    description: 'Some miscellaneous tools or technologies I learned in my career.',
    icon: <BookText size={44} />,
    skills: ['C/C++', 'Java', 'Git', 'Socket.IO', 'Firebase', 'Docker', 'Chrome Extensions', 'MERN Stack'],
  },
];

export default function Skills() {
  return (
    <section
    id="skills"
    className="relative bg-gradient-to-br from-white via-slate-100 to-white py-24 px-4">
      {/* White card container */}
      <div className="bg-white max-w-7xl mx-auto p-16 rounded-3xl shadow-2xl grid grid-cols-1 md:grid-cols-3 gap-12 z-10 relative transition-all duration-500 hover:scale-[1.01]">
        {skillsData.map((category, index) => (
          <div key={index} className="text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#5ef2b4] flex items-center justify-center">
              {category.icon}
            </div>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-3">{category.title}</h2>
            <p className="text-xl text-gray-700 mb-6 px-4 leading-relaxed">{category.description}</p>
            <ul className="text-lg font-semibold text-gray-800 space-y-2">
              {category.skills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
