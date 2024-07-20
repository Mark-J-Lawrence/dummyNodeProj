'use client';
import { Content, Theme } from '@carbon/react';

import SdvHeader from './components/SdvHeader/SdvHeader';


export function Providers({ children }) {
  return (
    <div>
      <Theme theme="g100">
        <SdvHeader />
      </Theme>
      <Content>{children}</Content>
    </div>
  );
}