chrome.browserAction.onClicked.addListener(function (tab) {
    const tweetText = `${tab.title}: ${tab.url}`;
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;
    chrome.windows.create({
        url: tweetUrl,
        type: "popup",
        width: 600,
        height: 400
    });
});