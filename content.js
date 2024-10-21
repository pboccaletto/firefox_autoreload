// content.js
let intervalId;

browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "startRefresh") {
    intervalId = setInterval(() => {
      location.reload();
    }, 30000); // 30 seconds
  } else if (message.action === "stopRefresh") {
    clearInterval(intervalId);
  }
});
