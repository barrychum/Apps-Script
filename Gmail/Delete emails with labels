function deleteOldEmailsWithLabel() {
  // Define the label you want to target
  var labelName = "_ToBeDeleted";

  // Define the number of age of message to delete
  var AgeInDay = 2;

  // Get the label
  var label = GmailApp.getUserLabelByName(labelName);
  
  // Get threads with the label
  var threads = label.getThreads();
  
  // Get the current date
  var now = new Date();
  
  // Calculate the date for deletion
  var DaysAgo = new Date(now.getTime() - AgeInDay * 24 * 60 * 60 * 1000);
  
  // Iterate through each thread
  for (var i = 0; i < threads.length; i++) {
    // Get the messages in the thread
    var messages = threads[i].getMessages();
    
    // Iterate through each message
    for (var j = 0; j < messages.length; j++) {
      // Get the date of the message
      var messageDate = messages[j].getDate();
      
      // Check if the message is older than specified age
      if (messageDate < DaysAgo) {
        // Delete the message
        messages[j].moveToTrash();
      }
    }
  }
