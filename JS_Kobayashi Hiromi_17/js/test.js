// jsを記述する際はここに記載していく
// じゃんけんの手
var handtypes = [
    {
        'id': 'rock',
        'text': 'グー',
        'win': 'scissors',
        'lose': 'paper'
    }, {
        'id': 'paper',
        'text': 'パー',
        'win': 'rock',
        'lose': 'scissors'
    }, {
        'id': 'scissors',
        'text': 'チョキ',
        'win': 'paper',
        'lose': 'rock'
    }
];
 
// 使用するクラス名
var btnWrapperClass = 'game-control'; // ボタンを格納
var btnClass = 'game-control_btn'; // ボタンに設定するclass
var resultClass = 'result_box'; // じゃんけんの結果を表示
var resultPlayerClass = 'result_player'; // プレイヤーの出した手を表示
var resultCpuClass = 'result_cpu'; // 相手の出した手を表示
 
$(function() {
    // ボタンの設置
    for (var i = 0; i < handtypes.length; i++) {
        var btn = $('<button>')
            .addClass(btnClass)
            .attr('data-choice', handtypes[i]['id'])
            .text(handtypes[i]['text']);
        $('.' + btnWrapperClass).append(btn);
    }
 
    // ボタンクリック
    $(document).on('click', '.' + btnClass, function() {
        // プレイヤーの出した手を取得
        for (var i = 0; i < handtypes.length; i++) {
            if (handtypes[i]['id'] === $(this).data('choice')) {
                var playerHand = JSON.parse(JSON.stringify(handtypes[i]));
            }
        }
        //相手の出した手を取得
        var cpuHand = choose_at_random(handtypes);
 
        // じゃんけんの結果を判定
        var result = judge_rock_paper_scissors(playerHand, cpuHand);
 
        // 結果をブラウザに反映
        $('.' + resultPlayerClass).text(playerHand['text']);
        $('.' + resultCpuClass).text(cpuHand['text']);
        $('.' + resultClass).text(result);
    });
});
 
function judge_rock_paper_scissors(player, cpu) {
    // 勝ちの場合
    if(player['win'] === cpu['id']) {
        return '勝ち！';
    // 負けの場合
    } else if(player['lose'] === cpu['id']) {
        return '負け';
    // あいこの場合
    } else {
        return 'あいこ';
    }
}
 
// ランダムで1つ選択して返す
function choose_at_random(arrayData) {
    var arrayIndex = Math.floor(Math.random() * arrayData.length);
    return arrayData[arrayIndex];
}




//console.log("はじめてのジャバスクリプト");
// 演習2
//console.log(23 + 5);
//console.log(2000 - 1800);
//console.log("18+5");
// var test = "テストの文字列を入れてみます";
// console.log(test); //テストの文字列を入れてみます　が表示されます
// 演習3
//var name = "もりた";
//console.log(name);
// if (name == "おおほり") {
//   // 処理を書きます
//   console.log("正しいです！");
// } else {
//   // 処理を書きます
//   console.log("間違っています!");
// }




