import type { FC } from 'react';

const PropertyType: FC<{ type: string; defaultValue?: string }> & {
  CN: FC<{ type: string; defaultValue?: string }>;
} = ({ type, defaultValue }) => {
  return (
    <>
      <ul>
        <li>
          <strong>Type:</strong> <code>{type}</code>
        </li>
        {defaultValue && (
          <li>
            <strong>Default:</strong> <code>{defaultValue}</code>
          </li>
        )}
      </ul>
    </>
  );
};
PropertyType.CN = ({ type, defaultValue }) => {
  return (
    <>
      <ul>
        <li>
          <strong>类型：</strong> <code>{type}</code>
        </li>
        {defaultValue && (
          <li>
            <strong>默认值：</strong> <code>{defaultValue}</code>
          </li>
        )}
      </ul>
    </>
  );
};

export default PropertyType;
