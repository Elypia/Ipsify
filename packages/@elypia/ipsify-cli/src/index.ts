const html = `<html>

</html>`;

import {HtmlIpsifier} from '@elypia/ipsify';
import {Command} from 'commander';

const program = new Command();

const license: string = `https://gitlab.com/Elypia/ipsify
Copyright 2020-2020 Elypia CIC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.`;

program
  .name('ipsify')
  .version('0.0.1')
  .description('Convert a text document such as .txt, .md, or .html into meaningless and intentless text. This retains all other information in the document such as layout and attributes but replaces the body with lorem ipsum.')
  .option('-l, --license', 'Print the license of the software.', false);

program.parse(process.argv);

if (program.license) {
  console.log(license);
} else {
  console.log('nothing happened');
  const test: HtmlIpsifier = new HtmlIpsifier();
  test.ipsify(html);
}
