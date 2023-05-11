# How to use project:
INSTALLATION:  
Go to each environment and run "yarn install"  

HOW TO RUN:  
For Strapi run "yarn develop"  
For Express run "yarn dev"  

try the following routes in postman.  
for example, for computers:  
http://localhost:3000/computers with GET method to fetch all the computers  
http://localhost:3000/computers/1 with GET method to fetch specific computer by id.  
http://localhost:3000/computers wit POST method with the following fields as a json object:  
{  
"name": "TV updated",  
"description": "this is the description about Headphone",  
"manufacturer": "apple",  
"price": 800,  
"processor": "MD  
}  
http://localhost:3000/computers/1 with PUT method to update a computer by an specific id. the fields should send as follow:  
{  
"name": "TV updated",  
"description": "this is the description about Headphone",  
"manufacturer": "apple",  
"price": 800,  
"processor": "MD"  
}  
http://localhost:3000/computers/1 with DELETE method to delete a specific computer by id.  

note: the main routes for the remaining collections are:  
mobiles  
audio-systems  
televisions  
