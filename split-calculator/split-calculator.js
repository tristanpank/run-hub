
let input_dist;
let output_dist;
let input_time_hours = 0
let input_time_minutes = 0
let input_time_seconds = 0
let split_time_float;
let input_hour_float;
let number_of_splits;
let split_times_array = [];
let split_dist_array = [];

function calculate(){
    //update values to input
    input_dist = parseFloat(document.getElementById("distance").value);
    if (isNaN(input_dist)){
        input_dist = 0;
    }
    input_time_hours = parseFloat(document.getElementById("hr").value);
    if (isNaN(input_time_hours)){
        input_time_hours = 0;
    }
    input_time_minutes = parseFloat(document.getElementById("min").value);
    if (isNaN(input_time_minutes)){
        input_time_minutes = 0;
    }
    input_time_seconds = parseFloat(document.getElementById("sec").value);
    if (isNaN(input_time_seconds)){
        input_time_seconds = 0;
    }
    output_dist = parseFloat(document.getElementById("split-dist").value)
    if (isNaN(output_dist)){
        output_dist = 0;
    }
   
    //convert to useable number
    input_hour_float = makeHourFloat(input_time_hours,input_time_minutes,input_time_seconds);


    //update split time
    split_time_float = (makePace(input_dist, input_hour_float, output_dist));
    number_of_splits = Math.floor(input_hour_float/split_time_float)

    //create array of split times and distances
    for(let i = 0; i < number_of_splits; i++){
        split_times_array[i] = split_time_float * (i + 1);
        split_dist_array[i] = Math.round((output_dist * (i + 1)) * 100) /100;
    }

    //if max split is not max distance, add one more element to the array to cap it off
    if (split_times_array[number_of_splits-1] != input_hour_float){
        split_times_array[number_of_splits] = input_hour_float;
        split_dist_array[number_of_splits] = Math.round((input_dist * 100) )/100;
        number_of_splits ++;
    }
    resetDivs();
    createDivs();


    //display output time
    //document.getElementById("demo").innerHTML = output_time
}

// format hh:mm:ss to Float
function makeHourFloat (hr,min,sec){
    return(hr + (min / 60) + (sec / 3600));
}

function makePace(dist, time, split){
    return (time * split / dist);
}
//Format hour float to hh:mm:ss.00
function makeTime(hr_float)  {
    let hr_int = Math.floor(hr_float);
    let min_float = (hr_float - hr_int) * 60;
    let min_int = Math.floor(min_float);
    let sec_float = (min_float - min_int) * 60;
    let sec_int = Math.floor(sec_float);
    let centi_sec_float = (sec_float - sec_int) * 100
    let centi_sec_int = Math.floor(centi_sec_float);
    let str_hr;
    let str_min;
    let str_sec;
    let str_centi_sec;

    //assign str_hr into hh format
    if (hr_int < 10){
        str_hr = "0" + String(hr_int);
    } else{
        str_hr = String(hr_int);
    }

    //assign str_min into mm format
    if (min_int < 10){
        str_min = "0" + String(min_int);
    } else {
        str_min = String(min_int);
    }

    //assign str_sec ss format
    if (sec_int < 10){
        str_sec = "0" + String(sec_int);
    } else{
        str_sec = String(sec_int);
    }

    //assign str_centi_sec .00 format
    if (centi_sec_int < 10){
        str_centi_sec = "0" + String(centi_sec_int);
    } else{
        str_centi_sec = String(centi_sec_int);
    }


    let formatted_time = str_hr + ":" + str_min + ":" + str_sec + "." + str_centi_sec;
    return (formatted_time);
}

function createDivs() {
    let container = document.getElementById('grid-container');
    for(let i = 0; i < number_of_splits; i++){
        let row = document.createElement('div');
        row.className = "row";
        let distance_div = document.createElement('div');
        let time_div = document.createElement('div');
        distance_div.textContent = `${(split_dist_array[i])} km`;
        time_div.textContent = `${makeTime(split_times_array[i])}`;
        row.appendChild(distance_div);
        row.appendChild(time_div);
        container.appendChild(row);
    } 
}

function resetDivs() {
    const rows = document.getElementsByClassName('row');
    Array.from(rows).forEach(element => element.remove());
}


//run calculate on button press
let submitButton = document.getElementById("split-submit");
submitButton.addEventListener('click', calculate);