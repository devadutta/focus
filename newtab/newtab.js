document.addEventListener("DOMContentLoaded", function () {
  chrome.storage.sync.get(["heading", "message", "startDate"], function (data) {
    const now = new Date();
    const startDate = new Date(data.startDate);
    const differenceInTime = now.getTime() - startDate.getTime();
    const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));

    document.getElementById("heading").textContent = data.heading || "Welcome!";
    document.getElementById("message").textContent =
      data.message || "to your world";
    document.getElementById("counter").textContent = `${differenceInDays} days`;
  });
});
