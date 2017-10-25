DATA_diets = {
  :diet_keys =>
    ["name"],
  :diets => [
    ["Choose diet"],
    ["Vegan"],
    ["Low-Carb"],
    ["Balanced Protein-Carb"],
    ["Fishatarian"],
    ["Carnivore"],
    ["Lumberjack"],
    ["Vampire"],
    ["Junk"],
    ["Deleted--choose diet"]
  ]
}

def make_diets
  DATA_diets[:diets].each do |diet|
    new_diet = Diet.new
    diet.each_with_index do |attribute, i|
      new_diet.send(DATA_diets[:diet_keys][i]+"=", attribute)
    end
    new_diet.save
  end
end

DATA_groups = {
  :group_keys =>
    ["name"],
  :groups => [
    ["Choose group"], #1
    ["Vegetables"],     #2
    ["Nuts"],           #3
    ["Fruits"],         #4
    ["Meat & Poultry"], #6
    ["Fish"],           #7
    ["Legumes"],        #2
    ["Desserts"],       #8
    ["Junkfood"],       #9
    ["Synthetics"],     #10
    ["Grains"],         #11
    ["Dairy"]           #12
  ]
}

def make_groups
  DATA_groups[:groups].each do |group|
    new_group = Group.new
    group.each_with_index do |attribute, i|
      new_group.send(DATA_groups[:group_keys][i]+"=", attribute)
    end
    new_group.save
  end
end

DATA_foods = {
  :food_keys =>
    ["group_id", "name", "cals"],
  :foods => [
    [12, "milk", 100],          #12
    [12, "cheese", 120],          #12
    [12, "yogurt", 150],          #12

    [2, "celery", 25],        #2
    [2, "tomatoe", 50],        #2
    [2, "squash", 45],        #2

    [3, "peanuts", 120],           #3
    [3, "sunflower seeds", 80],           #3
    [3, "walnuts", 90],           #3

    [4, "apple", 25],         #4
    [4, "watermelon", 25],         #4
    [4, "banana", 80],         #4


    [5, "beef", 500], #6
    [5, "chicken", 400], #6
    [5, "pork", 300], #6

    [6, "codfish", 200],           #7
    [6, "lobster", 200],           #7
    [6, "sea bass", 200],           #7

    [7, "black beans", 100],        #2
    [7, "garbanzo beans", 100],        #2
    [7, "soy beans", 100],        #2

    [8, "ice cream", 400],       #8
    [8, "chocolate cake", 400],       #8
    [8, "apple pie", 400],       #8

    [9, "twinkies", 400],       #9
    [9, "doritos", 400],       #9
    [9, "pop-tarts", 400],       #9

    [10, "red licorice", 400],      #10
    [10, "gummy bears", 400],      #10
    [10, "chewing gum", 400],      #10

    [11, "toast", 70],
    [11, "roll", 70],
    [11, "pita bread", 70]
  ]
}

def make_foods
  DATA_foods[:foods].each do |food|
    new_food = Food.new
    food.each_with_index do |attribute, i|
      new_food.send(DATA_foods[:food_keys][i]+"=", attribute)
    end
    new_food.save
  end
end

DATA_users ={
 :user_keys =>
    ["role", "username", "email", "weight", "password", "diet_id"],
  :users => [
    [1, "demo", "demo@demo.com", 188, "password", 5],
    [0, "ned", "ned@abc.com", 209, "pointer", 4],
    [1, "max", "max@abc.com", 190, "pointer", 2],
    [0, "skai", "skai@abc.com", 180, "pointer", 2],
    [0, "kaleo", "kaleo@abc.com", 203, "pointer", 3],
    [0, "megan", "megan@abc.com", 137, "pointer", 4],
    [0, "tenzing", "tenzing@abc.com", 120, "pointer", 5],
    [0, "davis", "davis@abc.com", 216, "pointer", 2],
    [0, "cole", "cole@abc.com", 255, "pointer", 3],
    [0, "ted", "ted@abc.com", 195, "pointer", 4],
    [0, "fred", "fred@abc.com", 320, "pointer", 1]
  ]
}

def make_users
  DATA_users[:users].each do |user|
    new_user = User.new
    user.each_with_index do |attribute, i|
      new_user.send(DATA_users[:user_keys][i]+"=", attribute)
    end
    new_user.save
  end
end

DATA_logs ={
 :log_keys =>
    ["user_id", "date", "note"],
  :logs => [
    [1, "2017-01-11", "my first log note"],
    [2, "2017-01-12", "my first log note"],
    [3, "2017-01-13", "my first log note"],
    [4, "2017-01-14", "my first log note"],
    [5, "2017-01-15", "my first log note"],
    [6, "2017-01-16", "my first log note"],
    [7, "2017-01-17", "my first log note"],
    [8, "2017-01-18", "my first log note"],
    [9, "2017-01-19", "my first log note"],
    [10,"2017-01-10", "my first log note"]
  ]
}

def make_logs
  DATA_logs[:logs].each do |log|
    new_log = Log.new
    log.each_with_index do |attribute, i|
      new_log.send(DATA_logs[:log_keys][i]+"=", attribute)
    end
    new_log.save
  end
