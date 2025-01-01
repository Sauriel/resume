<template>
  <div id="contact-links">
    <a class="contact-link" href="https://www.sauriel.net" target="_blank">
      <Icon name="fa6-solid:globe" />
      sauriel.net
    </a>
    <CryptMail class="contact-link" name="sascha.muenchow" domain="gmx" tld="de">
      <Icon name="fa6-solid:envelope" />
    </CryptMail>
    <a class="contact-link" href="https://www.linkedin.com/in/smuenchow" target="_blank">
      <Icon name="fa6-brands:linkedin" />
      linkedin.com/in/smuenchow
    </a>
    <a class="contact-link" href="https://www.github.com/Sauriel" target="_blank">
      <Icon name="fa6-brands:square-github" />
      github.com/Sauriel
    </a>
    <a class="contact-link" href="https://www.xing.com/profile/Sascha_Muenchow/" target="_blank">
      <Icon name="fa6-brands:square-xing" />
      xing.com/profile/Sascha_Muenchow/
    </a>
    <a class="contact-link" href="https://bsky.app/profile/sauriel.net" target="_blank">
      <Icon name="fa6-brands:bluesky" />
      @sauriel.net
    </a>
  </div>
</template>

<style scoped>
#contact-links {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

#contact-links > .contact-link {
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1ch;
  color: var(--color-light);
  text-decoration: underline;
  text-decoration-style: dashed;
  text-decoration-color: var(--color-primary);
  text-underline-offset: 0.25em;
}

#contact-links > .contact-link:hover {
  color: var(--color-light--darker);
  text-decoration-color: var(--color-primary--darker);
  text-decoration-style: solid;
}
</style>
