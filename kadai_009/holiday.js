const holiday = [
    '正月','成人の日','建国記念日','天皇記念日',
    '春分の日','昭和の日','憲法記念日','みどりの日',
    '海の日','山の日','敬老の日','秋分の日','スポーツの日','文化の日','勤労感謝の日'];

let i = 0; //カウンタの変数を初期化

for (let i = 0; i <= 15; i++) {
    console.log(holiday[i]);
}

while (i < holiday.length) {   
    console.log(holiday[i]);
    i++; //カウンタ変数をインクリメント
}

