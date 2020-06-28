import React from 'react';
import { ColumnCpn } from './Column.styled';

export const Column = ({ children, ...props }) => <ColumnCpn {...props}>{children}</ColumnCpn>;
