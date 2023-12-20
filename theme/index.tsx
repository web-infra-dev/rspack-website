import Theme from 'rspress/theme';
import { HomeLayout } from './pages';
import { Announcement } from './components/Announcement';

const Layout = () => <Theme.Layout beforeNav={<Announcement />} />;

// eslint-disable-next-line import/export
export * from 'rspress/theme';

export default {
  ...Theme,
  Layout,
  HomeLayout,
};
