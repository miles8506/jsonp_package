function jsonp(option) {
    const jsonpNum = 'jsonpNum' + Date.now();
    const script = document.createElement('script');
    window[jsonpNum] = option.success;
    let sum = ''
    for (let k in option.data) {
        sum += '&' + k + '=' + option.data[k];
    }
    script.src = option.url + '?callback=' + jsonpNum + sum;
    document.body.appendChild(script);
    script.onload = function () {
        document.body.removeChild(this);
    };
};
