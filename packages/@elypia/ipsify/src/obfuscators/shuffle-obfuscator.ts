// import {Obfuscator} from '../api/obfuscator';
//
// export enum ShuffleMode {
//
//   /** Randomly scramble all characters in the input. */
//   Characters,
//
//   /** Retain words, so that they're all still valid, but scramble the order of them. */
//   Words,
//
//   /**
//    * Scramble the order of the sentences by terminiating characters
//    * such as dot, question mark, or exclamation point.
//    */
//   Sentences
// }
//
// /**
//  * Obfuscates the input by scrambling the words or characters in it.
//  */
// export class ShuffleObfuscator implements Obfuscator {
//
//   /** Which mode to scramble by. */
//   private readonly mode: ShuffleMode = ShuffleMode.Characters;
//
//   private readonly preserveSpacing: boolean = true;
//
//   /**
//    * @param mode The mode to use when obfuscating input.
//    * @param preserveSpacing If spaces should be preserved, or also obfuscated.
//    */
//   constructor(mode: ShuffleMode, preserveSpacing: boolean) {
//     this.mode = mode;
//     this.preserveSpacing = preserveSpacing;
//   }
//
//   public obfuscate(oldBody: string): string {
//     let array: string[];
//
//     switch (this.mode) {
//       case ShuffleMode.Characters:
//         array = oldBody;
//         break;
//       case ShuffleMode.Words:
//         array = oldBody.split(/\s/);
//         break;
//       case ShuffleMode.Sentences:
//         array = oldBody.split(/[?.!]/g);
//         break;
//       default:
//         throw 'Unimplemented case occured in ShuffleObfuscator.';
//     }
//
//     const shuffled = this.shuffle(array);
//     const newBody = shuffled.join(' ');
//
//     return newBody;
//   }
//
//   private shuffle<T>(oldArray: T[]): T[] {
//     const newArray: T[] = oldArray;
//
//     for (let i = oldArray.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * i)
//       const temp = oldArray[i]
//       oldArray[i] = oldArray[j]
//       oldArray[j] = temp
//     }
//
//     return oldArray;
//   }
// }
