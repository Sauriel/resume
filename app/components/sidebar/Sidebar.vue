<template>
  <aside>
    <UiHexagon size="16rem" color="var(--color-dark)" class="hex-header">
      <SidebarSaurielLogo />
    </UiHexagon>
    <div id="content">
      <SidebarName />
      <SidebarSkills />
    </div>
  </aside>
</template>

<style scoped>
aside {
  grid-area: sidebar;
  position: relative;
  padding-top: 8rem;
  border-top-right-radius: 0.5rem;
  background-color: var(--color-primary);
  background-image: radial-gradient(
    ellipse at left,
    var(--color-primary--lighter),
    var(--color-primary)
  );
}

aside > .hex-header {
  position: absolute;
  top: -8rem;
  left: 50%;
  translate: -50%;
  padding: 3rem;
}

#content {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 5vh;
}
</style>
