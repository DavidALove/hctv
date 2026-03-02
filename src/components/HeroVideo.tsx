'use client';

import React, { useState, useRef } from 'react';
import { Play } from 'lucide-react';

export function HeroVideo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleClick = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
  };

  const handleVideoPlay = () => {
    setIsPlaying(true);
  };

  const handleVideoPause = () => {
    setIsPlaying(false);
  };

  return (
    <div
      className="relative aspect-video rounded-2xl overflow-hidden border border-blue-500/20 shadow-2xl shadow-blue-500/10 cursor-pointer group"
      onClick={handleClick}
    >
      <video
        ref={videoRef}
        src="/hctv-news-hero.mp4"
        className="w-full h-full object-cover"
        preload="metadata"
        playsInline
        muted={false}
        onEnded={handleVideoEnd}
        onPlay={handleVideoPlay}
        onPause={handleVideoPause}
      />
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition-colors">
          <div className="w-20 h-20 rounded-full bg-blue-600/90 flex items-center justify-center group-hover:scale-110 transition-transform">
            <Play className="w-10 h-10 text-white ml-1" fill="white" />
          </div>
        </div>
      )}
    </div>
  );
}
