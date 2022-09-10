
let input_dist = 5;
let dist_unit = 'km';
let output_unit = 'km';
let output_dist = 1.6;
let input_time = 17;
let output_time = "hi";
function setup() {
  }
  
  function draw() {
  }
//Divide time by fraction of distance, and format in mm:ss.00
function makePace(dist1,time,dist2)  {
    console.log('test');
    let time_minutes = time * dist2 / dist1;
    let time_minutes_r = Math.round(time_minutes);
    let time_seconds = (time_minutes - time_minutes_r) * 60;
    let time_seconds_r = Math.round(time_seconds);
    let time_centiseconds_r = Math.round((time_seconds - time_seconds_r) *100)
    if (time_seconds_r < 10){
        if (time_centiseconds_r == 0){
            output_time = String(time_minutes_r) + ":0" + String(Math.round(time_seconds)) + ".00"
        } else{
        output_time = String(time_minutes_r) + ":0" + String(Math.round(time_seconds)) + "." + String(time_centiseconds_r);
        }
    }else{
        if (time_centiseconds_r == 0){
            output_time = String(time_minutes_r) + ":" + String(Math.round(time_seconds)) + ".00"
        } else{
        output_time = String(time_minutes_r) + ":" + String(Math.round(time_seconds)) + "." + String(time_centiseconds_r);
        }
    }
    output_time = "Pace: " + output_time + " per " + output_dist + " km"
}
makePace(input_dist,input_time,output_dist);

document.getElementById("demo").innerHTML = output_time