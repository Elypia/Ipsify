/**
 * Interface to create ipsifier implementations.
 * This allows implementations to be made for a various types of files
 * formats which can be selected at runtime.
 */
export interface Ipsifier {

  /**
   * Parses the document and makes the alternations to a new
   * string which is then returned.
   *
   * @param body The original content of the source document.
   */
  ipsify(body: string): string;
}
