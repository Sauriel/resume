import { hexHash } from '$lib/helper/string';

export function tooltip(node: HTMLElement, text: string) {
  const popoverWrapper = document.querySelector('#popovers')!;
  let popoverId: string = '';
  let popover: HTMLDivElement;

  function showPopover() {
    popover.showPopover();
  }

  function hidePopover() {
    popover.hidePopover();
  }

  function addPopover(text: string) {
    const hash = hexHash(text);
    popoverId = `popover-${hash}`;
    removePopover(popoverId);
    popover = document.createElement('div');
    popover.id = popoverId;
    popover.setAttribute('popover', '');
    popover.style.setProperty('--popover-trigger', `--popover-trigger-${hash}`);
    popover.innerHTML = text;
    popover.classList.add('tooltip');
    popover.classList.add('no-wrap');
    popoverWrapper.appendChild(popover);

    node.setAttribute('popovertarget', popoverId);
    node.style.setProperty('--popover-trigger', `--popover-trigger-${hash}`);

    node.addEventListener('mouseenter', showPopover);
    node.addEventListener('mouseleave', hidePopover);
  }

  function removePopover(id: string) {
    node.removeEventListener('mouseenter', showPopover);
    node.removeEventListener('mouseleave', hidePopover);
    document.querySelector(`#${id}`)?.remove();
  }

  addPopover(text);

  return {
    update(newText: string) {
      // text = newText;
      removePopover(popoverId);
      addPopover(newText);
    },
    destroy() {},
  };
}
