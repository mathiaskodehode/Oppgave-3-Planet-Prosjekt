const cookieBanner = document.getElementById("cookieBanner");
const cookiesAcceptButton = document.getElementById("cookiesAcceptButton");
const cookiesDeclineButton = document.getElementById("cookiesDeclineButton");
const cookieBannerButtons = document.getElementById("cookieBannerButtons");
cookiesAcceptButton.addEventListener("click", removeCookieBanner);

cookiesDeclineButton.addEventListener("click", removeDeclineButton);

cookiesDeclineButton.addEventListener("mouseenter", switchButtonPositions);

function removeCookieBanner() {
    cookieBanner.remove();
}

function removeDeclineButton() {
    cookiesDeclineButton.remove();
}

function switchButtonPositions() {
    cookieBannerButtons.classList.toggle('rowReverse');
}
