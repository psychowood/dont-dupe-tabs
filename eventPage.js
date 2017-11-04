(function () {
    console.log("started");

    var tabsQueue = {};

    function updateIcon(enabled) {
        if (enabled) {
            chrome.browserAction.setTitle({ title: 'Enabled' });
            chrome.browserAction.setIcon({ path: 'icon-open.png' });
        } else {
            chrome.browserAction.setTitle({ title: 'Disabled' });
            chrome.browserAction.setIcon({ path: 'icon-closed.png' });
        }
    };

    document.addEventListener("DOMContentLoaded", function () {
        console.log("onLoad");
        tabsQueue = {};
        chrome.storage.sync.get({ 'enabled': true }, function (options) {
            var enabled = options.enabled === true;
            chrome.storage.sync.set({ 'enabled': enabled }, function () {
                updateIcon(enabled);
            });
        });
    }, false);

    chrome.tabs.onCreated.addListener(function (newTab) {
        var tslog = new Date().getTime();
        var tabId = newTab.id;
        console.log(tslog, "onCreated", tabId);
        console.log(tslog, "tabUrl", newTab.url);
        setTimeout(function() {
            chrome.tabs.get(tabId, function(tab){
                console.log(tslog, "tabUrl - postponed", tab.url);
                var tabUrl = tab.url;
                console.log(tslog, "storage get");
                chrome.storage.sync.get({ 'enabled': true }, function (options) {
                    console.log(tslog, "storage got");
                    var enabled = (options.enabled === true);
                    updateIcon(enabled);
                    if (enabled) {
                        if (!tabsQueue[tabUrl]) {
                            console.log(tslog, "url not found", tabUrl);
                            tabsQueue[tabUrl] = true;
                            var tabId = tab.id;
                            chrome.browserAction.setBadgeText({ text: '' });
                            chrome.browserAction.setBadgeBackgroundColor({ color: '#618cae' });
                            console.log(tslog, "enabled, querying");
                            chrome.tabs.query({ url: tabUrl }, function (tabs) {
                                console.log(tslog, "query result", tabs);
                                if (tabs) {
                                    let i, t, removed = 0;
                                    for (i = 0; i < tabs.length; i++) {
                                        t = tabs[i];
                                        if (t.id !== tabId) {
                                            chrome.tabs.remove(t.id);
                                            console.log(tslog, "duplicate found, removing", t.id);
                                            removed++;
                                        }
                                    }
                                    if (removed > 0) {
                                        chrome.browserAction.setBadgeText({ text: '' + removed });
                                        chrome.browserAction.setTitle({ title: 'Closed ' + removed + ' duplicated tabs' });
                                    }
                                }
                                delete tabsQueue[tabUrl];
                            });
                        } else {
                            console.log(tslog, "url aready queued", tabUrl);
                        }
                    } else {
                        console.log(tslog, "extension disabled");
                    };
                });
            }); 
        },250);
    });

    chrome.browserAction.onClicked.addListener(function (tabs) {
        console.log("onClicked");
        chrome.browserAction.setBadgeText({ text: '' });
        chrome.storage.sync.get({ 'enabled': true }, function (olditems) {
            var enabled = olditems.enabled !== true;
            chrome.storage.sync.set({ 'enabled': enabled }, function () {
                updateIcon(enabled);
            });
        });
    });
})();