import type { TimedEventEntry } from '~/types';

export default function useEducation() {
  const { t } = useI18n();

  const education = computed<TimedEventEntry[]>(() => [
    {
      name: t('education.ed3.title'),
      place: 'HAW Hamburg',
      from: eventDate(2012, 3),
      to: eventDate(2015, 2),
      description: t('education.ed3.description'),
    },
    {
      name: t('education.ed2.title'),
      place: 'G5 Berufsschule',
      from: eventDate(2005, 8),
      to: eventDate(2008, 7),
      description: t('education.ed2.description'),
    },
    {
      name: t('education.ed1.title'),
      place: 'FOS Gestaltung',
      from: eventDate(2003, 8),
      to: eventDate(2005, 7),
      description: t('education.ed1.description'),
    },
  ]);

  return {
    education,
  };
}
