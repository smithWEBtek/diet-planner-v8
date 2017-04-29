class LogsController < ApplicationController
  before_action :set_log, only: [:show, :edit, :destroy]

  def new
    @log = current_user.logs.build
  end

  def index
    if current_user && current_user.admin?
      @user = current_user
      @meals = Meal.all
      @logs = Log.all
    else
      @user = current_user
      @meals = current_user.meals
      @logs = current_user.logs
    end
    respond_to do |format|
      format.html { render :index }
      format.json { render json: @logs }
    end
  end

  def show
     respond_to do |format|
      format.html { render :show }
      format.json { render json: @log }
    end
  end

  def create
    @log = current_user.logs.new(log_params)
    if @log.save
      flash[:success] = 'New log created.'
      redirect_to user_logs_path(@log.user)
    else
      render :new
    end
  end

  def edit; end

  def update
    @log = Log.find_by_id(params[:id])
    @log.update(log_params)
    if @log.save
      redirect_to user_log_path(@log.user, @log)
    else
      render :edit
    end
  end

  def destroy
    if @log.delete
      flash[:notice] = 'Log deleted'
      redirect_to user_logs_path(@log.user)
    else
      flash[:notice] = 'Log NOT deleted'
      redirect_to user_logs_path(current_user)
    end
  end

  private

  def set_log
    @log = Log.find_by_id(params[:id])
  end

  def log_params
    params.require(:log).permit(:note, :date)
  end
end
