import {QueryResponse} from './model'

class TabQueryListener {
    initialize() {
        chrome.runtime.onMessage.addListener((request : string, sender, response) => {
            console.log(request);
            if (request !== 'taburl') {
                return;
            }
            console.log(sender);
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
    }
}

const listener = new TabQueryListener();
listener.initialize();