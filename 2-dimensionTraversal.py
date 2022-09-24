##### QUESTION 3 - https://codesignal.com/blog/engineering/example-codesignal-questions/ 
### Your task is to find the dropping position such that at least one full row is formed. 
# As a dropping position you should consider the column index of the cell in game field which matches the top left corner of the figure 3 × 3 matrix. 
# 
# If there are multiple dropping positions satisfying the condition, feel free to return any of them. If there are no such dropping positions, return -1.

def solution(field, figure):
   height = len(field)
   width = len(field[0])
   figure_size = len(figure)
 
   for column in range(width - figure_size + 1):
       row = 1
       while row < height - figure_size + 1:
           can_fit = True
           for dx in range(figure_size):
               for dy in range(figure_size):
                   if field[row + dx][column + dy] == 1 and figure[dx][dy] == 1:
                       can_fit = False
           if not can_fit:
               break
           row += 1
       row -= 1
 
       for dx in range(figure_size):
           row_filled = True
           for column_index in range(width):
            if not (field[row + dx][column_index] == 1 or
                    (column <= column_index < column + figure_size and\
                  figure[dx][column_index - column] == 1)):
                row_filled = False
           if row_filled:
               return column
   return -1
