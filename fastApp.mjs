import inquirer from 'inquirer';
import fs from 'fs';
import axios from 'axios';


const files = {
  routes:{
    ext: "js"  
  },
  form: {
    ext : "vue"
  }
};



async function main() {
  const { appName, objectName } = await inquirer.prompt([
    {
      type: 'input',
      name: 'appName',
      message: 'Enter the name of the app:',
    },
    {
      type: 'input',
      name: 'objectName',
      message: 'Enter the name of the object:',
    },
  ]);

  
  
  const code = await getCode(appName, objectName);
  console.log(code);
  if (code) {
    // Write the code to a file using the filename logic you choose
    await fs.promises.writeFile(objectName, code);
    console.log(`Successfully wrote code for ${appName}:${objectName}`);
  } else {
    console.error('Failed to retrieve code.');
  }
  
  
}


async function getCode(appName, objectName) {
  // Construct API URL based on app and object names
  const url = `https://laravel.fastapp.cloud/api/fastapp/code/${appName}/${objectName}/routes`;

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

main();