import { eventDate, nowEventDate } from '$lib/helper/date';
import type { TimedEventEntry } from '$lib/types';

export const jobs: TimedEventEntry[] = [
  {
    name: 'Softwareentwickler',
    place: 'novomind AG',
    from: eventDate(2015, 3),
    to: nowEventDate(),
    description:
      'Nach meinem Studium find ich als Fullstack Entwickler bei der novomind AG and und betreute dort den Jungheinrich Profishop. Auch wenn ich anfangs viel am JAVA Backend arbeitete verlagerte sich meine Arbeit schnell in das Frontend und ich konnte mein Können dort weiter ausbauen, Technologien wie jQuery, Typescript und Angular.js lernte ich in dieser Zeit kennen. 2020 wechselte ich dann in das Core-Team von novomind um dort die Neuentwicklung unserer Shop-Adminoberfläche als Frontend Architect zu leiten. Dabei setzten wir neuste Technologien wie GraphQL und Vue.js (erst Version 2, dann 3) ein.',
  },
  {
    name: 'Mediengestalter',
    place: 'Medienzirkus Gudrun Schwanck',
    from: eventDate(2012, 3),
    to: eventDate(2015, 2),
    description:
      'Während meines Medieninformatik-Studiums kehrte ich zu meinem alten Ausbildungsbetrieb zurück und übernahm dort wieder meine alten Aufgaben während ich mir neues Können aneignete.',
  },
  {
    name: 'Mediengestalter',
    place: 'A.S. Müller Sofortdruck GmbH',
    from: eventDate(2009, 7),
    to: eventDate(2012, 2),
    description:
      'Nach dem Zusammenschluss der Druckerei Kaufmann + Meinberg mit der A.S. Müller Sofortdruck GmbH fing ich an in diesem Betrieb zu arbeiten und übernahm hauptsächlich die Betreuung unserer Automobilkunden: Audi, VW, Porsche udn Skoda. Ich gestaltete viele Druckprodukte das alltäglichen Bürobedarfs aber auch Flyer und und arbeitete stark in der Weiterverarbeitung mit während ich mich immer mehr mit Webdesign beschäftigte.',
  },
  {
    name: 'Mediengestalter',
    place: 'Medienzirkus Gudrun Schwanck',
    from: eventDate(2008, 8),
    to: eventDate(2009, 6),
    description:
      'Dies war mein Ausbildungsbetrieb, damals noch bekannt als S/G/P/ (Satz, Grafik, Produktion) Schwanck. Hier habe ich viele verschiedene Druckprodukte für namenhafte Kunden wie z.B. Sharp und die Newell Rubbermaid gestaltet, gedruckt und verarbeitet sowie einige Webseiten designed und umgesetzt.',
  },
  {
    name: 'Mediengestalter',
    place: 'Druckerei Kaufmann + Meinberg',
    from: eventDate(2008, 8),
    to: eventDate(2009, 2),
    description:
      'Nach meiner Ausbildung zum Mediengestalter habe ich in diesem Partnerbetrieb meines Ausbildungsbetriebes halbtags gearbeitet und dort verschiedene Druckprodukte, wie z.B. Briefbögen, Flyer aber auch Webseiten gestaltet.',
  },
];
