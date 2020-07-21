/**
 * Interface to create obfuscator implementations.
 * This allows us to change what kind of obfuscation is
 * desired seperately from how data is imported.
 */
export interface Obfuscator {

  /**
   * Obfuscates the string provided.
   *
   * @param body The source string to obfuscate.
   */
  obfuscate(body: string): string;
}
