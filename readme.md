# Intro to AJAX

## 🔬 Research!

In your squads research and answer the following questions:

- What does the acronym AJAX stand for?
  A: Asynchronous JavaScript and XML. allows you to update portions of a page based on user events


- What is an XMLHttpRequest?
  A: XMLHttpRequest (XHR) is an API in the form of an object whose methods transfer data between a web browser and a web server. 
  The object is provided by the browser's JavaScript environment. 
  Particularly, retrieval of data from XHR for the purpose of continually modifying a loaded web page is the underlying concept of Ajax design. 
  Despite the name, XHR can be used with protocols other than HTTP and data can be in the form of not only XML,[1] but also JSON,[2] HTML or plain text.[3]

- What is the relationship between AJAX and an XMLHttpRequest?
  A: XMLHttpRequest(XHR) is the form of communication Ajax uses between the web client and the web server. This communication occurs in the form of an object with methods.

- What is the most common data interchange format? 
  A: - xml, but more recently JSON. 

- What HTTP verbs or "methods" can be used?
 A:
    GET 
    POST 
    HEAD 
    PUT
    DELETE
    OPTIONS

- What are some ways to make Ajax calls?
A:XMLHttpRequest.open("GET", filepath , false);
    XMLHttpRequest.send(null);
  send( data );
  - Using jQuery -
  $.ajax() - Performs an async AJAX request
    $.get() - Loads data from a server using an AJAX HTTP GET request
  $.post() - Loads data from a server using an AJAX HTTP POST request
  

- What is XML?
  A: extensible markup language -  a markup language that defines a set of rules for encoding documents in a format that is both human-readable and machine-readable. Used to exchange data.

- Where does an XMLHttpRequest fit in the client/server - request/response cycle?
  A: it sort of sits between the client and server, handling data between the two without necessitating full page changes (downloads & uploads)

- Are there libraries make working with XMLHttpRequests easier? 
  A: Yes, there are many libraries that make handling HTTP Requests easier - these libraries are known as XHR Abstractors. Some libraries seem to replace XHR altogether.

- How is an XMLHttpRequest different from a regular HTTP request in the browser?
  A: XMLHttpRequest: standard javascript object that allows you to make HTTP Requests from the browser in javascript.
    - HttpRequest: server side object that represents a request to the server.
  - One works in the browser, the other in the web server
  
  Httprequests are synchronous and must reload the page to respond to a new request
  XMLHttpRequests can be used asynchronously to change rendered content without page reload

- What is the Same-origin policy and how does it relate to Ajax?
  A: Same origin policy : The same-origin policy permits scripts running in a browser to only make requests to pages on the same domain.
    This means that requests must have the same URI scheme, hostname, and port number.
  - AJAX allows you to circumvent same origin policy, JSONP can also be used to enable Ajax-like calls to other domains

- Compare and contrast a server's response to an XMLHttpRequest vs a regular HTTP request
  A: HTTP Requests:
    all synchronous
    
    Contain a VERB, the host name in the header and a request body
    
    HttpRequest is a server side object that represents a request to the server. 
    
    HttpRequest represents an incoming request.
    
    
    XMLHttpRequest:
    can be synchronous but mainly async
    
    Also contain a readyState property which defines what state the XHR client is in, which can be used to conditionally execute functions.
    
    allows the browser to recieve more data without necessarily recieving a whole new page
    
    XMLHttpRequest in a standard javascript object that allows you to make HTTP Requests from the browser in javascript. 
    
    XMLHttpRequest is for fetching web resources within the browser. 
    
    one works in the browser, the other in the web server.
    

- Where can we find XMLHttpRequests in the Chrome Developer Tools?
  A: network -> xhr

- Who designed XMLHttpRequests?
  A: microsoft - the outlook web access team, for microsoft exchang server 2000


## 🙋 Answers!

When you think your squad knows all the answers raise your hands and we'll come check.

