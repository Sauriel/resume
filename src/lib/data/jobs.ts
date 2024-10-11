import { eventDate, nowEventDate } from '$lib/helper/date';
import type { TimedEventEntry } from '$lib/types';

export const jobs: TimedEventEntry[] = [
  {
    name: 'Softwareentwickler',
    place: 'novomind AG',
    from: eventDate(2015, 3),
    to: nowEventDate(),
    description:
      'Ich habe anfänglich als Fullstack Entwickler im JAVA Umfeld, die Kunden unserer eigenen E-Commerce Shoplösung betreut. Ab 2020 leite ich nun als Frontend Architect die Neuentwicklung unserer auf Vue.js und GraphQL basierenden Shop-Adminoberfläche.',
  },
  {
    name: 'Mediengestalter',
    place: 'Medienzirkus Gudrun Schwanck',
    from: eventDate(2012, 3),
    to: eventDate(2015, 2),
    description:
      'Ich habe verschiedene Webseiten, Druckprodukte und Logos gestaltet, den Digital- und Offsetdruck unterstützt sowie die Druckerzeugnisse veredelt und weiterverarbeitet.',
  },
  {
    name: 'Mediengestalter',
    place: 'A.S. Müller Sofortdruck GmbH',
    from: eventDate(2009, 7),
    to: eventDate(2012, 2),
    description:
      'Ich habe verschiedene Webseiten, Druckprodukte und Logos gestaltet, den Digital- und Offsetdruck unterstützt sowie die Druckerzeugnisse veredelt und weiterverarbeitet.',
  },
  {
    name: 'Mediengestalter',
    place: 'Medienzirkus Gudrun Schwanck',
    from: eventDate(2008, 8),
    to: eventDate(2009, 6),
    description:
      'Ich habe verschiedene Webseiten, Druckprodukte und Logos gestaltet, den Digital- und Offsetdruck unterstützt sowie die Druckerzeugnisse veredelt und weiterverarbeitet.',
  },
  {
    name: 'Mediengestalter',
    place: 'Druckerei Kaufmann + Meinberg',
    from: eventDate(2008, 8),
    to: eventDate(2009, 2),
    description:
      'Ich habe verschiedene Webseiten, Druckprodukte und Logos gestaltet, den Digital- und Offsetdruck unterstützt sowie die Druckerzeugnisse veredelt und weiterverarbeitet.',
  },
];
