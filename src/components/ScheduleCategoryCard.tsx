'use client';

import React, { useState } from 'react';
import { ChevronDown, LucideIcon } from 'lucide-react';

interface ScheduleCategoryCardProps {
  icon: LucideIcon;
  title: string;
  children: React.ReactNode;
}

export function ScheduleCategoryCard({ icon: Icon, title, children }: ScheduleCategoryCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="border border-gray-700 rounded-xl overflow-hidden hover:border-blue-500/50 transition-colors">
      <button
        type="button"
        onClick={() => setExpanded(!expanded)}
        className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left bg-gradient-to-br from-gray-900 to-gray-800"
      >
        <div className="flex items-center gap-4">
          <div className="bg-blue-600/20 p-3 rounded-lg">
            <Icon className="w-6 h-6 text-blue-400" />
          </div>
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
        <ChevronDown
          className={`w-5 h-5 text-gray-400 transition-transform ${expanded ? 'rotate-180' : ''}`}
        />
      </button>
      {expanded && (
        <div className="px-6 py-5 border-t border-gray-700 bg-gray-900/50 text-gray-300 space-y-4">
          {children}
        </div>
      )}
    </div>
  );
}
