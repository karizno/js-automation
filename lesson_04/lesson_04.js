const fse = require('fs-extra');


const folderFirst = 'lesson_04/folderFirst';
const folderSecond = 'lesson_04/folderSecond';
const folderThird = 'lesson_04/folderThird';
const file = 'file.txt';


fse.ensureDirSync(folderFirst);
fse.ensureFileSync(`${folderFirst}/${file}`);
fse.ensureDirSync(folderSecond);
fse.moveSync(`${folderFirst}/${file}`, `${folderSecond}/${file}`);
fse.ensureDirSync(folderThird);
fse.copySync(`${folderSecond}/${file}`, `${folderThird}/${file}`);
fse.removeSync(`${folderSecond}/${file}`);
fse.removeSync(`${folderThird}/${file}`);
fse.removeSync(folderFirst);
fse.removeSync(folderSecond);
fse.removeSync(folderThird);