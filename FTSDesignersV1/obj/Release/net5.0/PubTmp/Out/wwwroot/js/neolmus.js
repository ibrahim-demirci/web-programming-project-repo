(function () {
    let months = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"];
    var month_selected = (new Date).getMonth(); // current month
    var option = '';
    option = '<option>Ay</option>'; // first option

    for (let i = 0; i < months.length; i++) {
        let month_number = (i + 1);

        // value month number with 0. 01 02 03 04..
        let month = (month_number <= 9) ? '0' + month_number : month_number;

        // or value month number 1 2 3 4..
        // let month = month_number;

        // or value month names January February
        // let month = months[i];

        let selected = (i === month_selected ? ' selected' : '');
        option += '<option value="' + month + '"' + selected + '>' + months[i] + '</option>';
    }
    document.getElementById("month").innerHTML = option;
})();


(function () {
    let day_selected = (new Date).getDate(); // current day
    let option = '';
    option = '<option>Gun</option>'; // first option

    for (let i = 1; i < 32; i++) {
        // value day number with 0. 01 02 03 04..
        let day = (i <= 9) ? '0' + i : i;

        // or value day number 1 2 3 4..
        // let day = i;

        let selected = (i === day_selected ? ' selected' : '');
        option += '<option value="' + day + '"' + selected + '>' + day + '</option>';
    }
    document.getElementById("day").innerHTML = option;
})();