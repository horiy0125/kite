import React from 'react';

export type BaseProps = {
  className?: string;
};

export type BasePropsWithChildren = {
  children?: React.ReactNode;
} & BaseProps;
