export type Skill = {
  id: string;
  name: string;
  experience: 0 | 1 | 2 | 3 | 5 | 10;
  tooltip?: string;
};

export type TimedEventEntry = {
  name: string;
  place: string;
  from: Date;
  to: Date;
  description: string;
};

export type TooltipPayload = {
  text?: string;
  position: 'top' | 'left' | 'bottom' | 'right';
};

export type Snippet = {
  label: string;
  html: string;
  css: string;
  script: string;
};
