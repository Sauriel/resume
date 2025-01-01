<template>
  <div id="post">
    <ContentDoc />
  </div>
</template>

<style scoped>
#post {
  font-size: 1.1em;
  line-height: 1.5;
}

#post :deep(a) {
  color: var(--color-light);
  text-decoration: underline;
  text-decoration-style: dashed;
  text-decoration-color: var(--color-primary);
  text-underline-offset: 0.25em;
}

#post :deep(li) {
  margin-bottom: 0.2em;
}

#post :deep(code) {
  background-color: var(--color-light--darker);
  color: var(--color-dark--darker);
  padding: 0.1em 0.5em;
  border-radius: 4px;
}
</style>
