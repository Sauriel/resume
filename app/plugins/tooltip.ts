import type { TooltipPayload } from '~/types';

type PopoverListener = {
  showPopover: () => void;
  hidePopover: () => void;
};

function removePopover(el: HTMLElement, id: string, listener: PopoverListener) {
  el.removeEventListener('mouseenter', listener.showPopover);
  el.removeEventListener('mouseleave', listener.hidePopover);
  document.querySelector(`#${id}`)?.remove();
}

function addPopover(el: HTMLElement, payload: TooltipPayload): HTMLDivElement | null {
  let popover: HTMLDivElement;

  function showPopover() {
    popover.showPopover();
  }

  function hidePopover() {
    popover.hidePopover();
  }
  if (payload.text) {
    const popoverWrapper = document.querySelector('#popovers')!;
    const hash = hexHash(el.innerHTML);
    const popoverId = `popover-${hash}`;
    removePopover(el, popoverId, { showPopover, hidePopover });
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

    el.setAttribute('popovertarget', popoverId);
    el.style.setProperty('--popover-trigger', `--popover-trigger-${hash}`);

    el.addEventListener('mouseenter', showPopover);
    el.addEventListener('mouseleave', hidePopover);
    return popover;
  }
  return null;
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive<HTMLElement, TooltipPayload>('tooltip', {
    mounted(el, binding) {
      addPopover(el, binding.value);
    },
    updated(el, binding) {
      addPopover(el, binding.value);
    },
    unmounted(el) {
      const hash = hexHash(el.innerHTML);
      const popoverId = `popover-${hash}`;
      document.querySelector(`#${popoverId}`)?.remove();
    },
  });
});
