# Understanding system Design <hr>

System design is a step-by-step process of defining a particuler software modules ,components,etc.
It is a base concept in software engineering and is vital in bulding scalable and reliable software.
Additionally, certain rounds of the interview process are reserved for the system design interview by tech behemoths like Google, Microsoft, Amazon, and so on. During this phase, they assess the interviewer's capacity to conceptualize and design the architecture of the application from the ground up.
## What is the need for system design?
reasons why why its to design a system before starting to write a code for the application.
fr instance when you are approched by business owners to buld a software appplication for them you requre to know things like 

- Non-funtional requirements which can eg  scalability, high availability, consistency.
- Functional requirements 
- Architecture example  SQL or NoSQL databases
- Application scalability
## Exploring Essential Design Methods in System Design

Some of the commonly used system design methods by the develpers include:
1. **Architectural Design**
    is the base of system design describing the  infrastructure, model, view, components, and interaction. it inludes client-server interaction, microservices, etc. 

2. **ERD Diagram**
    An ERD (entity-relationship diagram) is used to design an application's database structure. It allows for defining multiple schemas, adding entities and their attributes within each schema, and connecting entities across different schemas if they have a relationship.

3. **UML Diagram**

    UML, or Unified Modeling Language, is used for modeling software systems. It includes various diagrams, such as activity diagrams, class diagrams, and sequence diagrams, to represent different aspects of the system.

4. **Class Diagrams**
    Used to represet the classes.The class diagram contains class attributes ,methods and relationships between multiple classes.class diagram provides an overview of the systems data and funtionality.5. **Sequence Diagrams**
    Sequence diagrams illustrate the interactions between various components of a system and are used to model system behavior. For instance, they can specify how the application processes user input from the front end and returns a response.

## Diving Deeper into System Design Concepts
Basics and fundamental concepts of system design.

1. **Performance vs Scalability**

   **Performance**
   When visiting websites, some load quickly, like Google, while others take longer. If your website has a long loading time, traffic may decrease as visitors prefer faster sites. To improve performance and serve resources faster, mechanisms such as caching can be used.

   **Scalability**
   Scalability is the capacity of an application to expand effectively. For instance, you can handle the extra load by either spreading it over numerous servers or expanding the capacity of a single server if your application becomes more popular and the server receives more requests.

2. **Latency vs Throughput**

   They both affect the efficiency of the system.

   **Latency:* The amount of time it takes to finish a single request or data activity is measured as latency. For a flawless user experience, latency is mostly important for online or live gaming, live streaming, video calls, etc. To put it simply, latency is a network delay brought on by network architecture, transport protocol, or geographic distance. The unit of measurement is milliseconds.

  - *Throughput:* -
Throughput is the number of operations a system can handle or the amount of data transferred via network requests in a given time, measured in megabytes (MB) per second. It assesses system capability, and low throughput can be improved by scaling the server.
3. **consistency patterns and Availability patterns**

- *Consistency:* Consistency ensures that all the nodes in the system read the same data at a particuler time.

Inconsistent banking systems may subtract the withdrawn balance from the total balance when both you and your friend withdraw money from the same account simultaneously.

- *Availabilty patterns:* System availability unsures that each request receives a response either with fresh or old data.This avilability is very important.


# Advanced concepts in System design.

## 1. CDN

CDN stands for the Content Delivery Network. It is a distributed network of servers located at various geographic locations. CDNs deliver content such as images and data from the server to users efficiently.

CDNs improve application performance by delivering resources faster and reducing latency (network delay). When a user requests a resource, the application reaches out to the nearest server. If this server has the resource cached, it serves the content directly. If not, it requests the origin server, caches the resource, and then delivers it to the user. Subsequent requests for the same resource will be served from the cache.

## 2. DNS

DNS stands for the Domain Name System. Initially, users needed to remember IP addresses to access websites. As the number of websites grew, it became difficult to remember these addresses. DNS was introduced to solve this problem. DNS maps domain names (e.g., www.example.com) to unique IP addresses, allowing users to access websites and their resources using easy-to-remember domain names. When a resource is requested via a domain name, DNS returns the IP address mapped to that domain name.

## 3. Caching

- Caching is a mechanism for serving resources quickly, also known as high-speed storage. It operates between a web application and the data source.

- When a data request is made, the application first checks the cache. If the data is present, it is returned from the cache. If not, the application retrieves the data from the database or source, stores it in the cache, and then sends it to the application. This process speeds up data retrieval for future requests.

*Did you know?* Cookies are used to cache data in your browser.

## 4. Proxies

