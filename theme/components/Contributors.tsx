import { FC } from 'react';

export const Contributors: FC = () => (
  <>
    <hr />
    <div className="flex flex-col my-4 items-center overflow-x-auto">
      <h2 className="text-2xl mb-4">Contributors</h2>
      <object data="https://opencollective.com/rspack/contributors.svg?width=900&button=false" />
    </div>
  </>
);
