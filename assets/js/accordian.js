document.addEventListener("DOMContentLoaded", function() {
    var accordionItems = document.querySelectorAll(".accordion.block");

    accordionItems.forEach(function(item) {
        var btn = item.querySelector(".acc-btn");

        btn.addEventListener("click", function() {
            var isActive = item.classList.contains("active-block");

            accordionItems.forEach(function(item) {
                item.classList.remove("active-block");
            });

            if (!isActive) {
                item.classList.add("active-block");
            }
        });
    });

    // Close accordion when clicking anywhere outside of it
    document.body.addEventListener("click", function(event) {
        var isAccordionBtn = event.target.closest(".acc-btn");
        var isAccordionContent = event.target.closest(".acc-content");

        if (!isAccordionBtn && !isAccordionContent) {
            accordionItems.forEach(function(item) {
                item.classList.remove("active-block");
            });
        }
    });
});

const siraContainer = document.querySelectorAll(".fixedCountdownContainer");
siraContainer.forEach((container) =>
    container.addEventListener("click", (e) => {
    if (e.target.classList.value === "innerWrapper" && !window.location.includes('sira')) {
      window.open("sira.html", "_blank");
    }
  })
);

function getPSTOffset() {
  // PST is 8 hours behind UTC
  return -8 * 60 * 60 * 1000;
}

const countdownDate = new Date("2024-07-20T00:00:00-08:00").getTime(); // Set countdown date with PST offset

const countdownTimer = setInterval(() => {
  const now = new Date().getTime() + getPSTOffset(); // Get current time with PST offset
  const difference = countdownDate - now;

  const months = Math.floor(difference / (1000 * 60 * 60 * 24 * 30));
  const days = Math.floor(
    (difference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)
  );
  const hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000); // Calculate seconds

  document
    .querySelectorAll(".months")
    .forEach((item) => (item.innerHTML = months));
  document.querySelectorAll(".days").forEach((item) => (item.innerHTML = days));
  document
    .querySelectorAll(".hours")
    .forEach((item) => (item.innerHTML = hours));
  document
    .querySelectorAll(".minutes")
    .forEach((item) => (item.innerHTML = minutes));
  document
    .querySelectorAll(".seconds")
    .forEach((item) => (item.innerHTML = seconds));

  document.getElementById("months").innerHTML = months;
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds; // Update seconds

  if (difference <= 0) {
    clearInterval(countdownTimer);
    document.getElementById("countdown").innerHTML =
      "Thanks for attending SIRA 2024. See you at the next edition.";
  }
}, 1000);
