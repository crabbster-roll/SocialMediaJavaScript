document.addEventListener("DOMContentLoaded", function () {
  // Social Media Sharing Functions

  function openCenteredPopup(url, title, w = 600, h = 400) {
    const left = window.screenX + (window.outerWidth - w) / 2;
    const top  = window.screenY + (window.outerHeight - h) / 2;
    const opts = `width=${w},height=${h},left=${left},top=${top},resizable=yes,scrollbars=yes`;
    const popup = window.open(url, title, opts);
    if (!popup) {
      console.warn("Popup blocked. Allow popups for this site to test sharing.");
    } else {
      popup.focus && popup.focus();
    }
  }

  function shareOnFacebook(event) {
    event && event.preventDefault();
    // Replace 'your-website-url' with the URL you want to share if needed
    const urlToShare = 'https://crabbster-roll.github.io/SocialMediaJavaScript/';
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(urlToShare)}`;
    openCenteredPopup(facebookShareUrl, 'Share on Facebook', 600, 480);
  }

  function shareOnTwitter(event) {
    event && event.preventDefault();
    // Replace 'your-website-url' and 'your-text' with your desired URL and text
    const urlToShare = 'https://crabbster-roll.github.io/SocialMediaJavaScript/';
    const textToShare = 'Check out this post!';
    const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(urlToShare)}&text=${encodeURIComponent(textToShare)}`;
    openCenteredPopup(twitterShareUrl, 'Share on Twitter', 600, 420);
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
