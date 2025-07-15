let sortBefore = document.getElementById("sortBefore");
let sortAfter = document.getElementById("sortAfter");
let secNo = document.getElementById("secNo");


function getLott(tp, firstMax, firstNum, secMax) {
    let lott = [];

    if (tp == 2) {
        firstNum += 1;
    }
    while (1) {
        if (lott.length == firstNum) {
            break;
        }
        // 亂數取號碼
        let lottNo = Math.floor(Math.random() * firstMax) + 1;
        if (!lott.includes(lottNo)) {
            lott.push(lottNo);
        }
    }

    secNo.textContent = "";
    if (tp == 1) {
        secNo.textContent = "第二區號碼：" + (Math.floor(Math.random() * secMax) + 1);
    } else if (tp == 2) {
        secNo.textContent = "特別號：" + lott.pop();
    }

    sortBefore.textContent = "排序前號碼：" + lott;
    lott.sort((a, b) => a - b);
    sortAfter.textContent = "排序後號碼：" + lott;

}

