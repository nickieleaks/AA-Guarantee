function checkWarranty() {   
    var currentURL = getCurrentURL();
    if (currentURL.includes("shopee"))
    {       
        const htmlString = document.body.innerHTML;
        const strippedString = stripHTMLTags(htmlString);
        var warrantyTypeIndex = strippedString.search("Warranty Type");
        var warrantyDurationIndex = strippedString.search("Warranty Duration");

        if(warrantyTypeIndex !== - 1) //Reminder to remove ALL console logs
        {
            //console.log("index for warranty type: " + warrantyTypeIndex);
            //console.log("index for warranty duration: " + warrantyDurationIndex);

            // Check type of warranty
            var warrantyType = "";
            for (let i = warrantyTypeIndex + 13; i < warrantyTypeIndex + 40; ++i) {
                warrantyType += strippedString[i];
            }
            var word = "Warranty";
            var index = warrantyType.indexOf(word);
            warrantyType = warrantyType.slice(0, index + word.length);
            console.log("Warranty Type: " + warrantyType);

            // Check duration of warranty
            var warrantyDuration = "";
            for (let i = warrantyDurationIndex + 17; i < warrantyDurationIndex + 40; ++i) {
                warrantyDuration += strippedString[i];
                }
            var words = ["Years", "Months", "Weeks", "Days", "Year", "Month", "Week", "Day"];
            for (let i = 0; i < words.length; ++i)
            {
                var index = warrantyDuration.indexOf(words[i]);
                if (index !== -1)
                {
                    word = words[i];
                    warrantyDuration = warrantyDuration.slice(0, index + word.length);
                    break;
                }
            }
            console.log("Warranty Duration: " + warrantyDuration);
            //localStorage.setItem("test", JSON.stringify(warranty));

            //window.postMessage({ type: "warrantyData", data: warranty }, "*");

        } else {
            alert("Warranty Type not Found");
        }
    }
}

function createWarranty(type, duration) {
    var warranty = {
      type: type,
      duration: duration
    };
    return warranty;
}

function getCurrentURL() {
    console.log(window.location.href);
    return window.location.href
}

function stripHTMLTags(htmlString) {
    return htmlString.replace(/<[^>]+>/g, '');
}

setTimeout("checkWarranty()", 3000);
//window.onload = checkWarranty();

// Listen for messages from the popup script
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    console.log('Received message:', message);
    console.log('Sender information:', sender);
  
    // Process the message and send a response back
    var response = 'Response from main script';
    sendResponse(response);
  });
  