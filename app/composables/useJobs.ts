import type { TimedEventEntry } from '~/types';

export default function useJobs() {
  const { t } = useI18n();

  const jobs = computed<TimedEventEntry[]>(() => [
    {
      name: t('jobs.job5.title'),
      place: 'novomind AG',
      from: eventDate(2015, 3),
      to: eventDate(2025, 2),
      description: t('jobs.job5.description'),
    },
    {
      name: t('jobs.job4.title'),
      place: 'Medienzirkus Gudrun Schwanck',
      from: eventDate(2012, 3),
      to: eventDate(2015, 2),
      description: t('jobs.job4.description'),
    },
    {
      name: t('jobs.job3.title'),
      place: 'A.S. Müller Sofortdruck GmbH',
      from: eventDate(2009, 7),
      to: eventDate(2012, 2),
      description: t('jobs.job3.description'),
    },
    {
      name: t('jobs.job2.title'),
      place: 'Medienzirkus Gudrun Schwanck',
      from: eventDate(2008, 8),
      to: eventDate(2009, 6),
      description: t('jobs.job2.description'),
    },
    {
      name: t('jobs.job1.title'),
      place: 'Druckerei Kaufmann + Meinberg',
      from: eventDate(2008, 8),
      to: eventDate(2009, 2),
      description: t('jobs.job1.description'),
    },
  ]);

  return {
    jobs,
  };
}
