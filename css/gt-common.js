/* gt-common.js */
/*------------------------------------------------------------------------------------------------------------------------------------------
	File : gt-common.css
	Company : HanaTI
    Editor : kimgitae
    Last Edit Date : 2025-05-18
--------------------------------------------------------------------------------------------------------------------------------------------*/

function openAppOrRedirect() {
    const userAgent = navigator.userAgent;
    let appUrl = "";
    let isIOS = /iPhone|iPad|iPod/i.test(userAgent);
    let isAndroid = /android/i.test(userAgent);
    let isAppOpened = false;

    if (isAndroid) {
        appUrl = "intent://passapp/#Intent;scheme=1qonpass;package=com.hanati.pass;end;";
        // storeUrl이 미리 정의되어 있지 않으면 기본값 사용
        if (typeof window.storeUrl === "undefined") {
            window.storeUrl = "market://details?id=com.hanati.pass";
        }
    } else if (isIOS) {
        appUrl = "oneqpass://";
        if (typeof window.storeUrl === "undefined") {
            window.storeUrl = "https://apps.apple.com/us/app/1q-on-pass/id6474642959";
        }
    } else {
        return;
    }

    const now = Date.now();
    const iframe = document.createElement("iframe");
    iframe.style.display = "none";
    iframe.src = appUrl;
    document.body.appendChild(iframe);

    setTimeout(() => {
        if (Date.now() - now < 500) {
            window.location.href = window.storeUrl;
        }
    }, 3000);

    document.addEventListener("visibilitychange", function () {
        if (document.hidden) {
            isAppOpened = true;
        }
    });

    setTimeout(() => {
        if (!isAppOpened) {
            window.location.href = window.storeUrl;
        }
    }, 1000);
}

document.addEventListener("DOMContentLoaded", function () {
    openAppOrRedirect();
});

function iosDownload(){
    location.href = "https://apps.apple.com/us/app/1q-on-pass/id6474642959";
}

function aosDownload(){
    location.href = "https://play.google.com/store/apps/details?id=com.hanati.pass";
}

document.addEventListener("keydown", function(event) {
    if (event.keyCode === 123 || 
        (event.ctrlKey && event.shiftKey && event.keyCode === 73) || 
        (event.ctrlKey && event.keyCode === 85)) {
        event.preventDefault();
    }
});
