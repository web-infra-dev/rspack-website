import { HomeHero } from '../components/HomeHero';
import { HomeFeature } from '../components/HomeFeatures';
import { usePageData } from '@modern-js/doc-tools/runtime';
import { Benchmark } from '../components/Benchmark';
import { HomeFooter } from '../components/HomeFooter/index';

export function HomeLayout() {
  const { frontmatter } = usePageData();
  return (
    <div>
      {/* Landing Page */}
      <div
        className="relative"
        style={{
          background: 'var(--modern-home-bg)',
          minHeight: 'calc(100vh - var(--modern-nav-height))',
          paddingBottom: '56px',
        }}
      >
        <div className="pt-14 pb-12">
          <HomeHero hero={frontmatter.hero} />
          <HomeFeature features={frontmatter.features} />
        </div>
      </div>
      {/* Benchmark Page */}
      <Benchmark />
      {/* Footer */}
      <HomeFooter />
    </div>
  );
}
