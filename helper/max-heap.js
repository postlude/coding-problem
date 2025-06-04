class MaxHeap {
	constructor() {
		this.heap = [];
	}

	push(val) {
		this.heap.push(val);
		this._bubbleUp();
	}

	pop() {
		if (this.size() === 0) return null;
		const max = this.heap[0];
		const end = this.heap.pop();
		if (this.size() > 0) {
			this.heap[0] = end;
			this._sinkDown();
		}
		return max;
	}

	size() {
		return this.heap.length;
	}

	_bubbleUp() {
		let idx = this.heap.length - 1;
		const element = this.heap[idx];
		while (idx > 0) {
			let parentIdx = Math.floor((idx - 1) / 2);
			let parent = this.heap[parentIdx];
			if (element <= parent) break;
			this.heap[parentIdx] = element;
			this.heap[idx] = parent;
			idx = parentIdx;
		}
	}

	_sinkDown() {
		let idx = 0;
		const length = this.heap.length;
		const element = this.heap[0];
		while (true) {
			let leftChildIdx = 2 * idx + 1;
			let rightChildIdx = 2 * idx + 2;
			let leftChild, rightChild;
			let swap = null;
			if (leftChildIdx < length) {
				leftChild = this.heap[leftChildIdx];
				if (leftChild > element) swap = leftChildIdx;
			}
			if (rightChildIdx < length) {
				rightChild = this.heap[rightChildIdx];
				if (
					(swap === null && rightChild > element) ||
					(swap !== null && rightChild > leftChild)
				) {
					swap = rightChildIdx;
				}
			}
			if (swap === null) break;
			this.heap[idx] = this.heap[swap];
			this.heap[swap] = element;
			idx = swap;
		}
	}
}

/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/142085
 */
function solution(n, k, enemy) {
    const maxHeap = new MaxHeap();
    let soldiers = n;
    let usedInvincible = 0;
    for (let i = 0; i < enemy.length; i++) {
        soldiers -= enemy[i];
        maxHeap.push(enemy[i]);
        if (soldiers < 0) {
            if (usedInvincible < k) {
                const biggest = maxHeap.pop();
                soldiers += biggest;
                usedInvincible++;
            } else {
                return i;
            }
        }
    }
    return enemy.length;
}