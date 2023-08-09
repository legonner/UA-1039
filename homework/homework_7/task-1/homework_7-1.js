const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const main = async () => {
  try {
    const newWindow = window.open('about:blank', '_blank', 'width=300,height=300');

    if (!newWindow) {
      console.error("The window could not be opened");
      return;
    }

    await delay(2000);
    newWindow.resizeTo(500, 500);
    await delay(2000);
    newWindow.moveTo(200, 200);
    await delay(2000);
    newWindow.close();
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
};

main();
