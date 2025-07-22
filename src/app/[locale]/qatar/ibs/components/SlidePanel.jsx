'use client';
import { useState } from 'react';
import CustomButton from '@/app/components/common/CustomButton';

export default function SlidePanelExample() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-gray-100 dark:bg-[#050331] flex items-center justify-center">
      {/* ✅ Trigger Button */}
      <CustomButton
        text="Open Panel"
        bgColor="bg-primary"
        textColor="text-white"
        strokeColor="white"
        onClick={() => setIsOpen(true)}
      />

      {/* ✅ Slide Panel */}
      <div
        className={`fixed top-0 left-0 h-full w-80 z-50 bg-white dark:bg-[#0b0c1e] shadow-lg transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-300 dark:border-gray-700">
          <h2 className="text-lg font-bold text-primary dark:text-white">Panel Title</h2>
          <button onClick={() => setIsOpen(false)} className="text-gray-700 dark:text-white">
            ✕
          </button>
        </div>
        <div className="p-4 text-gray-700 dark:text-white">
          This is your sliding content area.
        </div>
      </div>

      {/* ✅ Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}
