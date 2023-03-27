const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {

    window.deferredPrompt = event;
    showInstallButton(event);
  });

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {    
    
    const promptEvent = window.deferredPrompt;

    if (!promptEvent) {
      return;
    }

    promptEvent.prompt();

    window.deferredPrompt = null;});


// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => { 
    hideInstallButton();

    // Clear prompt
    window.deferredPrompt = null;
  });