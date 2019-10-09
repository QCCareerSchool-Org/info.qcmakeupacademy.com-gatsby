/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */
import React from 'react';

import { ScreenWidthProvider } from './src/providers/screen-width';
import { ScrollPositionProvider } from './src/providers/scroll-position';
import { LocationProvider } from './src/providers/location';

export const wrapRootElement = ({ element }) => (
  <ScreenWidthProvider>
    <ScrollPositionProvider>
      <LocationProvider>
        {element}
      </LocationProvider>
    </ScrollPositionProvider>
  </ScreenWidthProvider>
);
