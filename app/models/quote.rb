class Quote < ApplicationRecord
  belongs_to :celeb
  belongs_to :verb
  belongs_to :adj
  belongs_to :food
  belongs_to :phrase
  belongs_to :diet
  validates :celeb_id, :verb_id, :adj_id, :food_id, :diet_id, :phrase_id, presence: true

  def random_quotes
    build_random_quotes
  end

  def self.build_random_quotes
    @random_quotes = []
    5.times do
      quote = Quote.new
      quote.celeb = Celeb.find(rand(1..Celeb.all.count.to_s.to_i))
      quote.verb = Verb.find(rand(1..Verb.all.count.to_s.to_i))
      quote.adj = Adj.find(rand(1..Adj.all.count.to_s.to_i))
      quote.food = Food.find(rand(1..Food.all.count.to_s.to_i))
      quote.phrase = Phrase.find(rand(1..Phrase.all.count.to_s.to_i))
      quote.diet = Diet.find(rand(2..9))
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
    @celeb = Celeb.find_or_create_by(name: params[:quote][:celeb])
    @celeb.save
    @verb = Verb.find_or_create_by(name: params[:quote][:verb])
    @verb.save
    @adj = Adj.find_or_create_by(name: params[:quote][:adj])
    @adj.save
    @food = Food.find_or_create_by(name: params[:quote][:food])
    @food.save
    @phrase = Phrase.find_or_create_by(content: params[:quote][:phrase])
    @phrase.save

    @quote = Quote.create(
      celeb_id: @celeb.id,
      verb_id: @verb.id,
      adj_id: @adj.id,
      food_id: @food.id,
      diet_id: params[:quote][:diet_id],
      phrase_id: @phrase.id
    )
    # @quote.save
  end

  def self.clear_quotes
    Quote.destroy_all
  end
end

