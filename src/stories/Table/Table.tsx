import React from 'react';
import styled from 'styled-components';

export interface TableProps {
  headers: string[];
  data: string[][];
  disabled?: boolean;
}

const StyledTable = styled.table<{ $disabled: boolean }>`
  width: 100%;
  border-collapse: collapse;
  opacity: ${props => props.$disabled ? 0.6 : 1};
  cursor: ${props => props.$disabled ? 'not-allowed' : 'default'};

  th, td {
    border: 1px solid #ccc;
    padding: 10px;
    text-align: left;
  }

  th {
    background-color: hotpink;
  }
`;

export const Table: React.FC<TableProps> = ({ headers, data, disabled = false }) => (
  <StyledTable $disabled={disabled}>
    <thead>
      <tr>{headers.map((header, i) => <th key={i}>{header}</th>)}</tr>
    </thead>
    <tbody>
      {data.map((row, i) => (
        <tr key={i}>
          {row.map((cell, j) => <td key={j}>{cell}</td>)}
        </tr>
      ))}
    </tbody>
  </StyledTable>
);
