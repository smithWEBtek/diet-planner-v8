 # README
 # swt-diet-planner-v-001
 simple app for showing diet, meal, food_groups and foods with user login and user data

 User can sign up and authorize via Omnni-auth - Facebook.
 User can sign up with info they enter:
   Username must be 3 characters or longer and unique.
   Email must be unique
   User has the option of entering their Weight, default is 500lbs, otherwise.
   User can choose Diet upon registering, but can also leave default "No diet chosen".
   User account page prompts User to choose a diet, otherwise displays Diet choice.

 There are several Diets.
 A User is on a single Diet, with multiple meals.
 A Meal has a single Food and a quantity(qty).  
 Qty * Cals = Total Cals for that meal.
 Each Food has a calorie (cals) column, which gets added to math for Group Diet Stats and User Stats.
 User can create a new Food while recording a Meal.
 New Meal form allows multiple meals from either existing Food(s), or new Food created by User.
 Foods all belong to a single Group (FoodGroup).
 Foods are created with default calories of 1 calorie, but can be updated by Admin.
 Admin assigns any new User-created Foods to a Group(FoodGroup).

 User can edit their own Logs, Meals and create Foods, but cannot view other User's info.
 User Diet stats are aggregated with other Users on same Diet.
 User Stats are calculated based on User's meals.

* Ruby version:
    ruby 2.2.3p173

* System dependencies:
  the following gems are required:
    devise
    pundit
    omniauth
    omniauth-facebook

    All of these Gems are in the Gemfile.
    After cloning, navigate to root of app and run 'bundle install'

* Configuration

* Database creation
  sqlite3 default database

* Database initialization
  run rails db:create db:migrate
  optional: run rails db:seed (for appropriate seed data)

* How to run the test suite:
  currently there is no test suite, other than a test for the meal_attributes= custom attributes writer method.

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions
  1. fork repo
  2. run rails db:create db:migrate
  3. run rails s
  4. in browser, navigate to: http://127.0.0.1:3000/
  5. if seeds.rb has been run (run:  rails db:seed ):
    Admin login:
      Username: max
      Email:    max@abc.com
      Pasword:  pointer

    Sample Standar User login:
      Username: ted
      Email:    ted@abc.com
      Pasword:  pointer

    (seed file data has 10 users for examples)

  6. How to make a Standard User into Admin user:
    a. when logged in as Admin (u/n: max@abc.com p/w: pointer)
    b. navigate to:  http://localhost:3000/admin
      1. click on EDIT on same row as any current Standard User
      2. enter password, enter Log note, click radio button admin
      3. click Update User
      4. revisit:   http://localhost:3000/admin
        verify that user is now admin role in the list

* ...
