/* Diagram över hur appen ska fungera:

+-------+                +---------+             +---------+                      +-----+
| User  |                | Browser |             | Server  |                      | API |
+-------+                +---------+             +---------+                      +-----+
    |                         |                       |                              |
    | Clicks button           |                       |                              |
    |------------------------>|                       |                              |
    |                         |                       |                              |
    |                         | Makes JS request      |                              |
    |                         |---------------------->|                              |
    |                         |                       |                              |
    |                         |                       | Makes server side request    |
    |                         |                       |----------------------------->|
    |                         |                       |                              |
    |                         |                       |             Returns response |
    |                         |                       |<-----------------------------|
    |                         |                       |                              |
    |                         |      Returns response |                              |
    |                         |<----------------------|                              |
    |                         |                       |                              |
    |      Displays some text |                       |                              |
    |<------------------------|                       |                              |
    |                         |                       |                              |

*/

const CTA = document.querySelector(".cta");
const comp = document.createElement("h2");
const first = document.querySelector("#myFirstDiv");
const cURL = "http://complimentr.com/api";

//Externt API; Makes server side request and Returns response
function httpGet(theUrl){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false );
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

//JS API; Make JS Request on click
function OnClickReq(aURL){
	comp.innerHTML = JSON.parse(httpGet(aURL))["compliment"];
	first.append(comp);
}

CTA.addEventListener("click",function(){OnClickReq(cURL);});