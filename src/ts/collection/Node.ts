import { Util } from '../util/Util';

export type Nullable<T> = T | null;

export class Node<E> {
    public data: E;
    public next: Nullable<Node<E>>;

    constructor(data: E) {
        this.data = data;
        this.next = null;
    }

    public static empty<E>(node: Nullable<Node<E>>) {
    	return node === null || node === undefined;
    }

    public static assertNotEmpty<E>(node: Nullable<Node<E>>, message: string): void {
        Util.assertFalse(Node.empty(node), message);
    }

}