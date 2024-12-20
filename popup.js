document.getElementById('tweetButton').addEventListener('click', function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        const tab = tabs[0];
        const tweetText = `${tab.title}: ${tab.url}`;
        const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;
        chrome.windows.create({
            url: tweetUrl,
            type: "popup",
            width: 600,
            height: 400
        });
    });
});
