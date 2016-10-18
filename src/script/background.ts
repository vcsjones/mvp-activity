import {QueryResponse} from './model'

class TabQueryListener {
    initialize() {
        chrome.runtime.onMessage.addListener((request : string, sender, response) => {
            if (request !== 'taburl') {
                return;
            }
            chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
                if (tabs.length !== 1) {
                    return;
                }
                const tab_url = tabs[0].url;
                const tab_title = tabs[0].title;
                const query_response = <QueryResponse>{tab_url : tab_url, tab_title : tab_title};
                response(query_response);
            });
            return true;
        });

        chrome.runtime.onStartup.addListener(() => {
            this.applyDevWatermark();
        });

        chrome.runtime.onInstalled.addListener(() => {
            this.applyDevWatermark();
        });
    }

    applyDevWatermark() {
        chrome.management.getSelf(self => {
            if (self.installType === 'development') {
                chrome.browserAction.setBadgeText({ text: 'DEV' });
            }
        });
    }
}

const listener = new TabQueryListener();
listener.initialize();