
export type Nullable<T> = T | null;

export class Node<E> {
    public data: Nullable<E>;
    public next: Nullable<Node<E>>;

    constructor(data: Nullable<E>) {
        this.data = data;
        this.next = null;
    }
}