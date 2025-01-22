<template>
  <div id="impressum">
    <section>
      <header>{{ $t('impressum.details.header') }}</header>
      <p>Sascha Münchow</p>
      <p>Scharbeutzer Straße 6</p>
      <p>22147 Hamburg</p>
    </section>
    <section>
      <header>{{ $t('impressum.contact.header') }}</header>
      <p>
        {{ $t('impressum.contact.mail') }}
        <CryptMail class="mail-link" name="sascha.muenchow" domain="gmx" tld="de" />
      </p>
    </section>
    <section>
      <header>{{ $t('impressum.mediation.header') }}</header>
      <p>
        {{ $t('impressum.mediation.text') }}
      </p>
    </section>
  </div>
</template>

<style scoped>
#impressum {
  display: flex;
  flex-direction: column;
  gap: 1em;
}

section > header {
  font-size: 1.2em;
  font-weight: bold;
}

section > p {
  margin: 0;
}

.mail-link {
  color: var(--color-light);
  text-decoration: none;
}

.mail-link:hover {
  color: var(--color-light--darker);
  text-decoration-color: var(--color-primary--darker);
}
</style>
