# Solent Budgeting SPA (Single Page Application)

William Hughes | Q14147939

[Hosted Firebase Site](https://solent-budgeting.web.app/)

## Introduction
As part of a university assessment, I was required to identify a problem Solent university students face, then design and develop a SPA (Single Page Application) around it. The design had already been devised during the first assessment of this module in 2021 and as someone who struggles to manage their budget, I decided to build a responsive budgeting app using React JS that works on both mobile and desktop screens. Not only was this project intended to reflect the designs devised during the first assessment of this module, but furthermore this application would allow the user to add multiple categories which could be differentiated by colour palettes, monitor their total spending by the means of a dynamic wheel, and view all recent transactions. However, the user would not be able to manually set the price for each category, because the idea is that this app would be directly linked to their bank account, therefore the prices would be extracted from there, however because of the time constraints involved with this project default fees were built into the code, so whenever a new category is generated a price would be automatically assigned to reflect it.

## Methodology
During the first assessment I went on to discuss how the Design Thinking methodology influenced this project by adhering to the following steps:

• Empathize – Listen to and document the problems students have in relation to budgeting.

• Define the problem – Review notes from student discussions and highlight a universal problem they all faced

• Ideate – Focus on the problem outlined and devise a solution

• Prototype – Create a high-fidelity mock-up of the solution

This philosophical process helped me define the problem of budgeting which many students experience at university. The problem was identified by means of online surveys during the first assessment of this module. However, for the development phase of this project a modified version of the Agile methodology was applied, which involved sprint-based working, but as an individual rather than as a team. The first step involved creating a user story about a student at Solent University, which would be used to establish the demographic and determine how the problem of budgeting could be resolved for them. Once the user story had been established, sprint-based working began, with a focus placed on completing one page at a time and taking a mobile first approach. This involved working on the transactions page, then the overview page, and then the categories page, before importing/exporting all components so the pages were connected. The final version was then pushed to GitHub.

Agile seemed like the only suitable methodology for this project, because if compared to a more linear methodology such as Waterfall everything must be based on the success of the previous phase and if something went wrong the whole process would need to begin again from scratch, whereas with Agile the sprint could be amended to accommodate this issue.

### User Story
Dexter is a first-year student at Solent University, studying Digital Design & Development. He has always had a problem with budgeting. In fact, he prefers to spend money frivolously on nights out than manage his weekly/monthly budget. He often uses his smartphone because he is usually on the move. One day he comes across a site advertised on Solent’s website called Solent Budgeting which tells him that this is an app optimized for mobile and desktop that can be integrated with his online bank account which shows how much he’s spent, what he’s spent the money on, and when the purchase occurred. The app also allows Dexter to manually add new categories. He decides to start using the app and is pleasantly surprised by how much money he ends up saving by the end of the first week.

## Methods of Development
Prior to the development phase of the Agile methodology, I watched several hours’ worth of React tutorials to achieve a basic understanding of what was required to bring this design to life and solve Dexter’s (user story) budgeting problem. My solution involved creating a list of the names of all the files and folders that would be used for the project so I could reference them if I got stuck. In hindsight perhaps it would have been wise to devise a project roadmap or a user flow, however at the time I wasn’t entirely sure I would even be able to make half of what I designed so I opted to go straight into the development phase without much planning.

The first sprint of the Agile methodology involved developing the transactions page, consecutively followed by the overview and categories pages. Components were used to develop, import, and export the navbar, footer, datafilter, expensefilter, categories/forms needed, and search bar. Furthermore, a hamburger menu was incorporated into the mobile version to not only adhere to the initial design but also allow for easier navigation when the app is used on small devices. These three sprints were the most time-consuming, which was due to a combination of errors, a lack of understanding of React JS, and missing or incomplete code. Once the transactions, overview, and categories pages had been successfully developed and optimized for desktop and mobile they were then pushed to GitHub.

### Testing
To gather feedback for the SPA and see what other students thought, I asked three first year students at my accommodation. While they all said they liked it, none of them were blown away either by the concept or its features. Likewise, none of them said they would use it if push came to shove. One of them suggested adding a login system so only Solent students could access it. This was considered during the development phase, but because the sprints took longer than anticipated this idea was ultimately scrapped. What they did all agree on though was that the mobile version was their preferable version, which is good since the app was designed to be used on the move and to be integrated with the student’s online bank account. One issue that one of the students picked up on was after adding a new category the screen automatically zooms in, so it could get tiresome having to constantly zoom out if using the app on a regular basis. This was the only major critique received though.

## Conclusion/Results
In conclusion, I’m surprised the SPA ended up looking as much like the design as it did. Without a doubt, the most frustrating aspect of this assignment was just trying to understand React JS and JavaScript in general. While I watched a ton of tutorials, the number of errors that kept coming up when attempting to import and export the components or write selected code was astronomical. In terms of the dependencies used to develop this project, Node.js was used as the package manager to install the relevant files and run the scripts on my localhost, which presented its own set of problems e.g., after running a script on localhost:3000 that script would be cached, so if a new one was then run it would only remember the previous one. It took a while to identify this issue, but by clearing the cache in my local library this resolved the problem. In addition, Firebase was used to host the SPA. This process was similar to that of pushing to a GitHub repository. For example, the project was first created in my account, then firebase was installed via npm (Node.js) and the app was then pushed to Firebase, where it was hosted. 

Regarding the features of the SPA, everything outlined in the prototype was used. This included:

• Ability to see all your transactions

• A dynamic overview page, which automatically adjusts whenever a new category is added to show what you have spent the most on

• The ability to search for and add new categories

Looking back, perhaps it would have been a good idea to incorporate more interactive features such as the proposed registration page when obtaining feedback from Solent students, however I do feel like the budgeting app does resolve the problem it set out to accomplish which was to save students money on their daily purchases, because since the categories automatically generate the fees for the user to view and the user also has access to a dynamic wheel which shows their most expensive purchases, therefore it is not hard to see how students could save money in the future should they choose to.