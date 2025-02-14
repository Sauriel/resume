import type { RouteLocationAsRelativeI18n } from 'vue-router';
import type { RouteNamedMap, RouteNamedMapI18n } from 'vue-router/auto-routes';

export type ValidRouteName =
  | keyof RouteNamedMapI18n
  | (Omit<RouteLocationAsRelativeI18n, 'path'> & { path?: string | undefined });
export type ValidPath = RouteNamedMap[keyof RouteNamedMap]['path'];

export type NavEntry = {
  page: ValidRouteName;
  path?: ValidPath;
  label?: string;
  icon?: string;
};

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
