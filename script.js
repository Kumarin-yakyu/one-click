// ===== デバイス・ブラウザ情報 =====
const ua = navigator.userAgent;
let device = "不明な端末";
let browser = "不明なブラウザ";

// 端末判定
if (/iPhone/.test(ua)) {
  device = "iPhone";
} else if (/Android/.test(ua)) {
  device = "Android";
} else if (/Windows/.test(ua)) {
  device = "Windows PC";
} else if (/Macintosh/.test(ua)) {
  device = "Mac";
}

// ブラウザ判定
if (/Chrome/.test(ua) && !/Edg/.test(ua)) {
  browser = "Chrome";
} else if (/Safari/.test(ua) && !/Chrome/.test(ua)) {
  browser = "Safari";
} else if (/Firefox/.test(ua)) {
  browser = "Firefox";
} else if (/Edg/.test(ua)) {
  browser = "Edge";
}

// ===== サイトに入った日時 =====
const now = new Date();
const dateStr = `${now.getFullYear()}年${now.getMonth() + 1}月${now.getDate()}日 ${now.getHours()}時${now.getMinutes()}分${now.getSeconds()}秒`;

// ===== カウントダウン（6時間 = 21600秒） =====
let remain = 6 * 60 * 60;

function updateCountdown() {
  const h = Math.floor(remain / 3600);
  const m = Math.floor((remain % 3600) / 60);
  const s = remain % 60;
  document.getElementById("countdown").textContent =
    `${h}時間 ${m}分 ${s}秒`;

  if (remain > 0) {
    remain--;
  } else {
    clearInterval(timer);
    document.getElementById("countdown").textContent = "時間切れです";
  }
}

// ===== 表示 =====
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("info").textContent = `${device} / ${browser}`;
  document.getElementById("datetime").textContent = dateStr;
  updateCountdown();
  setInterval(updateCountdown, 1000);
});
