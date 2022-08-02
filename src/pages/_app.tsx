import type { AppProps } from 'next/app';
import '../styles/global.scss';

import { PrismicPreview } from '@prismicio/next';
import { PrismicProvider } from '@prismicio/react';
import Link from 'next/link';
import { FloatingButton } from '../components/floating-button';
import { linkResolver, repositoryName } from '../services/prismic';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PrismicProvider
      linkResolver={linkResolver}
      internalLinkComponent={({ href, children, ...props }) => (
        <Link href={href}>
          <a {...props}>{children}</a>
        </Link>
      )}
    >
      <PrismicPreview repositoryName={repositoryName}>
        <Component {...pageProps} />
        <FloatingButton />

      </PrismicPreview>
    </PrismicProvider>
  );
}
