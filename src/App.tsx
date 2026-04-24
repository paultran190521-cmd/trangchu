/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { WelcomePortal } from './components/portal/WelcomePortal';
import { MapDashboard } from './components/map/MapDashboard';
import { AudioPlayer } from './components/audio/AudioPlayer';

export default function App() {
  const [started, setStarted] = useState(false);

  return (
    <div className="min-h-screen bg-mind-base font-sans selection:bg-mind-amber/30 selection:text-white flex items-center justify-center p-0 md:p-8">
      {/* Decorative gradient overlay is now part of the Map container directly as requested in the design */}
      
      {/* Main content layer */}
      <div className="relative z-10 w-full h-[100vh] md:h-[min(90vh,768px)] max-w-5xl rounded-3xl overflow-hidden mx-auto shadow-[inset_0_0_100px_rgba(0,0,0,0.3)] bg-[radial-gradient(circle_at_50%_50%,_#155d6b_0%,_#104e5b_70%)]">
        <AnimatePresence mode="wait">
          {!started && <WelcomePortal key="welcome" onStart={() => setStarted(true)} />}
        </AnimatePresence>
        
        {started && <MapDashboard />}
        <AudioPlayer />
      </div>
    </div>
  );
}
