# Solent Budgeting SPA (Single Page Application)

William Hughes | Q14147939

[Hosted Firebase Site](https://assignment2-9c312.web.app/)

## Introduction
As someone who constantly struggles to manage their budget, I decided to build a budgeting SPA (Single Page Application) using React JS. Not only was this project intended to reflect the designs outlined during assignment one, but furthermore this application would allow users to add different categories that could be identified via different colour palettes, as well as monitor their total spending via a dynamic wheel as well as view all recent transactions. The user would not however be able to set the price, because the idea was that this app would link directly to the user's bank account therefore the prices would be taken from there, however because there were time constraints with this project and legalities in place default prices were built into the code so whenever a new category was created a price would be automatically assigned. In addition, the SPA would be responsive for both desktops and mobiles.

## Methodology 
During the first assessment I went on to discuss how the Design Thinking methodology influenced this project by adhering to the following steps:

•	Empathize – Listen to and document the problems students have in relation to budgeting. 

•	Define the problem – Review notes from student discussions and highlight a universal problem they all faced 

•	Ideate – Focus on the problem outlined and devise a solution 

•	Prototype – Create a high-fidelity mock-up of the solution 

This philosophical process helped define a problem that users experience at Solent University using online surveys to gather the data, which in this case turned out to be budgeting and determine a solution for it. However, for the development phase of this project the Agile methodology was applied, which involves sprint-based working. E.g., working on one section at a time and then uploading a draft or finished version to GitHub. In terms of how Agile was utilized with this project, first a user story was implemented to determine the demographic of the user and how it could solve the problem of budgeting for them.

Next work began on developing the React site. The changes were then pushed to GitHub, with at least two new additions per week.
It is my belief that Agile was the only suitable methodology for this project, because if compared to a more linear methodology such as Waterfall everything must be based on the success of the previous phase and if something went wrong the process would need to begin again, whereas with Agile the sprint could be amended to accommodate this issue.

**User Story**

Dexter is a first-year student at Solent University, studying Digital Design & Development. He has always had a problem with budgeting. For example, he prefers to spend money frivolously on nights out than manage his weekly/monthly budget. He also often uses his smartphone because he is usually on the move. One day he comes across a site advertised on Solent’s website called Solent Budgeting which tells him that this is an app optimized for mobile and desktop that can be integrated with his online bank account which shows how much he’s spent, what he’s spent the money on, and when the purchase occurred. The app also allows Dexter to manually add new categories. He decides to start using the app and is pleasantly surprised by how much money he ends up saving by the end of the first week.

### Methods of Development
Prior to the development phase of the Agile methodology, I watched several hours’ worth of React tutorials to achieve a basic understanding of what was required to bring this design to life and solve Dexter’s (user story) budgeting problem. My solution involved creating a list of the names of all the files and folders that would be used for the project so I could reference them if I got stuck. In hindsight perhaps it would have been wise to devise a project roadmap or a user flow, however at the time I wasn’t entirely sure I would even be able to make half of what I designed so I opted to go straight into the development phase without much planning.

The first sprint of the Agile methodology involved developing the transactions page, consecutively followed by the overview and categories pages. Components were used to develop, import, and export the navbar, footer, datafilter, expensefilter, categories/forms needed, and search bar. Furthermore, a hamburger menu was incorporated into the mobile version to not only adhere to the initial design but also allow for easier navigation when the app is used on small devices. These three sprints were the most time-consuming, which was due to a combination of errors, a lack of understanding of React JS, and missing or incomplete code. I had considered creating a login system for the app as well, despite it not being included in the initial design, however this idea was ultimately scrapped after the development of the aforementioned pages took longer than expected. Once the transactions, overview, and categories pages had been successfully developed and optimized for desktop and mobile they were then pushed to GitHub.

## Conclusion/Results
This SPA (Single Page Application) was built to successfully replicate the design that was devised during the first assessment of this project. The SPA used the following dependencies to bring the design to life:

• Node JS

• Yarn

• Firebase

• React JS

While npm was the dominant package manager used throughout this project Yarn was also used to experiment with since according to it addresses more security and performance issues than npm, however npm was still used to run install and test the scripts.

Looking back, I’m surprised the SPA ended up looking as much like the design as it did. Without a doubt, the most frustrating aspect of this assignment was committing to GitHub and hosting on Firebase. With GitHub, for the longest time it wouldn’t let me commit anything, to the point where I even created a new account. Eventually I realised that GitHub only allows commits with tokens now, rather than passwords to improve their security, but even then doing this in VS Code took far longer than it should have. Firebase proved far worse and for the longest time VS Code would not let me install it using npm install -g firebase-tools. Errors appeared each time. Then when I finally managed to install it, after using some code I found from ?? the site would not be dynamic and only show me a welcome page from Firebase. Eventually I managed to solve this problem by simply using another laptop, but this was easily the worst part of this whole project.

 **The main features of the site included:**

• Ability to see all your transactions

• A dynamic overview page, which automatically adjusts whenever a new category is added to show what you have spent the most on

• The ability to search for and add new categories

• Desktop and mobile optimised

**The features which were NOT included were:**

• Registration page

• Login page

• Logout page

• Links to any database

Looking back, I would like to incorporate more interactive features such as a registration page. The reason it was not included at the time was I was unsure if I could even create the current version of the React site, but if I should return to this project at any point in the future I would consider adding these features.