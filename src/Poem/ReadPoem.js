import fs from 'fs';

fs.readFile('JS_NodeEssentials/src/Poem/poem.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});