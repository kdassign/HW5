// Will display the current date

var displayTime = moment();


var toDay = displayTime.format("MMMM Do, YYYY");
$("#currentDay").text(toDay);


//Will save inputted text to local storage
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

// Displays said saved tasks even after refreshing the page

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

//this function color coordinates the time blocks in accordance to past, present, or future
function timeTracker() {

//This will set or get the hour
    var cHour = moment().hours()
//takes the class time-block and changes time-# into an actual # 
    $('.time-block').each( function(){
//parseInt converts the number by using index position 1 of "time-#" (since counting in "code" usually starts at the number 0)
       var tbHour = parseInt($(this).attr('id').split('time-')[1])

//checks to see if the timeblock hour(tbHour) is before the current hour (cHour), if so then the block will correspond with class 'past' and be the corresponding color as written in the .css file
    if (tbHour < cHour) {
        $(this).children('textarea').addClass('past');
    }
// checks to see if timeblock hour is equal to current hour, will remove class 'past' elements and apply class 'present' elements (i.e. background-color)
    else if (tbHour === cHour) {
        $(this).children('textarea').removeClass('past');
        $(this).children('textarea').addClass('present');
    }
//anything other than the prior will adhere to class 'future'
    else {
        $(this).children('textarea').removeClass('past');
        $(this).children('textarea').removeClass('present');
        $(this).children('textarea').addClass('future');
    }

    })
    
}
timeTracker();