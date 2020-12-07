class TasksController < ApplicationController
  before_action :set_task, only: [:show, :add_task]
  before_action :authorize_request, only: [:create, :update, :destroy]
  before_action :set_user_task, only: [:update, :destroy]

  # GET /tasks
  def index
    @tasks = Task.all

    render json: @tasks
  end

  
  # GET /tasks/1
  def show
    render json: @task, include: :categories
  end

  # POST /tasks
  def create
    @task = Task.new(task_params)
    @task.user = @current_user

    if @task.save
      render json: @task, status: :created, location: @task
    else
      render json: @task.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /tasks/1
  def update
    if @task.update(task_params)
      render json: @task
    else
      render json: @task.errors, status: :unprocessable_entity
    end
  end

  # DELETE /tasks/1
  def destroy
    @task.destroy
  end

  def add_category
    @category = Category.find(params[:category_id])
    @task.categories << @category

    render json: @task, include: :categories
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_task
      @task = Task.find(params[:id])
    end

    def set_user_task
      @task = @current_user.tasks.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def task_params
      params.require(:task).permit(:image_url,:description,:deadline, :completed, :category, :user_id)
    end
end
