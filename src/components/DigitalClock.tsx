import { useState, useEffect } from 'react';

const DigitalClock = () => {
  const [time, setTime] = useState<string>('');
  const [date, setDate] = useState<string>('');

  useEffect(() => {
    const updateClock = () => {
      const currentTime = new Date();
      let hrs: number | string = currentTime.getHours();
      let mins: number | string = currentTime.getMinutes();
      let secs: number | string = currentTime.getSeconds();
      let period = 'AM';

      if (hrs === 0) hrs = 12;
      else if (hrs >= 12) {
        hrs = hrs - 12;
        period = 'PM';
      }

      hrs = hrs < 10 ? '0' + hrs : hrs;
      mins = mins < 10 ? '0' + mins : mins;
      secs = secs < 10 ? '0' + secs : secs;

      setTime(`${hrs}:${mins}:${secs} ${period}`);

      const options: Intl.DateTimeFormatOptions = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      };
      setDate(currentTime.toLocaleDateString('en-US', options));
    };

    updateClock();
    const timer = setInterval(updateClock, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <p>{time}</p>
      <p>{date}</p>
    </div>
  );
};

export default DigitalClock;
