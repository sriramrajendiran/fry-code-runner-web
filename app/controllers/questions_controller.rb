class QuestionsController < ApplicationController

  before_action :authorize_request

  def index
    questions = Question.take(10)
    render :json => {:questions => questions}.as_json
  end

  def show_question
    question = Question.find(params[:question_id])
    render :json => {:question => question}.as_json
  end

  def create
    question = Question.create!(question_params)
    puts question.to_json
    render :json => {:question => question}.as_json
  end

  def update
    Question.find(params[:question_id]).update(question_params)
    head :no_content
  end

  def delete
    Question.find(params[:question_id]).destroy
    head :no_content
  end

  def question_params
    params.require(:question).permit(:content, :title, :language)
  end
end