- Proxies act as intermediaries between clients and servers. They receive requests from clients and forward them to the appropriate server, then return the server's response to the client. Proxies can enhance security, manage traffic, and improve performance by caching frequently requested resources.

 # Components of System Design.

 ### 1. Microservices and Service Discovery.
 Microservices architecture is a popular approach in software design where complex applications are divided into smaller, independent services. Each service is responsible for specific tasks and operates autonomously within the system.

  *The concepts listed below pertain to microservices.*
 - Service Indentification - Each microservice has a unique ID and name for its identification.
 - Dynamic Service Discovery - Microservices can dynamically find other services located in the same network thus enhancing scaling and load balancing.

 ### 2. Database Systems : RDBMS and NoSQL
 Grouped into two primary categories.
 ### RDBMS - Relational Database Management System.
 - RDBMS, which stands for Relational Database Management System
 - SQL databases are built on top of the RDBMS.

 *characteristics of the RDBMS database*
- It stores the data in the table format.
- You can’t scale the RDBMS database horizontally, but you can scale it vertically.
- SQL is a query language for the RDBMS databases.
- Accessing data from the RDBMS database is slow.
#### NoSql 
NoSQL databases, or non-SQL databases, store data in key-value pairs rather than tables, making them suitable for handling unstructured data storage requirements.
*Characteristics.*
- NoSQL databases use key-value pairs.
- They're horizontally scalable, allowing new key-value pairs.
- Records in NoSQL databases can have different key-value pairs.
- They're faster than RDBMS databases.
- NoSQL supports frequent database changes.

### 3. Communication Protocols

Communication protocols define rules for data exchange between systems. Here's a summary of various protocols:

- **HTTP/HTTPS**: Used for web communication, HTTPS is the secure version.
- **TCP/IP**: For internet communication, like chatting applications.
- **UDP**: Commonly for live streaming, video calls, etc., tolerating data loss.
- **WebSockets**: Enables bi-directional communication between web applications.

# Approaching System Design Interview Questions
## Step-by-step Guide

1. **Requirements Clarification**: Understand function and non-function requirements, such as user interactions (e.g., authentication, navigation) and application capabilities (e.g., scalability, low latency).

2. **Estimation of Resources**: Determine server and database needs based on expected usage, considering factors like request volume and data storage requirements.

3. **System Interface Definition**: Design API endpoints and functionalities, specifying inputs and outputs for each endpoint to facilitate communication between different components of the system. eg 
```sendNotification(userId, message, …); ```

4. **Defining Data Model**: Choose suitable database type based on data structure requirements, considering factors like structured vs. unstructured data and relational vs. NoSQL databases.while bulding social media applications like facebook or twitter you can easily use Graph database to manage many-to-may relationships

5. **High-level Design**: Design system components and connections to fulfill functional requirements, including architecture, deployment model, integrating with third party-prty tools with the apllications
6. **Detailed Design**: Analyze and enhance system design to meet non-functional requirements 
- like performance
- scalability.
- considering strategies such as caching.
 - load balancing.
 - data replication.

7. **Identifying and Resolving Bottlenecks**:

- Address potential system failures and performance issues by proposing solutions, such as
1. fault-tolerant mechanisms,
2. performance monitoring, 
3. database redundancy to handle system failures.

# Sample System Desing Interview Questions and Solution.

### 1. How would you design a [URL shortening](https://www.designgurus.io/blog/url-shortening) URL shortening service similar to TinyURL?
URL shortening service allows users to shorten the long URLs to short URLs which works the same as the long URL.

## 1. URL Shortening Service (Similar to TinyURL)

### Overview:
Design a URL shortening service that converts long URLs into short ones while maintaining functionality and scalability.

### Requirements:
- returning long urls to shortened urls 
- when you click to the shortened urls it should redirect to the original urls 
- Handle high request volumes (500/sec) and delete expired URLs.
- Track the number of clicks on the URL

### Approach:
1. Utilize REST API for communication and load balancing to manage high request volumes on the server .
2. Employ relational databases 
3. mapping long and short URLs.
4. generating unique IDs for shortened URLs.

## 2. Web Crawler

### Overview:
The web clolers allow to extract the informa the information from web pages.

### Approach:
- Discuss opening multiple web pages simultaneously and dynamically changing web pages/domains to optimize crawling process.

## 3. Designing Facebook and Instagram

### Overview:

The requrements for bulding the media application.
### Requirements:
- User signup/sign-in
- Allowing users to publish posts and short videos
- Followers and following features
- Direct messaging
Showing the latest posts from their followers
- Showing trending posts in the feed

### Approach:
- Handle user relationships in the database and implement chat features with third-party applications.
- Design algorithms for feed customization and utilize database replication to handle failures,also include  data caching, and load balancing. 

## 4. API Rate Limiting

### Overview:
Design an API rate limiter to restrict the number of requests made within a specified time period.this will enable the blockage which willl be caused by the increas in the number of request done for some time.

### Approach:
- know about the number of rquest you like to allow per second.
- How you will hande multiple requests simultaneously 
- Talk about how to keep the counts of requests.Use the IP address received in the request header.




















