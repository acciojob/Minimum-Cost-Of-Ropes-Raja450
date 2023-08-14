function calculateMinCost() {
    let input = document.getElementById("rope-lengths").value;
    let arr = input.split(',').map(Number);

    if (arr.length <= 1) {
        document.getElementById("result").innerHTML = 0; // No cost if there's only one or no ropes
        return;
    }

    let totalCost = 0;
    arr.sort((a, b) => a - b); // Sort the ropes in ascending order

    while (arr.length > 1) {
        const sum = arr[0] + arr[1]; // Take the two smallest ropes
        totalCost += sum; // Add their sum to the total cost
        arr.splice(0, 2); // Remove the two smallest ropes
        arr.push(sum); // Add the sum back to the ropes
        arr.sort((a, b) => a - b); // Re-sort the ropes
    }

    document.getElementById("result").innerHTML = totalCost; // Display the result
}