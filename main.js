import MinHeap from './src/MinHeap'

const minHeap = new MinHeap()

minHeap.add(10)
minHeap.add(0)
minHeap.add(12)
// minHeap.add(36)
// minHeap.add(3)
// minHeap.add(50)
// minHeap.add(2)
// minHeap.add(5)

console.log(minHeap.items)
while (minHeap.size) {
	console.log(minHeap.get())
}
