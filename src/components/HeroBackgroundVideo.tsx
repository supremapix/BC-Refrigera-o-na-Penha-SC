import React from 'react';

export const HeroBackgroundVideo: React.FC = () => {
  const videoUrl = "https://img.novaspersianascuritiba.com.br/bc.mp4";

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden select-none pointer-events-none z-0">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        referrerPolicy="no-referrer"
        className="absolute inset-0 w-full h-full object-cover scale-[1.02] transform opacity-55 md:opacity-65 select-none pointer-events-none"
        src={videoUrl}
      />
      
      {/* Premium Dark Tech Radial Overlay & Gradient to ensure text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#051726]/65 via-[#0A2540]/50 to-[#051726]/85 z-10" />
      
      {/* Secondary cyan glow overlay to enhance the technological/freezing theme */}
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-[#22C7E5]/10 rounded-full blur-[120px] pointer-events-none z-20" />
      <div className="absolute bottom-1/4 left-1/4 w-[350px] h-[350px] bg-[#0E86D4]/10 rounded-full blur-[100px] pointer-events-none z-20" />
    </div>
  );
};
