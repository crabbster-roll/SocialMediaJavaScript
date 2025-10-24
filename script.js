document.addEventListener("DOMContentLoaded", function () {
  // Social Media Sharing Functions
  function shareOnFacebook(event) {
    event && event.preventDefault();
    // Replace with the actual URL you want to share
    const urlToShare = 'https://crabbster-roll.github.io/ComfortCreature-Website/';
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(urlToShare)}`;
    openCenteredPopup(facebookShareUrl, 'Share on Facebook', 600, 480);
  }

  function shareOnTwitter(event) {
    event && event.preventDefault();
    // Replace with the actual URL and text you want to share
    const urlToShare = 'https://crabbster-roll.github.io/ComfortCreature-Website/';
    const textToShare = 'Share it on Twitter!';
    const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(urlToShare)}&text=${encodeURIComponent(textToShare)}`;
    openCenteredPopup(twitterShareUrl, 'Share on Twitter', 600, 420);
  }

  // helper to open a centered popup
  function openCenteredPopup(url, title, w = 600, h = 400) {
    const left = window.screenX + (window.outerWidth - w) / 2;
    const top = window.screenY + (window.outerHeight - h) / 2;
    const opts = `width=${w},height=${h},left=${left},top=${top},resizable=yes,scrollbars=yes`;
    window.open(url, title, opts);
  }

  // Event listeners for social media sharing buttons (defensive checks)
  const shareFacebookButton = document.getElementById("share-facebook");
  const shareTwitterButton  = document.getElementById("share-twitter");

  if (shareFacebookButton) {
    shareFacebookButton.addEventListener("click", shareOnFacebook);
  } else {
    console.warn('share-facebook button not found (id="share-facebook")');
  }

  if (shareTwitterButton) {
    shareTwitterButton.addEventListener("click", shareOnTwitter);
  } else {
    console.warn('share-twitter button not found (id="share-twitter")');
  }
});
