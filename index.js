const devtools = {
  isOpen: false,
};

const threshold = 170;

const emitEvent = (isOpen) => {
  globalThis.dispatchEvent(new globalThis.CustomEvent('devtoolschange', {
    detail: {
      isOpen,
    },
  }));
};

const checkDevToolsStatus = () => {
  const widthThreshold = globalThis.outerWidth - globalThis.innerWidth > threshold;
  const heightThreshold = globalThis.outerHeight - globalThis.innerHeight > threshold;

  const isDevToolsOpen =
    widthThreshold ||
    heightThreshold ||
    (globalThis.Firebug && globalThis.Firebug.chrome && globalThis.Firebug.chrome.isInitialized);

  if (isDevToolsOpen !== devtools.isOpen) {
    devtools.isOpen = isDevToolsOpen;
    emitEvent(isDevToolsOpen);
  }
};

// Initially check DevTools status without emitting events
checkDevToolsStatus();

// Set up an interval to periodically check DevTools status and emit events
setInterval(checkDevToolsStatus, 500);

export default devtools;
