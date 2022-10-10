var form = document.getElementById("form");
var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

form.addEventListener('submit', function(event){
    event.preventDefault();

    var name = document.getElementById("name").value;
    var course = document.getElementById("course").value;

    document.getElementById('candidate_name').innerText = name;
    document.getElementById('subject').innerText = course;

    var date = new Date();
    document.querySelector('.month').innerText = month[date.getMonth()];
    document.querySelector('.date').innerText = date.getDate();
    document.querySelector('.year').innerText = date.getFullYear();

})
