/*
* What is API?
-suppose in ur phone here is todo application u want to add task name "completed JavaScript". app will say to the server taht save the task,
 app will send a request with server,and server will process this request and return response.

[cliend/frontend(it send the request to add task) -><- API/backend(it process the request and return response) -><- Data Storage(this project data is in the memory)]
-Api is ways or methods with the help of api two software systems communicate with each other.
 eg:- frontend(all task in frontend),   backend(return the task),    frotend(show on the screen).










* What is REST API? 
 -REST API formation is a common architectural style, here data will represent like resource and use on the sthandard HTTP methods.
 -{GET(to view all task),   POST(to create new task), PUT(to update the specific task),PATCH(to update the specific field on specific task), DELETE(to delete the task)}
Note:- /api/tasks is url path  here GET,POST etc were shows which actions is perform on the task.









* What is CRUD? {create,read,update,delete}
-Here CRUD means 4 basics operations. 
-C(Creare); Create a new task like "Learn Node.js"      [HTTP method:POST]
-R(Read); To view the existing task                      [HTTP method:GET]
-U(update); Changes in existing task                    [HTTP method:PUT,PATCH]
-D(Delete); Remove the task                              [HTTP method: DELETE]









*Resources nouns VS action verb
-In REST API we create the url in the name of resources not for its actions.
 suppose:- you manage a task;
 Avoid Style-                     REST Style-
 /getTasks                        GET /api/tasks
 /createTask                     POST /api/tasks
 /updateTask/1                    PATCH /api/tasks/1  
 /deleteTasks/1                   DELETE /api/tasks/1

 because url resource identify the task and http methods say what action perform for this so thats why we our use different methods on single resource path.









*HTTP Methods?
-GET: read the data    {GET /api/task}
-POST: create a new data {POST /api/tasks}  //sends the title in request body and server will create the task and return 201 status.
-PUT: replace the resource {PUT /api/tasks/1} 
-PATCH: update particular field {PATCH /api/tasks/1}
-DELETE: remove the resources (DELETE /api/tasks/1)










*PUT vs PATCH:
 suppose we have task like this-
     {
       "id": 1,
       "title": "learn Express",
        "completed": false
        }
 - so now we can change the title of the task-

 PUT: send full updated task                 //PUT used for replace the representation of resource.
       { "title": "learn node.js",
          "completed": false
          }

PATCH: Send specific field that can be changed
       {
         "title": "learn node.js"
       }










*HTTP status codes:  here status codes tells the result of response from the server

-Status              -Meaning            -WORK IN OUR PROJECT
200 ok           Request Successful       GET,PUT,PATCH
201 Created      create a new resource     POST
204 no content    successful                DELETE
400 badRequest    Invalid input             Missing title, Invalid data
404 notFound      no resource found         ID 99 will not in our project
500 internal      unexpected server error   unhandled-server side problem
 server error
  
404 mean resource were not found and 400 problem in a request if nonexistent task were delete so we return 404 not 204.









*In Memory storage:- suppose u can somethings write on the paper and u will cut the paper
                     so ur written data will lost. In-memory data something like this but it has data on RAM.









*Input Validation:- Data comes from the user it can check before comes from the user it is correct or not is called input validation.
         suppose- In a request that comes { "title": " " } here title is a string but it has empty so we can reject now.
         we can check it [title will be non string, completed only true or false, id has a valid positive integer, required field were missing so it return 400,
                          here id task not found it return 404 ]
        so validation will not save invalid data in our task.


*/
