document.addEventListener("DOMContentLoaded", function () {
  const saveButton = document.getElementById("save");
  const headerInput = document.getElementById("heading");
  const messageInput = document.getElementById("message");
  const startDateInput = document.getElementById("startDate");

  chrome.storage.sync.get(["heading", "message", "startDate"], function (data) {
    headerInput.value = data.heading || "";
    messageInput.value = data.message || "";
    startDateInput.value = data.startDate || "";
  });

  saveButton.addEventListener("click", function () {
    chrome.storage.sync.set(
      {
        heading: headerInput.value,
        message: messageInput.value,
        startDate: startDateInput.value,
      },
      function () {
        window.close(); // Close the settings tab after saving
      },
    );
  });
});
