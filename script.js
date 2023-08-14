function calculateMinCost() {
  //your code here
	const inputText = '12, 14, 5, 6, 6, 7'; // Example input
const ropes = inputText.split(', ').map(Number);

// Build a min-heap (priority queue)
const heap = new MinHeap();
ropes.forEach(length => heap.insert(length));

// Calculate the minimum cost
let totalCost = 0;
while (heap.size() > 1) {
    const smallest1 = heap.extractMin();
    const smallest2 = heap.extractMin();
    const combinedLength = smallest1 + smallest2;
    totalCost += combinedLength;
    heap.insert(combinedLength);
}

// Print the minimum cost inside the <div id="result"></div> element
const resultDiv = document.getElementById('result');
resultDiv.textContent = totalCost.toString();
  
  
  
}  
