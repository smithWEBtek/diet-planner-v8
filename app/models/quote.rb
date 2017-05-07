class Quote < ApplicationRecord
  belongs_to :celeb
  belongs_to :verb
  belongs_to :adj
  belongs_to :food
  belongs_to :diet
  belongs_to :phrase
  validates :celeb_id, :verb_id, :adj_id, :food_id, :diet_id, :phrase_id, presence: true

  def self.build_random_quotes
    @random_quotes = []
    5.times do
      quote = Quote.new
      quote.celeb = Celeb.find(rand(1..Celeb.all.count))
      quote.verb = Verb.find(rand(1..Verb.all.count))
      quote.adj = Adj.find(rand(1..Adj.all.count))
      quote.food = Food.find(rand(1..Food.all.count))
      quote.phrase = Phrase.find(rand(1..Phrase.all.count))
      quote.diet = Diet.find(rand(2..Diet.all.count))
      quote.save
      @random_quotes.push(quote)
    end
    @random_quotes
  end

  def build_quote
    quote = self
    "#{quote.celeb.name} #{quote.verb.name} #{quote.adj.name} #{quote.food.name} while on the #{quote.diet.name} diet, and said, '#{quote.phrase.content}'"
  end

  def self.build_quote_params(params)
    if params[:quote][:celeb]
      @celeb = Celeb.find_or_create_by(name: params[:quote][:celeb])
      @celeb.save
      elsif params[:quote][:celeb_id]
        @celeb = Celeb.find_by_id(params[:quote][:celeb_id]) 
    end
    if params[:quote][:verb]
      @verb = Verb.find_or_create_by(name: params[:quote][:verb])
      @verb.save
      elsif params[:quote][:verb_id]
        @verb = Verb.find_by_id(params[:quote][:verb_id])
    end
    if params[:quote][:adj]
      @adj = Adj.find_or_create_by(name: params[:quote][:adj])
      @adj.save
      elsif params[:quote][:adj_id]
        @adj = Adj.find_by_id(params[:quote][:adj_id])
    end
    
    if params[:quote][:food]
      @food = Food.find_or_create_by(name: params[:quote][:food])
      @food.save
    elsif params[:quote][:food_id]
      @food =  Food.find_by_id(params[:quote][:food_id]) 
    end
    if params[:quote][:phrase]
      @phrase = Phrase.find_or_create_by(content: params[:quote][:phrase])
      @phrase.save
      elsif params[:quote][:phrase_id]
        @phrase = Phrase.find_by_id(params[:quote][:phrase_id]) 
    end
    @quote = Quote.create(
      celeb_id: @celeb.id,
      verb_id: @verb.id,
      adj_id: @adj.id,
      food_id: @food.id,
      diet_id: params[:quote][:diet_id],
      phrase_id: @phrase.id
    )
  end

  def self.clear_quotes
    Quote.destroy_all
  end
end

