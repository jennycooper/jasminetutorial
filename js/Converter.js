
var Converter = (function () {
    // private stuff goes here

    return {
        convertFromImperialToMetric: function (weight) {
            if (isNaN(parseFloat(weight))) {
                return "Not a Number";
            };
            var answer = weight / 2.2;
            return answer;
         
                
        },

        convertFromMetricToImperial: function (weight) {
            if (isNaN(parseFloat(weight))) {
                return "Not a Number";
            };
            var answer = weight * 2.2;
            return answer;
        }
    }
})();

var input1 = document.getElementById("metric");
var input2 = document.getElementById("imperial");
input1.addEventListener('click', function () {
    input1.value = ' ';
    input2.value = '0.0';
})
input2.addEventListener('click', function () {
    input2.value = ' ';
    input1.value = '0.0';
})

var button = document.getElementById("convertmetric");
button.addEventListener('click', function (e) {
    e.preventDefault();
    var metricweight = parseFloat(document.getElementById("metric").value);
    var imperialweight = parseFloat(document.getElementById("imperial").value);

    if (!isNaN(metricweight) && (metricweight != 0)) {
        var result = Converter.convertFromMetricToImperial(metricweight);
        document.getElementById("imperial").value = result;
    }
    else if (!isNaN(imperialweight) && (imperialweight != 0)) {
        var result = Converter.convertFromImperialToMetric(imperialweight);
        document.getElementById("metric").value = result;
    }
})



