class Board
  attr_accessor :cups

  def initialize(name1, name2)
    @sides = {name1 => 6, name2 => 13}
    @avoid = {name1 => 13, name2 => 6}
    @cups = Array.new(14) { [] }
    @cups.each_index do | i|
      unless i == 6 || i == 13
        @cups[i] += place_stones
      end
    end
  end

  def place_stones
    [:stone, :stone, :stone, :stone]
  end

  def valid_move?(start_pos)
    valid = start_pos < 14 && start_pos >= 0 && start_pos != 6 && start_pos != 13
    raise "Invalid starting cup" unless valid
    raise 'Starting cup is empty' if @cups[start_pos].empty?
  end

  def make_move(start_pos, current_player_name)
    num_stones = @cups[start_pos].count
    @cups[start_pos] = []

    i = start_pos
    until num_stones == 0
      i = (i + 1) % 14
      if i != @avoid[current_player_name]
        @cups[i] << :stone
        num_stones -= 1
      end
    end
    render
    next_turn(i, current_player_name)
  end

  def next_turn(ending_cup_idx, current_player_name)
    puts "Ending idx: #{ending_cup_idx}; Cup count: #{@cups[ending_cup_idx].count}; Cur player: #{current_player_name}; Cur player store: #{@sides[current_player_name]}"
    if ending_cup_idx == @sides[current_player_name]
      return :prompt
    elsif @cups[ending_cup_idx].count == 1
      return :switch
    else
        ending_cup_idx
    end
  end

  def render
    print "      #{@cups[7..12].reverse.map { |cup| cup.count }}      \n"
    puts "#{@cups[13].count} -------------------------- #{@cups[6].count}"
    print "      #{@cups.take(6).map { |cup| cup.count }}      \n"
    puts ""
    puts ""
  end

  def one_side_empty?
    return true if @cups[0..5].all? { |cup| cup.empty? }
    return true if @cups[7..12].all? { |cup| cup.empty? }
    false
  end

  def winner
    names = @sides.keys
    side_1 = names.first
    side_2 = names.last
    if @cups[6].count > @cups[13].count
      return names.first
    elsif @cups[6].count < @cups[13].count
      return names.last
    else
      return :draw
    end
  end
end
