// ==UserScript==
// @name         Reddit Place - FC Fleur
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  Vive les fleurs !!!
// @author       Stimm4
// @match        https://hot-potato.reddit.com/embed*
// @icon         https://styles.redditmedia.com/t5_4eiiz1/styles/communityIcon_ojy24r8j90o81.jpg
// @grant        none
// ==/UserScript==
const IMG_URL = 'https://github.com/Stimm444/FleurPixelWar/raw/main/flower_pixel_war.png'
if (window.top !== window.self) {
    window.addEventListener('load', () => {
            document.getElementsByTagName("mona-lisa-embed")[0].shadowRoot.children[0].getElementsByTagName("mona-lisa-canvas")[0].shadowRoot.children[0].appendChild(
        (function () {
            const i = document.createElement("img");
            i.src = IMG_URL;
            i.style = "position: absolute;left: 0;top: 0;image-rendering: pixelated;width: 2000px;height: 2000px;";
            console.log(i);
            return i;
        })())

    }, false);

}
