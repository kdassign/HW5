
var displayTime = moment();


var toDay = displayTime.format("MMMM Do, YYYY");
$("#currentDay").text(toDay);


//Will save text to local storage
{
    $('.saveBtn').click(function () {
        var time9 = document.getElementById('9').value;
        localStorage.setItem('text9', time9);
        var time10 = document.getElementById('10').value;
        localStorage.setItem('text10', time10);
        var time11 = document.getElementById('11').value;
        localStorage.setItem('text11', time11);
        var time12 = document.getElementById('12').value;
        localStorage.setItem('text12', time12);
        var time13 = document.getElementById('13').value;
        localStorage.setItem('text13', time13);
        var time14 = document.getElementById('14').value;
        localStorage.setItem('text14', time14);
        var time15 = document.getElementById('15').value;
        localStorage.setItem('text15', time15);
        var time16 = document.getElementById('16').value;
        localStorage.setItem('text16', time16);
        var time17 = document.getElementById('17').value;
        localStorage.setItem('text17', time17);
    });
}

// This will display said saved tasks
var saved9 = localStorage.getItem('text9');
document.getElementById('9').value = saved9;
var saved10 = localStorage.getItem('text10');
document.getElementById('10').value = saved10;
var saved11 = localStorage.getItem('text11');
document.getElementById('11').value = saved11;
var saved12 = localStorage.getItem('text12');
document.getElementById('12').value = saved12;
var saved13 = localStorage.getItem('text13');
document.getElementById('13').value = saved13;
var saved14 = localStorage.getItem('text14');
document.getElementById('14').value = saved14;
var saved15 = localStorage.getItem('text15');
document.getElementById('15').value = saved15;
var saved16 = localStorage.getItem('text16');
document.getElementById('16').value = saved16;
var saved17 = localStorage.getItem('text17');
document.getElementById('17').value = saved17;