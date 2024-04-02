// LinkedList class / factory, which will represent the full list.
function LinkedList() {
	this.head = null;

	const append = (value) => {
		//  adds a new node containing value to the end of the list
		const newNode = Node(value);
		if (!this.head) {
			this.head = newNode;
			return;
		}
		let current = this.head;
		while (current.nextNode) {
			current = current.nextNode;
		}
		current.nextNode = newNode;
	};

	const prepend = (value) => {
		// adds a new node containing value to the start of the list
		const newNode = Node(value);
		newNode.nextNode = this.head;
		this.head = newNode;
	};

	const size = () => {
		// returns the total number of nodes in the list
		let count = 0;
		let current = this.head;
		while (current) {
			count++;
			current = current.nextNode;
		}

		return {
			append,
			prepend,
			size,
		};
	};
}

// Node class / factory, containing a value property and a link to the nextNode, set both as null by default.
function Node(value) {
	value = null;
	return {
		value,
		nextNode: null,
	};
}
