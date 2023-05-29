window.postMessage({ type: "request", data: "request" }, "*");

// Listen for the postMessage event
window.addEventListener("message", function(event) {
    // Check if the received message contains the warranty data
    if (event.data && event.data.type === "warrantyData") {
        var warranty = event.data.data;

        // Access the warranty data here
        console.log("Warranty Type: " + warranty.type);
        console.log("Warranty Duration: " + warranty.duration);

        // You can now use the warranty data in this tab/window
        // ...

        document.getElementById("warrantyTable").rows[1].cells[0].innerHTML = warranty.type;
        document.getElementById("warrantyTable").rows[1].cells[1].innerHTML = warranty.duration;
    }
});