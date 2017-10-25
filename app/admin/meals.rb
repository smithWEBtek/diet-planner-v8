ActiveAdmin.register Meal do
# See permitted parameters documentation:
# https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
#

permit_params :mealdate, :mealname_id, :user_id, :food_id, :new_food, :qty, :note

  form do |f|
    inputs 'Meal' do
      f.input :mealdate
      f.input :mealname_id
      f.input :user_id
      f.input :food_id
      f.input :new_food
      f.input :qty
      f.input :note
    end
    f.semantic_errors
    f.actions
  end

# or
#
# permit_params do
#   permitted = [:permitted, :attributes]
#   permitted << :other if params[:action] == 'create' && current_user.admin?
#   permitted
# end

end
