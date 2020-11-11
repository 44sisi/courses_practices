# linear search (O_logn, Omega_1)
def linear_search():
    people = [{'name': 'EMMA', 'number': '7563'},
              {'name': 'RODRIGO', 'number': '7453'},
              {'name': 'DAVID', 'number': '7133'},
              {'name': 'JOHN', 'number': '2143'}]
    for p in people:
        if p['name'] == 'EMMA':
            print(f"{p['name']}'s number is {p['number']}".format())
            return 0
    print('Not found')
    return 1
# linear_search()


# binary search (O_logn, Omega_1)
def binary_search(sorted_arr, target):
    if sorted_arr == []:
        return 'Not found'
    else:
        mid_index = int(len(sorted_arr)/2)
        mid_val = sorted_arr[mid_index]
        if mid_val == target:
            return 'Found'
        elif mid_val > target:
            return binary_search(sorted_arr[:mid_index], target)
        else:
            return binary_search(sorted_arr[mid_index+1:], target)
# print(binary_search([0, 1, 4, 7, 7, 10, 12], 13))


# bubble sort (O_n^2, Omega_n)
def bubble_sort(arr):
    for i in range(len(arr)-1):
        swap = False
        for j in range(len(arr)-1-i):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
                swap = True
        if not swap:
            break
    return arr
# print(bubble_sort([9, 8, 7, 6, 5, 4, 3, 2, 1]))


# selection sort (O_n^2, Omega_n^2, Theta_n^2)
def selection_sort(arr):
    for i in range(len(arr)-1):
        min, loc = arr[i], i
        for j in range(i+1, len(arr)):
            if arr[j] < min:
                min, loc = arr[j], j
        arr[i], arr[loc] = arr[loc], arr[i]
    return arr
# print(selection_sort([5, 6, 4, 1, 2, 3]))


# draw pyramid - iteration
def draw_pyramid_iteration(h):
    for h in range(1, h+1):
        for n in range(h):
            print('#', end='')
        print()
# draw_pyramid_iteration(4)


# draw_pyramid_recursion
def draw_pyramid_recursion(h):
    if h == 0:
        print(end='')
    else:
        draw_pyramid_recursion(h-1)
        for i in range(h):
            print('#', end='')
        print()
# draw_pyramid_recursion(4)


# merge sort (O_nlogn, Omega_nlogn, Theta_nlogn)
def merge_sort(arr):
    if len(arr) in (0, 1):
        return arr
    else:
        mid_index = int(len(arr)/2)
        left = merge_sort(arr[:mid_index])
        right = merge_sort(arr[mid_index:])
        merged = []
        while left and right:
            if left[0] < right[0]:
                merged.append(left.pop(0))
            else:
                merged.append(right.pop(0))
        merged.extend(left)
        merged.extend(right)
        return merged
# print(merge_sort([6, 3, 7, 2, 7, 4, 2]))
