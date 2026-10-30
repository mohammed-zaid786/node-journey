/* What is Server:- 
for eg; we use online shopping website you see a product like mobile,you can search a mobile in a website and website your request send to the server
       and server can process it and return details of products here in this process threee imp things are[ client(browser), server(received req & process it), response(server that give answer)]

* In Node.js:- it can js outside the browser like run the server.
* In Express:- It helps to easily make API routes and web server on node.js
 
       for eg; Your shopping app ask to api we want to show detail ID 101 product.
              server will share response-  {"id": 101, "name": "laptop", "price": 50000}  it is json data.










P-2  Three imp Ways of request: [req.params, req.query, req.body]

* Route Parameters(req.params):- 
eg; suppose we have 1000 products every product has unique ID like 101 for laptop, 102 for mobile and 103 for headphones etc
   then we want the details only ID 102 product so we send request to server [/api/items/102] here product 102 ID. server can easily find the details with the help of these ID request
   In that part of URL where any specific resource ID or any details can give to form Route parameters.
  [/api/items/102] here;
/api- APi route prefix.
/items- Item related route.
/102- Id of specific item. but In express here 102 is parameters.
eg; app.get("/api/items/:id", (req, res) => {
            res.send(req.params.id);});            here id means access the id segment in this position it is not fixed value.



* Query Parameters(req.query):- To give which types of conditions in the products.

eg; suppose we see the products on online shopping website [we want the only mobiles, price should be less then 2ok, see expensive products firstly & open page number 2]
   we share extra information in a single route.
[/api/items? category=mobile&maxPrice=2000&sort=desc&page=2] in this url /api/items here ? is main route.
and after ? query parameters were started like category, maxPrice, sorting in decending order and page no 2.

if we share;
 app.get("/api/items", (req, res) => {
  const category = req.query.category;
  const maxPrice = req.query.maxPrice;
  const sort = req.query.sort;
  const page = req.query.page;

  res.json({
    category: category,
    maxPrice: maxPrice,
    sort: sort,
    page: page
  });
});

we send the request are- [/api/items? category=mobile&maxPrice=2000&sort=desc&page=2]
expected response:- req.query simple values are in strings so we give [const maxPrice = req.query.maxPrice;] maxPrice has 20000 if we can compare  the validate it [const maxPrice = Number(req.query.maxPrice);]

 {
  "category": "mobile",
  "maxPrice": "20000",
  "sort": "desc",
  "page": "2"
}










P-4  Difference Between (req.params) & (req.query):-

Suppose; we have API like [/api/items/102] here specific items id so use [req.params.id]
&        we have URL like [/api/items?category=mobile&sort=desc] here sorting and category conditions are use [req.query.category req.query.sort]

*req.params= identify the source in route, value in route defined parameter segment it used for specific user/fetch product for eg-/api/items/102.
*req.query.category= It can filter the data,search & sort the data, it values has after ?  used in searching/filtering and sorting forr eg-/api/items?category=mobile.
 for eg; 
 app.get("/api/items/:id", (req, res) => {
  res.json({
    id: req.params.id,
    currency: req.query.currency
  });
});

op:- { "id": "102", "currency": "INR" } 102= which item can get, INR= optional currency preference.
URL:- /api/users/25?role=admin   To:- req.params.id then answer:25 & value:"admin" 









P-5 Request Body(req.body):-
Suppose; we can fill aform in a website for registration In forms here are many fields like Name,Email,Password. and we submit.
        this info sends to the server. In that req data will send in the request body.
    eg- {"name": "rahul","eamil: "rahul@gmail.com", "age": 22} server used this data in express it will use (req.body) but it has a problem
        Express will not parse it all JSON request body so in that way we register middleware.










P-6 What is Middleware?:- It is a function that processsing between request and response.
eg- we enter in a office. before entry we face securityguard that check id,verify details and allow to go inside.
   In the server Middleware check info, process and modified it. eg-v[app.use(express.json());] it work to parse JSON request body.

* express.json():- Body parse in the JSON format like [{"name": "rahul"}]
   suppose- client send the json data like [{"name": "rahul", "age": 22}] in HTTP request data in form of bytes and Express will convert in JS object.
            here- [express.json() middle help in that work] and after that we access on it like [req.body.name] so it give op:- rahul & [req.body.age] give op:- 22

            
* Why order is imp in Middleware:-
    eg:- suppose before giving exam it will check the registration of the student and it will check after exam so it was wrong and worthless so in that way like
        JSON parse middleware comes before the route request handler.
    rule- [app.use(express.json())] registered before routes.

*express.urlencoded():-  Body parse like url encoded form of data [name=rahul&city=kanpur]
   eg- normal form of html suppose forms have these fields;
       <form action="/login" method="POST">
        <input name="username" />
         <input name="city" />

          <button type="submit">Submit</button>
           </form>
  
    In these fields data send in URL -encoded format in html form submission
eg- username=Rahul&city=kanpur     //it is not JSON  it is application/x-www-form-urlencoded format.
IN Express Parse these to use it- [app.use(express.urlencoded({ extended: true }));]

*req.params- ID in the route of URL
*req.query- After URL condition?
*req.body- Data that can be send in the request body. */
























/* CONCEPT TO UNDERSTAND  */

/*

*WHY EXPRESS NOT PARSE JSON BODY AUTOMATICALLY?
-client will send the JSON body but server has need to understand the body it will parsing on it
-express.json() will parse midddleware request and  help to available the req.body
eg- app.use(express.json()); -> after IT will send on json body { "price": 500} -> we can acces it like req.body.price -> 500 





*WHY NECESSARY TO VALIDATE THE REQUEST BODY?
-suppose our api created by user we want name and email both on it  but client sent only it [ {"name": "rahul"}] email were missing 
-so we cannot validation then it process incomplete data

*/
