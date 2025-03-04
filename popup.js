// popup.js
document.getElementById("startButton").addEventListener("click", () => {
  browser.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    browser.tabs.sendMessage(tabs[0].id, { action: "startRefresh" });
  });
});

document.getElementById("stopButton").addEventListener("click", () => {
  browser.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    browser.tabs.sendMessage(tabs[0].id, { action: "stopRefresh" });
  });
});
