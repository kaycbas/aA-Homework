def eat_fish_logarithmic(fish)
    fish.sort_by(&:length).last
end

p eat_fish_logarithmic(['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish', 'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh'])

def eat_fish_linear(fish)
    fish.reduce('') { |long, f| [long, f].max_by(&:length) }
end

p eat_fish_linear(['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish', 'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh'])

def slow_dance(dir, tiles_array)
    tiles_array.find_index(dir)
end

tiles_array = ["up", "right-up", "right", "right-down", "down", "left-down", "left",  "left-up" ]
p slow_dance("right-down", tiles_array)

def fast_dance(dir, tiles_hash)
    tiles_hash[dir]
end

tiles_hash = {
    up: 0,
    right_up: 1,
    right: 2,
    right_down: 3,
    down: 4,
    left_down: 5,
    left: 6,  
    left_up: 7
}
p fast_dance(:right_down, tiles_hash)