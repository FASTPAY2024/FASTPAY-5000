function showNotification(message, isError = false) {
  const notification = document.getElementById("notification");
  notification.innerText = message;
  notification.className = isError ? "notification error" : "notification";
  notification.style.display = "block";
  
  setTimeout(() => {
    notification.style.display = "none";
  }, 3000);
}

function copyText(text) {
  const tempInput = document.createElement("input");
  document.body.appendChild(tempInput);
  tempInput.value = text;
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
  showNotification("Copied: " + text);
}

function submitUTR() {
  const utr = document.getElementById("utr").value;
  if (utr) {
    showNotification("UTR submitted successfully: " + utr);
  } else {
    showNotification("Please enter a UTR number.", true);
  }
}

function showError() {
  showNotification("Payment failed! Please try using a bank account.", true);
}
// Handle Submit UTR button click
document.getElementById("submit-utr").addEventListener("click", function() {
    const utrNumber = document.getElementById("utr-number").value;
    if (utrNumber) {
        // Navigate to the success page
        window.location.href = "success.html"; // Navigate to the success page
    } else {
        alert("Please enter the UTR number.");
    }
});