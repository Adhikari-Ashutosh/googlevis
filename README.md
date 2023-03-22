# Introduction to Google Vision Power

## Installation and basic usage:

### Installation
- <code>git clone https://github.com/Adhikari-Ashutosh/googlevis</code>
- <code>cd YOUR_DIRNAME</code>
- <code>yarn</code>
- <code>yarn start</code>
- For failing dependencies use <code>yarn add DEPENDENCY-NAME</code>

### Usage
- Pretty janky UI, but just draw something and hit submit, expect a response as an alert. If you draw well your prompt would tell you exact what your drawing is
if not, I guess you have to draw it better (I drew a cycle and got it identified as a wheel. not too proud of that one 😅)
- This code assumes that you have some resource up and running with a POST request listener enabled, you pass data as a Base 64/png passed to this resource
- If you don't have a resource at some link refer my other repository that creates this POST listener and data decoder https://github.com/Adhikari-Ashutosh/backgooglevis

### Screenshot of How it should look if everything is working
![image](https://user-images.githubusercontent.com/89822484/226988200-97f736f9-632b-477b-b39a-ebd729aface3.png)


