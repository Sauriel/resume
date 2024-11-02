export function childMousePosition(node: HTMLElement) {
  function onMouseMove(event: MouseEvent) {
    for (const child of node.children) {
      const x = event.clientX - child.getBoundingClientRect().left;
      const y = event.clientY - child.getBoundingClientRect().top;
      (child as HTMLElement).style.setProperty('--mouse-x', `${x}px`);
      (child as HTMLElement).style.setProperty('--mouse-y', `${y}px`);
    }
  }

  node.addEventListener('mousemove', onMouseMove);

  return {
    update() {},
    destroy() {
      node.removeEventListener('mousemove', onMouseMove);
    },
  };
}
