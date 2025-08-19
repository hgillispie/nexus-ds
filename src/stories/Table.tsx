import React from 'react';
import './table.css';

export interface TableColumn {
  /** Unique identifier for the column */
  key: string;
  /** Column header text */
  header: string;
  /** Column width (optional) */
  width?: string;
  /** Whether this column is sortable */
  sortable?: boolean;
  /** Alignment of content in this column */
  align?: 'left' | 'center' | 'right';
  /** Custom render function for cell content */
  render?: (value: any, row: any, index: number) => React.ReactNode;
}

export interface TableAction {
  /** Action identifier */
  key: string;
  /** Action label (for accessibility) */
  label: string;
  /** Action icon */
  icon: React.ReactNode;
  /** Action handler */
  onClick: (row: any, index: number) => void;
  /** Whether action is destructive */
  destructive?: boolean;
  /** Whether action is disabled for this row */
  disabled?: (row: any) => boolean;
}

export interface TableProps {
  /** Table data */
  data: any[];
  /** Column configuration */
  columns: TableColumn[];
  /** Available actions for each row */
  actions?: TableAction[];
  /** Table variant */
  variant?: 'default' | 'minimal';
  /** Table size */
  size?: 'sm' | 'md' | 'lg';
  /** Whether to show hover states */
  hoverable?: boolean;
  /** Whether rows are selectable */
  selectable?: boolean;
  /** Selected row keys */
  selectedRows?: string[];
  /** Selection change handler */
  onSelectionChange?: (selectedKeys: string[]) => void;
  /** Row key field (defaults to 'id') */
  rowKey?: string;
  /** Loading state */
  loading?: boolean;
  /** Empty state message */
  emptyMessage?: string;
  /** Caption for table */
  caption?: string;
  /** Sticky header */
  stickyHeader?: boolean;
  /** Sort configuration */
  sortConfig?: {
    key: string;
    direction: 'asc' | 'desc';
  };
  /** Sort change handler */
  onSort?: (key: string, direction: 'asc' | 'desc') => void;
  /** Additional CSS class */
  className?: string;
}

const EditIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M12.1464 1.85355C12.3417 1.65829 12.6583 1.65829 12.8536 1.85355L14.1464 3.14645C14.3417 3.34171 14.3417 3.65829 14.1464 3.85355L5.35355 12.6464C5.25979 12.7402 5.13261 12.7918 5 12.7918H2.75C2.33579 12.7918 2 12.456 2 12.0418V9.79179C2 9.65918 2.05164 9.532 2.14541 9.43823L10.9383 0.645348C11.1335 0.450086 11.45 0.450086 11.6453 0.645348L12.1464 1.85355Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10.5 3L13 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const DeleteIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M6.5 1.75H9.5C9.77614 1.75 10 1.97386 10 2.25V3H6V2.25C6 1.97386 6.22386 1.75 6.5 1.75Z" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M3.75 3.75H12.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M4.75 3.75V12.25C4.75 12.6642 5.08579 13 5.5 13H10.5C10.9142 13 11.25 12.6642 11.25 12.25V3.75" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M7 6.5V9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M9 6.5V9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const SortIcon = ({ direction }: { direction?: 'asc' | 'desc' }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={`table-sort-icon ${direction ? `table-sort-icon--${direction}` : ''}`}>
    <path d="M8 3.5L5.5 6.5H10.5L8 3.5Z" fill={direction === 'asc' ? 'currentColor' : '#9CA3AF'}/>
    <path d="M8 12.5L10.5 9.5H5.5L8 12.5Z" fill={direction === 'desc' ? 'currentColor' : '#9CA3AF'}/>
  </svg>
);

/**
 * Table component for displaying tabular data with sorting, selection, and actions
 */
