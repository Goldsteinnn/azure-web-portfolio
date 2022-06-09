window.addEventListener('DOMContentLoaded', (event) =>{
    getVisitCount();
})

const functionApiURL = 'https://getresumecounterr.azurewebsites.net/api/GetResumeCounter?code=ap8-ViUWwg5fIHaH6ZUnFl59tjaLrHlfDN0lhUgIU0OUAzFus4sxHw=='
const functionApi = 'http://localhost:7071/api/GetResumeCounter';

const getVisitCount = () => {
    let count = 30;
    fetch(functionApiURL).then(Response => {
        return Response.json()
    }).then(Response => {
        console.log("Website called function api");
        count = Response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error)
    });
    return count;
}