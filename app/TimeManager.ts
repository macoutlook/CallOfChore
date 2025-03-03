// class TimeManager{

    export function getWeek() : number{
        var week = 0;
        var currentDate: Date = new Date();
        var year = currentDate.getUTCFullYear();
        var firstDayOfTheYear: Date = new Date(Date.UTC(year, 0, 1));
        var firstDayOfTheSecondWeek: Date;
        var dayOfWeek: number = firstDayOfTheYear.getUTCDay();
        // console.log(dayOfWeek);
        // console.log(currentDate);
        // console.log(firstDayOfTheYear);
        var dayToCalculateFirstDayOfTheYear = new Date(Date.UTC(year, firstDayOfTheYear.getUTCMonth(), firstDayOfTheYear.getUTCDate()));
        console.log(dayToCalculateFirstDayOfTheYear);
        console.log(firstDayOfTheYear);
        for(var i = dayOfWeek; i <=  7; i++)
        {
          if(dayToCalculateFirstDayOfTheYear.getUTCDay() === 0)
          {
            firstDayOfTheSecondWeek = new Date((Date.UTC(year, firstDayOfTheYear.getUTCMonth(), i)));
            console.log(firstDayOfTheSecondWeek);
            break;
          }
      
          dayToCalculateFirstDayOfTheYear = new Date((Date.UTC(year, firstDayOfTheYear.getMonth(), i)));
        }
      if(currentDate < firstDayOfTheSecondWeek){
        return 1;
      }
      
      else{
        const differenceInMs: number = Math.abs(firstDayOfTheSecondWeek.getTime() - currentDate.getTime());
      
        // Define the number of milliseconds in a day
        const millisecondsInDay: number = 1000 * 60 * 60 * 24;
        const differenceInDays: number = Math.floor(
          differenceInMs / millisecondsInDay
        );
        var week = Math.floor(differenceInDays / 7) + 2;
      
        // console.log(dayOfWeek);
        // console.log(date1.getFullYear());
        // console.log(date2);
        console.log(differenceInDays);
      
      }
      return week;
      }