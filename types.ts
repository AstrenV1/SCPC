export interface NavItem {
  label: string;
  path: string;
}

export interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

export enum ConnectionState {
  DISCONNECTED = 'DISCONNECTED',
  CONNECTING = 'CONNECTING',
  CONNECTED = 'CONNECTED',
  ERROR = 'ERROR'
}