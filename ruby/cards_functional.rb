def display_hand(hand)
  hand.each {|(suit, value)| puts "#{value} of #{suit}s"}
end

suits = ['Heart', 'Diamond', 'Club', 'Spade']
values = [
  'Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven',
  'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King'
]

deck = suits.product(values)
my_hand = deck.sample(5)
remaining_deck = deck - my_hand
your_hand = remaining_deck.sample(5)

puts "my hand is:"
display_hand(my_hand)
puts
puts "your hand is:"
display_hand(your_hand)