class GroupsController < ApplicationController
  before_action :authorize_admin, only: [:edit, :update, :destroy]
  before_action :set_group, only: [:show, :edit, :update, :destroy]
  before_action :load_models

  def index
    respond_to do |format|
      format.html { render :index }
      format.json { render json: @groups }
    end
  end
  
  def show
     respond_to do |format|
      format.html { render :show }
      format.json { render json: @group }
    end
  end

  def new
    @group = Group.new
  end

  def create
    @group = Group.new(group_params)
    if @group.save
      flash[:notice] = "Group created."
      redirect_to group_path(@group)
    else
      render :new
    end
  end

  def edit
  end

  def update
    @group.update(group_params)
    if @group.save
      flash[:notice] = "Group updated."
      redirect_to group_path(@group)
    else
      render :new
    end
  end

  def destroy
    if @group.delete
      flash[:notice] = "Group deleted"
      redirect_to groups_path
    else
      flash[:notice] = @group.errors.full_messages
      redirect_to group_path(@group)
    end
  end

  private
    def set_group
      @group = Group.find_by_id(params[:id])
    end

    def group_params
      params.require(:group).permit(:name)
    end
end
