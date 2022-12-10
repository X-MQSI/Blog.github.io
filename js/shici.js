  var xhr = new XMLHttpRequest();
  xhr.open('get', 'https://v1.jinrishici.com/tianqi.txt');
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      var gushici = document.getElementById('gushici');
      gushici.innerText = xhr.responseText;
    }
  };
  xhr.send();
