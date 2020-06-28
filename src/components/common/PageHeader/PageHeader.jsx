import React from 'react';
import { Header } from './PageHeader.styled';

export const PageHeader = ({ children, ...props }) => <Header {...props}>{children}</Header>;
