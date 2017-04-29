class MealnamesController < ApplicationController
  before_action :authorize_admin, only: [:edit, :update, :destroy]
  before_action :set_mealname, only: [:show, :edit, :update, :destroy]
  before_action :load_models

  def index
  end

  def show
    redirect_to mealnames_path
  end

  def new
    @mealname = Mealname.new
  end

  def create
    @mealname = Mealname.new(mealname_params)
    if @mealname.save
      flash[:notice] = "Mealname created."
      redirect_to mealnames_path
    else
      render :new
    end
  end

  def edit
  end

  def update
    @mealname.update(mealname_params)
    if @mealname.save
      flash[:notice] = "Mealname updated."
      redirect_to mealnames_path
    else
      render :new
    end
  end

  def destroy
    if @mealname.delete
      flash[:notice] = "Mealname deleted"
      redirect_to mealnames_path
    else 
      flash[:notice] = @mealname.errors.full_messages
      redirect_to new_mealname_path
    end
  end

  private
    def set_mealname 
      @mealname = Mealname.find_by_id(params[:id])
    end

    def mealname_params
      params.require(:mealname).permit(:name)
    end
end