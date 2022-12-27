# EmployeeManagementAppAngular

!! Application is still under development. This is not a final product!
Below is the description of the purpose of the application, functions and the Infrastructure of the application.

## Amazon Web Services Infrastructure

This is a frontend of Employee Management Application. The backend of application is in the another repository titled "employee-management-app-be". 

This application is hosted on Amazon Web Services. The Angular frontend is hosted on Amazon S3 bucket using Static Website Hosting. Other AWS Services that I used are Route 53 (for registering employeemanagementapp.com domain), CloudFront (for using HTTPS and using CDN), AWS Certificate Manager (for registering TLS/SSL certificate for the purpose to use HTTPS) Amazon S3, EC2 Instance (for running Java Spring Boot application), Application Load Balancer (for load balancing the traffic to my 2 EC2 Instances), AWS Secrets Manager ( for hiding secrets in Java application to MySQL database) and Amazon RDS (for running my MySQL database of the application).

Below is shown the graph of the Infrastructure of the application on AWS that I am currently running:
![Alt text](Employee%20Management%20App%20Infrastructure.png "Infrastructure Scheme of Application.")

I had also deployed the application using Amazon Elastic Container Service and Amazon Elastic Container Registry.
After creating Dockerfile I created Docker Image and pushed it to my Amazon ECR repository.
After that I have used ECS to create and run Docker containers created from my Docker image.
You can find the Docker image of backend at: https://hub.docker.com/repository/docker/mykoliux/employee_management_app

## Application Description

This application helps the purson with the purpose of managing human resources. In the first page of application is the login page. After loging in the user can see the basic functionality described of the application. In the page "Employee List" a user can see the list of all the employees (depending if I have the EC2 Instances). User can see the statistics (name, surname , salary of the person). The user can also add new employee on "Add Employee" page.
