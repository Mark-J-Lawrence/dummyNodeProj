import './globals.scss';
import { Providers } from './providers';

export const metadata = {
  title: 'IBM CICS - Security Definition Validation',
  description: 'IBM CICS SDV documentation',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">      
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}