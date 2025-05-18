/* gt-common.js */
/*------------------------------------------------------------------------------------------------------------------------------------------
	File : gt-common.css
	Company : HanaTI
--------------------------------------------------------------------------------------------------------------------------------------------*/

function openAppOrRedirect() {
    const userAgent = navigator.userAgent;
    let appUrl = "";
    let storeUrl = "";
    let isIOS = /iPhone|iPad|iPod/i.test(userAgent);
    let isAndroid = /android/i.test(userAgent);
    let isAppOpened = false;

    if (isAndroid) {
        appUrl = "intent://passapp/#Intent;scheme=1qonpass;package=com.hanati.pass;end;";
        //storeUrl = "market://details?id=com.hanati.pass"; // 구글 플레이 스토어 이동
        storeUrl = "./download/1QONPASS.apk";
    } else if (isIOS) {
        appUrl = "oneqpass://";
        storeUrl = "https://apps.apple.com/us/app/1q-on-pass/id6474642959";
    } else {
        //alert("지원되는 모바일 기기에서 접속해주세요. (Android / iOS)");
        return;
    }

    // 앱 실행 시도
    const now = Date.now();
    const iframe = document.createElement("iframe");
    iframe.style.display = "none";
    iframe.src = appUrl;
    document.body.appendChild(iframe);

    // 앱이 실행되지 않았다면 다운로드 페이지로 이동
    setTimeout(() => {
        if (Date.now() - now < 1500) {
            window.location.href = storeUrl;
        }
    }, 3000);

    // iOS에서 visibilitychange 이벤트 사용 (앱이 실행되면 페이지 숨김 처리됨)
    document.addEventListener("visibilitychange", function () {
        if (document.hidden) {
            isAppOpened = true;
        }
    });

    setTimeout(() => {
        if (!isAppOpened) {
            window.location.href = storeUrl;
        }
    }, 2500);
}

document.addEventListener("DOMContentLoaded", function () {
    openAppOrRedirect();
});

function iosDownload(){
    location.href="https://apps.apple.com/us/app/1q-on-pass/id6474642959";
}

function aosDownload(){
    location.href="./download/1QONPASS.apk";
}

document.addEventListener("keydown", function(event) {
    if (event.keyCode == 123) { // F12
        event.preventDefault();
    }
    if (event.ctrlKey && event.shiftKey && event.keyCode == 73) { // Ctrl + Shift + I
        event.preventDefault();
    }
    if (event.ctrlKey && event.keyCode == 85) { // Ctrl + U
        event.preventDefault();
    }
});
