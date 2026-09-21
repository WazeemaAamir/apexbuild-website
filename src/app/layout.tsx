import type { Metadata, Viewport } from 'next';
import './globals.css';

const apexLogoSvg = `data:image/svg+xml,[STRIPPED][STRIPPED 20 bytes]//www.w3.org/2000/svg" viewBox="0 0 100 100">
    <rect width="100" height="100" rx="20" fill="%232563eb"/>
    <path stroke="white" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" fill="none" d="M20 50l10-8m0 0l20-20 20 20M30 42v32a4 4 0 004 4h10m32-36l8 8m-8-8v32a4 4 0 01-4 4h-10m-20 0a4 4 0 004-4V56a4 4 0 014-4h8a4 4 0 014 4v16a4 4 0 004 4m-20 0h20" />
  </svg>
`)}`;

export const metadata: Metadata = {
  metadataBase: new URL('https://apexbuild-website.vercel.app'),
  title: 'APEXBUILD | Contracting & Services',
  description: 'Premier residential and commercial contracting services.',
  icons: {
    icon: apexLogoSvg,
    shortcut: apexLogoSvg,
    apple: apexLogoSvg,
  },
  // --- Thumbnail Fix Added ---
  openGraph: {
    title: 'APEXBUILD | Contracting & Services',
    description: 'Premier residential and commercial contracting services.',
    url: 'https://apexbuild-website.vercel.app',
    siteName: 'APEXBUILD',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg', // ye image /public folder me honi chahiye
        width: 1200,
        height: 630,
        alt: 'APEXBUILD - Contracting & Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'APEXBUILD | Contracting & Services',
    description: 'Premier residential and commercial contracting services.',
    images: ['/og-image.jpg'],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#080b11] text-[#c9d1d9] antialiased selection:bg-blue-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}