end

DATA_mealnames ={
 :mealname_keys =>
    ["name"],
  :mealnames => [
    ["Breakfast"],
    ["Lunch"],
    ["Dinner"],
    ["Snack"]
  ]
}

def make_mealnames
  DATA_mealnames[:mealnames].each do |mealname|
    new_mealname = Mealname.new
    mealname.each_with_index do |attribute, i|
      new_mealname.send(DATA_mealnames[:mealname_keys][i]+"=", attribute)
    end
    new_mealname.save
  end
end

DATA_meals = {
  :meal_keys =>
    ["mealdate", "user_id", "mealname_id", "food_id", "qty", "note", "created_at", "new_food"],
  :meals => [
    ["2017-01-11", 1, 1, 1, 1, "I ate it all thing", "2017-01-12 17:21:50", ""],
    ["2017-01-11", 1, 2, 2, 1, "My what a lovely meal", "2017-01-12 17:21:50", ""],
    ["2017-01-11", 1, 4, 3, 1, "Is that you or the meat loaf?", "2017-01-12 17:21:50", ""],
    ["2017-01-11", 1, 3, 4, 1, "I'll have another Martini please", "2017-01-12 17:21:50", ""],

    ["2017-01-11", 2, 1, 5, 1, "I ate it all thing", "2017-01-12 17:21:50", ""],
    ["2017-01-11", 2, 2, 6, 1, "My what a lovely meal", "2017-01-12 17:21:50", ""],
    ["2017-01-11", 2, 4, 7, 1, "Is that you or the meat loaf?", "2017-01-12 17:21:50", ""],
    ["2017-01-11", 2, 3, 8, 1, "I'll have another Martini please", "2017-01-12 17:21:50", ""],

    ["2017-01-12", 3, 1, 9, 1, "I ate the beef instead", "2017-01-13 17:21:50", ""],
    ["2017-01-12", 3, 2, 10, 1, "My what a nasty woman", "2017-01-13 17:21:50", ""],
    ["2017-01-12", 3, 4, 11, 1, "Is that you or Mr. Peters?", "2017-01-13 17:21:50", ""],
    ["2017-01-12", 3, 3, 12, 1, "I'll have another codfish in a bowl please", "2017-01-13 17:21:50", ""],

    ["2017-01-13", 4, 1, 13, 1, "I ate the fourth thing", "2017-01-14 17:21:50", ""],
    ["2017-01-13", 4, 2, 14, 1, "My what a pungent squirrel meat smell", "2017-01-14 17:21:50", ""],
    ["2017-01-13", 4, 4, 15, 1, "Is that you or the lawyer?", "2017-01-14 17:21:50", ""],
    ["2017-01-13", 4, 3, 16, 1, "I'll have another trip to NJ please.", "2017-01-14 17:21:50", ""],

    ["2017-01-13", 5, 1, 17, 1, "I ate the thing", "2017-01-14 17:21:50", ""],
    ["2017-01-13", 5, 2, 18, 1, "My what a pungent  smell", "2017-01-14 17:21:50", ""],
    ["2017-01-13", 5, 4, 19, 1, "Is that you or the fish?", "2017-01-14 17:21:50", ""],
    ["2017-01-13", 5, 3, 20, 1, "I'll have another trip to Rhode Island please.", "2017-01-14 17:21:50", ""],

    ["2017-01-13", 6, 1, 21, 1, "I ate the fourth capo", "2017-01-14 17:21:50", ""],
    ["2017-01-13", 6, 2, 22, 1, "My what a pungent dead guy smell", "2017-01-14 17:21:50", ""],
    ["2017-01-13", 6, 4, 23, 1, "Is that you or the mob?", "2017-01-14 17:21:50", ""],
    ["2017-01-13", 6, 3, 24, 1, "I'll have another trip to NJ with sauce.", "2017-01-14 17:21:50", ""],

    ["2017-01-13", 7, 1, 1, 1, "I ate the fourth bagel", "2017-01-14 17:21:50", ""],
    ["2017-01-13", 7, 2, 2, 1, "My what a pungent bagel meat smell", "2017-01-14 17:21:50", ""],
    ["2017-01-13", 7, 4, 3, 1, "Is that you or the bagel?", "2017-01-14 17:21:50", ""],
    ["2017-01-13", 7, 3, 4, 1, "I'll have another bagel please.", "2017-01-14 17:21:50", ""],

    ["2017-01-13", 8, 1, 5, 1, "I ate the fourth Anna", "2017-01-14 17:21:50", ""],
    ["2017-01-13", 8, 2, 6, 1, "My what a pungent Anna smell", "2017-01-14 17:21:50", ""],
    ["2017-01-13", 8, 4, 7, 1, "Is that you or Anna?", "2017-01-14 17:21:50", ""],
    ["2017-01-13", 8, 3, 8, 1, "I'll have another trip to Montanna, with Anna, please.", "2017-01-14 17:21:50", ""],

    ["2017-01-13", 9, 1, 9, 1, "I ate the 233rd thing", "2017-01-14 17:21:50", ""],
    ["2017-01-13", 9, 2, 10, 1, "My what a pungent socks smell", "2017-01-14 17:21:50", ""],
    ["2017-01-13", 9, 4, 11, 1, "Is that you or your Mother?", "2017-01-14 17:21:50", ""],
    ["2017-01-13", 9, 3, 12, 1, "I'll have another NJ girl please.", "2017-01-14 17:21:50", ""],

    ["2017-01-13", 10, 1, 13, 1, "I ate the 15th thing", "2017-01-14 17:21:50", ""],
    ["2017-01-13", 10, 2, 14, 1, "My what a pungent desk smell", "2017-01-14 17:21:50", ""],
    ["2017-01-13", 10, 4, 15, 1, "Is that you or the bridge?", "2017-01-14 17:21:50", ""],
    ["2017-01-13", 10, 3, 16, 1, "I'll have another donut please.", "2017-01-14 17:21:50", ""]
  ]
}

