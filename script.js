        document.addEventListener('DOMContentLoaded', () => {
            /* JavaScript Functions */
            // 1. Scope Demonstration with Local and Global Variables
            const globalCarOS = "Main Car Operating System: ONLINE";

            function demonstrateScope() {
                const localEngineCheck = "Engine diagnostics: All systems nominal.";
                console.log("--- On-Board Diagnostic ---");
                console.log(globalCarOS);
                console.log(localEngineCheck);
                console.log("--------------------------");
            }
            
            document.getElementById('scope-button').addEventListener('click', demonstrateScope);
            
            // 2. Functions with Parameters and Return Values
            function calculateMileage(distance, fuel) {
                if (isNaN(distance) || isNaN(fuel) || fuel <= 0) {
                    return "Invalid input";
                }
                return Math.round(distance / fuel);
            }

            const distanceInput = document.getElementById('distance-input');
            const fuelInput = document.getElementById('fuel-input');
            const calculateButton = document.getElementById('calculate-button');
            const mileageResultSpan = document.getElementById('mileage-result');
            
            calculateButton.addEventListener('click', () => {
                const distance = parseFloat(distanceInput.value);
                const fuel = parseFloat(fuelInput.value);
                const mileage = calculateMileage(distance, fuel);
                mileageResultSpan.textContent = `${mileage} MPG`;
            });

            /* Combining CSS and JavaScript */
            const animateButton = document.getElementById('animate-button');
            const carElement = document.getElementById('car');

            function startDrive() {
                carElement.classList.remove('is-driving');
                void carElement.offsetWidth; // Force browser reflow
                console.log("Adding .is-driving class to start animation!");
                carElement.classList.add('is-driving');
            }

            animateButton.addEventListener('click', startDrive);
        });