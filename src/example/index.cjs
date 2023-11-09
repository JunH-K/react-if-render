const fs = require("fs");
const path = require("path");

const exampleFilePath = "src/example/example.tsx";
const readmeFilePath = "src/example/readme2.md";


fs.readFile(exampleFilePath, 'utf8', (err, codeToInsert) => {
  if (err) {
    console.error('Error reading example.tsx:', err);
    return;
  }

  codeToInsert = codeToInsert.replace(/"\.\.\/lib"/g, '"react-if-render"');

  fs.readFile(readmeFilePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading readme2.md:', err);
      return;
    }


    const usageIndex = data.indexOf('> Usage');
    if (usageIndex !== -1) {

      const codeBlockStartIndex = data.indexOf('```javascript', usageIndex);
      if (codeBlockStartIndex !== -1) {

        const codeBlockEndIndex = data.indexOf('```', codeBlockStartIndex + '```javascript'.length);
        if (codeBlockEndIndex !== -1) {

          const modifiedReadme = data.slice(0, codeBlockStartIndex) + '```javascript\n' + codeToInsert + '```' + data.slice(codeBlockEndIndex + 3);


          fs.writeFile(readmeFilePath, modifiedReadme, (err) => {
            if (err) {
              console.error('Error writing readme2.md:', err);
              return;
            }
            console.log('Code inserted into readme2.md');
          });
        }
      }
    }
  });
});