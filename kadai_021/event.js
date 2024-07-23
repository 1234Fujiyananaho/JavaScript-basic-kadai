//btnというidを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById('btn');
//textというidを持つHTML要素を取得し、定数に代入する
const text = document.getElementById('text');

//ボタンにクリックイベントリスナーを設定
btn.addEventListener('click', () => {
    //2秒(2000ミリ秒)後にテキストを変更するための非同期処理を設定
    setTimeout(() => {
      text.textContent ='ボタンをクリックしました';
     //テキストに「ボタンをクリックしました」というテキストを設定する
    }, 2000);//遅延時間を2000ミリ秒(2秒)に設定
});