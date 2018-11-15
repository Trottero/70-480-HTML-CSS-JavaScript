$('document').ready(function(){

    const separator = () => console.log("---------------------------------------------------------------------");
    var names = new Array("John", "Karel", "Kees", "Robert", "Trudie");

    // Length method
    console.log('Length of names array: ' + names.length);

    // Concat method
    separator();
    var names_concat = new Array("Piet");
    console.log('Added another array to existing array names: ' + names.concat(names_concat));
    
    // IndexOf
    separator();
    console.log("Karel is at place 1 in the names array: " + names.indexOf("Karel", 0));
    
    // Join
    separator();
    console.log("Join with '\\': " + names.join("\\"));
    console.log("Join with ',': " + names.join(","));
    console.log("Join with '|': " + names.join("|"));
        
    // Reverse
    separator();
    console.log(JSON.stringify(names.reverse()));
    
    // Slice
    separator();
    const sliced = names.slice(1,3);
    console.log("Sliced from the names array: " + sliced);
    
    // Splice
    separator();
    var names_splice = new Array("John", "Karel", "Kees", "Robert", "Trudie");
    var spliced = names_splice.splice(1, 3);
    var names_splice_and_replace = new Array("John", "Karel", "Kees", "Robert", "Trudie");
    var spliced_and_replace = names_splice_and_replace.splice(1, 3, "Pieter", "Piet", "Klaas");

    console.log("Splice only: " + spliced);
    console.log("Spliced items are replaces with other names: " + names_splice_and_replace);
    
    // Pop and Push (FIFO)
    separator();
    const pop_push_array = new Array();
    pop_push_array.push('This', 'is', 'pushed');

    console.log("When push(...) is used: " + pop_push_array);
    console.log("When pop() (pop last item in array) is used: " + pop_push_array.pop());
    console.log("After pop() is used: " + pop_push_array);
    
    // Shift and Unshift
    separator();
    const shift_unshift_array = new Array();
    shift_unshift_array.unshift('This', 'is', 'unshifted');

    console.log("When unshift(...) is used: " + shift_unshift_array);
    console.log("When shift() (shift first item in array) is used: " + shift_unshift_array.shift());
    console.log("After shift() is used: " + shift_unshift_array);    

    // Every (Callback)
    separator();
    const evenNumbers = new Array(0, 2, 4, 6, 8, 9);
    
    var allEven = evenNumbers.every((value, index, array) => {
        return value % 2 === 0;
    });

    console.log(evenNumbers);
    console.log("Are all the numbers even?: " + allEven);

    // Some (Callback)
    separator();
    const some_numbers = new Array(0, 2, 4, 6, 8, 9);

    var are_some_uneven = some_numbers.some((value, index, array) => {
        return value % 2 !== 0;
    });

    console.log(some_numbers);
    console.log("Are some numbers uneven?: " + are_some_uneven);

    // forEach (Callback)
    separator();
    const foreach_numbers = new Array(0, 2, 4, 6, 8, 9);
    var multiplied_array = new Array();

    foreach_numbers.forEach((value, index, array) => {
        multiplied_array.push(value * 2);
    })

    console.log(foreach_numbers);
    console.log("Multiplied: " + multiplied_array);

    // Filter (Callback)
    separator();
    const filter_numbers = new Array(0, 6, 8, 18, 17, 14, 99, 95, 1005);
    const even_numbers_array = new Array();
    
    filter_numbers.filter((value, index, array) => {
        if (value % 2 === 0) {
            even_numbers_array.push(value);
        }
    });

    console.log(filter_numbers);
    console.log("All even numbers are filtered: " + even_numbers_array);

    // Map (Callback)
    separator();
    const map_numbers = new Array(1.2, 2.6, 3.7, 4.1, 5.9);
    console.log(map_numbers);

    const rounded = map_numbers.map((value, index, array) => {
        return Math.round(value);
    });

    console.log("Values are replaced: " + rounded);

    // Reduce and ReduceRight
    separator();
    const reduce_numbers = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

    var factorial = reduce_numbers.reduce((previous, current) => {
        return previous * current;
    });

    console.log(reduce_numbers);
    console.log("Reduce used: " + factorial);
});
