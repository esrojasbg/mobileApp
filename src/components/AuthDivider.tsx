import React from 'react';

export const AuthDivider = ({ text }: { text: string }) => {
  return (
    <div className="relative flex items-center py-5">
      <div className="flex-grow border-t border-[#E0E0E0]"></div>
      <span className="flex-shrink mx-4 text-sm text-[#808080]">{text}</span>
      <div className="flex-grow border-t border-[#E0E0E0]"></div>
    </div>
  );
}