function markLabelAsSpam() {

  var labelName = '_SpamByRules';

  // Get all threads with the specified label
  var threads = GmailApp.search('label:' + labelName);
  
  // Loop through each thread
  for (var i = 0; i < threads.length; i++) {
    var thread = threads[i];
    
    // Move the thread to the Spam label
    GmailApp.moveThreadToSpam(thread);
  }
}
