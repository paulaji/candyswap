CandySwap

Logic:
If 3/4 columns | 3/4 row have the same color/candy in succession, those can be popped.

We have assigned each color/cell of the board/table to have a width of 8.

Column Logic:
We loop through the board three column cells at a time. Since our dimensions are 8 x 8, we have 64 cells (63 indices).
Because we are taking three column cells at a time, we only need to loop till 48 cells (47th index).
Doing so will cover all the columns!
In each loop we store 3 indices of a column-wise straight line in a variable.
Say our iteration starts from index 0. 0 to 7 will have the first row, then we go onto the second column which starts at index 8. Likewise, third column starts at index 16.
So, we have to check if colors of cells at indices 0, 8 and 16 are same. If yes, the 3 columns have same colors in a straight line and we can pop them or add up the score!

Say we start out iteration at i = 0; loop till 47 elements,
columnOfThree = [i, i + width, i + (width*2)]
that is, columnOfThree variable will have an array of values
i = 0
i + width(8) = 0 + 8 = 8
i + width(8)*2 = 0 + 8*2 = 16

Voila! The indices we wanted!!!

Now as the loop continues, we get all such columnOfThree and we check if the colors of each element in our columnOfThree array are same. If yes, pop!
