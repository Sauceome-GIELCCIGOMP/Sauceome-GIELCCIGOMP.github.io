function fetchJSONFile(path, callback) {
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function() {
        if (httpRequest.readyState === 4) {
            if (httpRequest.status === 200) {
                var data = JSON.parse(httpRequest.responseText);
                if (callback) callback(data);
            }
        }
    };
    httpRequest.open('GET', path);
    httpRequest.send();
}

//thanks to https://stackoverflow.com/users/263525/denys-s%c3%a9guret for this one ^
//he da og rack earner

window.onload = fetchJSONFile('test.json', function(fuck){
    var i;
    var q;
    for (i = 0; i < 4; i++) {
        m.render(document.body, m("div", {id: [i]}, fuck.Members[i].Name));
        for (q = 0; q < 3; q++) {
            var cock = document.getElementById([i]);
            cock.innerHTML += fuck.Members[i].Links[q];
        }
    }
});