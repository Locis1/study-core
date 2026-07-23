---
author: 'Christian Maul'
date: '2026-07-06'
---


# Truth Table
<truth-table-widget
  expression="A && B"
  variable-count="2">
</truth-table-widget>
The idea behind a truth table is to understand how propositional logic works.

At the beginning, we will look at the **AND** operator. We have two propositions: **A** and **B**. Each proposition can have the value **true** or **false**.

Now we check every possible combination of **A** and **B** and look at the result of **A AND B**.

The **AND** operator only returns **true** when both values are true.

Have a look at the following code:

```c
void truthTable_and_print(void) {

    // Print the header of the truth table
    printf("A | B | A && B\n");
    printf("--------------\n");

    // Loop through all possible values of a (0 and 1)
    for (int a = 0; a <= 1; a++) {

        // Loop through all possible values of b (0 and 1)
        for (int b = 0; b <= 1; b++) {

            // Print the current row of the truth table
            printf("%d | %d |   %d\n", a, b, a && b);
        }
    }
}
```

The code shows the logic behind the truth table.

A Boolean value can only be **0** or **1**.
In this example, **0** means false and **1** means true.

Because we have two Boolean values, **A** and **B**, we need to check every possible combination:

* 0 and 0
* 0 and 1
* 1 and 0
* 1 and 1

That gives us four possible combinations.

Inside the loop, we print the current values of **A**, **B**, and the result of:

```c
a && b
```



This part is the actual **AND** operation.

We can use the same idea for other operators, for example **OR**, **NOT**, or **XOR**.
We only need to change the logical operation.

For example:

```c
a || b   // OR
!a       // NOT
a != b   // XOR
```

To summarize the **AND** operator:

**A AND B is only true when A and B are both true.**

In the next step, I will implement the backend response and connect the truth table to the frontend.
