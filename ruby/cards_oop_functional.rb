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

def draw(deck, number_of_cards = 1, *already_drawn)
  remaining_cards = deck - already_drawn.flatten
  drawn_cards = remaining_cards.shuffle.sample(number_of_cards)

  return drawn_cards
end

suits = ['Heart', 'Diamond', 'Club', 'Spade']
values = [
  'Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven',
  'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King'
]

deck = suits.product(values).map{|(suit, value)| Card.new(suit, value)}
my_hand = draw(deck, 5)
your_hand = draw(deck, 5, my_hand)

puts "my hand is:"
puts my_hand
puts
puts "your hand is:"
puts your_hand