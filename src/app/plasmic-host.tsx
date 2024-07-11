// pages/plasmic-host.tsx
import * as React from 'react';
import { PlasmicCanvasHost } from '@plasmicapp/loader-nextjs';
import { PLASMIC } from '../src/plasmic-init';

export default function PlasmicHost() {
  return PLASMIC && <PlasmicCanvasHost />;
}
