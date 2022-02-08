
window.onload = (event) => {

    
    let success = (0.25*(1));
    let accurate = (0.25*(0));
    let fun = (0.2*(-2));
    let infoQuick = (0.1*(1));
    let trailQuick = (0.1*(0));
    let recognize = (0.05*(1));
    let controls = (0.05*(-1));
    let simple = (0);
    
    console.log(success+accurate+fun+infoQuick+trailQuick+recognize+controls+simple)


    // const days = [
    //     'Sun.', 'Mon.', 'Tues.', 'Wed.', 'Thurs.', 'Fri.', 'Sat.'
    // ]
    // const months = [
    //     'Jan.','Feb.','Mar.','Apr.','May','Jun.','Jul.','Aug.','Sept.','Oct.','Nov.','Dec.'
    // ]
    // const todaysDate = new Date();
    // const actualDate = todaysDate.getDate();
    // const dayName = days[todaysDate.getDay()];
    // const monthName = months[todaysDate.getMonth()];
    // const endings = ['st','nd','rd','th']
    // const hour = todaysDate.getHours();
    // var datesEnding;
    // if (actualDate == 1) {
    //     datesEnding = endings[0];
    // }
    // else if (actualDate == 2) {
    //     datesEnding = endings[1];
    // }
    // else if (actualDate == 3) {
    //     datesEnding = endings[2];
    // }
    // else if (actualDate >= 4) {
    //     datesEnding = endings[3];
    // }

    // const currentDate = dayName + ' ' + actualDate + datesEnding + '-' + monthName + '-' + todaysDate.getFullYear() + " " + hour + ":" + todaysDate.getMinutes();
 
    let lastModified = document.lastModified
    document.getElementById('currentdate').textContent = lastModified
 
    let windowWidth = window.innerWidth;
    console.log(window.innerWidth);
    smallerMode(windowWidth);

}

function smallerMode (windowWidth) {
    if (windowWidth <= 1200) {
        let extraButton = document.getElementById("dropDown");
        extraButton.addEventListener("click",toggleGoDown);
    }
}


function toggleGoDown () {
    document.getElementById("dropDown").classList.toggle("goDown");
    console.log("help")
}
