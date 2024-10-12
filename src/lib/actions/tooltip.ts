import { hexHash } from '$lib/helper/string';
import type { TooltipPayload } from '$lib/types';

export function tooltip(node: HTMLElement, payload: TooltipPayload) {
  const popoverWrapper = document.querySelector('#popovers')!;
  let popoverId: string = '';
  let popover: HTMLDivElement;

  function showPopover() {
    popover.showPopover();
  }

  function hidePopover() {
    popover.hidePopover();
  }

  function addPopover(payload: TooltipPayload) {
    if (payload.text) {
      const hash = hexHash(node.innerHTML);
      popoverId = `popover-${hash}`;
      removePopover(popoverId);
      popover = document.createElement('div');
      popover.id = popoverId;
      popover.setAttribute('popover', '');
      popover.style.setProperty('--popover-trigger', `--popover-trigger-${hash}`);
      popover.innerHTML = payload.text;
      popover.classList.add('tooltip');
      switch (payload.position) {
        case 'top':
          popover.classList.add('tooltip--top');
          break;
        case 'left':
          popover.classList.add('tooltip--left');
          break;
        case 'bottom':
          popover.classList.add('tooltip--bottom');
          break;
        case 'right':
          popover.classList.add('tooltip--right');
          break;
      }
      popover.classList.add('no-wrap');
      popoverWrapper.appendChild(popover);

      node.setAttribute('popovertarget', popoverId);
      node.style.setProperty('--popover-trigger', `--popover-trigger-${hash}`);

      node.addEventListener('mouseenter', showPopover);
      node.addEventListener('mouseleave', hidePopover);
    }
  }

  function removePopover(id: string) {
    node.removeEventListener('mouseenter', showPopover);
    node.removeEventListener('mouseleave', hidePopover);
    document.querySelector(`#${id}`)?.remove();
  }

  addPopover(payload);

  return {
    update(newPayload: TooltipPayload) {
      // text = newText;
      removePopover(popoverId);
      addPopover(newPayload);
    },
    destroy() {},
  };
}