def make_meals
  DATA_meals[:meals].each do |meal|
    new_meal = Meal.new
    meal.each_with_index do |attribute, i|
      new_meal.send(DATA_meals[:meal_keys][i]+"=", attribute)
    end
    new_meal.save
  end
end

DATA_celebs = {
  :celeb_keys =>
    ["name"],
  :celebs => [
    ["Beyonce"],
    ["Jay-Z"],
    ["Lady GaGa"],
    ["Liam Neeson"],
    ["Elvis"],
    ["James Brown"],
    ["Patton Oswalt"],
    ["Ted Kennedy"],
    ["Roosevelt"],
    ["Ben Franklin"]
  ]
}

def make_celebs
  DATA_celebs[:celebs].each do |celeb|
    new_celeb = Celeb.new
    celeb.each_with_index do |attribute, i|
      new_celeb.send(DATA_celebs[:celeb_keys][i]+"=", attribute)
    end
    new_celeb.save
  end
end

DATA_verbs = {
  :verb_keys =>
    ["name"],
  :verbs => [
    ["ate"],
    ["wolfed"],
    ["sucked down"],
    ["ingested"],
    ["nibbled"],
    ["sampled"],
    ["drank"],
    ["dined on"],
    ["chose"],
    ["stole"]
  ]
}

def make_verbs
  DATA_verbs[:verbs].each do |verb|
    new_verb = Verb.new
    verb.each_with_index do |attribute, i|
      new_verb.send(DATA_verbs[:verb_keys][i]+"=", attribute)
    end
    new_verb.save
  end
end

DATA_adjs = {
  :adj_keys =>
    ["name"],
  :adjs => [
    ["lovely"],
    ["luke-warm"],
    ["putrid"],
    ["well done"],
    ["Scandnavian"],
    ["boiled"],
    ["ugly"],
    ["pretty"],
    ["inward"],
    ["uncomplicated"]
  ]
}

def make_adjs
  DATA_adjs[:adjs].each do |adj|
    new_adj = Adj.new
    adj.each_with_index do |attribute, i|
      new_adj.send(DATA_adjs[:adj_keys][i]+"=", attribute)
    end
    new_adj.save
  end
end

DATA_phrases = {
  :phrase_keys =>
    ["content"],
  :phrases => [
    ["It is important to check the fish water level in the morning."],
    ["There are only 2 of them left now."],
    ["I understand Brittney Spears favors these."],
    ["Why do people always say 'without further do do?'"],
    ["Is there a wrapper that comes with this, like a burrito?"],
    ["Why does it smell so fishy?"],
    ["Who opened this dish, did they mix it with peanut butter?"],
    ["This goes well with a bag of Fritos."],
    ["I prefer the spicy version of this."],
    ["If Kanye wants it, then he'll have it!"]
  ]
}

def make_phrases
  DATA_phrases[:phrases].each do |phrase|
    new_phrase = Phrase.new
    phrase.each_with_index do |attribute, i|
      new_phrase.send(DATA_phrases[:phrase_keys][i]+"=", attribute)
    end
    new_phrase.save
  end
end

DATA_quotes = {
  :quote_keys =>
  ["celeb_id", "verb_id", "adj_id", "phrase_id", "food_id", "diet_id"],
  :quotes => [
    [1,1,1,1,1,2],
    [1,1,1,1,2,3],
    [1,1,1,1,3,4],
    [1,1,1,1,4,5],
    [1,1,1,1,5,6],
    [1,1,1,1,6,7],
    [1,1,1,1,7,8],
    [1,1,1,1,8,9],
    [1,1,1,1,9,10],
    [1,1,1,1,10,2]
  ]
}

def make_quotes
  DATA_quotes[:quotes].each do |quote|
    new_quote = Quote.new
    quote.each_with_index do |attribute, i|
      new_quote.send(DATA_quotes[:quote_keys][i]+"=", attribute)
    end
    new_quote.save
  end
end

def main
  make_diets
  make_groups
  make_foods
  make_users
  make_logs
  make_mealnames
  make_meals
  make_celebs
  make_verbs
  make_adjs
  make_phrases
  make_quotes
end

main

AdminUser.create!(email: 'admin@abc.com', password: 'pointer', password_confirmation: 'pointer') if Rails.env.development?