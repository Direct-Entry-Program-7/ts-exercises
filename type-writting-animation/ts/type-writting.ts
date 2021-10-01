const texts = [
    'Direct Entry Program 7',
    'We are born to code!'
];

let i = 0;
let j = 0;
// let reverse = false;

setInterval(()=> {

    $("#text").html(texts[j].substring(0, i+1));
    if (i === (texts[j].length + 30)){
        // reverse = true;
        i = 0;
        j++;
        if (j === texts.length) j = 0;
    }
    i++;
    // reverse ? i-- : i++;

    // if (i < 0) {
    //     i = 0;
    //     reverse = false;
    // }

}, 50);



// console.log("Before the timeout")

// const timoutId = setTimeout(() => {

//     console.log("Timeout...!")

//     $("#stage-text").css('color', 'red');

// }, 2000);

// clearTimeout(timoutId);
// console.log("After the timeout")

// let colors = ['red', 'green', 'blue', 'yellow'];
// let i = 0;

// console.log("Before Set Interval");

// setInterval(() => {
//     $("#stage-text").css('color', colors[i++]);
//     if (i === colors.length) i = 0;
// }, 100);

// console.log("After Set Inteval");