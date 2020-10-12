class GraphNode
    attr_accessor :val, :neighbors

    def initialize(val, neighbors = [])
        @val = val
        @neighbors = neighbors
    end
end

a = GraphNode.new('a')
b = GraphNode.new('b')
c = GraphNode.new('c')
d = GraphNode.new('d')
e = GraphNode.new('e')
f = GraphNode.new('f')
a.neighbors = [b, c, e]
c.neighbors = [b, d]
e.neighbors = [a]
f.neighbors = [e]

require 'set'

def bfs(starting_node, target_value)
    visited = Set.new
    visited << starting_node
    queue = [starting_node]

    until queue.empty?
        node = queue.shift
        return node if node.val == target_value
        node.neighbors.each do |nb|
            unless visited.include?(nb)
                visited << nb
                queue << nb
            end
        end
    end
    nil
end

# p bfs(a, "b")
# p bfs(a, "f")