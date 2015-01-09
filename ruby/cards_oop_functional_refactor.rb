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

def sample_except(array, n = 1, *exception_arrays)
  (array - exception_arrays.flatten).sample(n)
end

suits = ['Heart', 'Diamond', 'Club', 'Spade']
values = [
  'Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven',
  'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King'
]

deck = suits.product(values).map{|(suit, value)| Card.new(suit, value)}
my_hand = sample_except(deck, 5)
your_hand = sample_except(deck, 5, my_hand)

puts "my hand is:"
puts my_hand
puts
puts "your hand is:"
puts your_hand