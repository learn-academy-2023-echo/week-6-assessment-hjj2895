# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a Rails developer, I am creating an application with a model called Cohort and a model called Student. The relationship between these models is that a cohort has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: In order to fix this mistake, a foreign key named cohort_id will need to be added in the Student model. A Cohort can have many students and a student can only belong to one Cohort. The schema will need to be updated by running a migration. 

Researched answer: Cohort and Student have a one-to-many relationship where a Cohort can have many students and each student belongs to one Cohort. The foreign key will always go to the belongs_to side which is the Cohort so the foreign key will be named cohort_id. In order to add the foreign key, you will need to do the following: 
rails g migration AddColumnToStudent
A migration file with a timestamp will be created where changes can be made inside the change method.
Inside the method, you will need to write add_column :students, :cohort_id, :integer
Run the rails db:migrate to update the schema.
 
2. Which RESTful routes must always be passed params? Why?

Your answer: Show, update, edit and delete must be passed params. These RESTful routes need params because they will need to reference an instance of the data from the database.

Researched answer: Show, update, edit and delete must always be passed params. When calling these actions, the instance that was created will need to access the unique ID to send the corresponding HTTP requests and have the appropriate output. 

3. Name three rails generator commands. What is created by each?

Your answer: rails g model generates the model of the database. rails g migration will create a new file in the migration directory. And rails g controller will generate a controller file. 

Researched answer: rails g model - will generate the model of the database. Inside the app/models file, a model class is created and a schema is also created. 

rails g migration - adds a new file under migration directory to allow changes to the model. 

rails g controller - generates the controller file which will perform logic when a method is called. 

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students => This controller method is the index. The index method will display all the students from the database.

action: "POST" location: /students => This controller method is the create method. The create method will allow user to create new record of student data after a form is submitted. 

action: "GET" location: /students/new => This controller method is the new method. The new method will display a form to add new information to the record.

action: "GET" location: /students/2 => This controller method is the show method. The show method will display the student record with the id of 2.

action: "GET" location: /students/2/edit => This controller method is the edit method. The edit method will display a form to modify the content in the student record with an id of 2.

action: "PATCH" location: /students/2 => This controller method is the update method. The update method will update the edited form in the student record with an id of 2 into the database.

action: "DELETE" location: /students/2 => This controller method is the destroy method. The destroy method will delete the data of student record with the id of 2. 

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. [Here is a resource](https://www.atlassian.com/agile/project-management/user-stories) to help you create your user stories.

1) As a user, I can see a list of all tasks to do. (INDEX)
2) As a user, I can see the details of one task. (SHOW)
3) As a user, I can see a form where I can fill out information for a new task. (NEW)
4) As a user, I can create a new task to the list. (CREATE)
5) As a user, I can modify the form to change the details of a task. (EDIT)
6) As a user, I can fill out the editing form and update its details to the list. (UPDATE)
7) As a user, I can delete any task. (DESTROY)
8) As a user, I can look up a task by its due date.
9) As a user, I can see the status of the task. 
10) As a user, I need to include proper information to make sure valid data is being entered. (VALIDATION)