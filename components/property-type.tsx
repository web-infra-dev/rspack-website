import type { FC } from 'react';
type DefaultValue = {
  defaultValue: string;
  mode?: string;
};
const PropertyType: FC<{ type: string; defaultValueList?: DefaultValue[] }> & {
  CN: FC<{ type: string; defaultValueList?: DefaultValue[] }>;
} = ({ type, defaultValueList }) => {
  return (
    <>
      <ul>
        <li>
          <strong>Type:</strong> <code>{type}</code>
        </li>
        {defaultValueList?.length &&
          defaultValueList.length > 0 &&
          defaultValueList.map(({ defaultValue, mode }) => {
            return (
              <li>
                <strong>Default: </strong> <code>{defaultValue}</code>
                {mode && <span style={{ marginLeft: '4px' }}>{mode}</span>}
              </li>
            );
          })}
      </ul>
    </>
  );
};
PropertyType.CN = ({ type, defaultValueList }) => {
  return (
    <>
      <ul>
        <li>
          <strong>类型：</strong> <code>{type}</code>
        </li>
        {defaultValueList?.length &&
          defaultValueList.length > 0 &&
          defaultValueList.map(({ defaultValue, mode }) => {
            return (
              <li>
                <strong>默认值: </strong> <code>{defaultValue}</code>
                {mode && <span style={{ marginLeft: '4px' }}>{mode}</span>}
              </li>
            );
          })}
        {/* {defaultValue && (
          <li>
            <strong>默认值：</strong> <code>{defaultValue}</code>
            <span></span>
          </li>
        )} */}
      </ul>
    </>
  );
};

export default PropertyType;
