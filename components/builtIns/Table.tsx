import { ReactNode } from 'react';
import Markdown from 'markdown-to-jsx';
import { getCustomMDXComponent } from '@modern-js/doc-tools/theme';

interface TableProps {
  children: ReactNode[];
  body: any[];
  header: { name: string; key: string }[];
  tableStyle: Record<string, string>;
}

const {
  table: ModernTable,
  th: ModernTableHead,
  tr: ModernTableRow,
  td: ModernTableData,
} = getCustomMDXComponent();

// Use case example:
//
// import { Table } from '@builtIns';
//
// <Table
//   header={[
//     { name: 'Name', key: 'name' },
//     { name: 'Description', key: 'description' },
//   ]}
//   body={[
//     {
//       name: 'Modern.js',
//       description: 'A JavaScript framework for the modern web.',
//     },
//     {
//       name: 'Modern.js Doc Tools',
//       description: 'A tool for building documentation sites.',
//     }
//   ]}
// />
export function Table(props: TableProps) {
  const { body, tableStyle, header } = props;
  // Support markdown syntax in table cell
  const compiledValue = body.map((item: any) => {
    Object.keys(item).forEach((key) => {
      if (typeof item[key] === 'string') {
        item[key] = <Markdown>{item[key]}</Markdown>;
      }
    });
    return item;
  });

  // generate table tag
  return (
    <ModernTable style={tableStyle}>
      <ModernTableHead>
        <ModernTableRow>
          {header.map((item) => (
            <ModernTableHead key={item.key}>{item.name}</ModernTableHead>
          ))}
        </ModernTableRow>
      </ModernTableHead>
      <tbody>
        {compiledValue.map((item: any, index: number) => (
          <ModernTableRow key={index}>
            {header.map((headerItem) => (
              <ModernTableData key={headerItem.key}>
                {item[headerItem.key]}
              </ModernTableData>
            ))}
          </ModernTableRow>
        ))}
      </tbody>
    </ModernTable>
  );
}
