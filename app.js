var urlToOpen = "https://jerom-physicus.github.io/sample-push/";

// Try to open the URL in the default system browser
var isChrome =
  /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
if (isChrome) {
  window.location.href = urlToOpen;
} else {
  // Fallback for non-Chrome browsers or devices without Chrome
  // You can handle this case differently based on your requirements
  alert("Please open this link in Chrome.");
}
