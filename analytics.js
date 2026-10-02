// Cloudflare Web Analytics (cookie-free, so no cookie banner is needed).
// To turn it on: Cloudflare dashboard -> Analytics & Logs -> Web Analytics ->
// Add a site -> copy the "token" value from the snippet it shows, and paste it below.
// While the token is empty, nothing is loaded.
var CF_ANALYTICS_TOKEN = '';

if (CF_ANALYTICS_TOKEN) {
  var s = document.createElement('script');
  s.defer = true;
  s.src = 'https://static.cloudflareinsights.com/beacon.min.js';
  s.setAttribute('data-cf-beacon', JSON.stringify({ token: CF_ANALYTICS_TOKEN }));
  document.head.appendChild(s);
}
