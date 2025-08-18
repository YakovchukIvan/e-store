const DateTimer = ({ dateTimer }: { dateTimer: Date }) => {
  return (
    <p className="dateTimer">
      {dateTimer.toLocaleString('uk-UA', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })}
    </p>
  );
};

export default DateTimer;
