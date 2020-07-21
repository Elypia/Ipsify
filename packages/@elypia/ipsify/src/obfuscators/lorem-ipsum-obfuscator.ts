import {Obfuscator} from '../api/obfuscator';

/**
 * Replace every character found with the specified
 * character.
 */
export class LoremIpsumObfuscator implements Obfuscator {

  private static readonly LoremIpsum: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

  public obfuscate(oldBody: string): string {
    const inputLength: number = oldBody.length;
    let newBody: string = '';

    while (newBody.length != inputLength) {
      let requiredChars = inputLength - newBody.length;

      if (requiredChars > LoremIpsumObfuscator.LoremIpsum.length)
        requiredChars = LoremIpsumObfuscator.LoremIpsum.length;

      newBody += LoremIpsumObfuscator.LoremIpsum.slice(0, requiredChars);
    }

    return newBody;
  }
}
