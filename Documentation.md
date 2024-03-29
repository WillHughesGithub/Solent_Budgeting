# Solent Budgeting

William Hughes | Q14147939

[Firebase Site](https://solent-budgeting.web.app/)

[GitHub Repo](https://github.com/WillHughesGithub/Solent_Budgeting/)

## Introduction
As part of a university assessment, I was required to identify a problem Solent university students face, then design and develop a React JS SPA (Single Page Application) solution for it. The design had already been devised during the first assessment of this module in 2021 and as someone who struggles to manage their budget, I decided to build a responsive budgeting app that works on both mobile and desktop screens. Not only was this project intended to reflect the designs devised during the first assessment of this module, but furthermore this application would allow the user to add multiple categories which could be differentiated by colour palettes, monitor their total spending by the means of a dynamic wheel, and view all recent transactions. However, the user would not be able to manually set the price for each category, because the idea is that this app would be directly linked to their bank account, therefore the prices would be extracted from there, however because of the time constraints involved with this project default fees were built into the code, so whenever a new category is generated a price would be automatically assigned to reflect it.

## Methodology
During the first assessment I went on to discuss how the [Design Thinking Methodology](https://www.interaction-design.org/literature/article/5-stages-in-the-design-thinking-process/) influenced this project by adhering to the following steps:

• Empathize – Listen to and document the problems students have in relation to budgeting.

• Define the problem – Review notes from student discussions and highlight a universal problem they all faced

• Ideate – Focus on the problem outlined and devise a solution

• Prototype – Create a high-fidelity mock-up of the solution

This philosophical process helped me define the problem of budgeting which many students experience at university. The problem was identified by means of online surveys during the first assessment of this module. However, for the development phase of this project a modified version of the Agile methodology was applied, which involved sprint-based working, but as an individual rather than as a team. The first step involved creating a [user story](https://www.visual-paradigm.com/guide/agile-software-development/what-is-user-story/) about a student at Solent University, which would be used to establish the demographic and determine how this app could resolve this problem for them. Once the user story had been established, sprint-based working began, with a focus placed on completing one page at a time and taking a [mobile first approach](https://www.classicinformatics.com/blog/why-mobile-first-approach/) to not only offer a more immersive user experience, but also because statistics gathered from 2021 show that [54.86% of traffic came from mobile devices](https://gs.statcounter.com/platform-market-share/desktop-mobile-tablet/worldwide/). Intermittent sprints then commenced, with the transactions page, then the overview page, and then the categories page, before importing/exporting all components so the pages were connected in React. The final version was then pushed to GitHub.

### User Story
Dexter is a first-year student at Solent University, studying Digital Design & Development. He has always had a problem with budgeting. In fact, he prefers to spend money frivolously on nights out rather than manage his weekly/monthly budget. He often uses his smartphone because he is usually on the move. One day he comes across a site advertised on Solent’s website called Solent Budgeting which tells him that this is an app optimized for mobile and desktop that can be integrated with his online bank account which shows how much he’s spent, what he’s spent the money on, and when the purchase occurred. The app also allows Dexter to manually add new categories. He immediately starts using the app and is pleasantly surprised by how much money he ends up saving by the end of the first week.

## Methods of Development
Prior to the development phase of the Agile methodology, I watched several hours’ worth of React tutorials to achieve a basic understanding of what was required to bring this design to life and solve Dexter’s (user story) budgeting problem. The solution involved creating a list of the names of all the files and folders that would be used for the project so they could be referenced if I got stuck. In hindsight perhaps it would have been wise to devise a [project roadmap](https://www.productplan.com/glossary/project-roadmap/) or a [user flow](https://xd.adobe.com/ideas/process/user-research/user-journey-vs-user-flow/), however at the time I wasn’t sure I would even be able to make half of what I designed so I opted to dive straight into the development phase. 

The first sprint of the Agile methodology involved developing the transactions page, consecutively followed by the overview and categories pages. Components were used to develop, import, and export the navbar, footer, datafilter, expensefilter, categories/forms needed, and search bar. Furthermore, a hamburger menu was incorporated into the mobile version to not only adhere to the initial design but also allow for easier navigation when the app is used on small devices. These three sprints were the most time-consuming, which was due to a combination of errors, a lack of understanding of React JS, and missing or incomplete code. Once the transactions, overview, and categories pages had been successfully developed and optimized for desktop and mobile they were then pushed to GitHub.

### Testing
To gather feedback for the SPA and see what other students thought, I asked three first year students at my accommodation. While they all said they liked it, none of them were blown away either by the concept or its features. Likewise, none of them said they would use it if push came to shove. One of them suggested adding a login system so only Solent students could access it. This was considered during the development phase, but because the sprints took longer than anticipated this idea was ultimately scrapped. What they did all agree on though was that the mobile version was their preferable version, which is good since the app was designed to be used on the move and to be integrated with the student’s online bank account. One issue that one of the students picked up on was after adding a new category the screen automatically zooms in when using the mobile version, so it could get tiresome having to constantly zoom out if using the app on a regular basis. This was the only major critique received though.

## Conclusion/Results
In conclusion, I’m surprised the SPA ended up looking as much like the design as it did. Without a doubt, the most frustrating aspect of this assignment was just trying to understand React JS and JavaScript in general. While I watched a ton of tutorials, the number of errors that kept coming up when attempting to import and export the components or write selected code was astronomical. In terms of the dependencies used to develop this project, [Node.js](https://nodejs.org/en/) was used as the package manager to install the relevant files and run the scripts on my localhost, which presented its own set of challenges e.g., after running a script on localhost:3000 that script would be cached, so if a new one was then run it would only remember the previous one. It took some time to identify this issue, but by clearing the cache in my local library this resolved the problem. In addition, [Firebase](https://firebase.google.com/) was used to host the SPA. This process was similar to that of pushing to a GitHub repository. For example, the project was first created in my account, then firebase was installed via npm and the app was then pushed to Firebase, where it was hosted.

Regarding the features of the SPA, everything outlined in the prototype was used. This included:

• Ability to view all your transactions

• A dynamic overview page, which automatically adjusts whenever a new category is added to show what you have spent the most on

• The ability to search for and add new categories

Looking back, perhaps it would have been a good idea to incorporate more interactive features such as the proposed registration page when obtaining feedback from Solent students to not only allow for more interactivity, but also safeguard against the possibility of phishing, especially since this app was hypothetically intended to be integrated with the student's online bank account. However, I do feel like the budgeting app does resolve the problem it set out to accomplish which was to save students money on their daily purchases, because since the categories automatically generate the fees for the user to view and the user also has access to a dynamic wheel which shows their most expensive purchases, therefore it is not hard to see how students could save money in the future should they choose to use this application.