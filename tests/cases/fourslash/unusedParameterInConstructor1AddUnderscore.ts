/// <reference path='fourslash.ts' />

// @noUnusedLocals: true
//// class C1 {
////    [|constructor(private p1: string, public p2: boolean, public p3: any, p5) |] { p5; }
//// }

verify.rangeAfterCodeFix("constructor(private _p1: string, public p2: boolean, public p3: any, p5)", /*includeWhiteSpace*/ false, /*errorCode*/ undefined, /*index*/ 1);