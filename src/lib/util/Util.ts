
export class Util {
	static assertEqual(condition: boolean, expected: boolean, message?: string): void {
	    if(condition != expected)
	        throw new Error(message? message : "Unexpected error!");
	}

	static assertTrue(condition: boolean, message: string): void {
	    Util.assertEqual(condition, true, message);
	}

	static assertFalse(condition: boolean, message: string): void {
	    Util.assertEqual(condition, false, message);
	}
}