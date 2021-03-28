
export interface Iterator<E> {
	hasNext(): boolean;
	next(): E;
}