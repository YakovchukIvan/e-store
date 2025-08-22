import { ReactNode } from 'react';

export type ButtonProps = {
  children: ReactNode;
  variant: 'primaryButton' | 'secondaryButton' | 'closeButton';
  handleClick: () => void;
};

export type ModalWindowProps = {
  title: string;
  content: string;
  closeModal: () => void;
  alertCloseModal: () => void;
  showButton?: boolean;
  children?: ReactNode;
};

export type MainProps = {
  isModalOpen: boolean;
  openModal: () => void;
  children: ReactNode;
};