export const Table: React.FC<TableProps> = ({
  data,
  columns,
  actions = [],
  variant = 'default',
  size = 'md',
  hoverable = true,
  selectable = false,
  selectedRows = [],
  onSelectionChange,
  rowKey = 'id',
  loading = false,
  emptyMessage = 'No data available',
  caption,
  stickyHeader = false,
  sortConfig,
  onSort,
  className = '',
  ...props
}) => {
  const tableClasses = [
    'nexus-table',
    `nexus-table--${variant}`,
    `nexus-table--${size}`,
    hoverable && 'nexus-table--hoverable',
    selectable && 'nexus-table--selectable',
    stickyHeader && 'nexus-table--sticky-header',
    loading && 'nexus-table--loading',
    className
  ].filter(Boolean).join(' ');

  const handleSort = (columnKey: string) => {
    if (!onSort) return;
    
    const currentDirection = sortConfig?.key === columnKey ? sortConfig.direction : undefined;
    const newDirection = currentDirection === 'asc' ? 'desc' : 'asc';
    onSort(columnKey, newDirection);
  };

  const handleSelectAll = () => {
    if (!onSelectionChange) return;
    
    const allKeys = data.map(row => row[rowKey]);
    const isAllSelected = allKeys.length > 0 && allKeys.every(key => selectedRows.includes(key));
    
    if (isAllSelected) {
      onSelectionChange([]);
    } else {
      onSelectionChange(allKeys);
    }
  };

  const handleRowSelect = (rowKey: string) => {
    if (!onSelectionChange) return;
    
    const isSelected = selectedRows.includes(rowKey);
    if (isSelected) {
      onSelectionChange(selectedRows.filter(key => key !== rowKey));
    } else {
      onSelectionChange([...selectedRows, rowKey]);
    }
  };

  const renderCell = (column: TableColumn, row: any, rowIndex: number) => {
    const value = row[column.key];
    
    if (column.render) {
      return column.render(value, row, rowIndex);
    }
    
    return value;
  };

  const isAllSelected = data.length > 0 && data.every(row => selectedRows.includes(row[rowKey]));
  const isIndeterminate = selectedRows.length > 0 && !isAllSelected;

  if (loading) {
    return (
      <div className={tableClasses}>
        <div className="nexus-table__loading">
          <div className="nexus-table__spinner" />
          <span>Loading...</span>
        </div>
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <div className={tableClasses}>
        <div className="nexus-table__empty">
          <span>{emptyMessage}</span>
        </div>
      </div>
    );
  }

  return (
    <div className={tableClasses} {...props}>
      <table className="nexus-table__table">
        {caption && <caption className="nexus-table__caption">{caption}</caption>}
        <thead className="nexus-table__header">
          <tr className="nexus-table__header-row">
            {selectable && (
              <th className="nexus-table__header-cell nexus-table__header-cell--checkbox">
                <input
                  type="checkbox"
                  className="nexus-table__checkbox"
                  checked={isAllSelected}
                  ref={input => {
                    if (input) input.indeterminate = isIndeterminate;
                  }}
                  onChange={handleSelectAll}
                  aria-label="Select all rows"
                />
              </th>
            )}
            {columns.map((column) => (
              <th
                key={column.key}
                className={`nexus-table__header-cell nexus-table__header-cell--${column.align || 'left'} ${
                  column.sortable ? 'nexus-table__header-cell--sortable' : ''
                }`}
                style={{ width: column.width }}
                onClick={column.sortable ? () => handleSort(column.key) : undefined}
              >
                <div className="nexus-table__header-content">
                  <span>{column.header}</span>
                  {column.sortable && (
                    <SortIcon 
                      direction={sortConfig?.key === column.key ? sortConfig.direction : undefined}
                    />
                  )}
                </div>
              </th>
            ))}
            {actions.length > 0 && (
              <th className="nexus-table__header-cell nexus-table__header-cell--actions">
                Actions
              </th>
            )}
          </tr>
        </thead>
        <tbody className="nexus-table__body">
          {data.map((row, rowIndex) => {
            const rowId = row[rowKey];
            const isSelected = selectedRows.includes(rowId);
            
            return (
              <tr
                key={rowId}
                className={`nexus-table__row ${isSelected ? 'nexus-table__row--selected' : ''}`}
              >
                {selectable && (
                  <td className="nexus-table__cell nexus-table__cell--checkbox">
                    <input
                      type="checkbox"
                      className="nexus-table__checkbox"
                      checked={isSelected}
                      onChange={() => handleRowSelect(rowId)}
                      aria-label={`Select row ${rowIndex + 1}`}
                    />
                  </td>
                )}
                {columns.map((column) => (
                  <td
                    key={column.key}
                    className={`nexus-table__cell nexus-table__cell--${column.align || 'left'}`}
                  >
                    {renderCell(column, row, rowIndex)}
                  </td>
                ))}
                {actions.length > 0 && (
                  <td className="nexus-table__cell nexus-table__cell--actions">
                    <div className="nexus-table__actions">
                      {actions.map((action) => {
                        const isDisabled = action.disabled?.(row) || false;
                        return (
                          <button
                            key={action.key}
                            className={`nexus-table__action ${
                              action.destructive ? 'nexus-table__action--destructive' : ''
                            }`}
                            onClick={() => action.onClick(row, rowIndex)}
                            disabled={isDisabled}
                            aria-label={action.label}
                            title={action.label}
                          >
                            {action.icon}
                          </button>
                        );
                      })}
                    </div>
                  </td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
export { EditIcon, DeleteIcon, SortIcon };
