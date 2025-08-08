import React, { useState } from 'react';
import { Palette, Monitor, Moon, Sparkles, Zap } from 'lucide-react';
import RoyalWellnessPortal from './RoyalWellnessPortal';
import ModernMinimalTemplate from './templates/ModernMinimalTemplate';
import DarkModeTemplate from './templates/DarkModeTemplate';
import GlassmorphismTemplate from './templates/GlassmorphismTemplate';
import NeonCyberpunkTemplate from './templates/NeonCyberpunkTemplate';

const TemplateSelector = ({ onProductSelect }) => {
  const [selectedTemplate, setSelectedTemplate] = useState('royal');

  const templates = [
    {
      id: 'royal',
      name: 'Royal Wellness',
      description: 'Luxurious royal theme with cold colors',
      icon: Sparkles,
      component: RoyalWellnessPortal,
      preview: 'bg-gradient-to-br from-slate-800 via-blue-900 to-cyan-900'
    },
    {
      id: 'minimal',
      name: 'Modern Minimal',
      description: 'Clean and minimalist design',
      icon: Monitor,
      component: ModernMinimalTemplate,
      preview: 'bg-gray-50'
    },
    {
      id: 'dark',
      name: 'Dark Mode',
      description: 'Dark theme with purple accents',
      icon: Moon,
      component: DarkModeTemplate,
      preview: 'bg-gray-900'
    },
    {
      id: 'glass',
      name: 'Glassmorphism',
      description: 'Transparent glass-like effects',
      icon: Sparkles,
      component: GlassmorphismTemplate,
      preview: 'bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500'
    },
    {
      id: 'cyber',
      name: 'Neon Cyberpunk',
      description: 'Futuristic neon and grid design',
      icon: Zap,
      component: NeonCyberpunkTemplate,
      preview: 'bg-black'
    }
  ];

  const SelectedComponent = templates.find(t => t.id === selectedTemplate)?.component || RoyalWellnessPortal;

  return (
    <div>
      {/* Template Selector */}
      <div className="fixed top-4 right-4 z-50">
        <div className="bg-white rounded-lg shadow-lg border p-4 max-w-xs">
          <div className="flex items-center gap-2 mb-3">
            <Palette className="w-5 h-5 text-gray-600" />
            <span className="font-medium text-gray-800">Choose Template</span>
          </div>
          
          <div className="space-y-2">
            {templates.map((template) => {
              const Icon = template.icon;
              return (
                <button
                  key={template.id}
                  onClick={() => setSelectedTemplate(template.id)}
                  className={`w-full text-left p-3 rounded-lg transition-all duration-300 border-2 ${
                    selectedTemplate === template.id
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300 bg-white'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded ${template.preview} flex items-center justify-center`}>
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-sm text-gray-800">{template.name}</div>
                      <div className="text-xs text-gray-500">{template.description}</div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Render Selected Template */}
      <SelectedComponent onProductSelect={onProductSelect} />
    </div>
  );
};

export default TemplateSelector;