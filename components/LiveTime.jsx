"use client";

import { useEffect, useState } from "react";

function formatTime(date) {
	const options = {
		timeZone: "Asia/Kolkata",
		hour: "numeric",
		minute: "2-digit",
		second: "2-digit",
		hour12: true,
	};
	const parts = new Intl.DateTimeFormat("en-US", options).formatToParts(date);
	let hour = "", minute = "", second = "", dayPeriod = "";
	for (const part of parts) {
		if (part.type === "hour") hour = part.value;
		if (part.type === "minute") minute = part.value;
		if (part.type === "second") second = part.value;
		if (part.type === "dayPeriod") dayPeriod = part.value.toUpperCase();
	}
	return `${hour}:${minute}:${second} GMT+5:30`;
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