def factorial(n)
  return 1 if n < 2
  n * factorial(n-1)
end

factorial_tco = <<-function
def factorial_tco(n, accumulator=1)
  return accumulator if n.zero?
  factorial_tco(n-1, accumulator*n)
end
function
options = {
  tailcall_optimization: true,
  trace_instruction: false,
}
RubyVM::InstructionSequence.new(factorial_tco, nil, nil, nil, options).eval

p factorial(5)
p factorial(10)
p factorial(100)
#p factorial(10000)

p factorial_tco(10000).to_s.length