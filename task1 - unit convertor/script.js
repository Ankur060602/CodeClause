function convert() {
    var inputValue = document.getElementById("inputValue").value;
    var inputUnit = document.getElementById("inputUnit").value;
    var outputUnit = document.getElementById("outputUnit").value;

    if (inputValue === "") {
        document.getElementById("result").innerHTML = "Please enter a value.";
        return;
    }

    var convertedValue;

    if (inputUnit === outputUnit) {
        convertedValue = inputValue;
    } else if (inputUnit === "cm") {
        if (outputUnit === "m") {
            convertedValue = inputValue / 100;
        } else if (outputUnit === "km") {
            convertedValue = inputValue / 100000;
        } else if (outputUnit === "in") {
            convertedValue = inputValue / 2.54;
        } else if (outputUnit === "ft") {
            convertedValue = inputValue / 30.48;
        } else if (outputUnit === "mi") {
            convertedValue = inputValue / 160934.4;
        }
    } else if (inputUnit === "m") {
        if (outputUnit === "cm") {
            convertedValue = inputValue * 100;
        } else if (outputUnit === "km") {
            convertedValue = inputValue / 1000;
        } else if (outputUnit === "in") {
            convertedValue = inputValue * 39.37;
        } else if (outputUnit === "ft") {
            convertedValue = inputValue * 3.281;
        } else if (outputUnit === "mi") {
            convertedValue = inputValue / 1609.344;
        }
    } else if (inputUnit === "km") {
        if (outputUnit === "cm") {
            convertedValue = inputValue * 100000;
        } else if (outputUnit === "m") {
            convertedValue = inputValue * 1000;
        } else if (outputUnit === "in") {
            convertedValue = inputValue * 39370.079;
        } else if (outputUnit === "ft") {
            convertedValue = inputValue * 3280.84;
        } else if (outputUnit === "mi") {
            convertedValue = inputValue / 1.609;
        }
    } else if (inputUnit === "in") {
        if (outputUnit === "cm") {
            convertedValue = inputValue * 2.54;
        } else if (outputUnit === "m") {
            convertedValue = inputValue / 39.37;
        } else if (outputUnit === "km") {
            convertedValue = inputValue / 39370.079;
        } else if (outputUnit === "ft") {
            convertedValue = inputValue / 12;
        } else if (outputUnit === "mi") {
            convertedValue = inputValue / 63360;
        }
    } else if (inputUnit === "ft") {
        if (outputUnit === "cm") {
            convertedValue = inputValue * 30.48;
        } else if (outputUnit === "m") {
            convertedValue = inputValue / 3.281;
        } else if (outputUnit === "km") {
            convertedValue = inputValue / 3280.84;
        } else if (outputUnit === "in") {
            convertedValue = inputValue * 12;
        } else if (outputUnit === "mi") {
            convertedValue = inputValue / 5280;
        }
    } else if (inputUnit === "mi") {
        if (outputUnit === "cm") {
            convertedValue = inputValue * 160934.4;
        } else if (outputUnit === "m") {
            convertedValue = inputValue * 1609.344;
        } else if (outputUnit === "km") {
            convertedValue = inputValue * 1.609;
        } else if (outputUnit === "in") {
            convertedValue = inputValue * 63360;
        } else if (outputUnit === "ft") {
            convertedValue = inputValue * 5280;
        }
    }

    document.getElementById("result").innerHTML = convertedValue + " " + outputUnit;
}
