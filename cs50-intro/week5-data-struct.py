# Binary search tree
class Node():
    def __init__(self, data):
        self.left = None
        self.right = None
        self.data = data

    def insert(self, data):
        if self.data:
            if data < self.data:
                if self.left is None:
                    self.left = Node(data)
                else:
                    self.left.insert(data)
            elif data > self.data:
                if self.right is None:
                    self.right = Node(data)
                else:
                    self.right.insert(data)
        else:
            self.data = data

    def findval(self, val):
        if val < self.data:
            if self.left is None:
                return str(val) + ' not found'
            else:
                return self.left.findval(val)
        if val > self.data:
            if self.right is None:
                return str(val) + ' not found'
            else:
                return self.right.findval(val)
        else:
            return str(val) + ' is found'

    def print_tree(self):
        if self.left:
            self.left.print_tree()
        print(self.data)
        if self.right:
            self.right.print_tree()


tree = Node(12)
tree.insert(6)
tree.insert(14)
tree.insert(3)
print(tree.findval(3))
print(tree.findval(11))
tree.print_tree()
