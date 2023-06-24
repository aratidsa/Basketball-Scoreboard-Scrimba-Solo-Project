
let homecount = 0
let guestcount = 0

let homeScore = document.querySelector(".score-home")
let guestScore = document.querySelector(".score-guest")
let displayHomeScore = document.getElementById("home-score")
let displayGuestScore = document.getElementById("guest-score")

/* --------------------------- function to add points 1, 2 and 3 to the home team score    ---------------------------------- */
function addHomepoints1()
{
   homecount += 1
   homeScore.innerHTML = homecount

   if(homecount < 10)
   {
    displayHomeScore.innerHTML = "0" + homecount
   }
   else
   {
    displayHomeScore.innerHTML = homecount
   }   
}
function addHomepoints2()
{
    homecount += 2
    homeScore.innerHTML = homecount
    
    if(homecount < 10)
    {
     displayHomeScore.innerHTML = "0" + homecount
    }
    else
    {
     displayHomeScore.innerHTML = homecount
    }    
}
function addHomepoints3()
{
    homecount += 3
    homeScore.innerHTML = homecount

    if(homecount < 10)
    {
     displayHomeScore.innerHTML = "0" + homecount
    }
    else
    {
     displayHomeScore.innerHTML = homecount
    }    
}

/* --------------------------- function to add points 1, 2 and 3 to the guest team score    ---------------------------------- */

function addGuestpoints1()
{
   guestcount+= 1   
   guestScore.innerHTML = guestcount

   if(guestcount < 10 )
   {
    displayGuestScore.innerHTML = "0" + guestcount
   }
   else
   {
    displayGuestScore.innerHTML = guestcount
   }
   
}
function addGuestpoints2()
{
   guestcount+= 2  
   guestScore.innerHTML = guestcount

   if(guestcount < 10 )
   {
    displayGuestScore.innerHTML = "0" + guestcount
   }
   else
   {
    displayGuestScore.innerHTML = guestcount
   }   
}
function addGuestpoints3()
{
   guestcount+= 3 
   guestScore.innerHTML = guestcount

   if(guestcount < 10 )
   {
    displayGuestScore.innerHTML = "0" + guestcount
   }
   else
   {
    displayGuestScore.innerHTML = guestcount
   }
   
}