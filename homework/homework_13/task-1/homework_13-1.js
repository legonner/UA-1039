document.addEventListener("DOMContentLoaded", function () {
    const voteButton = document.getElementById("voteButton");
    const resultDiv = document.getElementById("result");
  
    voteButton.addEventListener("click", function () {
      const xhr = new XMLHttpRequest();
  
      xhr.open("POST", "http://localhost:8080/vote", true);
      xhr.setRequestHeader("Content-Type", "application/json");
  
      xhr.onload = function () {
        if (xhr.status === 200) {
          const response = JSON.parse(xhr.responseText);
          const timestamp = response.timestamp;
          const message = `Your vote is accepted: ${new Date(timestamp).toString()}`;
          resultDiv.innerHTML = message;
        }
      };
  
      xhr.onerror = function () {
        resultDiv.innerHTML = "An error occurred while processing your vote.";
      };
  
      const data = JSON.stringify({ timestamp: new Date() });
      xhr.send(data);
    });
  });
  