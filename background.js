chrome.webRequest.onBeforeRequest.addListener(
    (details) => {
      if (details.url.includes("/api/chat/message-count")) {
        console.log("API request detected and handled by rules:", details.url);
      }
    },
    { urls: ["*://api-v2.aifiesta.ai/*"] }
);