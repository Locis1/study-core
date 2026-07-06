#include <stdio.h>
#include <stdbool.h>
#include "modulues.h"

TruthTable truthTable_and(void) {

    // Create a 2D array to hold the truth table values
    TruthTable table;
    table.rows = 4;
    table.columns = 3;

    int row = 0;

    // Loop through all possible values of a (0 and 1)
    for (int a = 0; a <= 1; a++) {

        // Loop through all possible values of b (0 and 1)
        for (int b = 0; b <= 1; b++) {

            int column = 0;

            // Fill the current row of the truth table
            table.data[row][column++] = a;
            table.data[row][column++] = b;
            table.data[row][column++] = a && b;

            // Move to the next row of the truth table
            row++;
        }
    }

    return table;
}