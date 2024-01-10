import inquirer from 'inquirer';
import fs from 'fs';
import axios from 'axios';


const app = {
  id: 10,
  name: 'choppin'
}

const files = [
  {
    name: 'routes',
    templateName: 'routes',
    ext: 'js',
    scope: 'app'
  },
  {
    name: 'store',
    templateName: 'pinia',
    ext: 'js',
    scope: 'app'
  },
  {
    name: 'Form',
    templateName: 'primevue_form',
    ext: 'vue',
    scope: 'object'
  },
  {
    name: 'DataTable',  
    templateName: 'primevue_datatable',
    ext: 'vue',
    scope: 'object'
  },
  {
    name: 'CrudModal',  
    templateName: 'primevue_crud_dialog',
    ext: 'vue',
    scope: 'object'
  },
]



async function main() {
  const { command } = await inquirer.prompt([
    {
      type: 'input',
      name: 'command',
      message: 'Would you like to generate files:',
    },
  ]);

  if (command.toLowerCase() === 'yes') {
    const appName = app.name;
    const response = await getObjects();
    const objects = response.data;

    const appFiles= files.filter(file => file.scope === 'app');
    appFiles.forEach(async (fileTemplate) => {
      const code = await getCode(appName, objects[0].name, fileTemplate.templateName);
      const dir = `generated/${appName}`;
      fs.mkdirSync(dir, { recursive: true });
      fs.writeFileSync(`${dir}/${fileTemplate.name}.${fileTemplate.ext}`, code);
      console.log(`Successfully wrote code for ${appName}:${fileTemplate.name}`);
    });

    const objectFiles= files.filter(file => file.scope === 'object');
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


async function getObjects() {
  const { data: objects } = await axios.get(`https://node.fastapp.cloud/object?app=${app.id}`);
  return objects;
}

async function getCode(appName, objectName, templateName) {
  // Construct API URL based on app and object names
  const url = `https://laravel.fastapp.cloud/api/fastapp/code/${appName}/${objectName}/${templateName}`;

  try {
    // Make API call using Axios
    const response = await axios.get(url);
    // Check for successful response
    if (response.status !== 200) {
      throw new Error(`Error fetching data: ${response.statusText}`);
    }

    // Extract the desired code from the response data
    const code = response.data; // Adjust based on your API data format

    // Return the extracted code
    return code;
  } catch (error) {
    // Handle any errors during API call or data extraction
    console.error(`Error fetching code: ${error.message}`);
    return null; // Indicate unsuccessful retrieval
  }
}


function getFileName(appName, objectName) {
  // Construct filename based on app and object names
  return `${appName}_${objectName}.${files.routes.ext}`;
}

function getFilePath(appName, objectName) {
  // Construct filepath based on app and object names
  return `${appName}/${objectName}.${files.routes.ext}`;
}


async function writeFile(appName, objectName) {
  // get and write code for each file
  for (const file of files) {
    const code = await getCode(appName, objectName, file.name);
    if (code) {
      // Write the code to a file using the filename logic you choose
      await fs.promises.writeFile(getFilePath(appName, objectName, file.name), code);
      console.log(`Successfully wrote code for ${appName}:${objectName}`);
    } else {
      console.error('Failed to retrieve code.');
    }
  }
  
}

main();