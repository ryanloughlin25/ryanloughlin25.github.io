class Card
  attr_reader :suit, :value

  def initialize(suit, value)
    @suit = suit
    @value = value
  end

  def to_s
    "#{value} of #{suit}s"
  end
end

class Deck
  SUITS = ['Heart', 'Diamond', 'Club', 'Spade']
  VALUES = [
    'Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven',
    'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King'
  ]

  def initialize
    @cards_in_deck = []
    SUITS.each do |suit|
      VALUES.each do |value|
        @cards_in_deck << Card.new(suit, value)
      end
    end
    @drawn_cards = []
  end

  def shuffle!
    @cards_in_deck.shuffle!

    return self
  end

  def reset_deck
    @cards_in_deck += @drawn_cards
    @drawn_cards.clear
    shuffle

    return self
  end

  def draw(number_of_cards = 1)
    drawn_cards = @cards_in_deck.first(number_of_cards)
    @drawn_cards += drawn_cards
    @cards_in_deck -= drawn_cards

    return drawn_cards
  end
end

deck = Deck.new
deck.shuffle!
my_hand = deck.draw(5)
your_hand = deck.draw(5)

puts "my hand is:"
puts my_hand
puts
puts "your hand is:"
puts your_hand