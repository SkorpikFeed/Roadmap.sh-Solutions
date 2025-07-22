document.addEventListener("DOMContentLoaded", () => {
  if (!cookiesAccepted()) {
    document.querySelector(".cookie").classList.remove("disabled");
  }
});

document.getElementById("cookie-accepted").addEventListener("click", () => {
  document.querySelector(".cookie").classList.add("disabled");

  const expiryDate = new Date();
  expiryDate.setTime(expiryDate.getTime() + 24 * 60 * 60 * 1000);

  document.cookie = `cookieConsent=accepted; expires=${expiryDate.toUTCString()}; path=/; SameSite=Strict`;
});

document.getElementById("cookie-discarded").addEventListener("click", () => {
  document.querySelector(".cookie").classList.add("disabled");
});

function cookiesAccepted() {
  const cookies = `; ${document.cookie}`;
  const cookieParts = cookies.split("; cookieConsent=");
  if (cookieParts[1] === "accepted") return true;
  return false;
}
