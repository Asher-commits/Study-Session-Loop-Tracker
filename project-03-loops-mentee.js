// Variables to select elements from HTML

const sessionsInput = document.getElementById("sessions");
const minutesInput = document.getElementById("minutesPerSession");
const buildSummaryBtn = document.getElementById("buildSummaryBtn");
const summaryOutput = document.getElementById("summaryOutput");


// Click event listener to run function

buildSummaryBtn.addEventListener("click", buildStudySummary)

// Function
function buildStudySummary(){
   
   // Convert input values to number   
   const sessionsCount = Number(sessionsInput.value);
   const minutesPerSession = Number(minutesInput.value);

   // Validate the inputs with conditionals
    if(isNaN(sessionsCount) || sessionsCount <= 0){
        summaryOutput.textContent = "Please enter valid input"
        return;
    }else if(isNaN(minutesPerSession) || minutesPerSession <= 0){
        summaryOutput.textContent = "Please enter valid input"
        return;
    }

   // Variables for the loop 
    let totalMinutes = 0;
    let summaryText = "";

   // For loop 
    for(let i = 1; i <= sessionsCount; i++){
        totalMinutes = totalMinutes + minutesPerSession;
const result = "Session = " + i  + "\n" +
  " Minutes = " + minutesPerSession + "\n" +
  " Total Minutes = " + totalMinutes + "\n ";

        summaryText += result;
    }


   // Variable to store feedback message  
    let feedbackMessage;
   
   // Feedback text using conditionals
    if(totalMinutes < 60){
        feedbackMessage = "Light study day"
    }else if(totalMinutes < 180){
        feedbackMessage = "Solid study day"
    }else{
        feedbackMessage = "Intense study day"
    }
  
   // Final multi-line summary using template literal  
    const finalSummary = ` ${summaryText} \n Summary: ${feedbackMessage}`;

   // Write the summary into the <pre> on HTML
    summaryOutput.textContent = finalSummary;

// typeof checks  
console.log("Type of Session count: " + typeof sessionsCount);
console.log("Type of Minutes per session: " + typeof minutesPerSession);
console.log("Type of Total minutes: " + typeof totalMinutes);
};

