import {QueryResponse} from './model'

window.addEventListener('message', eve => {
    //This is a weird response from the frame but that's what
    //the MVP site sends when it wants to close.
    if (eve.data === 'Hello From IFrame') {
        window.close();
    }
});

chrome.runtime.sendMessage('taburl', (response : QueryResponse) => {
    const tab_url = response.tab_url;
    const tab_title = response.tab_title;
    const placeholder = document.getElementById('loading');
    const frame = <HTMLIFrameElement>document.getElementById('mvpframe');
    const root_uri = 'https://mvp.microsoft.com/en-us/Bookmarklet/';
    const frame_uri = `${root_uri}?url=${encodeURIComponent(tab_url)}&title=${encodeURIComponent(tab_title)}`;
    frame.src = frame_uri;
    frame.addEventListener('load', () => {
        frame.classList.add('show');
        placeholder.classList.add('hidden');
    });
});