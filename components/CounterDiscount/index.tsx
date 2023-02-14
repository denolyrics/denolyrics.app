"use client";
import React, { useEffect, useState } from "react";

interface CounterDiscountProps {
  expireDate: number;
}

function CounterDiscount({ expireDate }: CounterDiscountProps) {
  function timeUntilEnd(endDate: number) {
    const currentDate = new Date();
    const endTime = new Date(endDate).getTime();
    const timeLeft = endTime - currentDate.getTime();

    if (timeLeft < 0) {
      return "The date is ended.";
    }

    const seconds = Math.floor((timeLeft / 1000) % 60);
    const minutes = Math.floor((timeLeft / 1000 / 60) % 60);
    const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));

    return `${days} days, ${hours} hours, ${minutes} minutes y ${seconds} seconds.`;
  }
  const [Timer, setTimer] = useState("");

  useEffect(() => {
    const myinterval = setInterval(() => {
      setTimer(timeUntilEnd(expireDate));
    }, 1000);

    return () => clearInterval(myinterval);
  }, [expireDate]);

  return (
    <>
      {Timer !== "The date is ended." && (
        <>
          <p className="mt-3">{Timer}</p>
        </>
      )}
    </>
  );
}

export default CounterDiscount;
