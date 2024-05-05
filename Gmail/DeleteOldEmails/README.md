`Step 1: Open Google Apps Script Editor

    Go to the Google Apps Script website.
    Click on "Start Scripting" to open the Google Apps Script editor.

Step 2: Copy and Paste the Script

    In the script editor, delete any code in the script editor.
    Copy the script provided earlier.
    Paste the script into the script editor.

Step 3: Save the Script

    Click on File in the menu.
    Choose Save to save the script.
    Name your project.

Step 4: Setup the Trigger

    Click on the clock icon (triggers) in the toolbar.
    Click on the "Add Trigger" button (it looks like a blue "+" sign).
    Configure the trigger settings:
        Choose the function to run: deleteOldEmailsWithLabel
        Choose deployment: Head
        Choose event source: Time-driven
        Choose type of time-based trigger: Day timer, and select the time of day you want the script to run.
    Click on "Save".

Step 5: Authorize the Script

    Click on the disk icon to save your project.
    Go back to the script editor.
    Click on the "Run" button (▶️) to run the script for the first time.
    Follow the authorization prompts to grant the necessary permissions. This step is crucial to allow the script to access your Gmail mailbox.

Step 6: Test the Script

    After authorization, you should see a log in the bottom panel indicating that the script ran successfully.
    Check your Gmail mailbox to ensure that old emails with the specified label have been deleted.

Step 7: Monitor and Adjust

    Monitor the script's performance and adjust the trigger settings if necessary.
    You can also modify the script to suit your specific needs by changing variables or adding additional functionality.

That's it! Your Google Apps Script is now deployed and set up to run against your Gmail mailbox to delete old emails with a particular label.
`
