import { Iterator } from './Iterator';

export interface Iterable<E> {
	iterator(): Iterator<E>;
}