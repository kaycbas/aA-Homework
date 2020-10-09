  # Exercise 1 - Stack
  
  class Stack
    def initialize
      # create var to store stack here!
      @stack = []
    end

    def push(el)
      # adds an element to the stack
      @stack << el
    end

    def pop
      # removes one element from the stack
      @stack.pop
    end

    def peek
      # returns, but doesn't remove, the top element in the stack
      @stack.last
    end
  end

#   stack = Stack.new
#   stack.push(1)
#   stack.push(2)
#   stack.push(3)
#   stack.push(4)
#   p stack.pop 
#   p stack.pop
#   p stack.peek

# Exercise 2 - Queue

class Queue
    def initialize
        @queue = []
    end

    def enqueue(el)
        @queue.unshift(el)
    end

    def dequeue
        @queue.pop
    end

    def peek
        @queue.last
    end
end

# queue = Queue.new
# queue.enqueue(1)
# queue.enqueue(2)
# queue.enqueue(3)
# queue.enqueue(4)
# p queue.dequeue 
# p queue.dequeue
# p queue.peek

# Exercise 3 - Map

class Map
    def initialize
        @map = Array.new { [] }
    end

    def set(key, val)
        idx = @map.find_index { |pair| pair.first == key }
        idx == nil ? @map << [key, val] : @map[idx][1] = val
    end

    def get(key)
        pair = @map.find { |pair| pair.first == key }
        pair.nil? ? nil : pair.last
    end

    def delete(key)
        @map.delete_if { |pair| pair.first == key }
    end

    def show
        # pair = @map.find { |pair| pair.first == key }
        # pair.last
        p @map
    end
end

# map = Map.new
# map.set("kb", 25)
# map.set("eb", 29)
# map.set("kb", 26)
# map.show
# age = map.get('kb')
# p age
# map.delete('kb')
# map.show
