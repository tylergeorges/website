export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    github: string;
  };
};

export enum EditorMode {
  Normal = 'Escape',
  Insert = 'i',
  Command = ':',
  Visual = 'v'
}
