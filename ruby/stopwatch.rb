class Stopwatch
  attr_reader :status

  def initialize
    @accumulated = 0
    @start_time = nil
    @status = :stopped
  end

  def start
    if @status == :stopped
      @status = :running
      @start_time = Time.now
    end

    return @start_time
  end

  def stop
    if @status == :running
      @status = :stopped
      @accumulated += Time.now - @start_time
    end

    return self.time
  end

  def reset
    @accumulated = 0
    @start_time = nil
    @status = :stopped

    return self.time
  end

  def time
    if status == :running
      Time.now - @start_time + @accumulated
    else
      @accumulated
    end
  end
end