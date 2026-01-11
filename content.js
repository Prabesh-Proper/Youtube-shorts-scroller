"use strict";

(function () {
  let userInteracted = false;
  let currentVideo = null;
  let scrollTimeout = null;

  console.log("Shorts Scroller: Initialized");

  
  function resetInteractionState() {
    userInteracted = false;
    if (scrollTimeout) {
      clearTimeout(scrollTimeout);
      scrollTimeout = null;
    }
  }

  
  function handleUserInteraction() {
    userInteracted = true;
    if (scrollTimeout) {
      clearTimeout(scrollTimeout);
      scrollTimeout = null;
    }
   
  }

 
  window.addEventListener("wheel", handleUserInteraction, { passive: true });
  window.addEventListener("touchmove", handleUserInteraction, { passive: true });
  window.addEventListener("keydown", (e) => {
  
    if (["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End", " "].includes(e.key)) {
      handleUserInteraction();
    }
  }, { passive: true });
  window.addEventListener("mousedown", handleUserInteraction, { passive: true });


 
  function scrollToNextShort() {
    if (userInteracted) return;



    scrollTimeout = setTimeout(() => {
      
      if (userInteracted) return;

      
      const event = new KeyboardEvent('keydown', {
        key: 'ArrowDown',
        code: 'ArrowDown',
        keyCode: 40,
        bubbles: true,
        cancelable: true
      });
      document.body.dispatchEvent(event);
      
     
    }, 300); 
  }

 
  function attachListener(video) {
    if (video.dataset.Attached) return;

   
    video.dataset.Attached = "true";

  
    video.addEventListener("ended", () => {
      
      if (isVideoVisible(video)) {
          scrollToNextShort();
      }
    });

    
    video.addEventListener("play", () => {
       if (isVideoVisible(video) && currentVideo !== video) {
           currentVideo = video;
           resetInteractionState();
          
       }
    });
  }

  
  function isVideoVisible(video) {
      const rect = video.getBoundingClientRect();
     
      return (rect.top >= -100 && rect.bottom <= (window.innerHeight + 100));
  }

  
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (node.nodeType === 1) { 
            if (node.tagName === 'VIDEO') {
                attachListener(node);
            }
            
            const videos = node.querySelectorAll('video');
            videos.forEach(attachListener);
        }
      });
    });
  });

  
  observer.observe(document.body, { childList: true, subtree: true });

  
  const existingVideos = document.querySelectorAll('video');
  existingVideos.forEach(attachListener);

})();
