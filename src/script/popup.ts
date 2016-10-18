import {QueryResponse} from './model'

window.addEventListener('message', eve => {
    //This is a weird response from the frame but that's what
    //the MVP site sends when it wants to close.
    if (eve.data === 'Hello From IFrame') {
        window.close();
    }
});

chrome.runtime.sendMessage('taburl', (response : QueryResponse) => {
    const placeholder = <HTMLDivElement>document.getElementById('loading');
    const frame = <HTMLIFrameElement>document.getElementById('mvpframe');
    const root_uri = 'https://mvp.microsoft.com/en-us/Bookmarklet/';
    let frame_uri = root_uri;
    //In the event that the background script didn't properly report the current
    //tab, open the frame anyway with none of the textboxes filled out.
    if (typeof response !== 'undefined') {
        frame_uri += `?url=${encodeURIComponent(response.tab_url)}&title=${encodeURIComponent(response.tab_title)}`;
    }
    //If the activity page doesn't load in 30 seconds, show a message.
    const timer = window.setTimeout(() => {
        placeholder.innerText = 'There was a problem loading the activities page.';
    }, 30 * 1000);
    frame.src = frame_uri;
    frame.addEventListener('load', () => {
        window.clearTimeout(timer);
        frame.classList.add('show');
        placeholder.classList.add('hidden');
    });
});