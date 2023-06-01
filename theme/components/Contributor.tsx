import { FC } from 'react';

export const Contributor: FC = () => (
  <>
    <hr />
    <div className="flex flex-col my-4 items-center">
      <div className="text-2xl mb-4">Contributors</div>
      <object data="https://opencollective.com/rspack/contributors.svg?width=900&button=false" />
    </div>
  </>
);
