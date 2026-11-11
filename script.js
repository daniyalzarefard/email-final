let viewAvatar = document.getElementById("viewAvatar");
let viewTitle = document.getElementById("title");
let viewSender = document.getElementById("viewSender");
let viewBody = document.getElementById("viewBody");

let title1 = "Project Update";
let sender1 = "Alex Morgan";
let avatar1 = "image/avatar3.png";
let text1 = "Hello, I wanted to share a quick update about the project. The first version is ready, and the team can review it today. Please send your feedback before Friday.";

let title2 = "Meeting Reminder";
let sender2 = "Emma Wilson";
let avatar2 = "image/avatar2.png";
let text2 = "This is a reminder about our meeting tomorrow at 10:00 AM. We will discuss the latest progress and decide on the next steps. See you there.";

let title3 = "Weekend Plans";
let sender3 = "Noah Smith";
let avatar3 = "image/avatar5.png";
let text3 = "Hi! We are planning a small get-together this weekend. Let me know if you are available on Saturday afternoon. It would be great to see you.";

let title4 = "Design Feedback";
let sender4 = "Alex Morgan";
let avatar4 = "image/avatar3.png";
let text4 = "Thank you for sharing the design. The layout looks clean and easy to use. I have added a few suggestions that may improve the user experience.";

let title5 = "Course Materials";
let sender5 = "Emma Wilson";
let avatar5 = "image/avatar3.png";
let text5 = "The course materials are now available. You can review the notes and examples before the next class. Please let me know if any file is missing.";

let title6 = "Team Schedule";
let sender6 = "Noah Smith";
let avatar6 = "image/avatar5.png";
let text6 = "Here is the updated team schedule for this week. Please check your tasks and confirm that the assigned times work for you.";

let title7 = "New Assignment";
let sender7 = "Alex Morgan";
let avatar7 = "image/avatar3.png";
let text7 = "The new assignment has been posted. Read the instructions carefully and submit your work before the deadline. Good luck!";

let title8 = "Travel Details";
let sender8 = "Emma Wilson";
let avatar8 = "image/avatar3.png";
let text8 = "I have attached the travel details for our upcoming trip. Please check the dates, meeting point, and required documents before departure.";

let title9 = "Account Notice";
let sender9 = "Noah Smith";
let avatar9 = "image/avatar5.png";
let text9 = "Your account information was updated successfully. If you did not make this change, please contact the support team as soon as possible.";

let title10 = "Event Invitation";
let sender10 = "Alex Morgan";
let avatar10 = "image/avatar3.png";
let text10 = "You are invited to our upcoming event. Join us for an afternoon of presentations, activities, and conversations with the team.";

let title11 = "Weekly Report";
let sender11 = "Emma Wilson";
let avatar11 = "image/avatar3.png";
let text11 = "Here is the weekly report with the main results and completed tasks. We made good progress and have a few priorities for next week.";

let title12 = "Final Reminder";
let sender12 = "Noah Smith";
let avatar12 = "image/avatar5.png";
let text12 = "This is a final reminder to review the document and send your approval. We need your response to move forward with the next stage.";

function showEmail(title, sender, avatar, body) {
    viewTitle.innerHTML = title;
    viewSender.innerHTML = sender;
    viewAvatar.src = avatar;
    viewBody.innerHTML = body;
}

function email1() {
    showEmail(title1, sender1, avatar1, text1);
}

function email2() {
    showEmail(title2, sender2, avatar2, text2);
}

function email3() {
    showEmail(title3, sender3, avatar3, text3);
}

function email4() {
    showEmail(title4, sender4, avatar4, text4);
}

function email5() {
    showEmail(title5, sender5, avatar5, text5);
}

function email6() {
    showEmail(title6, sender6, avatar6, text6);
}

function email7() {
    showEmail(title7, sender7, avatar7, text7);
}

function email8() {
    showEmail(title8, sender8, avatar8, text8);
}

function email9() {
    showEmail(title9, sender9, avatar9, text9);
}

function email10() {
    showEmail(title10, sender10, avatar10, text10);
}

function email11() {
    showEmail(title11, sender11, avatar11, text11);
}

function email12() {
    showEmail(title12, sender12, avatar12, text12);
}

function showFolder(title, sender, text) {
    viewTitle.innerHTML = title;
    viewSender.innerHTML = sender;
    viewAvatar.src = "image/avatar3.png";
    viewBody.innerHTML = text;
}

let inboxButton = document.querySelector('[data-bs-target="#collapseOne"]');
let sentButton = document.querySelector('[data-bs-target="#collapseTwo"]');
let draftsButton = document.querySelector('[data-bs-target="#collapseThree"]');
let trashButton = document.querySelector('[data-bs-target="#collapsefour"]');

inboxButton.onclick = function() {
    showFolder("Inbox", "Your inbox", "Your received messages are shown here.");
};

sentButton.onclick = function() {
    showFolder("Sent", "Sent messages", "Messages you have sent are listed here.");
};

draftsButton.onclick = function() {
    showFolder("Drafts", "Draft messages", "Your saved drafts are listed here.");
};

trashButton.onclick = function() {
    showFolder("Trash", "Deleted messages", "Deleted messages are listed here.");
};

email1();
