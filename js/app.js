const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");


let Time = {
    test(){
        setInterval(() => {
            let date = new Date();
            hours.style.transform = "translateY(-6vh) rotate(" + 30 * date.getHours() + "deg)";
            minutes.style.transform ="translateY(-10vh) rotate(" + 6 * date.getMinutes() + "deg)";
            seconds.style.transform ="translateY(-12vh) rotate(" + 6 * date.getSeconds() + "deg)";
        },1000);
    }
};
Time.test();