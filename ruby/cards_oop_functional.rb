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
    @cards = SUITS.product(VALUES).map {|(suit, value)| Card.new(suit, value)}
  end

  def draw(number_of_cards = 1, *already_drawn)
    remaining_cards = @cards - already_drawn.flatten
    drawn_cards = remaining_cards.shuffle.sample(number_of_cards)

    return drawn_cards
  end
end

deck = Deck.new
my_hand = deck.draw(5)
your_hand = deck.draw(5, my_hand)

puts "my hand is:"
puts my_hand
puts
puts "your hand is:"
puts your_hand