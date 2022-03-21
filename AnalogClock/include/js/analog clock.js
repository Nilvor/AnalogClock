const clock= () =>{
    const date = new Date();
    const hours = date.getHours();
    // const hours = ((date.getHours() + 11) %12 + 1);
    const mins = date.getMinutes();
    const secs = date.getSeconds();

    const hour = hours * 30 ;
    const min = mins * 6 ;
    const sec = secs *6 ;

    document.querySelector('.hour').style.transform = `rotate(${hour}deg)`;
    document.querySelector('.min').style.transform = `rotate(${min}deg)`;
    document.querySelector('.sec').style.transform = `rotate(${sec}deg)`;
}
clock();
setInterval(clock,1000);
