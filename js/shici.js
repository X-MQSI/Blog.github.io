  var xhr = new XMLHttpRequest();
  xhr.open('get', 'https://v1.jinrishici.com/tianqi.txt');
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      var gushici = document.getElementById('gushici');
      const shici = xhr.responseText;
      const nshici = shici.replace(new RegExp('。', 'g'), '\n\n');
      gushici.innerText = nshici;
    }
  };
  xhr.send();
