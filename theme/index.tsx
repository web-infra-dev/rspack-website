import Theme from 'rspress/theme';
import { HomeLayout } from './pages';
import { Announcement } from './components/Announcement';
import { NoSSR } from 'rspress/runtime';
import { RsfamilyNavIcon } from 'rsfamily-nav-icon';

const Layout = () => (
  <Theme.Layout
    beforeNavTitle={<RsfamilyNavIcon />}
    beforeNav={
      <NoSSR>
        <Announcement />
      </NoSSR>
    }
  />
);

// eslint-disable-next-line import/export
export * from 'rspress/theme';

export default {
  ...Theme,
  Layout,
  HomeLayout,
};
