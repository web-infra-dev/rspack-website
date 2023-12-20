import { useI18n } from '../../i18n';
import { usePageData } from 'rspress/runtime';

export function Announcement() {
  const t = useI18n();
  const { page } = usePageData();
  if (page.pageType !== 'home') {
    return null;
  }
  return (
    <div
      className="h-8 flex justify-center items-center"
      style={{
        background: 'var(--rp-home-hero-name-background)',
        height: '2rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <a
        href="https://webinfra.org/about"
        className="underline"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color: '#e1f764',
        }}
      >
        {t('recruit')}
      </a>
    </div>
  );
}
