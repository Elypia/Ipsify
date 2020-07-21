import * as fs from 'fs';
import {Parser, ParserOptions} from 'htmlparser2';
import {Ipsifier} from '../api/ipsifier';
import {LoremIpsumObfuscator} from '../obfuscators/lorem-ipsum-obfuscator';

/**
 * Parses HTML documents.
 */
export class HtmlIpsifier implements Ipsifier {

  /** Omit these tags from obfuscation. */
  private static readonly LiteralTags: string[] = [
    'script', 'style'
  ];

  /** The options to provide to the HTML options. */
  private static readonly Options: ParserOptions = {
    decodeEntities: true
  };

  public ipsify(body: string): string {
    console.log('Parsing input as HTML.');
    let result: string = '';

    let literal: boolean = false;

    const parser: Parser = new Parser({
      onopentag(name: string, attributes: {[s: string]: string}) {
        result += '<' + name;

        for (const prop in attributes)
          result += ' ' + prop + '="' + attributes[prop] + '"';

        result += '>';

        literal = HtmlIpsifier.LiteralTags.includes(name);
      },
      ontext(text: string) {
        if (!text.trimLeft().trimRight())
          return;

        if (!literal)
          text = new LoremIpsumObfuscator().obfuscate(text);

        result += text;
      },
      onclosetag(name: string): void {
        result += '</' + name + '>';
      }
    }, HtmlIpsifier.Options);

    parser.write(body);

    fs.writeFileSync('./temp.html', result);

    return result;
  }
}
