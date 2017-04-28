DATA_diets = {
  :diet_keys =>
    ["name"],
  :diets => [
    ["Choose a diet"],
    ["Vegan"],
    ["Low-Carb"],
    ["Balanced Protein-Carb"],
    ["Fishatarian"],
    ["Carnivore"],
    ["Lumberjack"],
    ["Vampire"],
    ["Junk"],
    ["Diet deleted, please choose a new diet."]
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

DATA_users ={
 :user_keys =>
    ["role", "username", "email", "weight", "password", "diet_id"],
  :users => [
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

def main
  make_diets
  # make_groups
  # make_foods
  make_users
  # make_logs
  # make_mealnames
  # make_meals
  # make_celebs
  # make_verbs
  # make_adjs
  # make_phrases
  # make_quotes
end

main
