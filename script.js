const hearts = document.querySelectorAll('.hert');
const lovCount = document.getElementById('love-count');

hearts.forEach((hrt) => {
  hrt.addEventListener('click', () => {
    let current = Number(lovCount.innerText);
    lovCount.innerText = current + 1;
    // hrt.style.color = 'red';
  });
});
let coin = document.getElementById('coin');
let call = document.querySelectorAll('.call');
let srvName = document.querySelectorAll('.srvNam');
let cNum = document.querySelectorAll('.cNum');
let display = document.querySelector('.display');

call.forEach((cin, index) => {
  cin.addEventListener('click', () => {
    let currentcoin = Number(coin.innerText);

    if (currentcoin > 0) {
      currentcoin -= 20;
      coin.innerText = currentcoin;

      let srv = srvName[index].innerText;
      let cnum = cNum[index].innerText;

      let now = new Date();
      let time = now.toLocaleTimeString('en-US', { hour12: true });

      let post = document.createElement('div');
      post.className =
        'p-4 bg-gray-100 text-black flex items-center justify-between rounded-2xl mb-2';

      post.innerHTML = `
        <div>
          <h1 class="font-bold text-black">${srv}</h1>
          <h2 class="text-gray-900">${cnum}</h2>
        </div>
        <div>${time}</div>
      `;

      display.appendChild(post);

      alert(`📞Calling ${srv} Service ${cnum}...`);
    } else {
      alert(
        '❌You don’t have enough coins to make a call. At least 20 coins are required.'
      );
    }
  });
});

// ClearButton
let clrBtn = document.getElementById('clear');
clrBtn.addEventListener('click', () => {
  display.innerHTML = '';
});
//  Copy
let copybtns = document.querySelectorAll('.copyBtn');
let cNums = document.querySelectorAll('.cNum');
let bpyadd = document.getElementById('cpy');

copybtns.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    let cnum = cNums[index].innerText;
    let count = Number(bpyadd.innerText);
    alert(`Your number is copied: ${cnum}`);
    navigator.clipboard.writeText(cnum);
    count = count + 1;
    bpyadd.innerText = count;
  });
});
