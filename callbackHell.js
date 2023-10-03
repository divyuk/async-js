function asyncOperation1(callback) {
  setTimeout(() => {
    console.log("Async operation 1 completed");
    callback(true);
  }, 1000);
}

function asyncOperation2(callback) {
  setTimeout(() => {
    console.log("Async operation 2 completed");
    callback(true);
  }, 1000);
}

function asyncOperation3(callback) {
  setTimeout(() => {
    console.log("Async operation 3 completed");
    callback(true);
  }, 1000);
}

// Callback hell in a single function
function callbackHellExample() {
  asyncOperation1((result1) => {
    if (result1) {
      asyncOperation2((result2) => {
        if (result2) {
          asyncOperation3((result3) => {
            if (result3) {
              console.log("All async operations are completed successfully");
            } else {
              console.log("Async operation 3 failed");
            }
          });
        } else {
          console.log("Async operation 2 failed");
        }
      });
    } else {
      console.log("Async operation 1 failed");
    }
  });
}

// Call the callback hell function
callbackHellExample();
