x = 15

if x.zero?
  puts "zero"
elsif x > 0
  puts "positive"
else
  puts "negative"
end

x = 15

if x.zero?
  puts "zero"
else
  if x > 0
    puts "positive"
  else
    puts "negative"
  end
end