import { Link } from '@modern-js/doc-tools/theme';
import { useLang } from '@modern-js/doc-tools/runtime';
import { useI18n } from '../../i18n/index';

function useFooterData() {
  const t = useI18n();
  const lang = useLang();
  const getLink = (link: string) => (lang === 'en' ? link : `/${lang}${link}`);

  return [
    {
      title: t('guide'),
      items: [
        {
          title: t('quickStart'),
          link: getLink('/guide/quick-start'),
        },
        {
          title: t('features'),
          link: getLink('/guide/language-support'),
        },
        {
          title: t('compatibility'),
          link: getLink('/guide/loader-compat'),
        },
        {
          title: t('migration'),
          link: getLink('/guide/migrate-from-webpack'),
        },
      ],
    },
    {
      title: 'API',
      items: [
        {
          title: t('cli'),
          link: getLink('/api/cli'),
        },
        {
          title: 'Loader API',
          link: getLink('/api/loader-api'),
        },
        {
          title: 'Plugin API',
          link: getLink('/api/plugin-api'),
        },
      ],
    },
    {
      title: t('ecosystem'),
      items: [
        {
          title: 'Rspack Sources',
          link: 'https://github.com/web-infra-dev/rspack-sources',
        },
        {
          title: 'Modern.js',
          link: 'https://modernjs.dev',
        },
      ],
    },
    {
      title: t('community'),
      items: [
        {
          title: 'GitHub',
          link: 'https://github.com/web-infra-dev/rspack',
        },
        {
          title: 'Discord',
          link: 'https://discord.gg/ab2Rv4BXwf',
        },
      ],
    },
  ];
}

export function HomeFooter() {
  const footerData = useFooterData();
  return (
    <div className="flex flex-col border-t dark:border-dark-50 items-center">
      <div className="pt-4 pt-8 pb-4 w-full justify-around max-w-1152px hidden sm:flex">
        {footerData.map((item) => (
          <div className="flex flex-col items-start">
            <h2 className="font-bold my-4 text-lg">{item.title}</h2>
            <ul className="flex flex-col gap-3">
              {item.items.map((subItem) => (
                <li>
                  <Link href={subItem.link}>
                    <span className="font-normal">{subItem.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="flex flex-center">
        <h2 className="font-normal text-sm text-gray-600 dark:text-light-600 py-4">
          © 2023 ByteDance Inc. All Rights Reserved.
        </h2>
      </div>
    </div>
  );
}
