
                //   CURRENT DATE AND TIME GETTING
                const currentDate = new Date();

                const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
                const currentDay = weekDays[currentDate.getUTCDay()];
                document.getElementById("dayOfWeek").textContent = currentDay;


                const currentUTCTime = currentDate.getTime();
                document.getElementById("utcTime").textContent = currentUTCTime;
                
            