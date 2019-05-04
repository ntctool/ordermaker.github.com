var vm;

// DOM構築終了時の処理
window.addEventListener("DOMContentLoaded", function () {
    var elem = document.getElementById("test1");

    vm = new Vue({
        el: '#test1',
        data: {
            message: "Hello World!",
            list: [
                { text: "リスト１" },
                { text: "リスト２" },
                { text: "リスト３" }
            ]
        }
    });
})

function onClick() {
    alert("Clicked!");

    vm.message = "Clicked";
    vm.list.push({text: "追加分"});

    var elem = document.getElementById("main");
    elem.textContent = "クリックした";
}