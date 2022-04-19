# IOET-exercise

![Esta es una imagen](https://i.imgur.com/S7I7cQG.png)

## Instructions

To run the program local way, follow next instructions: 

1. Clone the repostiory on your computer, using the command ´git clone <URL_REPOSITORY>´ on your console.

2. Then, go to the /IOET-Exercise directory and run ´node src/main´ command to execute the console application and it will show the tables that contain asked information.

3. On the same directory type 'npm install' command to install the dependencies.

4. To run tests type 'npm test'

## Solution summary

When I face this kind of exercises I like to use the divide and conquer technique, divide the general problem into smaller problems and solve them one by one until I reach the final solution. Here are the problems posed:

* Read the .txt file and organize the information by employees, name and the schedule they attended the office, all in an array.

* I wanted to implement the design pattern 'Prototype Pattern', creating an Employee class with attributes and methods needed to represent an employee of the ACME company. Then I made a function that using the above array would create all the employee instances and store them in an array.

* From the previous step arose another problem, which was the issue of dates, then I decided to write a function that would return the dates using the Javascript Date() object to use its methods and make a little easier the accounts with the times and dates. 

* Once I had created all the instances with their attributes well established, I had to find a way to evaluate pairs of employees in order to move on to the next problem. For this I implemented a function that traversed the necessary number of times the array of instances of the Employee class, so that all the cases of pairs were covered.

* We move on to the most important part of the solution process, creating the asked for information. For that, the Employee class has a method called 'getPairsSchedule' that shows in console the pair of employees, the times and the amount of time they crossed. 

## Software Architecture 


I have used MVC software architecture, making an analogy where directory /data is the Model, /main is the View and /utilities is the Controller, all this inside /src directory. Also, the solution has a directory called /test there are the tests that given truthly to my solution.