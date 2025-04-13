
import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Clock } from 'lucide-react';

const EditorsPicks = () => {
  const picks = [
    { id: 1, title: "The Lost Art of Letter Writing", category: "Culture" },
    { id: 2, title: "Economic Insights: Market Trends for Q2", category: "Business" },
    { id: 3, title: "Urban Planning in the Digital Age", category: "Science" },
    { id: 4, title: "Profiles in Leadership: Local Heroes", category: "Community" }
  ];

  return (
    <div className="mb-8">
      <div className="flex items-center mb-4">
        <Star className="w-4 h-4 text-neopress-red mr-2" />
        <h3 className="font-serif font-bold">Editor's Picks</h3>
      </div>
      
      <div className="space-y-4">
        {picks.map((pick) => (
          <Link key={pick.id} to={`/article/${pick.id}`}>
            <div className="neopress-card p-3 border-l-4 border-neopress-red hover:bg-neopress-paperDark transition-colors">
              <span className="text-xs font-mono text-neopress-gray-600 block mb-1">
                {pick.category}
              </span>
              <h4 className="font-serif font-semibold">{pick.title}</h4>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

const ThisDayInHistory = () => {
  const events = [
    { year: "1969", event: "Apollo 11 lands on the moon" },
    { year: "1985", event: "First .com domain name is registered" },
    { year: "1995", event: "JavaScript programming language is announced" },
    { year: "2004", event: "Facebook is launched as a college networking site" }
  ];

  return (
    <div>
      <div className="flex items-center mb-4">
        <Clock className="w-4 h-4 text-neopress-red mr-2" />
        <h3 className="font-serif font-bold">This Day in History</h3>
      </div>
      
      <div className="space-y-3">
        {events.map((item, index) => (
          <div key={index} className="flex">
            <span className="font-mono font-bold text-neopress-red w-14 flex-shrink-0">
              {item.year}
            </span>
            <p className="text-sm text-neopress-gray-800">{item.event}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const Sidebar = () => {
  return (
    <aside className="space-y-8">
      <EditorsPicks />
      <ThisDayInHistory />
    </aside>
  );
};

export default Sidebar;
