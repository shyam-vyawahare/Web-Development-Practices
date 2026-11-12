
/*
    Main Thread
    Creates a Web Worker and communicates with it.
*/

const numberInput = document.getElementById("numberInput");
const calculateButton = document.getElementById("calculateButton");
const stopButton = document.getElementById("stopButton");
const result = document.getElementById("result");
const counterDisplay = document.getElementById("counter");

let worker = null;


// 1. Create a Web Worker
function createWorker() {
    if (worker) {
        worker.terminate();
    }

    worker = new Worker("./worker.js");

    worker.onmessage = (event) => {
        const data = event.data;

        if (data.type === "progress") {
            result.textContent = `Processing: ${data.progress}%`;
        }

        if (data.type === "result") {
            result.textContent =
                `Final Sum: ${data.sum.toLocaleString()}`;

            worker.terminate();
            worker = null;
            calculateButton.disabled = false;
        }

        if (data.type === "error") {
            result.textContent = `Error: ${data.message}`;

            worker.terminate();
            worker = null;
            calculateButton.disabled = false;
        }
    };

    worker.onerror = (error) => {
        result.textContent = `Worker error: ${error.message}`;

        worker.terminate();
        worker = null;
        calculateButton.disabled = false;
    };
}


// 2. Start Background Calculation
calculateButton.addEventListener("click", () => {
    const limit = Number(numberInput.value);

    if (!Number.isSafeInteger(limit) || limit < 1) {
        result.textContent = "Enter a valid positive integer.";
        return;
    }

    createWorker();

    calculateButton.disabled = true;
    result.textContent = "Starting calculation...";

    worker.postMessage({
        type: "calculate",
        limit
    });
});


// 3. Stop Worker
stopButton.addEventListener("click", () => {
    if (worker) {
        worker.terminate();
        worker = null;

        calculateButton.disabled = false;
        result.textContent = "Worker stopped.";
    }
});


// 4. Main Thread Counter
// This continues while the worker calculates in the background.

let count = 0;

setInterval(() => {
    count++;
    counterDisplay.textContent = count;
}, 1000);
