import {Obfuscator} from '../api/obfuscator';

/**
 * Interface defines
 */
export interface CharObfuscatorOptions {

  /** The new character to replace all existing characters with. */
  char: string;
}

/**
 * Default values for the {@link CharObfuscatorOptions}.
 */
export class DefaultCharObfuscationOptions implements CharObfuscatorOptions {

  public readonly char: string = 'a';
}

/**
 * Replace every character in found with the specified
 * character.
 */
export class CharObfuscator implements Obfuscator {

  private readonly options: CharObfuscatorOptions;

  /**
   * @param options Options for how obfuscator operates, defaults to {@link DefaultCharObfuscationOptions}.
   */
  constructor(options: CharObfuscatorOptions = new DefaultCharObfuscationOptions()) {
    this.options = options;
  }

  public obfuscate(body: string): string {
    return body.replace(/\w/gi, this.options.char);
  }
}
