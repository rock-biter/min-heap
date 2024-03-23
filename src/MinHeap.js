export default class MinHeap {
	/**
	 * list of nodes of the heap
	 * @property {array} items
	 */
	items = []

	/**
	 * Get the index of the parent node of node at the index i
	 * @param {number} i
	 * @returns {boolean}
	 */
	getParentIndex(i) {
		return Math.floor((i - 1) / 2)
	}

	/**
	 * Get the index of the left child node of node at the index i
	 * @param {number} i
	 * @returns {boolean}
	 */
	getLeftChildIndex(i) {
		return 2 * i + 1
	}

	/**
	 * Get the index of the right child node of node at the index i
	 * @param {number} i
	 * @returns {boolean}
	 */
	getRightChildIndex(i) {
		return 2 * i + 2
	}

	/**
	 * Get the the parent node of node at the index i
	 * @param {number} i
	 * @returns {boolean}
	 */
	parent(i) {
		return this.items[this.getParentIndex(i)]
	}

	/**
	 * Get the left child node of node at the index i
	 * @param {number} i
	 * @returns {boolean}
	 */
	leftChild(i) {
		return this.items[this.getLeftChildIndex(i)]
	}

	/**
	 * Get the right child node of node at the index i
	 * @param {number} i
	 * @returns {boolean}
	 */
	rightChild(i) {
		return this.items[this.getRightChildIndex(i)]
	}

	/**
	 * check if parent node of node at the index i exists
	 * @param {number} i
	 * @returns {boolean}
	 */
	hasParent(i) {
		return this.parent(i) !== undefined
	}

	/**
	 * check if left child node of node at the index i exists
	 * @param {number} i
	 * @returns {boolean}
	 */
	hasLeftChild(i) {
		return this.leftChild(i) !== undefined
	}

	/**
	 * check if right child node of node at the index i exists
	 * @param {number} i
	 * @returns {boolean}
	 */
	hasRightChild(i) {
		return this.rightChild(i) !== undefined
	}

	swap(i, j) {
		const temp = this.items[i]
		this.items[i] = this.items[j]
		this.items[j] = temp
	}
	/**
	 * Insert an new node in the heap
	 * @param {*} node
	 */
	add(node) {
		this.items.push(node)
		this.heapifyUp()
	}

	/**
	 * @return {number} size of the heap
	 */
	get size() {
		return this.items.length
	}

	/**
	 * @return {*}
	 */
	get() {
		if (this.size <= 1) return this.items.pop()

		const item = this.items[0]
		this.items[0] = this.items.pop()
		this.heapifyDown()
		return item
	}

	/**
	 * @return {void}
	 */
	heapifyUp() {
		let index = this.size - 1
		while (this.hasParent(index) && this.parent(index) > this.items[index]) {
			let parentIndex = this.getParentIndex(index)
			this.swap(parentIndex, index)
			index = parentIndex
		}
	}

	/**
	 * @return {void}
	 */
	heapifyDown() {
		let index = 0

		// console.log(index, this.hasLeftChild(index))
		while (this.hasLeftChild(index)) {
			let smallerChildIndex = this.getLeftChildIndex(index)

			if (
				this.hasRightChild(index) &&
				this.rightChild(index) < this.leftChild(index)
			) {
				smallerChildIndex = this.getRightChildIndex(index)
			}

			// console.log('small index', smallerChildIndex)

			if (this.items[index] < this.items[smallerChildIndex]) {
				break
			} else {
				this.swap(index, smallerChildIndex)
			}
			index = smallerChildIndex
		}
	}
}
