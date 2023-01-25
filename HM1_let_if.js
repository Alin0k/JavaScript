//1. Create variable “item_1”
let item_1;
// 2. Assign the variable item_1 number 5.
item_1 = 5;
//3. Print item_1 to console.
console.log(item_1);
//4. Create variable “item_2”
let item_2;
//5. Assign the variable item_2 number 3.
item_2 = 3;
//6. Print item_2 to console.
console.log(item_2);
//7. Create variable “item_3”
let item_3;
//8. Assign the item_3 variable the math addition of item_1 and item_2.
item_3 = item_1 + item_2;
//9. Print item_3 to console.
console.log(item_3);
//10. Create variable “item_4”
let item_4;
//11. Assign the "Yolochka" string to the item_4.
item_4 = "Yolochka";
//12. Print item_4 to console.
console.log(item_4);
//13. Print to the console the math additional of item_3 and item_4.
console.log(item_3 + item_4);
//14. Print to the console the math multiplication of item_3 and item_4.
console.log(item_3 * item_4);
//15. Create variable “item_5”
let item_5;
//16. Assign item_5 to item_3
item_5 = item_3;
//17. Create variable "item_6".
let item_6;
//18. Create variable item_6_type
let item_6_type;
//19. Assign item_6 to 15.
item_6 = 15;
//20. Assign variable item_6_type variable type item_6
item_6_type = item_6;
//21. Print the data type item_6 to the console in the form ——  “item_6 == ”  item_6,  “item_6_type == ”  item_6_type ——  
console.log( "item_6 ==", typeof item_6, "item_6_type ==", typeof item_6_type);
//22. Create variable item_7 and convert item_6 to String in it.
let item_7 = String(item_6);
//23. Create variable item_7_type
let item_7_type;
//24. Assing item_7_type variable the type of item_7
item_7_type = item_7;
//25. Print the data type item_7 to the console in the form ——  “item_7 == ”  item_7,  “item_7_type == ”  item_7_type ——  
console.log("item_7 ==", typeof item_7, "item_7_type ==", typeof item_7_type);
//26. Create variable "age_1" and assign value 10 to it.
let age_1 = 10;
//27. Create variable "age_2" and assign value 18 to it.
let age_2 = 18;
//28. Create variable "age_3" and assign value 60 to it.
let age_3 = 60;
//29. Create an IF in which you need to check the value of the variable age_1.
//30. IF age_1 < age_2, print to the console “You don’t have access cause your age is ” + age_1 + “ It’s less then ”
//31. IF age_1 >= age_2 and age_1 < age_3, print to the console “Welcome  !”
//32. IF age_1  > age_3, print to the console “Keep calm and look Culture channel”.
//33. Otherwise, the result will be displayed “Technical work”.
if (age_1 < age_2) {
    console.log(`You don't have access cause your age is 1`, age_1, `. It's less then`);
} else if (age_1 >= age_2 && age_1 < age_3) {
        console.log(`Welcome!`);
    } else if (age_3 < age_1) {
            console.log(`Keep calm and look Culture channel`);
        }else {
            console.log(`Technical work`);
};