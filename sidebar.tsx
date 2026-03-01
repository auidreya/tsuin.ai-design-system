import React from 'react';
import { Terminal, Command, Layout, Database, Activity, Code2, Info } from 'lucide-react';

const Sidebar = () => {
  return (
    <aside className="w-64 border-r border-antigravity-brd h-full bg-antigravity-sec/30 overflow-y-auto">
      <div className="p-6 space-y-8">
        
        {/* FOUNDATION SECTION */}
        <div>
          <h3 className="font-mono text-[10px] uppercase font-bold opacity-40 mb-4 tracking-widest px-3">
            Foundation
          </h3>
          <ul className="space-y-1 text-sm">
            <SidebarItem icon={<Info size={14} />} label="Introduction" />
            <SidebarItem icon={<Activity size={14} />} label="Design Tokens" />
          </ul>
        </div>

        {/* COMPONENT LIBRARY SECTION */}
        <div>
          <h3 className="font-mono text-[10px] uppercase font-bold opacity-40 mb-4 tracking-widest px-3">
            Component Library
          </h3>
          <ul className="space-y-1 text-sm">
            <SidebarItem 
              icon={<Terminal size={14} />} 
              label="Terminal" 
              active 
              badge="New" 
            />
            <SidebarItem icon={<Command size={14} />} label="Command Palette" />
            <SidebarItem icon={<Layout size={14} />} label="Artifact Cards" />
            <SidebarItem icon={<Database size={14} />} label="Data Grids" />
            <SidebarItem icon={<Code2 size={14} />} label="Code Block" />
          </ul>
        </div>

        {/* VARIANTS SECTION */}
        <div>
          <h3 className="font-mono text-[10px] uppercase font-bold opacity-40 mb-4 tracking-widest px-3">
            Advanced Variants
          </h3>
          <ul className="space-y-1 text-sm opacity-70 italic">
            <li className="px-3 py-2 hover:text-antigravity-prim cursor-pointer">Agentic States</li>
            <li className="px-3 py-2 hover:text-antigravity-prim cursor-pointer">Glass Overlays</li>
          </ul>
        </div>

      </div>
    </aside>
  );
};

// Reusable Nav Item Component
const SidebarItem = ({ icon, label, active = false, badge }: { 
  icon: React.ReactNode, 
  label: string, 
  active?: boolean, 
  badge?: string 
}) => {
  return (
    <li className={`
      group flex items-center justify-between px-3 py-2 rounded-md transition-all cursor-pointer border
      ${active 
        ? 'bg-antigravity-prim-light/50 text-antigravity-prim font-semibold border-antigravity-prim/10 shadow-sm' 
        : 'border-transparent opacity-70 hover:opacity-100 hover:bg-antigravity-prim-light/30 hover:text-antigravity-prim'}
    `}>
      <div className="flex items-center gap-3">
        {icon}
        <span>{label}</span>
      </div>
      {badge && (
        <span className="text-[9px] bg-antigravity-prim text-white px-1.5 py-0.5 rounded uppercase tracking-tighter font-bold">
          {badge}
        </span>
      )}
    </li>
  );
};

export default Sidebar;