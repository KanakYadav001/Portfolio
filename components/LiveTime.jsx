"use client";

import { useEffect, useState } from "react";

function formatTime(date) {
	const time = date.toLocaleTimeString("en-GB", {
		timeZone: "Asia/Kolkata",
		hour: "2-digit",
		minute: "2-digit",
		second: "2-digit",
		hour12: false,
	});

	return `${time} GMT+5:30`;
}

export default function LiveTime() {
	const [formattedTime, setFormattedTime] = useState("");

	useEffect(() => {
		const updateTime = () => setFormattedTime(formatTime(new Date()));

		updateTime();
		const intervalId = setInterval(updateTime, 1000);

		return () => clearInterval(intervalId);
	}, []);

	return <p suppressHydrationWarning>{formattedTime}</p>;
}