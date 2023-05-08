class CharactersController < ApplicationController
  def index
    @characters = Character.all
    render json: @characters
  end

  def show
    @character = Character.find(params[:id])
    render json: @character
  end

  def create
    @character = Character.new(character_params)

    if @character.save
      render json: @character, status: :created
    else
      render json: @character.errors, status: :unprocessable_entity
    end
  end

  def update
    @character = Character.find(params[:id])

    if @character.update(character_params)
      render json: @character
    else
      render json: @character.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @character = Character.find(params[:id])
    @character.destroy
  end

  private

  def character_params
    params.require(:character).permit(:name, :character_class, :level, :stats, :skills, :traces, :eidolons)
  end
end
