#ifndef MODULUES_H
#define MODULUES_H

typedef struct {
    int rows;
    int columns;
    int data[4][3];
} TruthTable;

TruthTable truthTable_and(void);

#endif