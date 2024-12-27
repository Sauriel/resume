import { eventDate } from '../helper/date';
import type { TimedEventEntry } from '../types/types';

export const education: TimedEventEntry[] = [
  {
    name: 'B.SC Media Systems',
    place: 'HAW Hamburg',
    from: eventDate(2012, 3),
    to: eventDate(2015, 2),
    description: 'Studium der Medieninformatik mit Fokus auf neue Medien.',
  },
  {
    name: 'Mediengestalter Digital & Print',
    place: 'G5 Berufsschule',
    from: eventDate(2005, 8),
    to: eventDate(2008, 7),
    description: 'Fachrichtung Mediendesign. Ausbildungsbetrieb: Medienzirkus Gudrun Schwanck.',
  },
  {
    name: 'Fachhochschulreife Gestaltung',
    place: 'FOS Gestaltung',
    from: eventDate(2003, 8),
    to: eventDate(2005, 7),
    description: 'Begleitendes einjähriges Praktikum im Medienzirkus Gudrun Schwanck.',
  },
];
