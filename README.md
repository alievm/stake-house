**How to Setup & Run this Project**


- # **Install NodeJs ( Ignore If Already Installed)**

1. Visit the official Node.js website i.e) <https://nodejs.org/en/download/>

1. Download the Node.js installer

1. Run the installer.

1. Follow the prompts in the installer.


**—Firsľ Run Backend ľhen Fronľend & Admin—**


- # **Steps To Setup Backend Of The Project**

1. Open Project Folder In VS Code

1. Open Integrated Terminal

\- Right Click on Sidebar > Select “Open In Integrated Terminal”

1. Type “**npm install**” and press Enter and Wait for Installation to be completed (requires Internet)

1. Setup The MongoDB

1. Open this link - [LINK](https://www.mongodb.com/cloud/atlas/register)

![](Aspose.Words.88715200-8181-4ef1-8932-dc17d3d29e38.001.png)


1. After that Sign Up on the website.

![](Aspose.Words.88715200-8181-4ef1-8932-dc17d3d29e38.002.png)



1. Click on New Project Option

![](Aspose.Words.88715200-8181-4ef1-8932-dc17d3d29e38.003.jpeg)

1. After Creating Project go to Database Section & Build a database

![](Aspose.Words.88715200-8181-4ef1-8932-dc17d3d29e38.004.jpeg)

1. Select M0 & Your Region & Create Database

![](Aspose.Words.88715200-8181-4ef1-8932-dc17d3d29e38.005.jpeg)


1. Setup Username & Password & Create User

![](Aspose.Words.88715200-8181-4ef1-8932-dc17d3d29e38.006.jpeg)

**Note:** Do not use ‘@’ symbol in the password

1. Now Click on Finish & Close

![](Aspose.Words.88715200-8181-4ef1-8932-dc17d3d29e38.007.png)



1. Whitelist IP **0.0.0.0** & Click on Add Entry

![](Aspose.Words.88715200-8181-4ef1-8932-dc17d3d29e38.008.jpeg)


1. Now Click on Connect

![](Aspose.Words.88715200-8181-4ef1-8932-dc17d3d29e38.009.png)

1. Now Select Compass Option

![](Aspose.Words.88715200-8181-4ef1-8932-dc17d3d29e38.010.png)

1. And Copy the Connection String

![](Aspose.Words.88715200-8181-4ef1-8932-dc17d3d29e38.011.jpeg)

1. And Paste It in db.js replace password with password you set previously in 4.F & save changes


![](Aspose.Words.88715200-8181-4ef1-8932-dc17d3d29e38.012.jpeg)


1. # **Now We have to Set Up stripe**

- Open .env file in backend folder paste your stripe secret key in STRIPE\_SECRET\_KEY variable

![](Aspose.Words.88715200-8181-4ef1-8932-dc17d3d29e38.013.jpeg)



1. To Run Backend use **npm run server** in Integrated Terminal

![](Aspose.Words.88715200-8181-4ef1-8932-dc17d3d29e38.014.png)

- # **Steps To Run Frontend & Admin Panel Of The Project**

1. Open	Project Folder In VS Code
1. Open Integrated Terminal in project directory

    0. Right Click on Sidebar > Select “Open In Integrated Terminal”

![](Aspose.Words.88715200-8181-4ef1-8932-dc17d3d29e38.015.jpeg)

1. ![](Aspose.Words.88715200-8181-4ef1-8932-dc17d3d29e38.016.png)Type “npm install” and press Enter and Wait for Installation to be completed (requires Internet)


1. After Installation You will See ‘node\_modules’ Folder in the Sidebar

1. After that type “npm run dev” in terminal

![](Aspose.Words.88715200-8181-4ef1-8932-dc17d3d29e38.017.png)

1. Now Your Project Will Start In Your Default Web Browser



