import { Iterator } from '../util/iterator/Iterator';
import { Nullable, Node } from './Node';

export class ListIterator<E> implements Iterator<E> {
	protected current: Nullable<Node<E>>;
	
	constructor(node: Nullable<Node<E>>) {
		this.current = node;
	}

	public next(): E {
		Node.assertNotEmpty(this.current, "Iterator Out of Bounds");

		let element  = this.current.data;
		this.current = this.current.next;

		return element;
	}

	public hasNext(): boolean {
		return !Node.empty<E>(this.current);
	}

}