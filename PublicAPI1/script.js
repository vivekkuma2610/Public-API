
import fetch from "node-fetch";

fetch("https://emojihub.yurace.pro/api/random")
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        let mypromise = new Promise((displayTable) => {
            displayTable();
        })
        mypromise.then(function displayTable(data) {
            var table = document.getElementById("emojiList").getElementsByTagName('tbody')[0];
            var newRow = table.insertRow(table.length);
            cell1 = newRow.insertCell(0);
            cell1.innerHTML = data.name;
            cell2 = newRow.insertCell(1);
            cell2.innerHTML = data.category;
            cell3 = newRow.insertCell(2);
            cell3.innerHTML = data.group;
            cell4 = newRow.insertCell(3);
            cell4.innerHTML = data.htmlCode;
            cell5 = newRow.insertCell(4);
            cell5.innerHTML = data.unicode;
        })

    })