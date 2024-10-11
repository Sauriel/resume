export type Skill = {
  id: string;
  name: string;
  experience: 0 | 1 | 2 | 3 | 5 | 10;
};

export type TimedEventEntry = {
  name: string;
  place: string;
  from: Date;
  to: Date;
  description: string;
};
