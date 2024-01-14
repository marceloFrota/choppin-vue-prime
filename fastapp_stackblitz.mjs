import inquirer from 'inquirer';
import fs from 'fs';
import axios from 'axios';

const folders = fs.readdirSync('src/components');
console.log(folders);

const files = folders.map((folder) => {
    if(folder.includes('.vue')){
        return;
    }
    const files = fs.readdirSync(`src/components/${folder}`);
    return files.map((file) => {
        const [name, ext] = file.split('.');
        return {
            name,
            ext,
            folder: folder,
            path: `src/components/${folder}/${file}`,
            //content: fs.readFileSync(`src/components/${folder}/${file}`, 'utf8'),
        };
    });
}).flat();
console.log(files);

async function main() {
    const { command } = await inquirer.prompt([
        {
            type: 'input',
            name: 'command',
            message: 'Would you like to list files:'
        }
    ]);

    if (command.toLowerCase() === 'yes') {
        const appName = app.name;
        const response = await getObjects();
        const objects = response.data;

        const appFiles = files.filter((file) => file.scope === 'app');
        appFiles.forEach(async (fileTemplate) => {
            const code = await getCode(appName, objects[0].name, fileTemplate.templateName);
            const dir = `generated/${appName}`;
            fs.mkdirSync(dir, { recursive: true });
            fs.writeFileSync(`${dir}/${fileTemplate.name}.${fileTemplate.ext}`, code);
            console.log(`Successfully wrote code for ${appName}:${fileTemplate.name}`);
        });

        const objectFiles = files.filter((file) => file.scope === 'object');
        objects.forEach(async (obj) => {
            objectFiles.forEach(async (fileTemplate) => {
                const code = await getCode(appName, obj.name, fileTemplate.templateName);
                const dir = `generated/${appName}/${obj.name}`;
                fs.mkdirSync(dir, { recursive: true });
                fs.writeFileSync(`${dir}/${fileTemplate.name}.${fileTemplate.ext}`, code);
                console.log(`Successfully wrote code for ${appName}:${obj.name}:${fileTemplate.name}`);
            });
        });
    }
}



//main();
