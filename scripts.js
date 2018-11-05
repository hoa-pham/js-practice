
        var id = "global";
        id = 0;

        function createRow(){
                id = id + 1;
                var table = document.getElementById("myTable");
                var hour = document.getElementById("hour").value;
                var pay = cal(hour);
                var newRow = table.insertRow(id);
                var cel1 = newRow.insertCell(0);
                var cel2 = newRow.insertCell(1);
                var cel3 = newRow.insertCell(2);
                cel1.innerHTML = id;
                cel2.innerHTML = hour;
                cel3.innerHTML = pay;
                
        }
           function userInput() {
                var input = document.getElementById("hour").value;
                return input;
           } 
            function cal(hours) {
                    if (hours < 0) {
                            return "No more employee to enter";
                    }
                    else if ( hours > 40) {
                        return hours * 15 +(hours - 40) * (15*1.5);
                    }
                    else {
                        return hours * 15;
                    }
            }
